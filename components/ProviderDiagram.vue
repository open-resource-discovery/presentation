<script setup>
import { useId } from "vue";

const diagramId = useId();
const titleId = `${diagramId}-provider-title`;
const descriptionId = `${diagramId}-provider-desc`;
</script>

<template>
  <figure class="provider-diagram" aria-label="ORD provider overview">
    <svg viewBox="0 0 700 570" role="img" :aria-labelledby="`${titleId} ${descriptionId}`">
      <title :id="titleId">ORD provider overview</title>
      <desc :id="descriptionId">
        An application or service exposes ORD resources through provided interfaces and states integration dependencies
        through a required interface socket connected to a resource described by another ORD Provider.
      </desc>

      <g class="provided">
        <path d="M330 200 V132" />
        <circle cx="330" cy="132" r="10" />

        <path d="M400 200 L502 132" />
        <circle cx="502" cy="132" r="10" />

        <path d="M272.9 324 H218" />
        <circle cx="218" cy="324" r="10" />

        <path d="M400 370 L502 420" />
        <circle cx="502" cy="420" r="10" />

        <path d="M350 370 L390 460" />
        <circle cx="390" cy="460" r="10" />

        <path d="M450 285 H474" />
        <circle cx="474" cy="285" r="10" />

        <path d="M152 420 H190" />
        <circle cx="200" cy="420" r="10" />
      </g>

      <path class="taxonomy-association" d="M281.2 232 H200" />

      <g class="required">
        <path d="M300 370 L218 420" />
        <path class="socket" d="M200 402 C224 402 224 438 200 438" />
      </g>

      <polygon class="hex" points="250,285 300,200 400,200 450,285 400,370 300,370" />
      <text class="provider-role" x="350" y="244" text-anchor="middle">ORD Provider</text>
      <text class="hex-label" x="350" y="277" text-anchor="middle">
        <tspan x="350" dy="0">Application</tspan>
        <tspan x="350" dy="30">/ Service</tspan>
      </text>

      <g class="tag provided-tag" transform="translate(200 52)">
        <rect width="260" height="62" rx="8" />
        <text x="130" y="25" text-anchor="middle">Capabilities</text>
        <text class="protocol-examples" x="130" y="47" text-anchor="middle">Features · configuration</text>
      </g>

      <g class="tag provided-tag api-examples" transform="translate(520 100)">
        <rect width="160" height="62" rx="8" />
        <text x="80" y="25" text-anchor="middle">APIs</text>
        <text class="protocol-examples" x="80" y="47" text-anchor="middle">REST · MCP · A2A</text>
      </g>

      <g class="tag taxonomy-tag" transform="translate(32 201)">
        <rect width="168" height="62" rx="8" />
        <text x="84" y="25" text-anchor="middle">Entity Types</text>
        <text class="protocol-examples" x="84" y="47" text-anchor="middle">Business semantics</text>
      </g>

      <g class="tag provided-tag" transform="translate(32 293)">
        <rect width="168" height="62" rx="8" />
        <text x="84" y="25" text-anchor="middle">Data Products</text>
        <text class="protocol-examples" x="84" y="47" text-anchor="middle">Delta Sharing · SQL</text>
      </g>

      <g class="tag provided-tag" transform="translate(520 380)">
        <rect width="160" height="80" rx="8" />
        <text x="80" y="25" text-anchor="middle">Events</text>
        <text class="protocol-examples" x="80" y="47" text-anchor="middle">CloudEvents</text>
        <text class="protocol-examples" x="80" y="65" text-anchor="middle">AsyncAPI definitions</text>
      </g>

      <g class="tag provided-tag" transform="translate(308 478)">
        <rect width="164" height="62" rx="8" />
        <text x="82" y="25" text-anchor="middle">Agents</text>
        <text class="protocol-examples" x="82" y="47" text-anchor="middle">Link to APIs</text>
      </g>

      <g class="tag required-tag" transform="translate(24 478)">
        <rect width="268" height="62" rx="8" />
        <text x="134" y="25" text-anchor="middle">Integration Dependencies</text>
        <text class="dependency-reference" x="134" y="47" text-anchor="middle">Requires external APIs / Events</text>
      </g>

      <g class="external-provider">
        <polygon class="hex" points="24,420 56,375 120,375 152,420 120,465 56,465" />
        <text x="88" y="413" text-anchor="middle">Application</text>
        <text x="88" y="434" text-anchor="middle">/ Service</text>
      </g>

      <g class="api-card" transform="translate(494 250)">
        <rect width="186" height="68" rx="8" />
        <text class="api-title" x="12" y="27">ORD Provider API</text>
        <text class="api-subtitle" x="12" y="49">Expose metadata</text>
      </g>

      <g class="definition-note" transform="translate(514 194)">
        <path d="M-12 -47 L-4 -18" />
        <text class="definition-title" x="0" y="0">Detailed definitions</text>
        <text class="definition-subtitle" x="0" y="23">for example OpenAPI</text>
      </g>
    </svg>
  </figure>
