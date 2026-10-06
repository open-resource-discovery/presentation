<script setup lang="ts">
import graph from '../data/diagrams/unified-metadata.json'

const nodes = graph.nodes
const links = graph.links.map(({ from, to, kind }) => ({
  from: nodes.find(node => node.id === from)!,
  to: nodes.find(node => node.id === to)!,
  kind,
}))
</script>

<template>
  <figure class="unified-metadata-diagram" aria-label="Existing system, API, event, data, and agent metadata feeds one ORD aggregator. The aggregator links resources with Entity Types and Taxonomy in one graph and serves consumers through one Discovery API.">
    <div class="unified-lanes">
      <section class="source-lane" aria-label="Existing metadata sources">
        <header class="lane-heading">
          <span>Many existing sources</span>
          <h3>Inventories &amp; catalogs</h3>
        </header>
        <div class="source-list">
          <div class="source-item systems"><strong>Systems &amp; services</strong><span>Inventory · service discovery</span></div>
          <div class="source-item apis"><strong>APIs</strong><span>OpenAPI definitions</span></div>
          <div class="source-item events"><strong>Events</strong><span>AsyncAPI definitions</span></div>
          <div class="source-item data"><strong>Data resources</strong><span>Catalogs &amp; definitions</span></div>
          <div class="source-item agents"><strong>Agents</strong><span>A2A · MCP</span></div>
        </div>
      </section>

      <div class="metadata-flow" aria-hidden="true"><span></span></div>

      <section class="graph-service" aria-label="One ORD aggregator connects the metadata as a graph">
        <header class="service-heading">
          <span class="service-kicker">One ORD aggregator</span>
          <h3>Connected metadata graph</h3>
        </header>
        <div class="graph-stage">
          <svg class="graph-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <line v-for="link in links" :key="`${link.from.id}-${link.to.id}`" :x1="link.from.x" :y1="link.from.y" :x2="link.to.x" :y2="link.to.y" :class="`${link.kind}-link`" />
          </svg>
          <div v-for="node in nodes" :key="node.id" class="graph-node" :class="`${node.id}-node`" :style="{ left: `${node.x}%`, top: `${node.y}%`, width: `${node.width}px` }"><strong>{{ node.label }}</strong><span v-if="node.detail">{{ node.detail }}</span></div>
        </div>
        <p class="graph-caption">Resources · shared semantics · taxonomy</p>
      </section>

      <div class="discovery-flow" aria-hidden="true"><span></span></div>

      <section class="consumer-lane" aria-label="Consumers use a single ORD Discovery API">
        <header class="lane-heading">
          <span>One interface</span>
          <h3>Discovery API</h3>
        </header>
        <div class="api-endpoint"><span class="api-mark" aria-hidden="true">API</span><strong>ORD Discovery API</strong><small>One connected view</small></div>
        <div class="consumer-list">
          <span>Catalogs</span>
          <span>Developer tools</span>
          <span>Automation</span>
          <span>AI agents</span>
        </div>
      </section>
    </div>
    <figcaption>ORD connects resource descriptions and their relationships while detailed contracts remain in their existing standards.</figcaption>
  </figure>
</template>

<style scoped>
.unified-metadata-diagram {
  display: flex;
  flex: 1;
  min-height: 0;
  flex-direction: column;
  gap: 16px;
  margin: 0;
}

.unified-lanes {
  display: grid;
  flex: 1;
  min-height: 0;
  grid-template-columns: minmax(230px, .9fr) 34px minmax(0, 1.6fr) 34px minmax(200px, .8fr);
  gap: 12px;
  align-items: stretch;
}

.source-lane,
.graph-service,
.consumer-lane {
  min-width: 0;
  border: 1px solid var(--ord-sep);
  border-radius: var(--ord-radius);
  background: var(--ord-card-bg);
  padding: 20px;
}

.source-lane,
.consumer-lane {
  display: flex;
  flex-direction: column;
}

.lane-heading span,
.service-kicker {
  color: var(--ord-muted);
  font-size: 12px;
  font-weight: 750;
  letter-spacing: .055em;
  text-transform: uppercase;
}

.lane-heading h3,
.service-heading h3 {
  margin-top: 5px;
  color: var(--ord-text);
  font-size: 21px;
  line-height: 1.18;
}

.source-list {
  display: grid;
  flex: 1;
  min-height: 0;
  grid-template-rows: repeat(5, minmax(48px, 1fr));
  gap: 9px;
  margin-top: 16px;
}

.source-item {
  display: flex;
  min-width: 0;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  border: 1px solid var(--ord-sep);
  border-left: 4px solid var(--ord-accent-sky);
  border-radius: 5px;
  background: var(--ord-panel);
  padding: 7px 10px;
}

