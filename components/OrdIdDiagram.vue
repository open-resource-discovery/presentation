<template>
  <figure class="ord-id-diagram" aria-label="Construction and meaning of an ORD ID">
    <div class="id-example" aria-label="ORD ID example: foo.orders:apiResource:Orders:v1">
      <span class="namespace">foo.orders</span><i>:</i><span class="concept">apiResource</span><i>:</i><span class="resource">Orders</span><i>:</i><span class="major">v1</span>
    </div>

    <div class="id-pattern">
      <span>Pattern</span>
      <span>namespace:conceptName:resourceName:v&lt;major&gt;</span>
    </div>

    <div class="fragment-grid">
      <section class="namespace"><span>01</span><h3>Namespace</h3><p>Identifies the owner governing the information.</p></section>
      <section class="concept"><span>02</span><h3>Concept name</h3><p>A fixed ORD type such as <code>apiResource</code> or <code>agent</code>.</p></section>
      <section class="resource"><span>03</span><h3>Resource name</h3><p>A stable, human-readable technical name within the namespace.</p></section>
      <section class="major"><span>04</span><h3>Major version</h3><p>Marks incompatible generations. Product and Vendor IDs leave this fragment empty, keeping the final colon.</p></section>
    </div>

    <div class="identity-note">
      <div><span>Design time</span><strong>ORD ID</strong></div>
      <b>+</b>
      <div><span>Runtime context</span><strong>System instance</strong></div>
      <b>=</b>
      <p>A unique resource occurrence at runtime</p>
    </div>
  </figure>
</template>

<style scoped>
.ord-id-diagram { display: flex; flex: 1; flex-direction: column; justify-content: center; gap: 20px; margin: 0; }
.id-example { display: flex; align-items: stretch; justify-content: center; font-family: var(--ord-mono); font-size: 28px; font-weight: 700; }
.id-example span { display: flex; align-items: center; border-radius: 6px; padding: 14px 18px; }
.id-example i { display: flex; align-items: center; color: var(--ord-faint); font-style: normal; padding: 0 6px; }
.id-example .namespace, .fragment-grid .namespace { background: var(--ord-sky-soft); color: #2869a8; }
.id-example .concept, .fragment-grid .concept { background: var(--ord-teal-soft); color: var(--ord-brand); }
.id-example .resource, .fragment-grid .resource { background: rgba(155,124,255,.12); color: #6f4ad6; }
.id-example .major, .fragment-grid .major { background: var(--ord-coral-soft); color: #bd4c36; }
.id-pattern { display: flex; align-items: center; justify-content: center; gap: 18px; color: var(--ord-muted); font-size: 16px; }
.id-pattern span:last-child { font-family: var(--ord-mono); font-size: 17px; }
.fragment-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 13px; }
.fragment-grid section { display: flex; min-height: 150px; flex-direction: column; gap: 8px; border: 1px solid var(--ord-border); border-radius: var(--ord-radius); padding: 18px; }
.fragment-grid section > span { font-size: 11px; font-weight: 750; }
.fragment-grid h3 { color: var(--ord-text); font-size: 18px; }
.fragment-grid p { color: var(--ord-muted); font-size: 14px; line-height: 1.38; }
.fragment-grid code { color: inherit; font-size: 12px; }
.identity-note { display: flex; align-items: center; justify-content: center; gap: 16px; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: var(--ord-card-bg); padding: 14px 18px; }
.identity-note div { display: flex; flex-direction: column; gap: 3px; text-align: center; }
.identity-note span { color: var(--ord-faint); font-size: 10px; font-weight: 700; text-transform: uppercase; }
.identity-note strong { color: var(--ord-text); font-size: 16px; }
.identity-note b { color: var(--ord-brand); font-size: 19px; }
.identity-note p { color: var(--ord-muted); font-size: 15px; }
</style>
