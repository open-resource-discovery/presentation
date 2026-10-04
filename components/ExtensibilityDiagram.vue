<template>
  <figure class="extensibility-diagram" aria-label="Four ways to extend ORD metadata through defined extension points">
    <section>
      <header><small>01 · Additional metadata</small><h3>Labels &amp; documentation</h3></header>
      <p>Use <code>labels</code> for querying and filtering; <code>documentationLabels</code> for human-readable Markdown snippets.</p>
      <code class="example">"labels": { "acme:domain": ["sales"] }</code>
    </section>
    <section>
      <header><small>02 · Governed taxonomy</small><h3>Groups &amp; Group Types</h3></header>
      <p>Define the category and its meaning, publish named groups, then assign resources via <code>partOfGroups</code>.</p>
      <div class="example">Business process <b>→</b> Order to cash<br><span>Group Type <b>→</b> Group</span></div>
    </section>
    <section>
      <header><small>03 · Extensible type values</small><h3>Namespaced specifications</h3></header>
      <p>Where a field permits extensions, a Specification ID can identify a custom type, definition format, or strategy.</p>
      <code class="example">"type": "acme:feature-set:v1"</code>
    </section>
    <section>
      <header><small>04 · Rich domain contracts</small><h3>Capabilities &amp; definitions</h3></header>
      <p>Describe a supported feature or configuration as a Capability. Link a custom definition for richer machine-readable detail.</p>
      <div class="example">ORD Capability <b>→</b> Custom definition<br><span>identity, lifecycle, visibility <b>→</b> domain schema</span></div>
    </section>
    <figcaption>Namespace custom semantics and document their meaning. Prefer standard ORD fields when they already fit.</figcaption>
  </figure>
</template>

<style scoped>
.extensibility-diagram { display: flex; flex: 1; min-height: 0; flex-direction: column; justify-content: center; gap: 12px; margin: 0; }
section { display: grid; grid-template-columns: 240px minmax(0, 1fr) 370px; align-items: center; gap: 24px; min-height: 92px; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: var(--ord-card-bg); padding: 16px 20px; }
small { display: block; margin-bottom: 6px; color: var(--ord-faint); font-size: 11px; font-weight: 750; text-transform: uppercase; letter-spacing: .04em; }
h3 { font-size: 19px; }
p { color: var(--ord-muted); font-size: 15px; line-height: 1.4; }
p code { color: var(--ord-brand); font-size: 13px; }
.example { color: var(--ord-text); font-size: 14px; line-height: 1.5; }
code.example { border: 1px solid var(--ord-sep); border-radius: 5px; background: var(--ord-pill-bg); color: var(--ord-brand); font-size: 13px; padding: 12px; white-space: normal; overflow-wrap: anywhere; }
.example span { color: var(--ord-muted); font-size: 12px; }
.example b { padding: 0 5px; color: var(--ord-brand); }
figcaption { color: var(--ord-muted); font-size: 13px; line-height: 1.4; }
</style>
