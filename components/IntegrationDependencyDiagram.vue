<template>
  <figure class="dependency-diagram" aria-label="An ORD Integration Dependency combines required aspects and alternative resources">
    <section class="consumer">
      <small>Described system or agent</small>
      <strong>Order Assistant</strong>
      <span>Declares what it can consume to achieve one integration purpose.</span>
    </section>

    <div class="declares"><span>declares</span><b>→</b></div>

    <section class="dependency">
      <header><small>Integration Dependency</small><strong>Fulfil an order</strong><em>type-level capability, not a runtime connection</em></header>
      <div class="aspect mandatory">
        <div class="aspect-label"><span>Aspect 1</span><b>mandatory</b></div>
        <div class="alternatives"><section><small>API Resource</small><strong>Inventory API</strong></section><i>OR</i><section><small>API Resource</small><strong>Stock API</strong></section></div>
      </div>
      <div class="and">AND</div>
      <div class="aspect optional">
        <div class="aspect-label"><span>Aspect 2</span><b>optional</b></div>
        <div class="subset"><section><small>Event Resource</small><strong>Order Events</strong></section><code>subset: Order.Created</code></div>
      </div>
    </section>

    <figcaption><span><b>Aspects</b> express the ingredients</span><span><b>Alternatives</b> satisfy the same aspect</span><span><b>Subset</b> narrows operations, tools, or event types</span></figcaption>
  </figure>
</template>

<style scoped>
.dependency-diagram { display: grid; flex: 1; min-height: 0; grid-template-columns: 250px 80px 1fr; grid-template-rows: 1fr auto; align-items: center; gap: 14px; margin: 0; }
.consumer { display: flex; min-height: 190px; flex-direction: column; justify-content: center; gap: 10px; border: 2px solid var(--ord-brand-2); border-radius: var(--ord-radius); background: var(--ord-teal-soft); padding: 22px; }
.consumer small, .dependency header small { color: var(--ord-brand); font-size: 11px; font-weight: 800; letter-spacing: .05em; text-transform: uppercase; }
.consumer strong { color: var(--ord-text); font-size: 23px; }
.consumer span { color: var(--ord-muted); font-size: 13px; line-height: 1.4; }
.declares { display: flex; flex-direction: column; align-items: center; gap: 5px; color: var(--ord-faint); }
.declares span { font-size: 10px; font-weight: 700; text-transform: uppercase; }
.declares b { color: var(--ord-brand); font-size: 32px; font-weight: 450; }
.dependency { display: grid; grid-template-columns: 1fr 44px 1fr; gap: 12px; border: 1px solid var(--ord-border); border-radius: var(--ord-radius); background: var(--ord-card-bg); padding: 18px; }
.dependency header { grid-column: 1 / -1; display: grid; grid-template-columns: auto 1fr auto; align-items: baseline; gap: 12px; border-bottom: 1px solid var(--ord-sep); padding-bottom: 12px; }
.dependency header strong { color: var(--ord-text); font-size: 20px; }
.dependency header em { color: var(--ord-muted); font-size: 11px; font-style: normal; }
.aspect { display: flex; min-height: 225px; flex-direction: column; gap: 14px; border: 1px solid var(--ord-border); border-radius: var(--ord-radius); background: var(--ord-panel-soft); padding: 15px; }
.aspect.optional { border-style: dashed; }
.aspect-label { display: flex; align-items: center; justify-content: space-between; }
.aspect-label span { color: var(--ord-text); font-size: 13px; font-weight: 700; }
.aspect-label b { border-radius: 999px; background: var(--ord-teal-soft); color: var(--ord-brand); font-size: 9px; padding: 5px 8px; text-transform: uppercase; }
.optional .aspect-label b { background: var(--ord-sky-soft); color: var(--ord-sky); }
.alternatives { display: grid; flex: 1; grid-template-columns: 1fr 28px 1fr; align-items: center; gap: 6px; }
.alternatives section, .subset section { display: flex; min-height: 90px; flex-direction: column; justify-content: center; gap: 7px; border: 1px solid var(--ord-sep); border-radius: 6px; background: var(--ord-card-bg); padding: 12px; }
.alternatives small, .subset small { color: var(--ord-faint); font-size: 9px; font-weight: 700; text-transform: uppercase; }
.alternatives strong, .subset strong { color: var(--ord-text); font-size: 14px; }
.alternatives i { color: var(--ord-brand); font-size: 11px; font-style: normal; font-weight: 800; text-align: center; }
.and { display: flex; align-items: center; justify-content: center; color: var(--ord-brand); font-size: 10px; font-weight: 800; }
.subset { display: flex; flex: 1; flex-direction: column; justify-content: center; gap: 9px; }
.subset code { border-radius: 5px; background: #141a21; color: #ce9178; font-size: 10px; padding: 8px; text-align: center; }
figcaption { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: var(--ord-panel-soft); padding: 12px 16px; }
figcaption span { color: var(--ord-muted); font-size: 12px; text-align: center; }
figcaption b { color: var(--ord-text); }
</style>
