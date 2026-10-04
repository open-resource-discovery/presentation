#!/usr/bin/env node
import { spawn } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";
import { parseSync } from "@slidev/parser";

const options = parseArgs(process.argv.slice(2));
const port = Number(options.port ?? process.env.PORT ?? 3131);
const source = await readFile("slides.md", "utf8");
const slides = parseSync(source, "slides.md").slides.filter(slide => !slide.frontmatter.hide && !slide.frontmatter.disabled);
const inferredSlideCount = slides.length;
const slideCount = Number(options.slides ?? process.env.SLIDE_COUNT ?? inferredSlideCount);
const outDir = String(options.out ?? "screenshots");
const baseUrls = options.url
  ? [String(options.url).replace(/\/$/, "")]
  : [`http://127.0.0.1:${port}`, `http://[::1]:${port}`];
const slidevBin = path.resolve("node_modules/.bin/slidev");

await mkdir(outDir, { recursive: true });

const server = options.url ? null : spawn(slidevBin, ["--port", String(port), "--log", "info"], {
  stdio: ["ignore", "pipe", "pipe"],
  shell: process.platform === "win32",
});

let logTail = "";
server?.stdout.on("data", (chunk) => {
  logTail = `${logTail}${chunk}`.slice(-4000);
});
server?.stderr.on("data", (chunk) => {
  logTail = `${logTail}${chunk}`.slice(-4000);
});

let browser;
try {
  const baseUrl = await waitForHttp(baseUrls, 45_000, server);

  browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
    permissions: ["screen-wake-lock"],
  });

  const report = [];
  const errors = [];

  for (let index = Number(options.from ?? 1); index <= slideCount; index += 1) {
    const page = await context.newPage();
    page.on("pageerror", (error) => errors.push({ slide: index, message: error.message }));
    page.on("console", (message) => {
      if (message.text().includes("Failed to resolve component"))
        errors.push({ slide: index, message: message.text() });
    });
    const slug = slides[index - 1].frontmatter.routeAlias ?? String(index);
    await page.goto(`${baseUrl}/${slug}`, { waitUntil: "domcontentloaded" });
    await page.locator(`.slidev-page-${index} .slide-shell`).waitFor();
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(800);
    report.push(await page.evaluate((slide) => {
      const root = document.querySelector(`.slidev-page-${slide} .slide-shell`);
      const bounds = root.getBoundingClientRect();
      const overflow = [];
      const textBoxes = [];
      for (const element of root.querySelectorAll("*")) {
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        if (!rect.width || !rect.height || style.display === "none" || style.visibility === "hidden") continue;
        // Scrollable example code intentionally extends beyond its viewport.
        if (element.closest("pre, .json-viewer")) continue;
        if (rect.left < bounds.left - 1 || rect.right > bounds.right + 1 || rect.top < bounds.top - 1 || rect.bottom > bounds.bottom + 1)
          overflow.push({ element: element.tagName, class: element.getAttribute("class"), text: element.textContent.trim().slice(0, 100) });
      }
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let textNode = 0;
      while (walker.nextNode()) {
        textNode += 1;
        const node = walker.currentNode;
        if (!node.textContent.trim() || node.parentElement.closest("svg, pre, .json-viewer, style, script")) continue;
        const range = document.createRange();
        range.selectNodeContents(node);
        for (const rect of range.getClientRects()) {
          if (rect.width && rect.height)
            textBoxes.push({ textNode, text: node.textContent.trim().slice(0, 80), left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom });
        }
      }
      const overlaps = [];
      for (let a = 0; a < textBoxes.length; a++) {
        for (let b = a + 1; b < textBoxes.length; b++) {
          const first = textBoxes[a], second = textBoxes[b];
          if (first.textNode === second.textNode) continue;
          if (Math.min(first.right, second.right) - Math.max(first.left, second.left) > 2 &&
              Math.min(first.bottom, second.bottom) - Math.max(first.top, second.top) > 2)
            overlaps.push([first.text, second.text]);
        }
      }
      return { slide, title: root.querySelector("h1, h2")?.textContent.trim(), overflow, overlaps };
    }, index));
    report.at(-1).slug = slug;
    await page.screenshot({
      path: path.join(outDir, `slide-${String(index).padStart(2, "0")}.png`),
      fullPage: false,
    });
    await page.close();
  }

  await writeFile(path.join(outDir, "inspection.json"), JSON.stringify({ viewport: { width: 1280, height: 720 }, errors, slides: report }, null, 2));
  console.log(`Wrote ${report.length} screenshots and inspection.json to ${outDir}/`);
} catch (error) {
  console.error(logTail);
  throw error;
} finally {
  await browser?.close();
  server?.kill("SIGTERM");
}

function parseArgs(args) {
  const parsed = {};

  for (const arg of args) {
    const match = arg.match(/^--([^=]+)=(.*)$/);
    if (match) {
      parsed[match[1]] = match[2];
    }
  }

  return parsed;
}

async function waitForHttp(urls, timeoutMs, serverProcess) {
  const started = Date.now();
  let earlyExit = null;
  serverProcess?.once("exit", (code, signal) => {
    earlyExit = { code, signal };
  });

  while (Date.now() - started < timeoutMs) {
    if (earlyExit) {
      throw new Error(`Slidev exited before startup: code ${earlyExit.code}, signal ${earlyExit.signal}`);
    }

    for (const url of urls) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          return url;
        }
      } catch {
        // The dev server is still starting or is bound to the other loopback address.
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error(`Timed out waiting for ${urls.join(" or ")}`);
}
