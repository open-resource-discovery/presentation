<script setup>
import { useId } from 'vue'

const id = useId()
const lineageMarker = id + '-lineage'
const outputMarker = id + '-output'
const semanticsMarker = id + '-semantics'
</script>

<template>
  <figure class="data-product-diagram" aria-label="Data Product relationships for inputs, outputs, and business semantics">
    <svg viewBox="0 0 1136 474" role="img" aria-labelledby="data-product-title data-product-desc">
      <title id="data-product-title">Data Product relationships</title>
      <desc id="data-product-desc">A Data Product references an Integration Dependency as its input port. The dependency references source API or Event Resources. The Data Product references API or Event Resources as output ports and Entity Types for business meaning. ORD describes these relationships while the referenced interfaces deliver the data.</desc>
      <defs>
        <marker :id="lineageMarker" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path class="lineage-head" d="M0 0L10 5L0 10Z" /></marker>
        <marker :id="outputMarker" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path class="output-head" d="M0 0L10 5L0 10Z" /></marker>
        <marker :id="semanticsMarker" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path class="semantics-head" d="M0 0L10 5L0 10Z" /></marker>
      </defs>

      <text class="column-label" x="20" y="20">Inputs &amp; lineage</text>
      <text class="column-label" x="418" y="20">Described resource</text>
      <text class="column-label" x="840" y="20">Output ports</text>

      <path class="lineage-edge" d="M418 202H370V348H320" :marker-end="'url(#' + lineageMarker + ')'" />
      <text class="field-label lineage-label" x="382" y="283">inputPorts</text>
      <path class="lineage-edge" d="M170 300V166" :marker-end="'url(#' + lineageMarker + ')'" />
      <text class="field-label lineage-label" x="184" y="238">aspects</text>

      <path class="output-edge" d="M718 190H780V118H840" :marker-end="'url(#' + outputMarker + ')'" />
      <path class="output-edge" d="M718 220H780V348H840" :marker-end="'url(#' + outputMarker + ')'" />
      <text class="field-label output-label" x="794" y="274">outputPorts</text>

      <path class="semantics-edge" d="M568 258V310" :marker-end="'url(#' + semanticsMarker + ')'" />
      <text class="field-label semantics-label" x="582" y="292">entityTypes</text>

      <g class="source-node" transform="translate(20 70)">
        <rect width="300" height="96" rx="8" />
        <text class="kind" x="18" y="26">API / Event Resource</text>
        <text class="name" x="18" y="57">Source data</text>
        <text class="detail" x="18" y="82">External input</text>
      </g>

      <g class="dependency-node" transform="translate(20 300)">
        <rect width="300" height="96" rx="8" />
        <text class="kind" x="18" y="26">Integration Dependency</text>
        <text class="name" x="18" y="57">Input lineage</text>
        <text class="detail" x="18" y="82">References source ORD IDs</text>
      </g>

      <g class="product-node" transform="translate(418 150)">
        <rect width="300" height="108" rx="8" />
        <text class="kind" x="20" y="27">Data Product · beta</text>
        <text class="name" x="20" y="62">Customer Orders</text>
        <text class="detail" x="20" y="89">Owned, documented data set</text>
      </g>

      <g class="entity-node" transform="translate(418 310)">
        <rect width="300" height="96" rx="8" />
        <text class="kind" x="20" y="26">Entity Type</text>
        <text class="name" x="20" y="57">Customer Order</text>
        <text class="detail" x="20" y="82">Business meaning</text>
      </g>

      <g class="api-node" transform="translate(840 70)">
        <rect width="276" height="96" rx="8" />
        <text class="kind" x="18" y="26">API Resource</text>
        <text class="name" x="18" y="57">Read API</text>
        <text class="detail" x="18" y="82">Access the data set</text>
      </g>

      <g class="event-node" transform="translate(840 300)">
        <rect width="276" height="96" rx="8" />
        <text class="kind" x="18" y="26">Event Resource</text>
        <text class="name" x="18" y="57">Change events</text>
        <text class="detail" x="18" y="82">Another access path</text>
      </g>

      <g class="scope-note" transform="translate(20 438)">
        <rect width="1096" height="34" rx="6" />
        <text x="548" y="23" text-anchor="middle"><tspan>ORD describes discovery metadata and relationships.</tspan><tspan class="scope-emphasis"> The referenced APIs and Events deliver the data.</tspan></text>
      </g>
    </svg>
  </figure>
</template>

<style scoped>
.data-product-diagram { display: flex; flex: 1; min-height: 0; flex-direction: column; justify-content: center; margin: 0; }
svg { display: block; width: 100%; min-height: 0; flex: 1; }
text { fill: var(--ord-text); font-family: var(--ord-font); }
.source-node rect, .dependency-node rect, .product-node rect, .entity-node rect, .api-node rect, .event-node rect { stroke-width: 2; }
.source-node rect, .api-node rect { fill: var(--ord-accent-sky-bg); stroke: var(--ord-accent-sky); }
.event-node rect { fill: var(--ord-accent-teal-bg); stroke: var(--ord-accent-teal); }
.dependency-node rect { fill: var(--ord-card-bg); stroke: var(--ord-border); }
.product-node rect { fill: var(--ord-accent-coral-bg); stroke: var(--ord-accent-coral); }
.entity-node rect { fill: var(--ord-accent-violet-bg); stroke: #8061bd; }
.column-label { fill: var(--ord-muted); font-size: 17px; font-weight: 650; }
.kind { fill: var(--ord-muted); font-size: 15px; font-weight: 650; }
.product-node .kind { fill: #ac4432; }
.name { font-size: 22px; font-weight: 750; }
.detail { fill: var(--ord-muted); font-size: 15px; }
.field-label { font-family: var(--ord-mono); font-size: 14px; }
.lineage-edge, .output-edge, .semantics-edge { fill: none; stroke-width: 2; stroke-linejoin: round; }
.lineage-edge { stroke: #c6503b; }
.lineage-head { fill: #c6503b; }
.lineage-label { fill: #ac4432; }
.output-edge { stroke: var(--ord-provider); }
.output-head { fill: var(--ord-provider); }
.output-label { fill: var(--ord-provider); }
.semantics-edge { stroke: #8061bd; }
.semantics-head { fill: #8061bd; }
.semantics-label { fill: #6b49bc; }
.scope-note rect { fill: var(--ord-accent-teal-bg); stroke: var(--ord-accent-teal); }
.scope-note text { fill: var(--ord-muted); font-size: 15px; }
.scope-emphasis { fill: var(--ord-text); font-weight: 700; }
</style>
