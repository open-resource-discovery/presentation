#!/usr/bin/env node
import { spawn } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";
import { parseSync } from "@slidev/parser";
import { inspectSlide } from "./slide-inspection.mjs";

const options = parseArgs(process.argv.slice(2));
const minimumContrast = Number(options["min-contrast"] ?? 3);
if (!Number.isFinite(minimumContrast) || minimumContrast < 1 || minimumContrast > 21)
  throw new Error("--min-contrast must be a ratio between 1 and 21.");
const port = Number(options.port ?? process.env.PORT ?? 3131);
const source = await readFile("slides.md", "utf8");
const parsed = parseSync(source, "slides.md");
const slides = parsed.slides.filter(slide => !slide.frontmatter.hide && !slide.frontmatter.disabled);
const usesHashRouter = parsed.slides[0]?.frontmatter.routerMode === "hash";
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
    const slideUrl = usesHashRouter ? `${baseUrl}/#/${slug}` : `${baseUrl}/${slug}`;
    await page.goto(slideUrl, { waitUntil: "domcontentloaded" });
    await page.locator(`.slidev-page-${index} .slide-shell`).waitFor();
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(800);
    report.push(await page.evaluate(inspectSlide, { slide: index, minimumContrast }));
    report.at(-1).slug = slug;
    await page.screenshot({
      path: path.join(outDir, `slide-${String(index).padStart(2, "0")}.png`),
      fullPage: false,
    });
    await page.close();
  }

  await writeFile(path.join(outDir, "inspection.json"), JSON.stringify({ viewport: { width: 1280, height: 720 }, minimumContrast, errors, slides: report }, null, 2));
  const issues = report.filter(slide => slide.overflow.length || slide.overlaps.length || slide.brokenImages.length || slide.lowContrast.length);
  console.log(`Wrote ${report.length} screenshots and inspection.json to ${outDir}/`);
  for (const slide of issues)
    console.error(`${slide.slug}: ${slide.overflow.length} overflow, ${slide.overlaps.length} overlaps, ${slide.brokenImages.length} broken images, ${slide.lowContrast.length} low-contrast text nodes`);
  if (errors.length || issues.length) {
    console.error(`Inspection found issues on ${issues.length} slides and ${errors.length} browser errors.`);
    if (options["report-only"] !== "true") process.exitCode = 1;
  }
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
