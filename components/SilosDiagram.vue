<template>
  <figure class="silos-diagram" aria-label="Resource metadata split across specialized catalogs">
    <div class="format-row">
      <span>OpenAPI</span>
      <span>AsyncAPI</span>
      <span>A2A</span>
      <span>MCP</span>
    </div>

    <div class="silo-grid">
      <section class="silo api"><small>Catalog</small><strong>APIs</strong><i></i><i></i><i></i></section>
      <section class="silo event"><small>Catalog</small><strong>Events</strong><i></i><i></i></section>
      <section class="silo data"><small>Catalog</small><strong>Data</strong><i></i><i></i><i></i></section>
      <section class="silo agent"><small>Catalog</small><strong>Agents</strong><i></i><i></i></section>
    </div>

    <div class="gap">
      <strong>No shared landscape view</strong>
      <span>inventory · context · relationships · runtime state</span>
    </div>
  </figure>
</template>

<style scoped>
.silos-diagram {
  display: flex;
  width: min(100%, 590px);
  min-height: 490px;
  flex-direction: column;
  justify-content: center;
  gap: 26px;
  margin: 0;
  border: 1px solid var(--ord-sep);
  border-radius: var(--ord-radius);
  background: var(--ord-diagram-bg);
  padding: 30px;
}

.format-row {
  display: flex;
  justify-content: center;
  gap: 9px;
}

.format-row span {
  border: 1px solid var(--ord-border);
  border-radius: 999px;
  background: var(--ord-pill-bg);
  color: var(--ord-muted);
  font-family: var(--ord-font);
  font-size: 13px;
  font-weight: 700;
  padding: 8px 11px;
}

.silo-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.silo-grid::before {
  position: absolute;
  top: -26px;
  left: 10%;
  width: 80%;
  height: 22px;
  border-right: 1px dashed var(--ord-border);
  border-bottom: 1px dashed var(--ord-border);
  border-left: 1px dashed var(--ord-border);
  content: "";
}

.silo {
  display: flex;
  min-height: 190px;
  flex-direction: column;
  gap: 8px;
  border: 1px solid var(--ord-sep);
  border-top: 4px solid var(--ord-sky);
  border-radius: var(--ord-radius);
  background: var(--ord-panel-soft);
  padding: 18px 14px;
}

.silo.event { border-top-color: var(--ord-brand-2); }
.silo.data { border-top-color: #9b7cff; }
.silo.agent { border-top-color: var(--ord-coral); }

.silo small {
  color: var(--ord-faint);
  font-family: var(--ord-font);
  font-size: 11px;
  text-transform: uppercase;
}

.silo strong {
  margin-bottom: 8px;
  color: var(--ord-text);
  font-size: 18px;
}

.silo i {
  display: block;
  height: 21px;
  border: 1px solid var(--ord-border);
  border-radius: 4px;
  background: var(--ord-pill-bg);
}

.gap {
  display: flex;
  flex-direction: column;
  gap: 6px;
  border: 1px dashed rgba(247, 129, 102, 0.72);
  border-radius: var(--ord-radius);
  background: var(--ord-coral-soft);
  padding: 16px 18px;
  text-align: center;
}

.gap strong { color: var(--ord-text); font-size: 19px; }
.gap span { color: var(--ord-muted); font-family: var(--ord-font); font-size: 13px; }
</style>
