<template>
  <figure class="landscape-diagram" aria-label="Connected system landscape metadata view">
    <section class="system system-a">
      <header><small>Provider</small><strong>Order system</strong></header>
      <div class="resource api">Orders API</div>
      <div class="resource event">Order events</div>
      <div class="resource entity">Order</div>
    </section>

    <section class="graph">
      <span class="graph-label">Aggregated metadata view</span>
      <div class="hub">ORD</div>
      <div class="relation relation-a">shared Entity Type</div>
      <div class="relation relation-b">integration dependency</div>
      <div class="relation relation-c">product &amp; package</div>
    </section>

    <section class="system system-b">
      <header><small>Provider</small><strong>Fulfillment system</strong></header>
      <div class="resource api">Shipment API</div>
      <div class="resource event">Delivery events</div>
      <div class="resource entity">Order</div>
    </section>

    <div class="consumer-strip">
      <span>Catalog</span><span>Developer tool</span><span>Automation</span><span>AI consumer</span>
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
  align-items: center;
  margin: 0;
  padding-bottom: 72px;
}

.system {
  display: flex;
  min-height: 286px;
  flex-direction: column;
  gap: 10px;
  border: 1px solid var(--ord-sep);
  border-radius: var(--ord-radius);
  background: var(--ord-card-bg);
  padding: 20px;
}
.system header { display: flex; flex-direction: column; gap: 5px; margin-bottom: 8px; }
.system header small { color: var(--ord-faint); font-family: var(--ord-font); font-size: 12px; text-transform: uppercase; }
.system header strong { color: var(--ord-text); font-size: 21px; }
.resource { border: 1px solid var(--ord-border); border-radius: 6px; color: var(--ord-text); font-size: 15px; font-weight: 650; padding: 10px 12px; }
.resource.api { border-color: rgba(88, 166, 255, 0.62); background: var(--ord-sky-soft); }
.resource.event { border-color: var(--ord-teal-line); background: var(--ord-teal-soft); }
.resource.entity { margin-top: auto; border-style: dashed; background: var(--ord-panel-soft); }

.graph {
  position: relative;
  min-height: 340px;
  border: 1px solid var(--ord-teal-line);
  border-radius: 50%;
  background: radial-gradient(circle, var(--ord-teal-soft), transparent 67%);
}
.graph-label {
  position: absolute;
  top: 26px;
  width: 100%;
  color: var(--ord-brand);
  font-family: var(--ord-font);
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
}
.hub {
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  width: 102px;
  height: 102px;
  transform: translate(-50%, -50%);
  place-items: center;
  border: 2px solid var(--ord-brand-2);
  border-radius: 50%;
  background: var(--ord-pill-bg);
  color: var(--ord-text);
  font-size: 28px;
  font-weight: 780;
}
.relation {
  position: absolute;
  border: 1px solid var(--ord-border);
  border-radius: 999px;
  background: var(--ord-pill-bg);
  color: var(--ord-muted);
  font-size: 13px;
  font-weight: 650;
  padding: 8px 11px;
}
.relation-a { top: 88px; left: 14px; }
.relation-b { right: 5px; bottom: 92px; }
.relation-c { bottom: 38px; left: 52px; }

.graph::before, .graph::after {
  position: absolute;
  top: 50%;
  width: 82px;
  height: 2px;
  background: var(--ord-brand-2);
  content: "";
}
.graph::before { right: 100%; }
.graph::after { left: 100%; }

.consumer-strip {
  position: absolute;
  right: 9%;
  bottom: 0;
  left: 9%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  border-top: 1px solid var(--ord-sep);
  padding-top: 16px;
}
.consumer-strip span { color: var(--ord-muted); font-family: var(--ord-font); font-size: 13px; font-weight: 700; text-align: center; }
</style>