</template>

<style scoped>
.provider-diagram {
  position: relative;
  width: min(100%, 680px);
  aspect-ratio: 700 / 570;
  margin: 0;
  overflow: hidden;
  border: 1px solid var(--ord-sep);
  border-radius: var(--ord-radius);
  background: var(--ord-diagram-bg);
}

svg {
  display: block;
  width: 100%;
  height: 100%;
}

text {
  font-family: var(--ord-font);
  letter-spacing: 0;
}

.provided path,
.required path,
.definition-note path {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.provided path {
  stroke: var(--ord-provider);
  stroke-width: 3;
}

.provided circle {
  fill: var(--ord-pill-bg);
  stroke: var(--ord-provider);
  stroke-width: 3;
}

.required path {
  stroke: var(--ord-coral);
  stroke-width: 3;
}

.required .socket {
  stroke-width: 4;
}

.hex {
  fill: var(--ord-provider-soft);
  stroke: var(--ord-provider);
  stroke-linejoin: round;
  stroke-width: 4.5;
}

.hex-label {
  fill: var(--ord-hex-text);
  font-size: 25px;
  font-weight: 760;
  line-height: 1;
}

.provider-role { fill: var(--ord-provider); font-size: 12px; font-weight: 750; letter-spacing: .05em; text-transform: uppercase; }

.tag rect {
  fill: var(--ord-pill-bg);
  stroke-width: 1.3;
}

.provided-tag rect {
  stroke: var(--ord-provider);
  stroke-opacity: .4;
}

.required-tag rect {
  stroke: var(--ord-coral);
}

.tag text {
  fill: var(--ord-text);
  font-size: 17px;
  font-weight: 740;
}

.tag text.protocol-examples { fill: var(--ord-muted); font-size: 15px; font-weight: 520; }
.taxonomy-tag rect { stroke: var(--ord-border); }
.taxonomy-association { fill: none; stroke: var(--ord-faint); stroke-width: 2; }
.tag text.dependency-reference { fill: var(--ord-muted); font-size: 15px; font-weight: 520; }
.external-provider text { fill: var(--ord-hex-text); font-size: 15px; font-weight: 750; }
.external-provider .hex { stroke-width: 3; }

.api-card rect {
  fill: var(--ord-provider-soft);
  stroke: var(--ord-provider);
  stroke-width: 1.3;
}

.api-title {
  fill: var(--ord-text);
  font-size: 16px;
  font-weight: 760;
}

.api-subtitle,
.definition-subtitle {
  fill: var(--ord-muted);
  font-size: 13px;
  font-weight: 520;
}

.definition-note path {
  stroke: var(--ord-faint);
  stroke-width: 1.5;
  stroke-dasharray: 3 3;
}

.definition-title {
  fill: var(--ord-muted);
  font-size: 16px;
  font-weight: 760;
}

@media (max-width: 900px) {
  .provider-diagram {
    width: 100%;
  }
}
</style>