.source-item strong { color: var(--ord-text); font-size: 15px; line-height: 1.15; }
.source-item span { color: var(--ord-muted); font-size: 11px; line-height: 1.2; }
.source-item.systems { border-left-color: var(--ord-accent-lime); }
.source-item.apis { border-left-color: var(--ord-accent-sky); }
.source-item.events { border-left-color: var(--ord-accent-teal); }
.source-item.data { border-left-color: var(--ord-accent-violet); }
.source-item.agents { border-left-color: var(--ord-accent-coral); }

.metadata-flow,
.discovery-flow {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.metadata-flow span,
.discovery-flow span {
  position: relative;
  width: 100%;
  height: 2px;
  background: var(--ord-provider);
}

.metadata-flow span::after,
.discovery-flow span::after {
  position: absolute;
  top: -5px;
  right: -1px;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 8px solid var(--ord-provider);
  content: "";
}

.graph-service {
  display: flex;
  min-height: 0;
  flex-direction: column;
  border-top: 5px solid var(--ord-aggregator);
  background: var(--ord-aggregator-soft);
  padding: 18px 20px 14px;
}

.service-kicker { color: var(--ord-aggregator); }
.service-heading h3 { font-size: 23px; }

.graph-stage {
  position: relative;
  flex: 1;
  min-height: 220px;
  margin: 10px 0 4px;
}

.graph-links { position: absolute; inset: 0; width: 100%; height: 100%; }
.graph-links line { stroke-width: 1.8; stroke-linecap: round; vector-effect: non-scaling-stroke; }
.graph-links .system-link { stroke: var(--ord-muted); opacity: .42; }
.graph-links .semantic-link { stroke: var(--ord-brand); opacity: .65; }
.graph-links .context-link { stroke: var(--ord-accent-violet); opacity: .55; }

.graph-node {
  position: absolute;
  z-index: 1;
  display: flex;
  min-height: 46px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--ord-sep);
  border-radius: 999px;
  background: var(--ord-panel);
  padding: 6px 8px;
  text-align: center;
  transform: translate(-50%, -50%);
}

.graph-node strong { color: var(--ord-text); font-size: 15px; line-height: 1.15; }
.graph-node span { color: var(--ord-muted); font-size: 11px; line-height: 1.15; }
.system-node { border-color: var(--ord-accent-lime); }
.api-node { border-color: var(--ord-accent-sky); }
.event-node { border-color: var(--ord-accent-teal); }
.data-node { border-color: var(--ord-accent-violet); }
.agent-node { border-color: var(--ord-accent-coral); }
.entity-node { border: 2px solid var(--ord-brand); background: var(--ord-accent-teal-bg); }
.taxonomy-node { border: 2px solid var(--ord-accent-violet); background: var(--ord-panel); }

.graph-caption {
  color: var(--ord-muted);
  font-size: 12px;
  line-height: 1.25;
  text-align: center;
}

.consumer-lane { border-top: 5px solid var(--ord-consumer); padding-top: 16px; }
.consumer-lane .lane-heading span { color: var(--ord-consumer); }

.api-endpoint {
  display: flex;
  min-height: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 14px 0 10px;
  border: 1px solid color-mix(in srgb, var(--ord-aggregator) 38%, var(--ord-sep));
  border-radius: 7px;
  background: var(--ord-aggregator-soft);
  text-align: center;
}

.api-mark {
  border: 1px solid var(--ord-aggregator);
  border-radius: 4px;
  color: var(--ord-aggregator);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .04em;
  padding: 3px 6px;
}

.api-endpoint strong { color: var(--ord-text); font-size: 15px; }
.api-endpoint small { color: var(--ord-muted); font-size: 11px; }

.consumer-list {
  position: relative;
  display: flex;
  flex: 1;
  min-height: 0;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  padding-left: 14px;
}

.consumer-list::before {
  position: absolute;
  top: 16px;
  bottom: 16px;
  left: 3px;
  width: 2px;
  background: var(--ord-consumer);
  content: "";
}

.consumer-list span {
  position: relative;
  display: flex;
  min-height: 38px;
  align-items: center;
  border: 1px solid color-mix(in srgb, var(--ord-consumer) 28%, var(--ord-sep));
  border-radius: 5px;
  background: var(--ord-panel);
  color: var(--ord-text);
  font-size: 14px;
  font-weight: 650;
  padding: 7px 10px;
}

.consumer-list span::before {
  position: absolute;
  top: calc(50% - 1px);
  left: -12px;
  width: 12px;
  height: 2px;
  background: var(--ord-consumer);
  content: "";
}

figcaption { color: var(--ord-muted); font-size: 14px; line-height: 1.3; text-align: center; }
</style>
