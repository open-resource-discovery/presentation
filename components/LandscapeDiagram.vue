<script setup>
import { useId } from 'vue'

const relationMarker = `${useId()}-entity-type`
</script>

<template>
  <figure class="landscape-diagram" aria-label="APIs and Events from different Providers share an Order Entity Type">
    <svg viewBox="0 0 1136 430" role="img" aria-label="Three resources connected through one shared domain concept">
      <desc>The Orders API and Order Created Event from the Orders Provider, and the Shipment API from the Fulfillment Provider, all reference the same Order Entity Type through exposedEntityTypes. Arrows point from each resource to its domain context. These are metadata relationships.</desc>
      <defs>
        <marker :id="relationMarker" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="relation-head" d="M0 0L10 5L0 10Z" /></marker>
      </defs>

      <path class="relation" d="M340 94C374 94 374 222 408 222" :marker-end="`url(#${relationMarker})`" />
      <path class="relation" d="M796 94C762 94 762 222 728 222" :marker-end="`url(#${relationMarker})`" />
      <path class="relation" d="M568 324V278" :marker-end="`url(#${relationMarker})`" />

      <g class="resource-node" transform="translate(40 20)">
        <rect width="300" height="110" rx="8" />
        <text class="kind" x="20" y="29">API Resource</text>
        <text class="name" x="20" y="61">Orders API</text>
        <text class="provider" x="20" y="89">Orders · Provider</text>
      </g>
      <g class="resource-node" transform="translate(796 20)">
        <rect width="300" height="110" rx="8" />
        <text class="kind" x="20" y="29">API Resource</text>
        <text class="name" x="20" y="61">Shipment API</text>
        <text class="provider" x="20" y="89">Fulfillment · Provider</text>
      </g>
      <g class="taxonomy-node" transform="translate(408 166)">
        <rect width="320" height="112" rx="8" />
        <text class="kind" x="160" y="27" text-anchor="middle">Shared Entity Type</text>
        <text class="name" x="160" y="60" text-anchor="middle">Order</text>
        <text class="identifier" x="160" y="91" text-anchor="middle">foo.orders:entityType:Order:v1</text>
      </g>
      <g class="resource-node" transform="translate(418 324)">
        <rect width="300" height="92" rx="8" />
        <text class="kind" x="20" y="25">Event Resource</text>
        <text class="name" x="20" y="54">Order Created</text>
        <text class="provider" x="20" y="78">Orders · Provider</text>
      </g>
    </svg>
    <figcaption>Each resource links to the same <a href="https://open-resource-discovery.org/spec-v1/concepts/grouping-and-bundling#entity-type" target="_blank" rel="noopener noreferrer">Entity Type</a> with <code>exposedEntityTypes</code>.</figcaption>
  </figure>
</template>

<style scoped>
.landscape-diagram { display: flex; flex: 1; min-height: 0; flex-direction: column; justify-content: center; gap: 8px; margin: 0; padding-bottom: 32px; }
svg { display: block; width: 100%; min-height: 0; flex: 1; }
text { fill: var(--ord-text); font-family: var(--ord-font); }
.resource-node rect { fill: var(--ord-provider-soft); stroke: var(--ord-provider); stroke-width: 1.5; }
.taxonomy-node rect { fill: var(--ord-card-bg); stroke: var(--ord-border); stroke-width: 1.5; }
.kind { fill: var(--ord-muted); font-size: 17px; font-weight: 650; }
.name { font-size: 27px; font-weight: 750; }
.provider { fill: var(--ord-provider); font-size: 17px; font-weight: 650; }
.identifier { fill: var(--ord-muted); font-family: var(--ord-mono); font-size: 15px; }
.relation { fill: none; stroke: var(--ord-faint); stroke-width: 2; }
.relation-head { fill: var(--ord-faint); }
figcaption { color: var(--ord-muted); font-size: 17px; text-align: center; }
figcaption code { color: var(--ord-text); font-size: inherit; }
</style>
