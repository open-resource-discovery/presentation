#!/usr/bin/env node
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const options = parseArgs(process.argv.slice(2));
const port = Number(options.port ?? process.env.PORT ?? 3131);
const slideCount = Number(options.slides ?? process.env.SLIDE_COUNT ?? 6);
const outDir = String(options.out ?? "screenshots");
const host = "127.0.0.1";
const baseUrl = `http://${host}:${port}`;
const slidevBin = path.resolve("node_modules/.bin/slidev");

await mkdir(outDir, { recursive: true });

const server = spawn(slidevBin, ["--port", String(port), "--log", "info"], {
  stdio: ["ignore", "pipe", "pipe"],
  shell: process.platform === "win32",
});

let logTail = "";
server.stdout.on("data", (chunk) => {
  logTail = `${logTail}${chunk}`.slice(-4000);
});
server.stderr.on("data", (chunk) => {
  logTail = `${logTail}${chunk}`.slice(-4000);
});

try {
  await waitForHttp(baseUrl, 45_000, server);

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 1,
  });

  for (let index = 1; index <= slideCount; index += 1) {
    await page.goto(`${baseUrl}/${index}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(800);
    await page.screenshot({
      path: path.join(outDir, `slide-${String(index).padStart(2, "0")}.png`),
      fullPage: true,
    });
  }

  await browser.close();
  console.log(`Wrote ${slideCount} screenshots to ${outDir}/`);
} catch (error) {
  console.error(logTail);
  throw error;
} finally {
  server.kill("SIGTERM");
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

async function waitForHttp(url, timeoutMs, serverProcess) {
  const started = Date.now();
  let earlyExit = null;
  serverProcess.once("exit", (code, signal) => {
    earlyExit = { code, signal };
  });

  while (Date.now() - started < timeoutMs) {
    if (earlyExit) {
      throw new Error(`Slidev exited before startup: code ${earlyExit.code}, signal ${earlyExit.signal}`);
    }

    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {
      // The dev server is still starting.
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error(`Timed out waiting for ${url}`);
}
