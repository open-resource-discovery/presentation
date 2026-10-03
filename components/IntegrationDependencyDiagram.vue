<template>
  <figure class="dependency-diagram" aria-label="Authoritative ORD integration dependency model with alternative and callback resource references">
    <!-- Unmodified diagram from ord-public/static/img/integration-dependency.drawio.svg (1.16.4). -->
    <img src="/img/spec/integration-dependency.drawio.svg" alt="System A declares three integration aspects. Aspect 1 references alternative APIs on B; aspect 2 references B's events; aspect 3 references A's own callback API, called by B." />
    <aside>
      <div class="line-legend"><span><i class="reference"></i>ORD reference</span><span><i></i>Runtime call</span></div>
      <section><small>Across aspects</small><strong>AND</strong><p>Each mandatory aspect must be satisfied. An aspect can also be marked optional.</p></section>
      <section><small>Within an aspect</small><strong>OR</strong><p>Alternative resource references satisfy the same need — such as the two APIs in Aspect 1.</p></section>
      <section><small>Callbacks and subsets</small><p>A reference can point to the system's own callback API. A subset can narrow operations, tools, or event types.</p></section>
      <span class="scope">Describes a type-level integration capability; runtime connections are outside ORD's scope.</span>
      <a href="https://open-resource-discovery.org/spec-v1/concepts/integration-dependency" target="_blank" rel="noopener noreferrer">Specification diagram ↗</a>
    </aside>
  </figure>
</template>

<style scoped>
.dependency-diagram { display: grid; flex: 1; min-height: 0; grid-template-columns: minmax(0, 1.75fr) minmax(0, 1fr); gap: 30px; margin: 0; }
.dependency-diagram img { width: 100%; height: 100%; min-height: 0; object-fit: contain; }
aside { display: flex; min-width: 0; flex-direction: column; justify-content: center; gap: 12px; }
.line-legend { display: flex; flex-wrap: wrap; gap: 8px 18px; color: var(--ord-muted); font-size: 16px; }
.line-legend span { display: flex; align-items: center; gap: 8px; }
.line-legend i { width: 30px; border-top: 2px solid var(--ord-text); }
.line-legend i.reference { border-top-style: dashed; }
section { border-left: 3px solid var(--ord-brand-2); padding-left: 16px; }
small { display: block; color: var(--ord-brand); font-size: 12px; font-weight: 750; letter-spacing: .04em; text-transform: uppercase; }
strong { display: block; color: var(--ord-text); font-size: 24px; }
p { margin: 5px 0 0; color: var(--ord-muted); font-size: 16px; line-height: 1.4; }
.scope { border-radius: var(--ord-radius); background: var(--ord-teal-soft); color: var(--ord-text); font-size: 14px; line-height: 1.4; padding: 12px 16px; }
a { align-self: flex-start; border: 0; color: var(--ord-brand); font-size: 12px; }
</style>
