<template>
  <figure class="adoption-decision" aria-label="Decision guide for choosing an ORD publishing approach">
    <section class="framework-check">
      <span class="step-number">01</span>
      <div>
        <small>Start here</small>
        <h3>Does your framework already support ORD?</h3>
      </div>
      <p><strong>Use it when available.</strong> Activate and configure its ORD support before building a custom Provider.</p>
    </section>

    <div class="decision-line" aria-hidden="true"><span>Otherwise</span></div>

    <section class="metadata-question">
      <span class="step-number">02</span>
      <strong>Does the published metadata change by tenant or at runtime?</strong>
    </section>

    <div class="publishing-paths">
      <article class="path static-path">
        <header><span>No</span><small>Static only</small></header>
        <h3>Publish static metadata</h3>
        <p>Serve a prebuilt baseline directly from your app, for example through static-file handling. Or use <RouterLink class="tool-link" to="/project-publishing">ORD Provider Server</RouterLink> for a local directory or GitHub.</p>
        <code>system-type / system-version</code>
      </article>

      <article class="path dynamic-path">
        <header><span>Yes</span><small>Tenant-aware</small></header>
        <h3>Implement a native Provider</h3>
        <p>Add complete tenant-specific metadata and definitions at runtime. Do this in addition to publishing the static baseline.</p>
        <code>static baseline + system-instance</code>
      </article>
    </div>

  </figure>
</template>

<style scoped>
.adoption-decision {
  display: flex;
  flex: 1;
  min-height: 0;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  margin: 0;
}

.framework-check {
  display: grid;
  grid-template-columns: 38px 1.2fr 1fr;
  align-items: center;
  gap: 18px;
  border: 1px solid var(--ord-teal-line);
  border-radius: var(--ord-radius);
  background: var(--ord-teal-soft);
  padding: 18px 22px;
}

.step-number { color: var(--ord-brand); font-size: 13px; font-weight: 800; }
.framework-check div { display: flex; flex-direction: column; gap: 4px; }
.framework-check small { color: var(--ord-brand); font-size: 10px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; }
.framework-check h3 { color: var(--ord-text); font-size: 21px; }
.framework-check p { border-left: 1px solid var(--ord-teal-line); color: var(--ord-muted); font-size: 15px; line-height: 1.4; padding-left: 20px; }
.framework-check p strong { color: var(--ord-text); }

.decision-line { position: relative; align-self: center; width: 2px; height: 22px; background: var(--ord-brand-2); }
.decision-line span { position: absolute; top: 3px; left: 14px; color: var(--ord-faint); font-size: 11px; font-weight: 650; white-space: nowrap; }

.metadata-question {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border: 1px solid var(--ord-sep);
  border-radius: var(--ord-radius);
  background: var(--ord-card-bg);
  padding: 14px 20px;
}

.metadata-question strong { color: var(--ord-text); font-size: 18px; }
.publishing-paths { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }

.path {
  display: grid;
  min-height: 178px;
  grid-template-rows: 24px 32px 1fr auto;
  gap: 8px;
  border: 1px solid var(--ord-sep);
  border-top: 5px solid var(--ord-accent-sky);
  border-radius: var(--ord-radius);
  background: var(--ord-accent-sky-bg);
  padding: 19px 22px;
}

.path.dynamic-path { border-top-color: var(--ord-accent-violet); background: var(--ord-accent-violet-bg); }
.path header { display: flex; align-items: center; justify-content: space-between; }
.path header span { color: var(--ord-brand); font-size: 12px; font-weight: 800; text-transform: uppercase; }
.path header small { color: var(--ord-muted); font-size: 12px; font-weight: 700; }
.path h3 { color: var(--ord-text); font-size: 23px; }
.path p { color: var(--ord-muted); font-size: 16px; line-height: 1.35; }
.path p strong { color: var(--ord-text); }
.path code { justify-self: start; border-radius: 4px; background: var(--ord-pill-bg); color: var(--ord-brand); font-size: 12px; padding: 4px 7px; }
.tool-link { border: 0 !important; border-radius: 3px; background: var(--ord-link-bg); color: var(--ord-brand) !important; font-weight: 700; padding: 1px 3px; text-decoration: none; transition: background-color 140ms ease; }
.tool-link:hover { border: 0 !important; background: var(--ord-link-bg-hover); color: var(--ord-brand) !important; box-shadow: none; }
.tool-link:focus-visible { outline: 2px solid var(--ord-brand-2); outline-offset: 2px; }

</style>
