<script setup>
defineProps({
  compact: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <figure class="provider-diagram" :class="{ compact }" aria-label="ORD provider overview">
    <svg viewBox="0 0 640 460" role="img" aria-labelledby="provider-title provider-desc">
      <title id="provider-title">ORD provider overview</title>
      <desc id="provider-desc">
        An application or service exposes ORD resources through provided interfaces and states integration dependencies
        through a required interface socket.
      </desc>

      <g class="provided">
        <path d="M300 145 L300 104" />
        <circle cx="300" cy="104" r="13" />

        <path d="M370 145 L446 104" />
        <circle cx="446" cy="104" r="13" />

        <path d="M235 197 L190 178" />
        <circle cx="190" cy="178" r="13" />

        <path d="M220 230 L190 246" />
        <circle cx="190" cy="246" r="13" />

        <path d="M370 315 L452 350" />
        <circle cx="452" cy="350" r="13" />

        <path d="M420 230 L460 230" />
        <circle cx="460" cy="230" r="13" />
      </g>

      <g class="required">
        <path d="M270 315 L184 350" />
        <path class="socket" d="M184 326 C154 326 154 374 184 374" />
      </g>

      <polygon class="hex" points="220,230 270,145 370,145 420,230 370,315 270,315" />
      <text class="hex-label" x="320" y="222" text-anchor="middle">
        <tspan x="320" dy="0">Application</tspan>
        <tspan x="320" dy="30">/ Service</tspan>
      </text>

      <g class="tag provided-tag" transform="translate(222 47)">
        <rect width="156" height="42" rx="21" />
        <text x="78" y="27" text-anchor="middle">Capabilities</text>
      </g>

      <g class="tag provided-tag" transform="translate(468 52)">
        <rect width="112" height="42" rx="21" />
        <text x="56" y="27" text-anchor="middle">APIs</text>
      </g>

      <g class="tag provided-tag" transform="translate(40 151)">
        <rect width="136" height="42" rx="21" />
        <text x="68" y="27" text-anchor="middle">Entity Types</text>
      </g>

      <g class="tag provided-tag" transform="translate(28 225)">
        <rect width="148" height="42" rx="21" />
        <text x="74" y="27" text-anchor="middle">Data Products</text>
      </g>

      <g class="tag provided-tag" transform="translate(468 329)">
        <rect width="118" height="42" rx="21" />
        <text x="59" y="27" text-anchor="middle">Events</text>
      </g>

      <g class="tag required-tag" transform="translate(30 386)">
        <rect width="268" height="42" rx="21" />
        <text x="134" y="27" text-anchor="middle">Integration Dependencies</text>
      </g>

      <g class="api-card" transform="translate(482 198)">
        <rect width="146" height="64" rx="8" />
        <text class="api-title" x="16" y="25">Provider API</text>
        <text class="api-subtitle" x="16" y="46">Expose metadata</text>
      </g>

      <g class="definition-note" transform="translate(450 143)">
        <path d="M-20 -12 L-4 -2" />
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
  background:
    radial-gradient(circle at 48% 48%, rgba(88, 166, 255, 0.08), transparent 35%),
    linear-gradient(90deg, rgba(39, 224, 209, 0.08), transparent 32%),
    var(--ord-diagram-bg);
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
  stroke: var(--ord-brand-2);
  stroke-width: 3.8;
}

.provided circle {
  fill: var(--ord-pill-bg);
  stroke: var(--ord-brand-2);
  stroke-width: 4;
}

.required path {
  stroke: var(--ord-coral);
  stroke-width: 3.8;
}

.required .socket {
  stroke-width: 5;
}

.hex {
  fill: var(--ord-hex-fill);
  stroke: var(--ord-sky);
  stroke-linejoin: round;
  stroke-width: 4.5;
}

.hex-label {
  fill: var(--ord-hex-text);
  font-size: 25px;
  font-weight: 760;
  line-height: 1;
}

.tag rect {
  fill: var(--ord-pill-bg);
  stroke-width: 1.3;
}

.provided-tag rect {
  stroke: var(--ord-teal-line);
}

.required-tag rect {
  stroke: var(--ord-coral);
}

.tag text {
  fill: var(--ord-text);
  font-size: 17px;
  font-weight: 740;
}

.api-card rect {
  fill: var(--ord-teal-soft);
  stroke: var(--ord-teal-line);
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
  stroke: var(--ord-coral);
  stroke-width: 2.8;
}

.definition-title {
  fill: var(--ord-coral);
  font-size: 16px;
  font-weight: 760;
}

@media (max-width: 900px) {
  .provider-diagram {
    width: 100%;
  }
}
</style>
