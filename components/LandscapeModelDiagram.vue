<template>
  <figure class="landscape-model" aria-label="Simplified ORD system landscape model">
    <section class="domain commercial">
      <header><span>Commercial domain</span><strong>What is offered</strong></header>
      <div class="flow"><div class="node static">Vendor</div><i>→</i><div class="node static">Product</div></div>
      <small>A portfolio view, deliberately separate from technical deployment.</small>
    </section>

    <section class="domain system">
      <header><span>System domain</span><strong>What is deployed and running</strong></header>
      <div class="system-map">
        <div class="node static system-type">System Type</div>
        <div class="system-branches">
          <div class="branch"><i>may have</i><b>→</b><div class="node static optional">System Version<em>optional</em></div></div>
          <div class="branch"><i>is deployed as</i><b>→</b><div class="node conceptual">System Deployment<em>conceptual</em></div><b>→</b><i>hosts</i><div class="node dynamic">System Instance<em>dynamic</em></div></div>
        </div>
      </div>
      <small>One system type can have multiple deployments; a deployment can host multiple instances.</small>
    </section>

    <section class="resource-layer">
      <div><span>ORD adds detail</span><strong>Resources, capabilities, taxonomy, and dependencies</strong></div>
      <p>Publish against a type or version for static views, or against an instance for the complete runtime view.</p>
    </section>
  </figure>
</template>

<style scoped>
.landscape-model { display: grid; flex: 1; grid-template-columns: .72fr 1.55fr; grid-template-rows: 1fr auto; gap: 18px; margin: 0; }
.domain { display: flex; min-width: 0; flex-direction: column; justify-content: center; gap: 20px; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: var(--ord-card-bg); padding: 25px; }
.domain header { display: flex; flex-direction: column; gap: 6px; }
.domain header span, .resource-layer span { color: var(--ord-brand); font-size: 12px; font-weight: 750; letter-spacing: .05em; text-transform: uppercase; }
.domain header strong { color: var(--ord-text); font-size: 21px; }
.flow { display: flex; align-items: center; justify-content: center; gap: 9px; }
.flow > i { color: var(--ord-brand); font-size: 19px; font-style: normal; }
.node { position: relative; display: flex; min-height: 72px; min-width: 112px; align-items: center; justify-content: center; border: 1px solid var(--ord-border); border-top: 4px solid var(--ord-sky); border-radius: var(--ord-radius); background: var(--ord-panel-soft); color: var(--ord-text); font-size: 16px; font-weight: 650; padding: 18px 12px 12px; text-align: center; }
.node.dynamic { border-top-color: var(--ord-coral); }
.node.conceptual { border-style: dashed; border-top-color: var(--ord-faint); }
.node em { position: absolute; top: 5px; right: 8px; color: var(--ord-faint); font-size: 8px; font-style: normal; font-weight: 700; text-transform: uppercase; }
.system-map { display: grid; grid-template-columns: 124px 1fr; gap: 13px; align-items: center; }
.system-branches { display: flex; flex-direction: column; gap: 12px; }
.branch { display: flex; align-items: center; gap: 7px; }
.branch .node { flex: 1; min-width: 0; }
.branch b { color: var(--ord-brand); font-size: 18px; }
.branch i { min-width: 74px; color: var(--ord-faint); font-size: 10px; font-style: normal; text-align: center; }
.branch i:last-of-type { min-width: auto; }
.domain small { color: var(--ord-muted); font-size: 14px; line-height: 1.4; }
.resource-layer { display: flex; grid-column: 1 / -1; align-items: center; justify-content: space-between; gap: 30px; border: 1px solid var(--ord-teal-line); border-radius: var(--ord-radius); background: var(--ord-teal-soft); padding: 18px 22px; }
.resource-layer div { display: flex; min-width: 380px; flex-direction: column; gap: 5px; }
.resource-layer strong { color: var(--ord-text); font-size: 19px; }
.resource-layer p { max-width: 540px; color: var(--ord-muted); font-size: 15px; line-height: 1.4; text-align: right; }
</style>
