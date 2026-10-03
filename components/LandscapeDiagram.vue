<script setup>
import { useId } from 'vue'
const id = useId()
const dependencyMarker = `${id}-dependency`
const metadataMarker = `${id}-metadata`
const discoveryMarker = `${id}-discovery`
</script>

<template>
  <figure class="landscape-diagram" aria-label="An aggregator connects a Fulfillment dependency to the Orders API, its OpenAPI definition and Order Entity Type">
    <svg viewBox="0 0 1136 430" role="img" aria-label="Connected Order and Fulfillment metadata graph">
      <desc>Fulfillment declares an Integration Dependency referencing the Orders API on the Order Provider. The Orders API links to an OpenAPI definition and an Order Entity Type. An aggregator serves this connected metadata to consumers through its own Discovery API. Edges show metadata relationships, not runtime calls.</desc>
      <defs>
        <marker :id="dependencyMarker" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path class="dependency-head" d="M0 0L10 5L0 10Z" /></marker>
        <marker :id="metadataMarker" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="metadata-head" d="M0 0L10 5L0 10Z" /></marker>
        <marker :id="discoveryMarker" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="discovery-head" d="M0 0L10 5L0 10Z" /></marker>
      </defs>

      <rect class="aggregator-frame" x="1" y="1" width="1134" height="344" rx="8" />
      <text class="view-title" x="24" y="32">ORD Aggregator · connected metadata view</text>

      <rect class="provider-frame" x="24" y="55" width="412" height="270" rx="8" />
      <rect class="provider-frame" x="682" y="55" width="430" height="270" rx="8" />
      <text class="provider-title" x="46" y="87">Fulfillment system · Provider</text>
      <text class="provider-title" x="704" y="87">Order system · Provider</text>

      <path class="dependency-edge" d="M414 163H704" :marker-end="`url(#${dependencyMarker})`" />
      <text class="edge-label" x="558" y="145" text-anchor="middle">references ORD ID</text>
      <path class="metadata-edge" d="M794 205V246" :marker-end="`url(#${metadataMarker})`" />
      <path class="metadata-edge" d="M1000 205V246" :marker-end="`url(#${metadataMarker})`" />

      <g class="dependency-node" transform="translate(46 121)">
        <rect width="368" height="84" rx="8" />
        <text class="kind" x="18" y="27">Integration Dependency</text>
        <text class="name" x="18" y="60">Read orders</text>
      </g>
      <text class="scenario" x="46" y="257">Retrieve an order</text>
      <text class="detail" x="46" y="284">before preparing a shipment.</text>

      <g class="api-node" transform="translate(704 121)">
        <rect width="386" height="84" rx="8" />
        <text class="kind" x="18" y="27">API Resource · REST</text>
        <text class="name" x="18" y="60">Orders API</text>
      </g>
      <rect class="label-background" x="699" y="216" width="190" height="24" />
      <rect class="label-background" x="900" y="216" width="192" height="24" />
      <text class="relation-label" x="794" y="234" text-anchor="middle">resourceDefinitions</text>
      <text class="relation-label" x="1000" y="234" text-anchor="middle">exposedEntityTypes</text>
      <g class="definition-node" transform="translate(704 246)">
        <rect width="200" height="60" rx="8" />
        <text class="small-name" x="15" y="25">OpenAPI</text>
        <text class="detail" x="15" y="47">/orders/openapi.json</text>
      </g>
      <g class="taxonomy-node" transform="translate(910 246)">
        <rect width="180" height="60" rx="8" />
        <text class="small-name" x="15" y="25">Order</text>
        <text class="detail" x="15" y="47">Entity Type</text>
      </g>

      <path class="discovery-edge" d="M568 345V374" :marker-end="`url(#${discoveryMarker})`" />
      <text class="discovery-label" x="588" y="367">Discovery API · aggregator's own contract</text>
      <rect class="consumer-frame" x="1" y="374" width="1134" height="54" rx="8" />
      <text class="consumer-title" x="568" y="408" text-anchor="middle">Consumers: catalog · developer tools · automation · AI</text>
    </svg>
    <figcaption>Edges describe metadata relationships; ORD does not record the runtime call between these systems.</figcaption>
  </figure>
</template>

<style scoped>
.landscape-diagram { display: flex; flex: 1; min-height: 0; flex-direction: column; justify-content: center; gap: 8px; margin: 0; }
svg { display: block; width: 100%; min-height: 0; flex: 1; }
text { fill: var(--ord-text); font-family: var(--ord-font); font-size: 18px; }
.aggregator-frame { fill: var(--ord-aggregator-soft); stroke: var(--ord-aggregator); stroke-width: 2; }
.provider-frame { fill: var(--ord-provider-soft); stroke: var(--ord-provider); stroke-width: 1.5; }
.view-title { fill: var(--ord-aggregator); font-size: 20px; font-weight: 750; }
.provider-title { fill: var(--ord-provider); font-size: 20px; font-weight: 750; }
.dependency-node rect, .api-node rect, .definition-node rect, .taxonomy-node rect { fill: var(--ord-pill-bg); stroke: var(--ord-border); stroke-width: 1.5; }
.dependency-node rect { stroke: var(--ord-coral); stroke-width: 2; }
.api-node rect { stroke: var(--ord-provider); }
.taxonomy-node rect { stroke: var(--ord-faint); stroke-dasharray: 5 4; }
.kind { fill: var(--ord-muted); font-size: 16px; font-weight: 650; }
.name { font-size: 25px; font-weight: 750; }
.scenario { font-size: 22px; font-weight: 650; }
.detail { fill: var(--ord-muted); font-size: 16px; }
.small-name { font-size: 18px; font-weight: 700; }
.taxonomy-node .small-name { font-size: 20px; }
.dependency-edge, .metadata-edge, .discovery-edge { fill: none; stroke-width: 2; }
.dependency-edge { stroke: #c6503b; }
.metadata-edge { stroke: var(--ord-faint); }
.discovery-edge { stroke: var(--ord-aggregator); }
.dependency-head { fill: #c6503b; }
.metadata-head { fill: var(--ord-faint); }
.discovery-head { fill: var(--ord-aggregator); }
.edge-label { fill: #ac4432; font-size: 17px; font-weight: 650; }
.relation-label { fill: var(--ord-muted); font-size: 16px; }
.label-background { fill: var(--ord-provider-soft); }
.discovery-label { fill: var(--ord-aggregator); font-size: 16px; }
.consumer-frame { fill: var(--ord-consumer-soft); stroke: var(--ord-consumer); stroke-width: 1.5; }
.consumer-title { fill: var(--ord-consumer); font-size: 20px; font-weight: 700; }
figcaption { color: var(--ord-muted); font-size: 16px; text-align: center; }
</style>
