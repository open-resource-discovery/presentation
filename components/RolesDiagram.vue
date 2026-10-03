<template>
  <figure class="roles-diagram" aria-label="ORD provider, aggregator, and consumer roles">
    <section class="role provider">
      <span class="role-kicker">Publish</span>
      <h3>Provider</h3>
      <p>Describes one application or service.</p>
      <div class="role-items"><span>Provider API</span><span>ORD documents</span><span>Definitions</span></div>
    </section>

    <div class="flow-arrow"><span>Metadata</span></div>

    <section class="role aggregator">
      <span class="role-kicker">Connect</span>
      <h3>Aggregator</h3>
      <p>Collects, validates, resolves, and serves metadata.</p>
      <div class="role-items"><span>Effective views</span><span>Hosted definitions</span><span>Discovery API</span></div>
    </section>

    <div class="flow-arrow"><span>Discovery API</span></div>

    <section class="role consumer">
      <span class="role-kicker">Use</span>
      <h3>Consumer</h3>
      <p>Finds and uses resources across systems.</p>
      <div class="role-items"><span>Catalogs</span><span>Developer tools</span><span>Automation &amp; AI</span></div>
    </section>

    <div class="direct-path"><span>Direct provider consumption is also supported</span></div>
  </figure>
</template>

<style scoped>
.roles-diagram {
  position: relative;
  display: grid;
  flex: 1;
  grid-template-columns: minmax(0, 1fr) 84px minmax(0, 1.16fr) 84px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  margin: 0;
  padding-bottom: 54px;
}

.role {
  display: flex;
  min-height: 300px;
  flex-direction: column;
  gap: 12px;
  border: 1px solid var(--ord-sep);
  border-radius: var(--ord-radius);
  background: var(--ord-card-bg);
  padding: 26px;
}

.provider { border-top: 5px solid var(--ord-provider); background: var(--ord-provider-soft); }
.aggregator { border-top: 5px solid var(--ord-aggregator); background: var(--ord-aggregator-soft); }
.consumer { border-top: 5px solid var(--ord-consumer); background: var(--ord-consumer-soft); }

.role-kicker {
  color: var(--ord-faint);
  font-family: var(--ord-font);
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
}

.role h3 { font-size: 28px; }
.role p { min-height: 58px; color: var(--ord-muted); font-size: 18px; line-height: 1.4; }

.role-items { display: flex; flex-direction: column; gap: 8px; margin-top: auto; }
.role-items span {
  border: 1px solid var(--ord-border);
  border-radius: 5px;
  background: var(--ord-pill-bg);
  color: var(--ord-text);
  font-size: 15px;
  font-weight: 650;
  padding: 9px 11px;
}

.flow-arrow { position: relative; height: 2px; margin: 0 -12px; background: var(--ord-brand-2); }
.flow-arrow::after {
  position: absolute;
  top: -5px;
  right: -1px;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 9px solid var(--ord-brand-2);
  content: "";
}
.flow-arrow span {
  position: absolute;
  bottom: 12px;
  width: 100%;
  color: var(--ord-faint);
  font-family: var(--ord-font);
  font-size: 13px;
  text-align: center;
  text-transform: uppercase;
}

.direct-path {
  position: absolute;
  right: 9%;
  bottom: 2px;
  left: 9%;
  height: 34px;
  border-right: 1px dashed var(--ord-border);
  border-bottom: 1px dashed var(--ord-border);
  border-left: 1px dashed var(--ord-border);
  text-align: center;
}
.direct-path span {
  position: relative;
  top: 22px;
  background: var(--ord-bg);
  color: var(--ord-faint);
  font-family: var(--ord-font);
  font-size: 14px;
  padding: 0 12px;
}
</style>
