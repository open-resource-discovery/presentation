<template>
  <figure class="alignment-diagram" aria-label="Metadata integration with and without ORD alignment">
    <section class="mode unmanaged">
      <header>
        <span>Without a shared interface</span>
        <strong>Every connection needs its own adapter</strong>
      </header>

      <div class="network">
        <div class="nodes providers">
          <span>Provider</span>
          <span>Provider</span>
          <span>Provider</span>
        </div>
        <svg class="connections" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 16.667 C32 5,68 5,100 16.667" />
          <path d="M0 16.667 C30 14,70 48,100 50" />
          <path d="M0 16.667 C26 28,74 76,100 83.333" />
          <path d="M0 50 C30 46,70 18,100 16.667" />
          <path d="M0 50 C34 62,66 38,100 50" />
          <path d="M0 50 C30 54,70 82,100 83.333" />
          <path d="M0 83.333 C26 72,74 24,100 16.667" />
          <path d="M0 83.333 C30 78,70 52,100 50" />
          <path d="M0 83.333 C32 95,68 95,100 83.333" />
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
        <span>With one ORD interface</span>
        <strong>Aligned metadata, aggregated for discovery</strong>
      </header>

      <div class="standard-rail">One shared port for metadata exchange</div>
      <div class="flow">
        <div class="stack">
          <span>Provider</span>
          <span>Provider</span>
          <span>Provider</span>
        </div>

        <div class="arrow shared-port" aria-hidden="true">
          <span class="usb-c-port flow-port"><i></i></span>
        </div>

        <div class="aggregator">
          <span class="hub-icon" aria-hidden="true">
            <i></i><i></i><i></i>
          </span>
          <strong>ORD aggregator</strong>
          <small>collects aligned metadata<br />and serves one Discovery API</small>
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
  stroke-opacity: 0.82;
  stroke-width: 2;
  vector-effect: non-scaling-stroke;
}

.connections path:nth-child(1) { stroke: #008fd3; }
.connections path:nth-child(2) { stroke: #e76f51; }
.connections path:nth-child(3) { stroke: #7957d5; }
.connections path:nth-child(4) { stroke: #d39218; }
.connections path:nth-child(5) { stroke: #2a9d8f; }
.connections path:nth-child(6) { stroke: #ca4d72; }
.connections path:nth-child(7) { stroke: #5578b8; }
.connections path:nth-child(8) { stroke: #8b6f47; }
.connections path:nth-child(9) { stroke: #536b78; }

.standard-rail {
  position: absolute;
  top: 88px;
  left: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
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

.usb-c-port {
  display: inline-flex;
  width: 30px;
  height: 14px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border: 2px solid currentColor;
  border-radius: 999px;
}

.usb-c-port i {
  width: 15px;
  height: 3px;
  border-radius: 999px;
  background: currentColor;
  opacity: 0.7;
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
  transform: translateY(-50%);
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
  position: relative;
  height: 2px;
  margin: 0 -8px 0 0;
  background: var(--ord-brand-2);
}

.arrow.distribute { margin: 0 16px 0 -8px; }
.arrow.distribute::after { display: none; }

.flow-port {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 28px;
  height: 13px;
  transform: translate(-50%, -50%);
  background: var(--ord-card-bg);
  box-shadow: 0 0 0 5px var(--ord-card-bg);
  color: var(--ord-brand-3);
}

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

.hub-icon {
  position: relative;
  display: grid;
  width: 78px;
  height: 42px;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  align-items: end;
  border: 2px solid var(--ord-aggregator);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.72);
  padding: 0 8px 8px;
  box-shadow: 0 3px 0 rgba(133, 49, 174, 0.16);
}

.hub-icon::before {
  position: absolute;
  top: 8px;
  right: 9px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--ord-brand-2);
  box-shadow: 0 0 0 3px rgba(50, 188, 172, 0.16);
  content: "";
}

.hub-icon i {
  position: relative;
  display: block;
  height: 9px;
  border: 2px solid var(--ord-aggregator);
  border-radius: 999px;
  background: var(--ord-aggregator-soft);
}

.hub-icon i::after {
  position: absolute;
  top: 2px;
  right: 3px;
  left: 3px;
  height: 1px;
  border-radius: 999px;
  background: var(--ord-aggregator);
  content: "";
  opacity: 0.7;
}
</style>
