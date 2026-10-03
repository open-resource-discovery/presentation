<template>
  <figure class="lifecycle-diagram" aria-label="ORD versioning and lifecycle model">
    <div class="status-flow">
      <span class="label">Common releaseStatus path</span>
      <div class="status development">development</div><i>→</i>
      <div class="status beta">beta</div><i>→</i>
      <div class="status active">active</div><i>→</i>
      <div class="status deprecated">deprecated</div><i>→</i>
      <div class="status sunset">sunset</div>
    </div>

    <div class="change-grid">
      <section class="compatible">
        <header><span>Compatible change</span><strong>Update the resource in place</strong></header>
        <div class="version-row"><code>…:Order:v1</code><b>1.0.0</b><i>→</i><code>…:Order:v1</code><b>1.1.0</b></div>
        <p>The ORD ID stays stable; the Semantic Version communicates the new resource state.</p>
      </section>
      <section class="breaking">
        <header><span>Incompatible change</span><strong>Create a successor identity</strong></header>
        <div class="version-row"><code>…:Order:v1</code><b>deprecated</b><i>→</i><code>…:Order:v2</code><b>active</b></div>
        <p>Link the successor; deprecation is a separate decision. When decommissioned, remove or mark sunset and publish a tombstone.</p>
      </section>
    </div>

    <figcaption><strong>Three separate signals:</strong> identity in the ORD ID, API contract state in <code>version</code>, and maturity in <code>releaseStatus</code>. <span class="exception">Development and beta resources may break without a new major ID; tenant extensions update <code>lastUpdate</code>.</span></figcaption>
  </figure>
</template>

<style scoped>
.lifecycle-diagram { display: flex; flex: 1; flex-direction: column; justify-content: center; gap: 18px; margin: 0; }
.status-flow { display: flex; align-items: center; justify-content: center; gap: 10px; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: var(--ord-card-bg); padding: 22px; }
.status-flow .label { margin-right: 8px; color: var(--ord-faint); font-size: 11px; font-weight: 750; text-transform: uppercase; }
.status-flow i { color: var(--ord-faint); font-style: normal; }
.status { border: 1px solid var(--ord-border); border-radius: 999px; color: var(--ord-text); font-size: 14px; font-weight: 650; padding: 9px 14px; }
.status.development { background: var(--ord-panel-soft); }
.status.beta { border-color: #9b7cff; background: rgba(155,124,255,.1); }
.status.active { border-color: var(--ord-brand-2); background: var(--ord-teal-soft); }
.status.deprecated { border-color: var(--ord-coral); background: var(--ord-coral-soft); }
.status.sunset { background: #eceff1; color: #66727a; }
.change-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.change-grid section { display: flex; min-height: 225px; flex-direction: column; gap: 19px; border: 1px solid var(--ord-sep); border-top: 4px solid var(--ord-accent-teal); border-radius: var(--ord-radius); background: var(--ord-accent-teal-bg); padding: 22px; }
.change-grid section.breaking { border-top-color: var(--ord-accent-coral);  background: var(--ord-accent-coral-bg); }
.change-grid header { display: flex; flex-direction: column; gap: 6px; }
.change-grid header span { color: var(--ord-brand); font-size: 11px; font-weight: 750; letter-spacing: .04em; text-transform: uppercase; }
.breaking header span { color: #bd4c36; }
.change-grid header strong { color: var(--ord-text); font-size: 20px; }
.version-row { display: grid; grid-template-columns: 1fr auto 22px 1fr auto; gap: 7px; align-items: center; }
.version-row code { border: 1px solid var(--ord-border); border-radius: 5px; background: var(--ord-pill-bg); color: var(--ord-text); font-size: 12px; padding: 9px; }
.version-row b { color: var(--ord-muted); font-size: 11px; }
.version-row i { color: var(--ord-brand); font-size: 18px; font-style: normal; text-align: center; }
.change-grid p { margin-top: auto; color: var(--ord-muted); font-size: 15px; line-height: 1.4; }
figcaption { border-left: 4px solid var(--ord-brand-2); background: var(--ord-teal-soft); color: var(--ord-muted); font-size: 16px; line-height: 1.4; padding: 14px 18px; }
figcaption strong { color: var(--ord-text); }
figcaption code { color: var(--ord-brand); font-size: 13px; }
.exception { display: block; margin-top: 5px; font-size: 14px; }
</style>
