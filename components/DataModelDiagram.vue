<template>
  <figure class="data-model-diagram" aria-label="ORD high-level information model">
    <section class="model-column system">
      <header>
        <span>Context</span>
        <strong>System domain</strong>
      </header>
      <div class="item">System Instance</div>
      <div class="item">System Version</div>
      <div class="item">System Type</div>
    </section>

    <section class="model-column resources">
      <header>
        <span>What is exposed or required</span>
        <strong>Resources &amp; Capabilities</strong>
      </header>
      <div class="item-grid">
        <div class="item">APIs</div>
        <div class="item">Events</div>
        <div class="item">Data Products</div>
        <div class="item">Capabilities</div>
        <div class="item agent">Agents <small>beta</small></div>
        <div class="item wide">Integration Dependencies</div>
      </div>
    </section>

    <section class="model-column taxonomy">
      <header>
        <span>How it is understood</span>
        <strong>Taxonomy</strong>
      </header>
      <div class="item">Package &amp; Product</div>
      <div class="item">Entity Type</div>
      <div class="item">Group</div>
      <div class="item">Consumption Bundle</div>
    </section>

    <figcaption>
      <strong>ORD Document</strong>
      <span>Stable IDs, lifecycle, visibility, definitions, and relationships connect the three parts.</span>
    </figcaption>
  </figure>
</template>

<style scoped>
.data-model-diagram {
  display: grid;
  width: min(100%, 620px);
  min-height: 500px;
  grid-template-columns: 0.8fr 1.35fr 0.95fr;
  grid-template-rows: 1fr auto;
  gap: 12px;
  margin: 0;
}

.model-column {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 9px;
  border: 1px solid var(--ord-sep);
  border-top: 4px solid var(--ord-sky);
  border-radius: var(--ord-radius);
  background: var(--ord-card-bg);
  padding: 18px 14px;
}

.model-column.resources {
  border-top-color: var(--ord-brand-2);
  background: var(--ord-teal-soft);
}

.model-column.taxonomy {
  border-top-color: #9b7cff;
}

.model-column header {
  display: flex;
  min-height: 66px;
  flex-direction: column;
  gap: 6px;
}

.model-column header span {
  color: var(--ord-faint);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.model-column header strong {
  color: var(--ord-text);
  font-size: 18px;
  line-height: 1.15;
}

.item-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.item {
  display: flex;
  min-height: 43px;
  align-items: center;
  border: 1px solid var(--ord-border);
  border-radius: 6px;
  background: var(--ord-pill-bg);
  color: var(--ord-text);
  font-size: 13px;
  font-weight: 650;
  line-height: 1.2;
  padding: 9px 10px;
}

.item.wide {
  grid-column: 1 / -1;
}

.item.agent {
  gap: 5px;
  border-color: #9b7cff;
}

.item.agent small {
  color: #6f4ad6;
  font-size: 8px;
  font-weight: 750;
  text-transform: uppercase;
}

figcaption {
  display: flex;
  grid-column: 1 / -1;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border: 1px solid var(--ord-teal-line);
  border-radius: var(--ord-radius);
  background: var(--ord-teal-soft);
  padding: 15px 18px;
}

figcaption strong {
  color: var(--ord-text);
  font-size: 18px;
  white-space: nowrap;
}

figcaption span {
  color: var(--ord-muted);
  font-size: 13px;
  line-height: 1.35;
  text-align: right;
}
</style>
