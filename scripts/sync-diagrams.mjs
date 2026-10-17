#!/usr/bin/env node
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const args = process.argv.slice(2);
const check = args.includes("--check");
const override = args.find((arg) => arg.startsWith("--spec-root="));
const names = ["unified-metadata.json", "overlay.json"];
const assets = [
  ...names.map(name => ({ source: `diagrams/${name}`, destination: `data/diagrams/${name}` })),
  { source: "static/img/system-landscape/system.drawio.svg", destination: "public/img/spec/system-landscape.drawio.svg" },
  { source: "static/img/integration-dependency.drawio.svg", destination: "public/img/spec/integration-dependency.drawio.svg" },
];
const specRoot = override
  ? path.resolve(root, override.slice("--spec-root=".length))
  : ["../ord-public", "../ord-spec"]
      .map((directory) => path.resolve(root, directory))
      .find((directory) => existsSync(path.join(directory, "diagrams", names[0])))
    ?? path.resolve(root, "../ord-public");
try {
  for (const asset of assets) {
    const name = path.basename(asset.destination);
    const source = path.join(specRoot, asset.source);
    const destination = path.join(root, asset.destination);
    const canonical = await readFile(source, "utf8");
    // Validate references before updating the vendored copy consumed by Vue.
    const graph = name.endsWith(".json") ? JSON.parse(canonical) : null;
    if (name === "unified-metadata.json") {
      const ids = new Set(graph.nodes.map((node) => node.id));
      if (ids.size !== graph.nodes.length || graph.links.some((link) => !ids.has(link.from) || !ids.has(link.to))) {
        throw new Error("Diagram contains duplicate node IDs or unresolved links.");
      }
    } else if (graph && (!graph.overview?.length || !graph.steps?.length || !graph.comparison ||
        [...graph.overview, ...graph.steps].some(item => !item.title || !item.text))) {
      throw new Error("Overlay diagram is missing explanatory content.");
    }
    if (check) {
      if (await readFile(destination, "utf8") !== canonical) {
        throw new Error(`${name} differs from the specification. Run npm run sync:diagrams.`);
      }
      console.log(`${name} matches the specification.`);
    } else {
      await mkdir(path.dirname(destination), { recursive: true });
      await writeFile(destination, canonical);
      console.log(`Synced ${name} from ${source}. Review the diagram in both renderers.`);
    }
  }
} catch (error) {
  console.error(error.message);
  console.error("Both checkouts are needed only for syncing/checking. Set --spec-root=/path/to/specification if needed.");
  process.exitCode = 1;
}
