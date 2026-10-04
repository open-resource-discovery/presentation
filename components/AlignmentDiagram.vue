<template>
  <figure class="alignment-diagram" aria-label="Metadata integration with and without ORD alignment">
    <section class="mode unmanaged">
      <header>
        <span>Without alignment</span>
        <strong>Point-to-point metadata integration</strong>
      </header>

      <div class="network">
        <div class="nodes providers">
          <span>Provider</span>
          <span>Provider</span>
          <span>Provider</span>
        </div>
        <svg class="connections" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 16.667H100 M0 50H100 M0 83.333H100 M0 16.667L100 50 M0 16.667L100 83.333 M0 50L100 16.667 M0 50L100 83.333 M0 83.333L100 16.667 M0 83.333L100 50" />
        </svg>
        <div class="nodes consumers">
          <span>Consumer</span>
          <span>Consumer</span>
          <span>Consumer</span>
        </div>
      </div>
    </section>

    <section class="mode aligned">
      <header>
        <span>With ORD alignment</span>
        <strong>Shared metadata through an aggregator</strong>
      </header>

      <div class="standard-rail">Common description and discovery</div>
      <div class="flow">
        <div class="stack">
          <span>Provider</span>
          <span>Provider</span>
          <span>Provider</span>
        </div>

        <div class="arrow" aria-hidden="true"></div>

        <div class="aggregator">
          <span class="api-icon"></span>
          <strong>ORD aggregator</strong>
          <small>reads metadata and serves consumers</small>
        </div>

        <div class="arrow distribute" aria-hidden="true"></div>

        <div class="stack">
          <span>Consumer</span>
          <span>Consumer</span>
          <span>Consumer</span>
        </div>
      </div>
    </section>
  </figure>
</template>

<style scoped>
.alignment-diagram {
  display: grid;
  flex: 1;
  grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
  gap: 18px;
  margin: 0;
}

.mode {
  position: relative;
  min-height: 318px;
  overflow: hidden;
  border: 1px solid var(--ord-sep);
  border-radius: var(--ord-radius);
  background: var(--ord-card-bg);
  padding: 20px;
}

.mode header {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.mode header span {
  color: var(--ord-brand-3);
  font-family: var(--ord-font);
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
}

.mode header strong {
  color: var(--ord-text);
  font-size: 21px;
  line-height: 1.2;
}

.network {
  position: absolute;
  inset: 96px 24px 24px;
}

.nodes {
  position: absolute;
  top: 0;
  display: grid;
  height: 100%;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
}

.nodes.providers {
  left: 0;
}

.nodes.consumers {
  right: 0;
}

.nodes span,
.stack span {
  display: inline-flex;
  min-width: 114px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: var(--ord-text);
  font-size: 16px;
  font-weight: 680;
  padding: 9px 12px;
}

.nodes.providers span,
.stack:first-child span {
  border: 2px solid var(--ord-provider);
  background: var(--ord-provider-soft);
}

.nodes.consumers span,
.stack:last-child span {
  border: 2px solid var(--ord-consumer);
  background: var(--ord-consumer-soft);
}

.connections {
  position: absolute;
  top: 0;
  left: 114px;
  width: calc(100% - 228px);
  height: 100%;
  overflow: visible;
}

.connections path {
  fill: none;
  stroke: var(--ord-faint);
  stroke-opacity: 0.5;
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
}

.standard-rail {
  position: absolute;
  top: 88px;
  left: 20px;
  right: 20px;
  border: 1px solid rgba(50, 188, 172, 0.42);
  border-radius: 999px;
  background: var(--ord-teal-soft);
  color: var(--ord-brand-3);
  font-family: var(--ord-font);
  font-size: 14px;
  font-weight: 700;
  padding: 10px 16px;
  text-align: center;
}

.flow {
  position: absolute;
  inset: 138px 24px 24px;
  display: grid;
  grid-template-columns: 110px minmax(24px, 1fr) minmax(160px, 1.3fr) minmax(24px, 1fr) 110px;
  gap: 8px;
  align-items: center;
}

.stack {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 16px 0;
}

.stack span { position: relative; min-width: 0; height: 44px; }
.stack:first-child::after, .stack:last-child::before {
  position: absolute;
  top: 38px;
  bottom: 38px;
  border-left: 2px solid var(--ord-brand-2);
  content: "";
}
.stack:first-child::after { right: -8px; }
.stack:last-child::before { left: -24px; }
.stack:first-child span::after, .stack:last-child span::before {
  position: absolute;
  top: 50%;
  width: 8px;
  height: 2px;
  background: var(--ord-brand-2);
  content: "";
}
.stack:first-child span::after { left: 100%; }
.stack:last-child span::before { right: 100%; width: 24px; }
.stack:last-child span::after {
  position: absolute;
  top: 50%;
  left: -8px;
  transform: translateY(-50%);
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 8px solid var(--ord-brand-2);
  content: "";
}

.arrow {
  height: 2px;
  margin: 0 -8px 0 0;
  background: var(--ord-brand-2);
}

.arrow.distribute { margin: 0 16px 0 -8px; }
.arrow.distribute::after { display: none; }

.arrow::after {
  display: block;
  width: 0;
  height: 0;
  margin-left: auto;
  margin-top: -5px;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 9px solid var(--ord-brand-2);
  content: "";
}

.aggregator {
  display: flex;
  min-height: 130px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 2px solid var(--ord-aggregator);
  border-radius: var(--ord-radius);
  background: var(--ord-aggregator-soft);
  padding: 14px;
  text-align: center;
}

.aggregator strong {
  color: var(--ord-text);
  font-size: 20px;
  line-height: 1.1;
}

.aggregator small {
  color: var(--ord-muted);
  font-size: 13px;
  line-height: 1.25;
}

.api-icon {
  width: 34px;
  height: 34px;
  border: 3px solid var(--ord-aggregator);
  border-radius: 50%;
  box-shadow:
    18px 0 0 -8px var(--ord-aggregator),
    9px 16px 0 -8px var(--ord-aggregator);
}
</style>
