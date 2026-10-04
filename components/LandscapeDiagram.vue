<script setup>
import { useId } from 'vue'

const diagramId = useId()
const relationMarker = `${diagramId}-entity-type`
const dependencyMarker = `${diagramId}-dependency`
</script>

<template>
  <figure class="landscape-diagram" aria-label="Order fulfillment resource graph across Orders, Fulfillment, and Shipping Providers">
    <svg viewBox="0 0 1184 430" role="img" aria-label="A Fulfillment Agent depends on an Order Created Event, the Orders API, and the Shipment API, with Order and Shipment Entity Types providing domain context">
      <desc>The Fulfillment Agent declares Integration Dependencies on the Order Created Event and Orders API from the Orders Provider, and the Shipment API from the Shipping Provider. These intermediate dependency resources are summarized by the coral edges, pointing from the Agent to required resources. The Agent references Order through relatedEntityTypes; the Event and Orders API expose Order through exposedEntityTypes. The Shipment API exposes Shipment. Gray edges point to these Entity Types. Runtime event handling triggers the Agent, which reads the order and creates a shipment; ORD describes the resources and dependencies, not the runtime trigger configuration.</desc>
      <defs>
        <marker :id="relationMarker" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path class="relation-head" d="M0 0L10 5L0 10Z" /></marker>
        <marker :id="dependencyMarker" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path class="dependency-head" d="M0 0L10 5L0 10Z" /></marker>
      </defs>

      <path class="dependency" d="M440 75H176V170" :marker-end="`url(#${dependencyMarker})`" />
      <path class="dependency" d="M744 108H800V223H856" :marker-end="`url(#${dependencyMarker})`" />
      <path class="dependency" d="M744 75H856" :marker-end="`url(#${dependencyMarker})`" />
      <text class="dependency-label" x="308" y="61" text-anchor="middle">triggered by</text>
      <text class="dependency-label" x="810" y="151">read order</text>
      <text class="dependency-label" x="800" y="40" text-anchor="middle"><tspan x="800">create</tspan><tspan x="800" dy="19">shipment</tspan></text>

      <path class="relation" d="M592 126V304" :marker-end="`url(#${relationMarker})`" />
      <path class="relation" d="M328 246L440 340" :marker-end="`url(#${relationMarker})`" />
      <path class="relation" d="M856 246L744 340" :marker-end="`url(#${relationMarker})`" />
      <path class="relation" d="M1160 75H1176V374H1160" :marker-end="`url(#${relationMarker})`" />
      <text class="relation-label" x="606" y="236">works with</text>

      <g class="resource-node" transform="translate(440 20)">
        <rect width="304" height="106" rx="8" />
        <text class="kind" x="20" y="27">Agent</text>
        <text class="name" x="20" y="59">Fulfillment Agent</text>
        <text class="provider" x="20" y="86">Fulfillment · Provider</text>
      </g>
      <g class="resource-node" transform="translate(24 170)">
        <rect width="304" height="106" rx="8" />
        <text class="kind" x="20" y="27">Event Resource</text>
        <text class="name" x="20" y="59">Order Created</text>
        <text class="provider" x="20" y="86">Orders · Provider</text>
      </g>
      <g class="resource-node" transform="translate(856 170)">
        <rect width="304" height="106" rx="8" />
        <text class="kind" x="20" y="27">API Resource</text>
        <text class="name" x="20" y="59">Orders API</text>
        <text class="provider" x="20" y="86">Orders · Provider</text>
      </g>
      <g class="resource-node" transform="translate(856 20)">
        <rect width="304" height="106" rx="8" />
        <text class="kind" x="20" y="27">API Resource</text>
        <text class="name" x="20" y="59">Shipment API</text>
        <text class="provider" x="20" y="86">Shipping · Provider</text>
      </g>
      <g class="taxonomy-node" transform="translate(440 304)">
        <rect width="304" height="108" rx="8" />
        <text class="kind" x="152" y="28" text-anchor="middle">Shared Entity Type</text>
        <text class="entity-name" x="152" y="63" text-anchor="middle">Order</text>
        <text class="detail" x="152" y="89" text-anchor="middle">Common business semantics</text>
      </g>
      <g class="taxonomy-node" transform="translate(856 330)">
        <rect width="304" height="82" rx="8" />
        <text class="kind" x="152" y="28" text-anchor="middle">Entity Type</text>
        <text class="entity-name" x="152" y="61" text-anchor="middle">Shipment</text>
      </g>
    </svg>
    <figcaption>Agent dependencies point to required resources; <a href="https://open-resource-discovery.org/spec-v1/concepts/grouping-and-bundling#entity-type" target="_blank" rel="noopener noreferrer">Entity Types</a> give domain context.</figcaption>
  </figure>
</template>

<style scoped>
.landscape-diagram { display: flex; flex: 1; min-height: 0; flex-direction: column; justify-content: center; gap: 8px; margin: 0; padding-bottom: 32px; }
svg { display: block; width: 100%; min-height: 0; flex: 1; }
text { fill: var(--ord-text); font-family: var(--ord-font); }
.resource-node rect { fill: var(--ord-provider-soft); stroke: var(--ord-provider); stroke-width: 1.5; }
.taxonomy-node rect { fill: var(--ord-card-bg); stroke: var(--ord-border); stroke-width: 1.5; }
.kind { fill: var(--ord-muted); font-size: 17px; font-weight: 650; }
.name { font-size: 25px; font-weight: 750; }
.entity-name { font-size: 27px; font-weight: 750; }
.provider { fill: var(--ord-provider); font-size: 17px; font-weight: 650; }
.detail { fill: var(--ord-muted); font-size: 17px; }
.relation, .dependency { fill: none; stroke-width: 2; stroke-linejoin: round; }
.relation { stroke: var(--ord-faint); }
.relation-head { fill: var(--ord-faint); }
.relation-label { fill: var(--ord-muted); font-size: 17px; }
.dependency { stroke: #c6503b; }
.dependency-head { fill: #c6503b; }
.dependency-label { fill: #ac4432; font-size: 17px; font-weight: 650; }
figcaption { color: var(--ord-muted); font-size: 17px; text-align: center; }
</style>
