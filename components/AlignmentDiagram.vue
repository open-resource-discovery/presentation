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
        <div class="line line-a"></div>
        <div class="line line-b"></div>
        <div class="line line-c"></div>
        <div class="line line-d"></div>
        <div class="line line-e"></div>
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
        <strong>Aligned standard plus metadata aggregator</strong>
      </header>

      <div class="standard-rail">metadata description + discovery</div>
      <div class="flow">
        <div class="stack">
          <span>Provider</span>
          <span>Provider</span>
          <span>Provider</span>
        </div>

        <div class="arrow"></div>

        <div class="aggregator">
          <span class="api-icon"></span>
          <strong>ORD aggregator</strong>
          <small>reads metadata and serves consumers</small>
        </div>

        <div class="arrow"></div>

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
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
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
  border: 1px solid rgba(88, 166, 255, 0.68);
  background: var(--ord-sky-soft);
}

.nodes.consumers span,
.stack:last-child span {
  border: 1px solid rgba(180, 239, 152, 0.54);
  background: var(--ord-lime-soft);
}

.line {
  position: absolute;
  left: 104px;
  width: calc(100% - 208px);
  height: 1px;
  transform-origin: left center;
  background: rgba(152, 152, 159, 0.48);
}

.line-a {
  top: 10%;
  transform: rotate(0deg);
}

.line-b {
  top: 15%;
  transform: rotate(24deg);
}

.line-c {
  top: 50%;
  transform: rotate(0deg);
}

.line-d {
  top: 82%;
  transform: rotate(-24deg);
}

.line-e {
  top: 88%;
  transform: rotate(0deg);
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
  grid-template-columns: 116px 1fr 188px 1fr 116px;
  gap: 12px;
  align-items: center;
}

.stack {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.arrow {
  height: 2px;
  background: linear-gradient(90deg, rgba(50, 188, 172, 0.24), var(--ord-brand-2));
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
  border: 1px solid var(--ord-teal-line);
  border-radius: var(--ord-radius);
  background: var(--ord-teal-soft);
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
  border: 3px solid var(--ord-brand-3);
  border-radius: 50%;
  box-shadow:
    18px 0 0 -8px var(--ord-brand-3),
    9px 16px 0 -8px var(--ord-brand-3);
}
</style>
