#!/usr/bin/env node
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const args = process.argv.slice(2);
const check = args.includes("--check");
const override = args.find((arg) => arg.startsWith("--spec-root="));
const name = "unified-metadata.json";
const specRoot = override
  ? path.resolve(root, override.slice("--spec-root=".length))
  : ["../ord-public", "../ord-spec"]
      .map((directory) => path.resolve(root, directory))
      .find((directory) => existsSync(path.join(directory, "diagrams", name)))
    ?? path.resolve(root, "../ord-public");
const source = path.join(specRoot, "diagrams", name);
const destination = path.join(root, "data/diagrams", name);

try {
  const canonical = await readFile(source, "utf8");
  // Validate references before updating the vendored copy consumed by Vue.
  const graph = JSON.parse(canonical);
  const ids = new Set(graph.nodes.map((node) => node.id));
  if (ids.size !== graph.nodes.length || graph.links.some((link) => !ids.has(link.from) || !ids.has(link.to))) {
    throw new Error("Diagram contains duplicate node IDs or unresolved links.");
  }
  if (check) {
    if (await readFile(destination, "utf8") !== canonical) {
      throw new Error("Diagram data differs from the specification. Run npm run sync:diagrams.");
    }
    console.log("Shared diagram data matches the specification.");
  } else {
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, canonical);
    console.log(`Synced ${name} from ${source}. Review the diagram in both renderers.`);
  }
} catch (error) {
  console.error(error.message);
  console.error("Both checkouts are needed only for syncing/checking. Set --spec-root=/path/to/specification if needed.");
  process.exitCode = 1;
}
