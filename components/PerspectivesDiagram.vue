<template>
  <figure class="perspectives-diagram" aria-label="ORD static, dynamic, and system-independent perspectives">
    <div class="global-layer">
      <span>System-independent</span>
      <strong>Shared taxonomy</strong>
      <small>Products · Vendors · global Entity Types and Groups</small>
    </div>

    <div class="perspective-grid">
      <section class="perspective static">
        <span class="kind">Static</span>
        <h3>System type / version</h3>
        <p>Reusable design-time baseline.</p>
        <div class="tokens"><span>offered APIs</span><span>versions</span><span>contracts</span></div>
      </section>
      <section class="perspective dynamic">
        <span class="kind">Dynamic</span>
        <h3>System instance</h3>
        <p>Complete view of one running tenant.</p>
        <div class="tokens"><span>active APIs</span><span>extensions</span><span>endpoints</span></div>
      </section>
    </div>

    <div class="effective-view">
      <span>Aggregator responsibility</span>
      <strong>Resolve the effective view for consumers</strong>
    </div>
  </figure>
</template>

<style scoped>
.perspectives-diagram {
  display: flex;
  width: min(100%, 590px);
  min-height: 500px;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  margin: 0;
}

.global-layer, .effective-view {
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: 1px solid var(--ord-border);
  border-radius: var(--ord-radius);
  background: var(--ord-panel-soft);
  padding: 16px 20px;
}
.global-layer span, .effective-view span, .kind {
  color: var(--ord-faint);
  font-family: var(--ord-font);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}
.global-layer strong, .effective-view strong { color: var(--ord-text); font-size: 19px; }
.global-layer small { color: var(--ord-muted); font-size: 14px; }

.perspective-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.perspective {
  display: flex;
  min-height: 256px;
  flex-direction: column;
  gap: 12px;
  border: 1px solid var(--ord-sep);
  border-top: 4px solid var(--ord-accent-sky);
  border-radius: var(--ord-radius);
  background: var(--ord-accent-sky-bg);
  padding: 22px;
}
.perspective.dynamic { border-top-color: var(--ord-accent-coral); background: var(--ord-accent-coral-bg); }
.perspective h3 { min-height: 54px; font-size: 22px; }
.perspective p { color: var(--ord-muted); font-size: 17px; line-height: 1.35; }
.tokens { display: flex; flex-direction: column; gap: 7px; margin-top: auto; }
.tokens span {
  border: 1px solid var(--ord-border);
  border-radius: 5px;
  background: var(--ord-pill-bg);
  color: var(--ord-text);
  font-size: 14px;
  padding: 8px 10px;
}
.effective-view { border-left: 5px solid var(--ord-aggregator); background: var(--ord-aggregator-soft); text-align: center; }
.effective-view span { color: var(--ord-aggregator); }
</style>
