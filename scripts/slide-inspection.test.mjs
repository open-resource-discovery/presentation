import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { chromium } from "playwright";
import { inspectSlide } from "./slide-inspection.mjs";

let browser;
before(async () => { browser = await chromium.launch(); });
after(async () => { await browser?.close(); });

async function inspect(content, styles = "") {
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  try {
    await page.setContent(`<style>body{margin:0}.slide-shell{position:relative;width:1280px;height:720px;overflow:hidden;background:white;color:#15242b}p{margin:0}${styles}</style><div class="slidev-page-1"><div class="slide-shell">${content}</div></div>`);
    return await page.evaluate(inspectSlide, { slide: 1 });
  } finally { await page.close(); }
}

test("catches the lost-style regression: pale inherited text on a white slide", async () => {
  const report = await inspect("<p>Aggregation responsibilities</p>", ".slide-shell{color:#dfdfd6}");
  assert.equal(report.lowContrast.length, 1);
  assert.ok(report.lowContrast[0].ratio < 1.5);
});

test("composites transparent foreground and background colors", async () => {
  const report = await inspect('<section style="background:rgba(0,0,0,.1)"><p style="color:rgba(0,0,0,.1)">Faint label</p></section><p style="color:#147d82">Readable label</p>');
  assert.deepEqual(report.lowContrast.map(issue => issue.text), ["Faint label"]);
  assert.ok(report.lowContrast[0].background.every(channel => channel >= 229 && channel <= 230));
});

test("does not report invisible text or disabled controls", async () => {
  const report = await inspect('<div style="display:none"><p>Hidden ancestor</p></div><p style="opacity:0">Transparent</p><button disabled style="color:#eee">Disabled</button><p style="color:#15242b">Visible</p>');
  assert.deepEqual(report.lowContrast, []);
  assert.deepEqual(report.overlaps, []);
});

test("skips unknown gradient backgrounds but checks an opaque card above them", async () => {
  const report = await inspect('<p>Gradient label</p><section style="background:white;color:#eee"><p>Opaque card</p></section>', '.slide-shell{background:linear-gradient(#111,#333);color:white}');
  assert.equal(report.contrastSkipped, 1);
  assert.deepEqual(report.lowContrast.map(issue => issue.text), ["Opaque card"]);
});

test("ignores decorative bleed while retaining real content overflow", async () => {
  const report = await inspect('<div class="cover-bg" style="position:absolute;left:-100px;width:1500px;height:20px"></div><p style="position:absolute;left:1270px;width:200px">Outside the slide</p>');
  assert.equal(report.overflow.length, 1);
  assert.equal(report.overflow[0].text, "Outside the slide");
});

test("uses the slide background for a label positioned above a connector", async () => {
  const report = await inspect('<div style="position:absolute;top:100px;width:100px;height:2px;background:#32bcac"><span style="position:absolute;bottom:12px;color:#657680">Metadata</span></div>');
  assert.deepEqual(report.lowContrast, []);
});

test("detects overlapping visible text and broken images", async () => {
  const report = await inspect('<p style="position:absolute;top:100px">First visible label</p><p style="position:absolute;top:100px">Second visible label</p><img src="data:image/png;base64,broken" alt="Broken fixture">');
  assert.equal(report.overlaps.length, 1);
  assert.equal(report.brokenImages.length, 1);
});

test("checks visible code contrast without flagging scrolled-out code", async () => {
  const report = await inspect('<pre style="height:20px;line-height:20px;overflow:auto;color:#eee;margin:0"><code>Visible code\n<span style="color:#eee">Clipped code</span></code></pre>');
  assert.ok(report.lowContrast.some(issue => issue.text === "Visible code"));
  assert.ok(!report.lowContrast.some(issue => issue.text === "Clipped code"));
});
