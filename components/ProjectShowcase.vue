<script setup lang="ts">
import { assetUrl } from '../utils/asset-url'

defineProps<{ group: string }>()

const schema = 'openResourceDiscovery:\n  type: string\n  examples: ["1.16"]'
const folder = 'metadata/\n├── documents/\n│   └── orders.ord.json\n└── apis/\n    └── orders.openapi.json'
const serve = 'npx @open-resource-discovery/provider-server \\\n  -d ./metadata \\\n  --base-url http://127.0.0.1:8080'
const overlay = 'action: merge\nselector:\n  operation: getOrder\ndata:\n  description: >-\n    Read the current status of an order.'
const render = '<MetadataRenderer content={definition} />'
const csnBefore = '"Orders": {\n  "kind": "entity",\n  "@foo.ui.color": "blue",\n  "elements": {\n    "ID": { "type": "cds.UUID" }\n  }\n}'
const csnAfter = '"Orders": {\n  "kind": "entity",\n  "elements": {\n    "ID": { "type": "cds.UUID" }\n  }\n}'
const screens = {
  explorer: assetUrl('img/tools/explorer.png'),
  ui: assetUrl('img/tools/metadata-renderer.png'),
  a2aHeader: assetUrl('img/tools/a2a-header.png'),
  a2aSkills: assetUrl('img/tools/a2a-skills.png'),
  mcpHeader: assetUrl('img/tools/mcp-header.png'),
  mcpTools: assetUrl('img/tools/mcp-tools.png'),
}
</script>

