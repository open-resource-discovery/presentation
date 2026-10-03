<template>
  <figure class="pull-sequence" aria-label="ORD pull transport sequence diagram">
    <svg viewBox="0 0 1120 470" role="img" aria-labelledby="pull-title pull-desc">
      <title id="pull-title">ORD pull transport sequence</title>
      <desc id="pull-desc">A provider registers with service discovery. An aggregator discovers known system instances, then requests the configuration per instance, each ORD document, and each linked resource definition using advertised access strategies.</desc>
      <defs>
        <marker id="pull-arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" /></marker>
      </defs>

      <g class="participant aggregator"><rect x="55" y="16" width="220" height="52" rx="7"/><text x="165" y="49">ORD Aggregator</text></g>
      <g class="participant provider"><rect x="450" y="16" width="220" height="52" rx="7"/><text x="560" y="49">ORD Provider</text></g>
      <g class="participant service-discovery"><rect x="845" y="16" width="220" height="52" rx="7"/><text x="955" y="49">Service Discovery</text></g>
      <g class="lifelines"><path d="M165 68V458M560 68V458M955 68V458"/></g>

      <g class="message"><text x="760" y="96">Register system instance</text><path d="M560 106H955" marker-end="url(#pull-arrow)"/></g>
      <g class="message"><text x="560" y="139">1 · Discover system instances</text><path d="M165 149H955" marker-end="url(#pull-arrow)"/><path class="response" d="M955 167H165" marker-end="url(#pull-arrow)"/></g>

      <g class="loop"><rect x="95" y="185" width="580" height="258" rx="8"/><path d="M95 185H285L269 209H95Z"/><text x="108" y="202">per system instance</text></g>
      <g class="message"><text x="365" y="229">2 · GET well-known configuration</text><path d="M165 239H560" marker-end="url(#pull-arrow)"/><path class="response" d="M560 257H165" marker-end="url(#pull-arrow)"/></g>

      <g class="loop inner"><rect x="111" y="272" width="548" height="155" rx="7"/><path d="M111 272H285L269 296H111Z"/><text x="124" y="289">per ORD document</text></g>
      <g class="message"><text x="365" y="313">3 · GET ORD document</text><path d="M165 323H560" marker-end="url(#pull-arrow)"/><path class="response" d="M560 341H165" marker-end="url(#pull-arrow)"/></g>
      <g class="loop inner"><rect x="127" y="352" width="516" height="63" rx="7"/><path d="M127 352H332L316 376H127Z"/><text x="140" y="369">per resource definition</text></g>
      <g class="message definition"><text x="385" y="389">4 · GET linked definition</text><path d="M165 399H560" marker-end="url(#pull-arrow)"/><path class="response" d="M560 410H165" marker-end="url(#pull-arrow)"/></g>
    </svg>
    <figcaption><span>Pull transport</span><strong>HTTP GET · honor advertised access strategies</strong><small>Definition files may be hosted elsewhere.</small></figcaption>
  </figure>
</template>

<style scoped>
.pull-sequence { display: flex; flex: 1; flex-direction: column; justify-content: center; gap: 12px; margin: 0; }
svg { width: 100%; max-height: 440px; font-family: var(--ord-font); }
.participant rect { fill: var(--ord-card-bg); stroke: var(--ord-border); stroke-width: 1.5; }
.participant.provider rect { fill: var(--ord-provider-soft); stroke: var(--ord-provider); stroke-width: 2; }
.participant.aggregator rect { fill: var(--ord-aggregator-soft); stroke: var(--ord-aggregator); stroke-width: 2; }
.participant text { fill: var(--ord-text); font-size: 18px; font-weight: 650; text-anchor: middle; }
.lifelines path { fill: none; stroke: var(--ord-border); stroke-dasharray: 7 7; stroke-width: 1.4; }
.message text { fill: var(--ord-muted); font-size: 16px; text-anchor: middle; }
.message path { fill: none; stroke: var(--ord-brand); stroke-width: 1.8; }
.message path.response { stroke: var(--ord-faint); stroke-dasharray: 5 5; }
marker path { fill: var(--ord-brand); }
.loop rect { fill: rgba(30,143,149,.035); stroke: var(--ord-teal-line); stroke-width: 1.2; }
.loop path { fill: var(--ord-teal-soft); stroke: var(--ord-teal-line); }
.loop text { fill: var(--ord-brand); font-size: 12px; font-weight: 700; text-transform: uppercase; }
.loop.inner rect { stroke: var(--ord-border); }
.loop.inner path { fill: var(--ord-panel-soft); stroke: var(--ord-border); }
.loop.inner text { fill: var(--ord-muted); }
figcaption { display: grid; grid-template-columns: auto 1fr auto; gap: 16px; align-items: center; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: var(--ord-card-bg); padding: 13px 18px; }
figcaption span { color: var(--ord-brand); font-size: 10px; font-weight: 750; text-transform: uppercase; }
figcaption strong { color: var(--ord-text); font-size: 15px; }
figcaption small { color: var(--ord-muted); font-size: 12px; }
</style>
