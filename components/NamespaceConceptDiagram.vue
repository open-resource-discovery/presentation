<template>
  <figure class="namespace-diagram" aria-label="ORD system and authority namespace structures">
    <section class="variant system-owned">
      <header><span>System-owned</span><strong>A resource specific to one system type</strong></header>
      <div class="namespace-code">
        <b class="vendor">vendor</b><i>.</i><b class="owner">system</b><i>.</i><b class="context">sub-context</b>
      </div>
      <div class="segment-labels"><span>vendor</span><span>system type</span><span>optional context</span></div>
      <p><strong>System namespace</strong> = vendor + system type</p>
    </section>

    <section class="variant authority-owned">
      <header><span>Authority-owned</span><strong>A shared contract, definition, or taxonomy</strong></header>
      <div class="namespace-code">
        <b class="vendor">vendor</b><i>.</i><b class="authority">authority</b><i>.</i><b class="context">sub-context</b>
      </div>
      <div class="segment-labels"><span>vendor</span><span>authority</span><span>optional context</span></div>
      <p><strong>Authority namespace</strong> = vendor + governing authority</p>
    </section>

    <figcaption>
      <span>Namespaces express ownership and collision-free identity. Groups support flexible categorization.</span>
      <span>Products and Vendors use the vendor namespace alone: <code>foo:product:Orders:</code>. Replace <code>foo</code> with your registered vendor namespace.</span>
    </figcaption>
  </figure>
</template>

<style scoped>
.namespace-diagram { display: grid; flex: 1; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr auto; gap: 18px; margin: 0; }
.variant { display: flex; flex-direction: column; justify-content: center; gap: 22px; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: var(--ord-card-bg); padding: 28px; }
.variant header { display: flex; flex-direction: column; gap: 7px; }
.variant header span { color: var(--ord-brand); font-size: 12px; font-weight: 750; letter-spacing: .05em; text-transform: uppercase; }
.variant header strong { color: var(--ord-text); font-size: 20px; }
.namespace-code { display: flex; align-items: center; font-family: var(--ord-mono); font-size: 26px; font-weight: 700; white-space: nowrap; }
.namespace-code b { border-radius: 5px; padding: 12px 10px; }
.namespace-code i { color: var(--ord-faint); font-style: normal; }
.vendor { background: var(--ord-sky-soft); color: #2869a8; }
.owner { background: var(--ord-teal-soft); color: var(--ord-brand); }
.authority { background: rgba(155,124,255,.13); color: #6f4ad6; }
.context { background: var(--ord-lime-soft); color: #527d40; }
.segment-labels { display: grid; grid-template-columns: .8fr 1fr 1.3fr; gap: 12px; color: var(--ord-muted); font-size: 12px; text-align: center; }
.variant p { border-top: 1px solid var(--ord-sep); color: var(--ord-muted); font-size: 15px; padding-top: 16px; }
.variant p strong { color: var(--ord-text); }
figcaption { display: flex; flex-direction: column; gap: 8px; grid-column: 1 / -1; border-left: 4px solid var(--ord-brand-2); background: var(--ord-teal-soft); color: var(--ord-muted); font-size: 17px; line-height: 1.35; padding: 15px 18px; }
figcaption code { background: var(--ord-pill-bg); color: var(--ord-brand); font-size: inherit; }
</style>
