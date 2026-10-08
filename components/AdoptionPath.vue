<template>
  <figure class="adoption-path" aria-label="Developer workflow for implementing, validating, and connecting an ORD Provider">
    <div class="path-steps">
      <section class="path-step model">
        <header><span>01</span><small>Model</small></header>
        <h3>Describe your resources</h3>
        <p>Publish the relevant APIs, Events, Packages, and other resources. Link each native definition.</p>
      </section>
      <i class="connector" aria-hidden="true"></i>
      <section class="path-step implement">
        <header><span>02</span><small>Implement</small></header>
        <h3>Use published contracts</h3>
        <p>Build against the ORD JSON Schemas and exported TypeScript interfaces, or generated language models.</p>
      </section>
      <i class="connector" aria-hidden="true"></i>
      <section class="path-step validate">
        <header><span>03</span><small>Verify</small></header>
        <h3>Validate the full output</h3>
        <p>Check ORD documents, native definitions, endpoints, and references in CI or at startup.</p>
      </section>
      <i class="connector" aria-hidden="true"></i>
      <section class="path-step connect">
        <header><span>04</span><small>Discover</small></header>
        <h3>Connect and inspect</h3>
        <p>Onboard to an Aggregator, or consume the Provider directly and inspect it with ORD Explorer.</p>
      </section>
    </div>

    <figcaption>
      <div><span>Static metadata</span><strong>Validate during build or startup</strong></div>
      <div><span>Tenant-aware metadata</span><strong>Test representative tenant configurations</strong></div>
    </figcaption>
  </figure>
</template>

<style scoped>
.adoption-path {
  display: flex;
  flex: 1;
  min-height: 0;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  margin: 0;
}

.path-steps {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 34px minmax(0, 1fr) 34px minmax(0, 1fr) 34px minmax(0, 1fr);
  align-items: center;
}

.path-step {
  display: grid;
  min-height: 270px;
  grid-template-rows: 22px 64px 1fr;
  gap: 13px;
  border: 1px solid var(--ord-sep);
  border-top: 5px solid var(--ord-accent-sky);
  border-radius: var(--ord-radius);
  background: var(--ord-accent-sky-bg);
  padding: 21px 19px;
}

.path-step.implement { border-top-color: var(--ord-accent-teal); background: var(--ord-accent-teal-bg); }
.path-step.validate { border-top-color: var(--ord-accent-violet); background: var(--ord-accent-violet-bg); }
.path-step.connect { border-top-color: var(--ord-accent-lime); background: var(--ord-accent-lime-bg); }
.path-step header { display: flex; align-items: center; justify-content: space-between; }
.path-step header span { color: var(--ord-faint); font-size: 13px; font-weight: 800; }
.path-step header small { color: var(--ord-brand); font-size: 10px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; }
.path-step h3 { color: var(--ord-text); font-size: 21px; line-height: 1.18; }
.path-step p { color: var(--ord-muted); font-size: 15px; line-height: 1.42; }

.connector { position: relative; height: 2px; background: var(--ord-brand-2); }
.connector::after {
  position: absolute;
  top: -5px;
  right: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 9px solid var(--ord-brand-2);
  content: "";
}

figcaption { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
figcaption div { display: flex; align-items: baseline; justify-content: space-between; gap: 14px; border-left: 4px solid var(--ord-brand-2); background: var(--ord-teal-soft); padding: 13px 16px; }
figcaption span { color: var(--ord-brand); font-size: 11px; font-weight: 800; letter-spacing: 0.04em; text-transform: uppercase; }
figcaption strong { color: var(--ord-text); font-size: 14px; }
</style>
