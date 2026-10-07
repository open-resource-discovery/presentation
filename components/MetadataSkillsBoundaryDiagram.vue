<template>
  <figure class="metadata-skills-boundary" aria-label="API knowledge remains governed metadata while skills contain reusable workflow and orchestration">
    <section class="metadata-plane">
      <header><span>Shared source of truth</span><strong>API knowledge as metadata</strong></header>
      <div class="metadata-layers">
        <div><small>Contract</small><b>Operations · schemas · query behavior</b><code>OpenAPI · OData · MCP · …</code></div>
        <div><small>ORD context</small><b>Identity · ownership · lifecycle · visibility</b><code>ORD resources and relationships</code></div>
        <div><small>Enrichment</small><b>Business semantics · AI hints · guidance</b><code>Entity Types · ORD Overlays</code></div>
      </div>
      <footer><strong>Aggregator / metadata graph</strong><span>Resolves the effective tenant view and preserves access boundaries.</span></footer>
    </section>

    <div class="reference-flow" aria-label="Skills discover and reference metadata">
      <span>discover &amp;<br>reference</span><b>←</b>
    </div>

    <section class="skill-plane">
      <header><span>Reusable execution layer</span><strong>Skill</strong></header>
      <div class="skill-body">
        <b>Workflow</b>
        <b>Tool selection</b>
        <b>Task sequencing</b>
        <b>Consumer-specific guidance</b>
      </div>
      <footer>Loads current metadata instead of carrying a static copy of API knowledge.</footer>
    </section>

    <figcaption><strong>Improve once in metadata.</strong><span>Reuse the improvement across skills, runtimes, catalogs, and developer tools.</span></figcaption>
  </figure>
</template>

<style scoped>
.metadata-skills-boundary { display: grid; flex: 1; min-height: 0; grid-template-columns: minmax(0, 1.65fr) 110px minmax(0, .85fr); grid-template-rows: 1fr auto; gap: 18px; margin: 0; }
.metadata-plane, .skill-plane { display: flex; min-width: 0; flex-direction: column; border: 1px solid var(--ord-sep); border-top: 4px solid var(--ord-accent-teal); border-radius: var(--ord-radius); background: var(--ord-accent-teal-bg); padding: 20px; }
.skill-plane { border-top-color: var(--ord-accent-violet); background: var(--ord-accent-violet-bg); }
header { display: flex; flex-direction: column; gap: 4px; }
header span { color: var(--ord-brand); font-size: 12px; font-weight: 800; letter-spacing: .055em; text-transform: uppercase; }
.skill-plane header span { color: #6b49bc; }
header strong { color: var(--ord-text); font-size: 25px; }
.metadata-layers { display: grid; flex: 1; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; align-items: stretch; margin-top: 18px; }
.metadata-layers div { display: flex; min-width: 0; flex-direction: column; gap: 8px; border: 1px solid var(--ord-border); border-radius: 8px; background: #fff; padding: 15px; }
.metadata-layers small { color: var(--ord-brand); font-size: 11px; font-weight: 800; letter-spacing: .045em; text-transform: uppercase; }
.metadata-layers b { color: var(--ord-text); font-size: 16px; line-height: 1.3; }
.metadata-layers code { margin-top: auto; color: var(--ord-muted); font-size: 11px; line-height: 1.35; }
.metadata-plane footer { display: flex; flex-direction: column; gap: 3px; margin-top: 12px; border-radius: 7px; background: var(--ord-panel); padding: 12px 15px; }
.metadata-plane footer strong { color: var(--ord-text); font-size: 15px; }
.metadata-plane footer span { color: var(--ord-muted); font-size: 13px; line-height: 1.35; }
.reference-flow { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 7px; color: var(--ord-muted); text-align: center; }
.reference-flow span { font-size: 11px; font-weight: 750; letter-spacing: .04em; line-height: 1.25; text-transform: uppercase; }
.reference-flow b { color: var(--ord-brand); font-size: 37px; line-height: 1; }
.skill-body { display: grid; flex: 1; align-content: center; gap: 10px; margin: 16px 0; }
.skill-body b { border: 1px solid #cfc3eb; border-radius: 7px; background: #fff; color: var(--ord-text); font-size: 15px; padding: 11px 13px; }
.skill-plane footer { border-top: 1px solid #cfc3eb; color: var(--ord-muted); font-size: 13px; line-height: 1.4; padding-top: 13px; }
figcaption { display: flex; grid-column: 1 / -1; align-items: center; justify-content: center; gap: 7px; border-radius: var(--ord-radius); background: var(--ord-panel); color: var(--ord-muted); font-size: 15px; padding: 12px 16px; text-align: center; }
figcaption strong { color: var(--ord-text); }
</style>
