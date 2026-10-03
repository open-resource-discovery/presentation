<template>
  <figure class="ai-diagram" aria-label="AI agent metadata and protocol relationships in ORD">
    <section class="agent-node">
      <span class="node-kind">ORD Agent · beta</span>
      <strong>Service Agent</strong>
      <small>purpose · owner · lifecycle · semantics</small>
    </section>

    <div class="branch exposed">
      <span>exposes</span>
      <section><small>API Resource</small><strong>A2A</strong><em>Agent Card</em></section>
    </div>

    <div class="branch required">
      <span>declares dependencies</span>
      <section><small>Integration Dependency</small><strong>API Resources</strong><em>MCP tools / other APIs</em></section>
    </div>

    <div class="hint"><code>aiHint</code><span>usage guidance for AI consumers</span></div>

    <div class="catalog">
      <span>ORD aggregator</span>
      <strong>Discoverable context for orchestrators</strong>
    </div>
  </figure>
</template>

<style scoped>
.ai-diagram {
  position: relative;
  width: min(100%, 590px);
  min-height: 510px;
  margin: 0;
  border: 1px solid var(--ord-sep);
  border-radius: var(--ord-radius);
  background: var(--ord-diagram-bg);
  padding: 28px;
}

.agent-node {
  position: absolute;
  top: 42px;
  left: 50%;
  z-index: 1;
  display: flex;
  width: 260px;
  min-height: 122px;
  transform: translateX(-50%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border: 2px solid var(--ord-brand-2);
  border-radius: var(--ord-radius);
  background: var(--ord-teal-soft);
  text-align: center;
}
.node-kind { color: var(--ord-brand); font-family: var(--ord-font); font-size: 12px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; }
.agent-node strong { color: var(--ord-text); font-size: 25px; }
.agent-node small { color: var(--ord-muted); font-size: 13px; }

.branch { position: absolute; top: 205px; width: 228px; }
.branch.exposed { left: 26px; }
.branch.required { right: 26px; }
.branch > span { position: relative; z-index: 1; display: block; width: fit-content; margin: 0 auto 10px; background: var(--ord-bg); color: var(--ord-faint); font-family: var(--ord-font); font-size: 12px; text-align: center; text-transform: uppercase; padding: 0 5px; }
.branch::before { position: absolute; top: -42px; z-index: 0; width: 50%; height: 36px; border-bottom: 2px solid var(--ord-brand-2); content: ""; }
.branch::after { position: absolute; top: -6px; left: 50%; z-index: 0; height: 39px; border-left: 2px solid var(--ord-brand-2); content: ""; }
.branch.exposed::before { right: 0; border-right: 2px solid var(--ord-brand-2); }
.branch.required::before { left: 0; border-left: 2px solid var(--ord-brand-2); }
.branch section { position: relative; z-index: 1; display: flex; min-height: 112px; flex-direction: column; gap: 7px; border: 1px solid var(--ord-border); border-radius: var(--ord-radius); background: var(--ord-panel-soft); padding: 17px; }
.branch small { color: var(--ord-faint); font-family: var(--ord-font); font-size: 11px; text-transform: uppercase; }
.branch strong { color: var(--ord-text); font-size: 21px; }
.branch em { color: var(--ord-muted); font-size: 14px; font-style: normal; }

.hint {
  position: absolute;
  top: 368px;
  right: 28px;
  left: 28px;
  display: flex;
  align-items: center;
  gap: 16px;
  border: 2px dashed #9b7cff;
  border-radius: var(--ord-radius);
  background: rgba(155, 124, 255, 0.08);
  padding: 12px 16px;
}
.hint code { background: var(--ord-pill-bg); color: var(--ord-brand); font-size: 15px; font-weight: 700; }
.hint span { color: var(--ord-muted); font-size: 14px; }

.catalog {
  position: absolute;
  right: 28px;
  bottom: 24px;
  left: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--ord-sep);
  border-radius: var(--ord-radius);
  border-left: 5px solid var(--ord-aggregator);
  background: var(--ord-aggregator-soft);
  padding: 14px 17px;
}
.catalog span { color: var(--ord-aggregator); font-family: var(--ord-font); font-size: 12px; font-weight: 700; text-transform: uppercase; }
.catalog strong { color: var(--ord-text); font-size: 15px; }
</style>
