<template>
  <figure class="landscape-diagram" aria-label="Connected system landscape metadata view">
    <section class="system system-a">
      <header><small>Provider</small><strong>Order system</strong></header>
      <div class="resource api">Orders API</div>
      <div class="resource event">Order events</div>
      <div class="resource entity">Order Entity Type <small>shared ORD ID</small></div>
    </section>

    <section class="graph">
      <span class="graph-label">ORD aggregator</span>
      <h3>Connected metadata view</h3>
      <div class="relation"><strong>Shared semantics</strong><span>APIs and Events reference the same Entity Type</span></div>
      <div class="relation"><strong>Integration dependencies</strong><span>Declare required resources across systems</span></div>
      <div class="relation"><strong>Common taxonomy</strong><span>Navigate Products, Packages, and Groups</span></div>
    </section>

    <section class="system system-b">
      <header><small>Provider</small><strong>Fulfillment system</strong></header>
      <div class="resource api">Shipment API</div>
      <div class="resource event">Delivery events</div>
      <div class="resource entity">Order Entity Type <small>shared ORD ID</small></div>
    </section>

    <div class="consumer-strip">
      <strong>Discovery API →</strong><span>Catalog</span><span>Developer tool</span><span>Automation</span><span>AI consumer</span>
    </div>
  </figure>
</template>

<style scoped>
.landscape-diagram {
  position: relative;
  display: grid;
  flex: 1;
  grid-template-columns: minmax(0, 0.8fr) minmax(360px, 1.3fr) minmax(0, 0.8fr);
  gap: 28px;
  row-gap: 20px;
  align-items: center;
  margin: 0;
  grid-template-rows: 1fr auto;
}

.system {
  display: flex;
  min-height: 286px;
  flex-direction: column;
  gap: 10px;
  border: 1px solid var(--ord-sep);
  border-top: 5px solid var(--ord-provider);
  border-radius: var(--ord-radius);
  background: var(--ord-provider-soft);
  padding: 20px;
}
.system header { display: flex; flex-direction: column; gap: 5px; margin-bottom: 8px; }
.system header small { color: var(--ord-faint); font-family: var(--ord-font); font-size: 12px; text-transform: uppercase; }
.system header strong { color: var(--ord-text); font-size: 21px; }
.resource { border: 1px solid var(--ord-border); border-radius: 6px; color: var(--ord-text); font-size: 15px; font-weight: 650; padding: 10px 12px; }
.resource.api { border-color: rgba(88, 166, 255, 0.62); background: var(--ord-sky-soft); }
.resource.event { border-color: var(--ord-teal-line); background: var(--ord-teal-soft); }
.resource.entity { margin-top: auto; border-width: 2px; border-style: dashed; background: var(--ord-panel-soft); }
.resource small { display: block; margin-top: 5px; color: var(--ord-muted); font-size: 12px; font-weight: 500; }

.graph {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 2px solid var(--ord-aggregator);
  border-radius: var(--ord-radius);
  background: var(--ord-aggregator-soft);
  padding: 20px;
}
.graph-label {
  color: var(--ord-aggregator);
  font-family: var(--ord-font);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}
.graph h3 { font-size: 23px; }
.relation {
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: 1px solid var(--ord-border);
  border-radius: 6px;
  background: var(--ord-pill-bg);
  color: var(--ord-muted);
  font-size: 14px;
  line-height: 1.35;
  padding: 8px 12px;
}
.relation strong { color: var(--ord-text); font-size: 15px; }

.graph::before, .graph::after {
  position: absolute;
  top: 50%;
  width: 28px;
  height: 2px;
  background: var(--ord-brand-2);
  content: "";
}
.graph::before { right: 100%; }
.graph::after { left: 100%; }

.consumer-strip {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: auto repeat(4, 1fr);
  gap: 8px;
  border: 1px solid var(--ord-sep);
  border-top: 5px solid var(--ord-consumer);
  border-radius: var(--ord-radius);
  background: var(--ord-consumer-soft);
  padding: 16px;
}
.consumer-strip strong { color: var(--ord-consumer); font-size: 14px; }
.consumer-strip span { color: var(--ord-muted); font-family: var(--ord-font); font-size: 15px; font-weight: 700; text-align: center; }
</style>
