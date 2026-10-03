<script setup>
import { useId } from "vue";

defineProps({
  compact: {
    type: Boolean,
    default: false,
  },
  showExamples: {
    type: Boolean,
    default: false,
  },
});

const diagramId = useId();
const titleId = `${diagramId}-provider-title`;
const descriptionId = `${diagramId}-provider-desc`;
</script>

<template>
  <figure class="provider-diagram" :class="{ compact, 'with-examples': showExamples }" aria-label="ORD provider overview">
    <svg viewBox="0 0 640 460" role="img" :aria-labelledby="`${titleId} ${descriptionId}`">
      <title :id="titleId">ORD provider overview</title>
      <desc :id="descriptionId">
        An application or service exposes ORD resources through provided interfaces and states integration dependencies
        through a required interface socket connected to a resource described by another ORD Provider.
      </desc>

      <g class="provided">
        <path d="M300 145 L300 104" />
        <circle cx="300" cy="104" r="10" />

        <path d="M370 145 L446 104" />
        <circle cx="446" cy="104" r="10" />

        <path d="M239.4 197 L190 178" />
        <circle cx="190" cy="178" r="10" />

        <path d="M220 230 L190 246" />
        <circle cx="190" cy="246" r="10" />

        <path d="M370 315 L452 350" />
        <circle cx="452" cy="350" r="10" />

        <path d="M340 315 L365 350" />
        <circle cx="365" cy="350" r="10" />

        <path d="M420 230 L460 230" />
        <circle cx="460" cy="230" r="10" />

        <path d="M126.4 350 H174" />
        <circle cx="184" cy="350" r="10" />
      </g>

      <g class="required">
        <path d="M270 315 L202 350" />
        <path class="socket" d="M184 332 C208 332 208 368 184 368" />
      </g>

      <polygon class="hex" points="220,230 270,145 370,145 420,230 370,315 270,315" />
      <text class="provider-role" x="320" y="189" text-anchor="middle">ORD Provider</text>
      <text class="hex-label" x="320" y="222" text-anchor="middle">
        <tspan x="320" dy="0">Application</tspan>
        <tspan x="320" dy="30">/ Service</tspan>
      </text>

      <g class="tag provided-tag" :transform="showExamples ? 'translate(172 28)' : 'translate(222 47)'">
        <rect :width="showExamples ? 256 : 156" :height="showExamples ? 60 : 42" rx="8" />
        <text :x="showExamples ? 128 : 78" y="27" text-anchor="middle">Capabilities</text>
        <text v-if="showExamples" class="protocol-examples" x="128" y="47" text-anchor="middle">Skills · agent plugins (proposed)</text>
      </g>

      <g class="tag provided-tag api-examples" transform="translate(460 42)">
        <rect width="170" height="60" rx="8" />
        <text x="85" y="25" text-anchor="middle">APIs</text>
        <text class="protocol-examples" x="85" y="46" text-anchor="middle">REST · MCP · A2A</text>
      </g>

      <g class="tag provided-tag" :transform="showExamples ? 'translate(28 140)' : 'translate(40 151)'">
        <rect :width="showExamples ? 148 : 136" :height="showExamples ? 76 : 42" rx="8" />
        <text :x="showExamples ? 74 : 68" y="27" text-anchor="middle">Entity Types</text>
        <template v-if="showExamples">
          <text class="protocol-examples" x="74" y="46" text-anchor="middle">Domain Model</text>
          <text class="protocol-examples" x="74" y="64" text-anchor="middle">taxonomy / Ontology</text>
        </template>
      </g>

      <g class="tag provided-tag" :transform="showExamples ? 'translate(28 228)' : 'translate(28 225)'">
        <rect width="148" :height="showExamples ? 72 : 42" rx="8" />
        <text x="74" y="23" text-anchor="middle">Data Products</text>
        <text v-if="showExamples" class="protocol-examples" x="74" y="46" text-anchor="middle">Delta Sharing · SQL</text>
        <text class="beta-label" x="74" :y="showExamples ? 61 : 36" text-anchor="middle">beta</text>
      </g>

      <g class="tag provided-tag" transform="translate(468 329)">
        <rect :width="showExamples ? 164 : 118" :height="showExamples ? 80 : 42" rx="8" />
        <text :x="showExamples ? 82 : 59" y="27" text-anchor="middle">Events</text>
        <template v-if="showExamples">
          <text class="protocol-examples" x="82" y="48" text-anchor="middle">CloudEvents</text>
          <text class="protocol-examples" x="82" y="66" text-anchor="middle">AsyncAPI definitions</text>
        </template>
      </g>

      <g class="tag provided-tag" :transform="showExamples ? 'translate(298 386)' : 'translate(310 386)'">
        <rect :width="showExamples ? 134 : 110" :height="showExamples ? 68 : 42" rx="8" />
        <text :x="showExamples ? 67 : 55" y="23" text-anchor="middle">Agents</text>
        <text v-if="showExamples" class="protocol-examples" x="67" y="44" text-anchor="middle">A2A Agent Cards</text>
        <text class="beta-label" :x="showExamples ? 67 : 55" :y="showExamples ? 59 : 36" text-anchor="middle">beta</text>
      </g>

      <g class="tag required-tag" :transform="showExamples ? 'translate(18 386)' : 'translate(30 386)'">
        <rect width="268" height="54" rx="8" />
        <text x="134" y="23" text-anchor="middle">Integration Dependencies</text>
        <text class="dependency-reference" x="134" y="42" text-anchor="middle">References external APIs or Events</text>
      </g>

      <g class="external-provider">
        <polygon class="hex" points="30,345 55,310 105,310 130,345 105,380 55,380" />
        <text x="80" y="343" text-anchor="middle">Other app</text>
        <text class="external-provider-role" x="80" y="364" text-anchor="middle">ORD Provider</text>
      </g>

      <g class="api-card" transform="translate(478 198)">
        <rect width="154" height="64" rx="8" />
        <text class="api-title" x="10" y="25">ORD Provider API</text>
        <text class="api-subtitle" x="10" y="46">Expose metadata</text>
      </g>

      <g class="definition-note" transform="translate(450 143)">
        <path d="M-15 -28 L-4 -2" />
        <text class="definition-title" x="0" y="0">Detailed definitions</text>
        <text class="definition-subtitle" x="0" y="23">for example OpenAPI</text>
      </g>
    </svg>
  </figure>
</template>

<style scoped>
.provider-diagram {
  position: relative;
  width: min(100%, 620px);
  aspect-ratio: 1.391;
  margin: 0;
  overflow: hidden;
  border: 1px solid var(--ord-sep);
  border-radius: var(--ord-radius);
  background: var(--ord-diagram-bg);
}

.provider-diagram.compact {
  width: min(100%, 510px);
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

.tag text.protocol-examples { fill: var(--ord-muted); font-size: 12px; font-weight: 600; }
.with-examples .tag text.protocol-examples { font-size: 13px; font-weight: 520; }
.tag text.beta-label { fill: var(--ord-provider); font-size: 9px; font-weight: 750; letter-spacing: .06em; text-transform: uppercase; }
.tag text.dependency-reference { fill: var(--ord-muted); font-size: 12px; font-weight: 520; }
.external-provider text { fill: var(--ord-hex-text); font-size: 16px; font-weight: 750; }
.external-provider text.external-provider-role { fill: var(--ord-provider); font-size: 9px; }
.external-provider .hex { stroke-width: 3; }

.api-card rect {
  fill: var(--ord-provider-soft);
  stroke: var(--ord-provider);
  stroke-width: 1.3;
}

.api-title {
  fill: var(--ord-text);
  font-size: 14px;
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
