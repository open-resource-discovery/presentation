<template>
  <figure class="data-model-diagram" aria-label="ORD high-level data model">
    <div class="frame-label top">Packages</div>
    <div class="frame-label bottom">Consumption Bundles</div>

    <div class="graph">
      <span class="edge edge-api"></span>
      <span class="edge edge-events"></span>
      <span class="edge edge-entity"></span>
      <span class="edge edge-data"></span>
      <span class="edge edge-dependencies"></span>
      <span class="edge edge-capabilities"></span>

      <div class="node document">
        <strong>ORD Document</strong>
        <span>shared context</span>
      </div>
      <div class="node api">APIs</div>
      <div class="node events">Events</div>
      <div class="node entity">Entity Types</div>
      <div class="node data">Data Products</div>
      <div class="node dependencies">Integration Dependencies</div>
      <div class="node capabilities">Capabilities</div>
    </div>

    <div class="legend-row">
      <span>taxonomy attributes</span>
      <span>relations</span>
      <span>extensibility attributes</span>
    </div>
  </figure>
</template>

<style scoped>
.data-model-diagram {
  position: relative;
  width: min(100%, 600px);
  aspect-ratio: 1.1;
  margin: 0;
  border: 1px solid var(--ord-sep);
  border-radius: var(--ord-radius);
  background: var(--ord-diagram-bg);
  padding: 34px;
}

.data-model-diagram::before,
.data-model-diagram::after {
  position: absolute;
  left: 30px;
  right: 30px;
  border: 1px dashed rgba(152, 152, 159, 0.38);
  border-radius: var(--ord-radius);
  content: "";
}

.data-model-diagram::before {
  top: 45px;
  bottom: 82px;
}

.data-model-diagram::after {
  top: 96px;
  bottom: 132px;
}

.frame-label {
  position: absolute;
  left: 48px;
  z-index: 2;
  background: var(--ord-panel);
  color: var(--ord-muted);
  font-family: var(--ord-mono);
  font-size: 13px;
  font-weight: 700;
  padding: 0 10px;
  text-transform: uppercase;
}

.frame-label.top {
  top: 37px;
}

.frame-label.bottom {
  bottom: 124px;
}

.graph {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
}

.node {
  position: absolute;
  z-index: 2;
  display: inline-flex;
  min-width: 118px;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(50, 188, 172, 0.58);
  border-radius: 999px;
  background: var(--ord-pill-bg);
  color: var(--ord-text);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.12;
  padding: 13px 17px;
  text-align: center;
}

.document {
  top: 42%;
  left: 50%;
  min-width: 168px;
  min-height: 96px;
  flex-direction: column;
  gap: 5px;
  transform: translate(-50%, -50%);
  border-color: rgba(247, 129, 102, 0.72);
  border-radius: var(--ord-radius);
  background: var(--ord-teal-soft);
  border-color: var(--ord-teal-line);
}

.document strong {
  color: var(--ord-text);
  font-size: 20px;
}

.document span {
  color: var(--ord-muted);
  font-size: 14px;
  font-weight: 500;
}

.api {
  top: 9%;
  left: 8%;
  border-color: rgba(88, 166, 255, 0.72);
  background: var(--ord-sky-soft);
}

.events {
  top: 9%;
  right: 8%;
  border-color: rgba(88, 166, 255, 0.72);
  background: var(--ord-sky-soft);
}

.entity {
  top: 40%;
  left: 3%;
}

.data {
  top: 40%;
  right: 3%;
}

.dependencies {
  bottom: 23%;
  left: 10%;
  border-color: rgba(247, 129, 102, 0.72);
  background: var(--ord-coral-soft);
}

.capabilities {
  right: 10%;
  bottom: 23%;
}

.edge {
  position: absolute;
  z-index: 0;
  display: block;
  height: 2px;
  transform-origin: left center;
  background: linear-gradient(90deg, rgba(50, 188, 172, 0.18), var(--ord-teal-line));
}

.edge-api {
  top: 33%;
  left: 28%;
  width: 150px;
  transform: rotate(38deg);
}

.edge-events {
  top: 33%;
  right: 28%;
  width: 150px;
  transform: rotate(142deg);
}

.edge-entity {
  top: 49%;
  left: 24%;
  width: 135px;
  transform: rotate(0deg);
}

.edge-data {
  top: 49%;
  right: 24%;
  width: 135px;
  transform: rotate(180deg);
}

.edge-dependencies {
  bottom: 33%;
  left: 26%;
  width: 146px;
  transform: rotate(-35deg);
}

.edge-capabilities {
  right: 26%;
  bottom: 33%;
  width: 146px;
  transform: rotate(215deg);
}

.legend-row {
  position: absolute;
  left: 34px;
  right: 34px;
  bottom: 30px;
  z-index: 2;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.legend-row span {
  border: 1px solid var(--ord-sep);
  border-radius: 999px;
  background: var(--ord-pill-bg);
  color: var(--ord-muted);
  font-family: var(--ord-mono);
  font-size: 12px;
  font-weight: 700;
  padding: 8px 10px;
  text-transform: uppercase;
  white-space: nowrap;
}
</style>
