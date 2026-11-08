<template>
  <figure class="lifecycle-diagram" aria-label="ORD separates identity, change, and maturity into three independent signals">
    <div class="signal-grid">
      <section class="signal identity">
        <header><span>01 · Identity</span><strong>ORD ID</strong></header>
        <div class="example"><code>…:Order:v1</code><i>→</i><code>…:Order:v2</code></div>
        <p>A stable reference. Increment the major fragment only for a breaking change, which creates a new resource.</p>
        <small>Non-breaking changes keep the ORD ID.</small>
      </section>

      <section class="signal change">
        <header><span>02 · Change</span><strong><code>version</code> · <code>lastUpdate</code></strong></header>
        <div class="example"><code>1.0.0</code><i>→</i><code>1.1.0</code></div>
        <p>The Semantic Version describes the contract state. Update it when the definition changes for consumers.</p>
        <small>Tenant extensions update only <code>lastUpdate</code>.</small>
      </section>

      <section class="signal maturity">
        <header><span>03 · Maturity</span><strong><code>releaseStatus</code></strong></header>
        <div class="status-flow" aria-label="development, beta, active, deprecated, sunset">
          <b class="development">development</b><b class="beta">beta</b><b class="active">active</b><b class="deprecated">deprecated</b><b class="sunset">sunset</b>
        </div>
        <p>Stability guarantees start with <code>active</code>; <code>deprecated</code> asks consumers to migrate.</p>
        <small>Development and beta resources may break without a new major ID.</small>
      </section>
    </div>

    <figcaption>
      <span><strong>Breaking change to an active resource?</strong> Create a successor with a new ORD ID, deprecate the old one, and retire it with a tombstone.</span>
      <RouterLink to="/api-lifecycle">See the API lifecycle →</RouterLink>
    </figcaption>
  </figure>
</template>

<style scoped>
.lifecycle-diagram { display: flex; flex: 1; min-height: 0; flex-direction: column; justify-content: center; gap: 18px; margin: 0; }
.signal-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
.signal { --signal-accent: var(--ord-accent-sky); --signal-bg: var(--ord-accent-sky-bg); --signal-label: #2f6f9f; display: flex; min-width: 0; flex-direction: column; gap: 16px; border: 1px solid var(--ord-sep); border-top: 4px solid var(--signal-accent); border-radius: var(--ord-radius); background: var(--signal-bg); padding: 22px; }
.signal.change { --signal-accent: var(--ord-accent-teal); --signal-bg: var(--ord-accent-teal-bg); --signal-label: var(--ord-brand); }
.signal.maturity { --signal-accent: var(--ord-accent-violet); --signal-bg: var(--ord-accent-violet-bg); --signal-label: #6b4fb3; }
.signal header { display: flex; flex-direction: column; gap: 6px; }
.signal header span { color: var(--signal-label); font-size: 11px; font-weight: 750; letter-spacing: .05em; text-transform: uppercase; }
.signal header strong { color: var(--ord-text); font-size: 22px; line-height: 1.2; }
.signal header strong code { color: var(--ord-text); font-size: 19px; }
.example { display: flex; align-items: center; gap: 10px; }
.example code { border: 1px solid var(--ord-border); border-radius: 5px; background: var(--ord-pill-bg); color: var(--ord-text); font-size: 14px; padding: 8px 10px; }
.example i { color: var(--ord-brand); font-size: 18px; font-style: normal; }
.status-flow { display: flex; flex-wrap: wrap; gap: 6px; }
.status-flow b { border: 1px solid var(--ord-border); border-radius: 999px; color: var(--ord-text); font-size: 13px; font-weight: 650; padding: 6px 10px; }
.status-flow .development { background: var(--ord-panel-soft); }
.status-flow .beta { border-color: #9b7cff; background: rgba(155, 124, 255, .1); }
.status-flow .active { border-color: var(--ord-brand-2); background: var(--ord-teal-soft); }
.status-flow .deprecated { border-color: var(--ord-coral); background: var(--ord-coral-soft); }
.status-flow .sunset { background: #eceff1; color: #66727a; }
.signal p { color: var(--ord-muted); font-size: 16px; line-height: 1.4; }
.signal small { margin-top: auto; border-top: 1px solid var(--ord-sep); padding-top: 12px; color: var(--ord-text); font-size: 14px; font-weight: 650; line-height: 1.4; }
.signal p code, .signal small code { border-radius: 4px; background: var(--ord-accent-teal-bg); color: var(--ord-brand); font-size: .9em; padding: 1px 5px; }
.lifecycle-diagram .signal header strong code { background: transparent; padding: 0; }
figcaption { display: flex; align-items: center; justify-content: space-between; gap: 24px; border-left: 4px solid var(--ord-brand-2); background: var(--ord-teal-soft); color: var(--ord-muted); font-size: 16px; line-height: 1.4; padding: 14px 18px; }
figcaption strong { color: var(--ord-text); }
figcaption a { flex: none; border: 0; color: var(--ord-brand); font-weight: 700; text-decoration: none; }
figcaption a:hover { text-decoration: underline; }
figcaption a:focus-visible { outline: 2px solid var(--ord-brand); outline-offset: 3px; }
</style>