<template>
  <section class="showcase" :class="`showcase-${group}`" aria-label="Tool example">
    <template v-if="group === 'specification'">
      <span class="example-label">ORD’s own build toolchain</span>
      <div class="generation">
        <article class="artifact source-model">
          <span>Source schema · YAML excerpt</span>
          <h3>Document.schema.yaml</h3>
          <pre>{{ schema }}</pre>
        </article>
        <div class="generation-step"><b>Spec Toolkit</b><span aria-hidden="true">↓</span></div>
        <div class="outputs">
          <article class="artifact"><span>Validate</span><h3>JSON Schema</h3><p>Check document structure.</p></article>
          <article class="artifact"><span>Understand</span><h3>Reference docs</h3><p>Read fields and their rules.</p></article>
          <article class="artifact"><span>Develop</span><h3>TypeScript models</h3><p>Use generated types.</p></article>
        </div>
      </div>
      <p class="takeaway">One source model keeps constraints, documentation, and types aligned.</p>
    </template>

    <template v-else-if="group === 'reference'">
      <figure class="tool-screen explorer-screen">
        <div class="explorer-viewport"><img :src="screens.explorer" alt="Actual ORD Explorer sample catalog showing resource categories and API cards with descriptions, release status, protocols, and ORD IDs"></div>
        <figcaption>ORD Explorer · built-in sample catalog · detail view <a :href="screens.explorer" target="_blank" rel="noopener noreferrer">Full screenshot ↗</a></figcaption>
      </figure>
    </template>

    <template v-else-if="group === 'publishing'">
      <span class="example-label">Example · serve a metadata folder</span>
      <div class="publish-example">
        <article class="artifact"><span>Input files</span><pre>{{ folder }}</pre></article>
        <span class="step-arrow" aria-hidden="true">↓</span>
        <article class="artifact endpoint"><span>Discover over HTTP</span><h3>/.well-known/open-resource-discovery</h3><p>Configuration → ORD Documents → resource definitions</p></article>
      </div>
      <div class="command"><span>Start the Provider server</span><pre>{{ serve }}</pre></div>
      <p class="takeaway">For a Spring application, expose the same discovery flow through the starter.</p>
    </template>

    <template v-else-if="group === 'overlays'">
      <span class="example-label">Example · enrich the getOrder operation</span>
      <div class="overlay-example">
        <article class="artifact"><span>Original OpenAPI</span><h3>getOrder</h3><p>Operation has no description.</p></article>
        <span class="overlay-plus" aria-hidden="true">+</span>
        <article class="artifact overlay-patch"><span>ORD Overlay · patch excerpt</span><pre>{{ overlay }}</pre></article>
        <span class="step-arrow" aria-hidden="true">↓ Apply overlay</span>
        <article class="artifact enriched"><span>Consumer’s enriched view</span><h3>getOrder</h3><p>Read the current status of an order.</p></article>
      </div>
      <p class="takeaway">Author in the editor; validate and apply with the TypeScript or Go tools.</p>
    </template>

    <template v-else-if="group === 'ui'">
      <span class="example-label">One component, several definition formats</span>
      <div class="format-list"><span>OpenAPI</span><span>AsyncAPI</span><span>CSN</span><span>A2A</span><span>MCP cards</span><span>ORD Overlays</span></div>
      <span class="step-arrow" aria-hidden="true">↓ Detect format</span>
      <div class="command renderer-code"><pre>{{ render }}</pre></div>
      <span class="step-arrow" aria-hidden="true">↓ Render</span>
      <figure class="tool-screen"><img :src="screens.ui" alt="Metadata Renderer displaying a generic Orders API definition"><figcaption>Public Metadata Renderer playground · example data</figcaption></figure>
    </template>

    <template v-else-if="group === 'a2a'">
      <span class="example-label">Read an Agent Card before sending a task</span>
      <figure class="tool-screen detail-crops"><img :src="screens.a2aHeader" alt="A2A Editor displaying the Order Assistant Agent Card"><img :src="screens.a2aSkills" alt="Order Lookup skill in the Agent Card"><figcaption>A2A Editor playground · card and skill details · example data</figcaption></figure>
      <div class="protocol-flow"><span>Discover with ORD</span><i aria-hidden="true">→</i><span>Inspect Agent Card</span><i aria-hidden="true">→</i><span>Interact with A2A</span></div>
    </template>

    <template v-else-if="group === 'mcp'">
      <span class="example-label">Inspect static tool metadata before connecting</span>
      <figure class="tool-screen detail-crops"><img :src="screens.mcpHeader" alt="MCP Server Card UI displaying an Orders server"><img :src="screens.mcpTools" alt="get_order and create_shipment tools described in the Server Card"><figcaption>MCP Server Card playground · card and tool details · example data</figcaption></figure>
      <div class="protocol-flow"><span>Discover with ORD</span><i aria-hidden="true">→</i><span>Select from card</span><i aria-hidden="true">→</i><span>Connect with MCP</span></div>
      <p class="takeaway">Server Cards are an MCP proposal. Static tool metadata supports selection before runtime calls.</p>
    </template>

    <template v-else-if="group === 'compaction'">
      <span class="example-label">Example · remove an unneeded annotation</span>
      <div class="compaction-example">
        <article class="artifact"><span>Source CSN · excerpt</span><pre>{{ csnBefore }}</pre></article>
        <article class="artifact enriched"><span>Compacted CSN · excerpt</span><pre>{{ csnAfter }}</pre></article>
      </div>
      <article class="artifact rule"><span>Rule for this example</span><code>csn.preserve: []</code><p>Remove annotations and private properties. Retain the entity and its ID element.</p></article>
      <div class="command"><span>Run the CLI</span><pre>metadata-compactor -i input.json -r rules.json -o compacted.json</pre></div>
      <p class="takeaway">CSN JSON is supported today; more formats are planned. Rules choose what to retain.</p>
    </template>
  </section>
</template>

