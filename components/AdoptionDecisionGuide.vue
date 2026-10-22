<template>
  <figure class="adoption-decision" aria-label="Recommended publishing model: a static baseline for every system, plus a complete system-instance perspective when metadata differs per tenant">
    <div class="publication-flow">
      <section class="publication-card static-baseline">
        <header><span class="step-number">01</span><small>Recommended for every system</small></header>
        <h3>Publish a static perspective</h3>
        <p>Describe the reusable baseline, independent of tenant-specific configuration and extensions.</p>
        <div class="static-perspectives">
          <div><code>system-type</code><span>Version-independent metadata</span></div>
          <div><code>system-version</code><span>Metadata for a specific release version</span></div>
        </div>
        <footer>Use one or both static perspectives.</footer>
      </section>

      <div class="addition" aria-hidden="true"><span>+</span></div>

      <section class="publication-card tenant-view">
        <header><span class="step-number">02</span><small>When metadata differs per tenant</small></header>
        <h3>Add a complete tenant view</h3>
        <p>Reflect each tenant’s configuration, extensions, enabled resources, and endpoints.</p>
        <div class="tenant-perspective"><code>system-instance</code><span>Full tenant view, including unchanged resources</span></div>
        <footer>Keep the static baseline published alongside it.</footer>
      </section>
    </div>

    <aside class="implementation-note">
      <span>How to implement</span>
      <p><strong>Use framework ORD support when available.</strong> Otherwise serve the static baseline from your app or <RouterLink class="tool-link" to="/project-publishing">ORD Provider Server</RouterLink>. Generate the tenant view natively when needed.</p>
    </aside>
  </figure>
</template>

<style scoped>
.adoption-decision {
  display: flex;
  flex: 1;
  min-height: 0;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  margin: 0;
}
.publication-flow { display: grid; grid-template-columns: minmax(0, 1fr) 68px minmax(0, 1fr); align-items: stretch; }
.publication-card {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 12px;
  border: 1px solid var(--ord-sep);
  border-top: 5px solid var(--ord-accent-teal);
  border-radius: var(--ord-radius);
  background: var(--ord-accent-teal-bg);
  padding: 20px;
}
.tenant-view { border-top-color: var(--ord-accent-violet); background: var(--ord-accent-violet-bg); }
.publication-card header { display: flex; align-items: center; gap: 12px; }
.step-number { color: var(--ord-brand); font-size: 14px; font-weight: 800; }
.publication-card small { color: var(--ord-brand); font-size: 12px; font-weight: 750; letter-spacing: .04em; text-transform: uppercase; }
.tenant-view .step-number, .tenant-view small { color: #6b49bc; }
.publication-card h3 { color: var(--ord-text); font-size: 26px; }
.publication-card p { color: var(--ord-muted); font-size: 17px; line-height: 1.4; }
.static-perspectives { display: flex; flex-direction: column; gap: 10px; }
.static-perspectives > div { display: grid; grid-template-columns: 156px 1fr; align-items: center; gap: 12px; }
.publication-card code { width: fit-content; border: 1px solid var(--ord-border); border-radius: 5px; background: var(--ord-pill-bg); color: var(--ord-brand); font-size: 14px; padding: 5px 9px; }
.static-perspectives span, .tenant-perspective span { color: var(--ord-muted); font-size: 15px; line-height: 1.4; }
.tenant-perspective { display: flex; flex-direction: column; align-items: flex-start; gap: 12px; }
.tenant-perspective code { color: #6b49bc; }
.publication-card footer { margin-top: auto; border-top: 1px solid var(--ord-sep); color: var(--ord-text); font-size: 15px; font-weight: 650; line-height: 1.4; padding-top: 12px; }
.addition { display: flex; align-items: center; justify-content: center; color: var(--ord-brand); }
.addition span { font-size: 42px; font-weight: 400; }
.implementation-note { display: grid; grid-template-columns: 154px 1fr; align-items: center; gap: 20px; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: var(--ord-card-bg); padding: 16px 20px; }
.implementation-note > span { color: var(--ord-faint); font-size: 12px; font-weight: 750; letter-spacing: .04em; text-transform: uppercase; }
.implementation-note strong { color: var(--ord-text); }
.implementation-note p { color: var(--ord-muted); font-size: 15px; line-height: 1.4; }
.tool-link { border: 0 !important; border-radius: 3px; background: var(--ord-link-bg); color: var(--ord-brand) !important; font-weight: 700; padding: 1px 3px; text-decoration: none; transition: background-color 140ms ease; }
.tool-link:hover { background: var(--ord-link-bg-hover); }
.tool-link:focus-visible { outline: 2px solid var(--ord-brand-2); outline-offset: 2px; }
</style>
