// Self-contained so Playwright can serialize this function into the page.
export function inspectSlide({ slide, minimumContrast = 3 }) {
  const root = document.querySelector(`.slidev-page-${slide} .slide-shell`);
  const bounds = root.getBoundingClientRect();
  const overflow = [], textBoxes = [], lowContrast = [];
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 1;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  const colors = new Map();
  function color(value) {
    if (!colors.has(value)) {
      context.clearRect(0, 0, 1, 1);
      context.fillStyle = value;
      context.fillRect(0, 0, 1, 1);
      const rgba = [...context.getImageData(0, 0, 1, 1).data];
      colors.set(value, [rgba[0], rgba[1], rgba[2], rgba[3] / 255]);
    }
    return colors.get(value);
  }
  function composite(foreground, background) {
    return foreground.slice(0, 3).map((value, index) => value * foreground[3] + background[index] * (1 - foreground[3]));
  }
  function luminance(rgb) {
    return rgb.map(value => value / 255).map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4)
      .reduce((sum, value, index) => sum + value * [0.2126, 0.7152, 0.0722][index], 0);
  }
  function ancestors(element) {
    const chain = [];
    for (let current = element; current; current = current.parentElement) chain.push(current);
    return chain;
  }
  function visibleRects(node, chain) {
    if (chain.some(element => {
      const style = getComputedStyle(element);
      return style.display === "none" || style.visibility === "hidden" || Number(style.opacity) === 0;
    })) return [];
    const range = document.createRange();
    range.selectNodeContents(node);
    return [...range.getClientRects()].flatMap(rect => {
      let left = Math.max(rect.left, bounds.left), right = Math.min(rect.right, bounds.right);
      let top = Math.max(rect.top, bounds.top), bottom = Math.min(rect.bottom, bounds.bottom);
      for (const element of chain) {
        const style = getComputedStyle(element), clip = element.getBoundingClientRect();
        if (/hidden|clip|auto|scroll/.test(style.overflowX)) { left = Math.max(left, clip.left); right = Math.min(right, clip.right); }
        if (/hidden|clip|auto|scroll/.test(style.overflowY)) { top = Math.max(top, clip.top); bottom = Math.min(bottom, clip.bottom); }
      }
      return right - left > 1 && bottom - top > 1 ? [{ left, right, top, bottom }] : [];
    });
  }

  for (const element of root.querySelectorAll("*")) {
    const style = getComputedStyle(element), rect = element.getBoundingClientRect();
    if (!rect.width || !rect.height || style.display === "none" || style.visibility === "hidden") continue;
    // Decorative backgrounds intentionally bleed; example code intentionally scrolls.
    if (element.closest(".cover-bg, pre, .json-viewer")) continue;
    if (rect.left < bounds.left - 1 || rect.right > bounds.right + 1 || rect.top < bounds.top - 1 || rect.bottom > bounds.bottom + 1)
      overflow.push({ element: element.tagName, class: element.getAttribute("class"), text: element.textContent.trim().slice(0, 100) });
  }
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let textNode = 0, contrastSkipped = 0;
  while (walker.nextNode()) {
    textNode += 1;
    const node = walker.currentNode, element = node.parentElement;
    if (!node.textContent.trim() || element.closest("svg, style, script, [aria-hidden=true], .cover-bg")) continue;
    const chain = ancestors(element), rects = visibleRects(node, chain);
    if (!rects.length) continue;
    if (!element.closest("pre, .json-viewer")) {
      for (const rect of rects)
        textBoxes.push({ textNode, text: node.textContent.trim().slice(0, 80), left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom });
    }
    if (element.closest(":disabled, [aria-disabled=true]")) continue;
    const foreground = color(getComputedStyle(element).color);
    let worst;
    for (const rect of rects) {
      const x = (rect.left + rect.right) / 2, y = (rect.top + rect.bottom) / 2;
      let background = [255, 255, 255], knownBackground = true;
      for (const ancestor of [...chain].reverse()) {
        const area = ancestor.getBoundingClientRect();
        // Positioned labels may sit outside a connector's painted background.
        if (x < area.left || x > area.right || y < area.top || y > area.bottom) continue;
        const style = getComputedStyle(ancestor), fill = color(style.backgroundColor);
        background = composite(fill, background);
        if (fill[3] === 1) knownBackground = true;
        if (style.backgroundImage !== "none") knownBackground = false;
      }
      // A DOM color check cannot reliably sample images/gradients or group opacity.
      if (!knownBackground || chain.some(ancestor => Number(getComputedStyle(ancestor).opacity) < 1)) { contrastSkipped += 1; continue; }
      const a = luminance(composite(foreground, background)), b = luminance(background);
      const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
      if (ratio < minimumContrast && (!worst || ratio < worst.ratio))
        worst = { text: node.textContent.trim().slice(0, 100), ratio, foreground: getComputedStyle(element).color, background: background.map(Math.round) };
    }
    if (worst) lowContrast.push({ ...worst, ratio: Number(worst.ratio.toFixed(2)) });
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
  const brokenImages = [...root.querySelectorAll("img")]
    .filter(image => image.complete && image.naturalWidth === 0)
    .map(image => image.currentSrc || image.src);
  return { slide, title: root.querySelector("h1, h2")?.textContent.trim(), overflow, overlaps, brokenImages, lowContrast, contrastSkipped };
}