<style scoped>
.showcase { display: flex; min-width: 0; flex-direction: column; gap: 14px; }
.example-label { color: var(--ord-muted); font-size: 12px; font-weight: 750; letter-spacing: .04em; text-transform: uppercase; }
.artifact { min-width: 0; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: var(--ord-card-bg); padding: 16px 18px; }
.artifact > span, .command > span { display: block; color: var(--ord-muted); font-size: 12px; font-weight: 700; margin-bottom: 8px; }
.artifact h3 { font-size: 20px; font-weight: 750; line-height: 1.2; margin: 0 0 7px; }
.artifact p { color: var(--ord-muted); font-size: 16px; line-height: 1.35; }
pre, code { color: #334554; font-family: var(--ord-mono); font-size: 16px; line-height: 1.55; }
pre { margin: 0; background: transparent; padding: 0; white-space: pre-wrap; }
.generation { display: flex; flex-direction: column; gap: 12px; }
.source-model { background: var(--ord-accent-sky-bg); }
.generation-step { display: flex; align-items: center; justify-content: center; gap: 14px; color: var(--ord-brand); font-size: 17px; }
.generation-step span { font-size: 22px; }
.outputs { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
.outputs .artifact { background: var(--ord-accent-teal-bg); padding: 15px 12px; }
.outputs h3 { font-size: 17px; }
.outputs p { font-size: 15px; }
.takeaway { color: var(--ord-muted); font-size: 16px; line-height: 1.4; margin: 0; }
.step-arrow { display: block; color: var(--ord-brand); font-size: 18px; font-weight: 650; text-align: center; line-height: 1; }
.publish-example { display: flex; flex-direction: column; gap: 8px; }
.publish-example pre { line-height: 1.5; }
.endpoint { background: var(--ord-accent-sky-bg); }
.endpoint h3 { font-size: 17px; font-family: var(--ord-mono); }
.endpoint p { font-size: 15px; }
.command { border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: var(--ord-card-bg); padding: 14px 18px; }
.command pre { font-size: 14px; line-height: 1.55; }
.overlay-example { display: grid; grid-template-columns: minmax(0, 1fr) 18px minmax(0, 1.3fr); gap: 10px; align-items: center; }
.overlay-plus { color: var(--ord-brand); font-size: 26px; text-align: center; }
.overlay-patch { background: var(--ord-accent-violet-bg); }
.overlay-example pre { font-size: 15px; }
.overlay-example .step-arrow { grid-column: 1 / -1; font-size: 16px; padding: 7px 0; }
.overlay-example .enriched { grid-column: 1 / -1; }
.enriched { background: var(--ord-accent-teal-bg); }
.format-list { display: flex; flex-wrap: wrap; justify-content: center; gap: 7px; }
.format-list span { color: var(--ord-text); border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: var(--ord-accent-sky-bg); padding: 9px 11px; font-size: 14px; font-weight: 650; }
.renderer-code { text-align: center; background: var(--ord-accent-teal-bg); }
.renderer-code pre { font-size: 17px; }
.tool-screen { margin: 0; overflow: hidden; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: #fff; }
.tool-screen img { display: block; width: 100%; }
.detail-crops img + img { border-top: 1px solid var(--ord-sep); }
.tool-screen figcaption { padding: 8px 12px; color: var(--ord-muted); background: var(--ord-card-bg); font-size: 11px; line-height: 1.3; }
.explorer-viewport { height: 402px; overflow: hidden; }
.explorer-viewport img { width: 100%; height: 100%; object-fit: cover; object-position: bottom; }
.explorer-screen figcaption { display: flex; align-items: center; justify-content: space-between; }
.explorer-screen a { color: var(--ord-brand); font-weight: 700; text-decoration: none; }
.explorer-screen a:hover { text-decoration: underline; }
.explorer-screen a:focus-visible { outline: 2px solid var(--ord-brand); outline-offset: 2px; }
.protocol-flow { display: flex; align-items: center; gap: 9px; }
.protocol-flow span { color: var(--ord-text); flex: 1; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: var(--ord-accent-sky-bg); padding: 12px 9px; font-size: 14px; font-weight: 650; line-height: 1.3; text-align: center; }
.protocol-flow i { color: var(--ord-brand); font-style: normal; }
.compaction-example { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.compaction-example .artifact { padding: 16px 14px; }
.compaction-example pre { font-size: 14px; }
.rule { display: grid; grid-template-columns: 180px 1fr; gap: 5px 12px; align-items: start; }
.rule > span { grid-column: 1 / -1; }
.rule code { font-size: 16px; background: transparent; padding: 0; }
.rule p { font-size: 15px; }
.showcase-compaction .command pre { font-size: 13px; }
.showcase-a2a, .showcase-mcp { gap: 12px; }
</style>
