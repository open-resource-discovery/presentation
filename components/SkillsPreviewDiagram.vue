<template>
  <figure class="skills-preview" aria-label="Proposed flow for publishing and consuming agent skills through ORD">
    <div class="preview-banner">
      <span>Proposal</span>
      <strong>Capability types <code>agent-skill</code> and <code>agent-plugin</code></strong>
      <a href="https://github.com/open-resource-discovery/specification/pull/102" target="_blank" rel="noreferrer">PR #102 ↗</a>
    </div>

    <div class="skill-flow">
      <section class="skill-card primary">
        <small>ORD Capability</small>
        <strong>Order Lookup</strong>
        <code>type: agent-skill</code>
        <span>identity · owner · lifecycle · visibility</span>
      </section>

      <div class="connection definition"><span>definition</span><i>→</i></div>
      <section class="skill-card">
        <small>Portable package</small>
        <strong>Agent Skill</strong>
        <code>agent-skill-zip</code>
        <span>instructions · scripts · resources</span>
      </section>

      <div class="connection discovery"><span>discover &amp; load</span><i>→</i></div>
      <section class="skill-card runtime">
        <small>Consumer</small>
        <strong>Agent runtime</strong>
        <span>Finds the skill through an ORD aggregator and loads it on demand.</span>
      </section>
    </div>

    <div class="dependency-row">
      <span>Skill dependencies use the existing Integration Dependency graph</span>
      <b>APIs</b><b>MCP tools</b><b>Agents</b><b>Other skills</b>
    </div>
  </figure>
</template>

<style scoped>
.skills-preview { display: flex; flex: 1; min-height: 0; flex-direction: column; justify-content: center; gap: 18px; margin: 0; }
.preview-banner { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 16px; border: 1px solid var(--ord-lime); border-radius: var(--ord-radius); background: var(--ord-lime-soft); padding: 13px 17px; }
.preview-banner > span { color: #527d3e; font-size: 11px; font-weight: 800; letter-spacing: .07em; text-transform: uppercase; }
.preview-banner strong { color: var(--ord-text); font-size: 15px; }
.preview-banner code { font-size: .9em; }
.preview-banner a { color: var(--ord-brand); font-size: 12px; font-weight: 700; text-decoration: none; }
.skill-flow { display: grid; grid-template-columns: 1fr 105px 1fr 125px 1fr; align-items: center; }
.skill-card { display: grid; min-height: 260px; grid-template-rows: 18px 52px 28px 1fr; align-content: start; gap: 11px; border: 1px solid var(--ord-border); border-radius: var(--ord-radius); background: var(--ord-card-bg); padding: 23px; }
.skill-card.primary { border: 2px solid var(--ord-brand-2); background: var(--ord-teal-soft); }
.skill-card.runtime { border: 2px solid var(--ord-consumer); background: var(--ord-consumer-soft); }
.skill-card.runtime small { color: var(--ord-consumer); }
.skill-card small { color: var(--ord-brand); font-size: 11px; font-weight: 750; letter-spacing: .05em; text-transform: uppercase; }
.skill-card strong { color: var(--ord-text); font-size: 22px; line-height: 1.12; }
.skill-card code { width: fit-content; border-radius: 4px; background: var(--ord-panel); color: var(--ord-brand-3); font-size: 12px; padding: 5px 8px; }
.skill-card span { grid-row: 4; color: var(--ord-muted); font-size: 13px; line-height: 1.4; }
.connection { display: flex; flex-direction: column; align-items: center; gap: 4px; color: var(--ord-faint); }
.connection span { font-size: 10px; font-weight: 700; text-transform: uppercase; }
.connection i { color: var(--ord-brand); font-size: 32px; font-style: normal; }
.dependency-row { display: grid; grid-template-columns: 1fr repeat(4, auto); align-items: center; gap: 10px; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: var(--ord-panel-soft); padding: 14px 17px; }
.dependency-row span { color: var(--ord-muted); font-size: 13px; }
.dependency-row b { border-radius: 999px; background: var(--ord-card-bg); color: var(--ord-text); font-size: 11px; padding: 7px 10px; }
</style>
