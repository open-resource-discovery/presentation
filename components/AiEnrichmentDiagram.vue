<template>
  <figure class="enrichment-diagram" aria-label="AI-oriented metadata enrichment at ORD resource and resource-definition levels">
    <section class="lane resource-lane">
      <div class="lane-label"><span>01</span><strong>Resource-level guidance</strong><small>Inside the ORD document</small></div>
      <div class="code-card">
        <code><i>"title"</i>: <em>"Orders API"</em>,<br><i>"description"</i>: <em>"Read customer orders"</em>,<br><mark><i>"aiHint"</i>: <em>"Use before shipping…"</em></mark></code>
      </div>
      <div class="outcome"><b>Helps an AI consumer choose</b><span>Purpose and usage guidance stay separate from human documentation.</span></div>
    </section>

    <section class="lane definition-lane">
      <div class="lane-label"><span>02</span><strong>Definition-level enrichment</strong><small>ORD Overlays · OpenAPI, OData, A2A, MCP…</small></div>
      <div class="definition-stack">
        <div><small>Base definition</small><code>openapi-v3</code></div>
        <b>+</b>
        <div class="overlay"><small>Overlay definition entry</small><code>type: ord:overlay:v1<br>purpose: ord:ai-enrichment</code></div>
      </div>
      <div class="outcome"><b>Helps an AI consumer use</b><span>Add operation-level descriptions, semantics, and hints without editing the source.</span></div>
    </section>

    <figcaption><code>aiHint</code> is defined on supported ORD resources. Fine-grained enrichment of a referenced definition is carried by an ORD Overlay.</figcaption>
  </figure>
</template>

<style scoped>
.enrichment-diagram { display: grid; flex: 1; min-height: 0; grid-template-columns: 1fr 1fr; gap: 16px; margin: 0; }
.lane { display: grid; min-width: 0; grid-template-rows: auto 1fr auto; gap: 15px; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: var(--ord-card-bg); padding: 20px; }
.definition-lane { border-top: 4px solid var(--ord-accent-violet); background: var(--ord-accent-violet-bg); }
.resource-lane { border-top: 4px solid var(--ord-accent-teal); background: var(--ord-accent-teal-bg); }
.lane-label { display: grid; grid-template-columns: 32px 1fr; gap: 3px 10px; }
.lane-label > span { grid-row: 1 / 3; color: var(--ord-brand); font-size: 12px; font-weight: 800; }
.lane-label strong { color: var(--ord-text); font-size: 20px; }
.lane-label small { color: var(--ord-muted); font-size: 16px; }
.code-card { display: flex; align-items: center; border-radius: 7px; background: #141a21; padding: 19px; }
.code-card code { color: #d4d4d4; font-family: var(--ord-mono); font-size: 18px; line-height: 1.65; }
.code-card i { color: #9cdcfe; font-style: normal; }
.code-card em { color: #ce9178; font-style: normal; }
.code-card mark { display: inline-block; border-left: 3px solid var(--ord-brand-2); background: rgba(50,188,172,.12); padding: 2px 5px; }
.definition-stack { display: grid; grid-template-rows: auto 24px auto; align-content: center; gap: 4px; }
.definition-stack > div { display: flex; flex-direction: column; justify-content: center; gap: 6px; border: 1px solid var(--ord-border); border-radius: var(--ord-radius); background: var(--ord-panel-soft); padding: 12px 18px; }
.definition-stack > div.overlay { border-color: #9b7cff; background: rgba(155,124,255,.08); }
.definition-stack > b { color: var(--ord-brand); font-size: 27px; text-align: center; }
.definition-stack small { color: var(--ord-muted); font-size: 16px; font-weight: 700; }
.definition-stack code { border-radius: 4px; background: #141a21; color: #d4d4d4; font-size: 16px; line-height: 1.35; padding: 7px 9px; }
.outcome { display: flex; flex-direction: column; gap: 4px; border-top: 1px solid var(--ord-sep); padding-top: 13px; }
.outcome b { color: var(--ord-text); font-size: 18px; }
.outcome span { color: var(--ord-muted); font-size: 16px; line-height: 1.35; }
figcaption { grid-column: 1 / -1; border-radius: var(--ord-radius); background: var(--ord-panel); color: var(--ord-muted); font-size: 16px; padding: 12px 16px; text-align: center; }
figcaption code { color: var(--ord-brand-3); }
</style>
