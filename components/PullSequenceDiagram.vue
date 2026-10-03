<template>
  <figure class="pull-sequence" aria-label="ORD pull transport sequence diagram">
    <svg viewBox="0 0 1120 430" role="img" aria-labelledby="pull-title pull-desc">
      <title id="pull-title">ORD pull transport sequence</title>
      <desc id="pull-desc">An aggregator discovers a system, then repeatedly requests its ORD configuration, ORD documents, and resource definitions.</desc>
      <defs>
        <marker id="pull-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" /></marker>
      </defs>

      <g class="participant"><rect x="55" y="16" width="220" height="52" rx="7"/><text x="165" y="49">ORD Aggregator</text></g>
      <g class="participant"><rect x="450" y="16" width="220" height="52" rx="7"/><text x="560" y="49">ORD Provider</text></g>
      <g class="participant"><rect x="845" y="16" width="220" height="52" rx="7"/><text x="955" y="49">Service Discovery</text></g>
      <g class="lifelines"><path d="M165 68V414M560 68V414M955 68V414"/></g>

      <g class="message"><text x="560" y="104">1 · Discover system instances</text><path d="M170 114H948" marker-end="url(#pull-arrow)"/><path class="response" d="M948 132H170" marker-end="url(#pull-arrow)"/></g>

      <g class="loop"><rect x="105" y="154" width="570" height="238" rx="8"/><path d="M105 154H274L258 178H105Z"/><text x="118" y="171">per system instance</text></g>
      <g class="message"><text x="365" y="210">2 · GET well-known configuration</text><path d="M170 220H553" marker-end="url(#pull-arrow)"/><path class="response" d="M553 238H170" marker-end="url(#pull-arrow)"/></g>

      <g class="loop inner"><rect x="126" y="256" width="528" height="116" rx="7"/><path d="M126 256H274L258 279H126Z"/><text x="138" y="273">per ORD document</text></g>
      <g class="message"><text x="365" y="304">3 · GET ORD document</text><path d="M170 314H553" marker-end="url(#pull-arrow)"/><path class="response" d="M553 332H170" marker-end="url(#pull-arrow)"/></g>
      <g class="message definition"><text x="365" y="354">4 · GET linked resource definitions</text><path d="M170 364H553" marker-end="url(#pull-arrow)"/><path class="response" d="M553 382H170" marker-end="url(#pull-arrow)"/></g>
    </svg>
    <figcaption><span>Standardized today</span><strong>Simple HTTP GET requests from one known system entry point</strong><small>Other transport modes are not yet specified.</small></figcaption>
  </figure>
</template>

<style scoped>
.pull-sequence { display: flex; flex: 1; flex-direction: column; justify-content: center; gap: 12px; margin: 0; }
svg { width: 100%; max-height: 440px; font-family: var(--ord-font); }
.participant rect { fill: var(--ord-card-bg); stroke: var(--ord-border); stroke-width: 1.5; }
.participant text { fill: var(--ord-text); font-size: 18px; font-weight: 650; text-anchor: middle; }
.lifelines path { fill: none; stroke: var(--ord-border); stroke-dasharray: 7 7; stroke-width: 1.4; }
.message text { fill: var(--ord-muted); font-size: 14px; text-anchor: middle; }
.message path { fill: none; stroke: var(--ord-brand); stroke-width: 1.8; }
.message path.response { stroke: var(--ord-faint); stroke-dasharray: 5 5; }
marker path { fill: var(--ord-brand); }
.loop rect { fill: rgba(30,143,149,.035); stroke: var(--ord-teal-line); stroke-width: 1.2; }
.loop path { fill: var(--ord-teal-soft); stroke: var(--ord-teal-line); }
.loop text { fill: var(--ord-brand); font-size: 11px; font-weight: 700; text-transform: uppercase; }
.loop.inner rect { stroke: var(--ord-border); }
.loop.inner path { fill: var(--ord-panel-soft); stroke: var(--ord-border); }
.loop.inner text { fill: var(--ord-muted); }
figcaption { display: grid; grid-template-columns: auto 1fr auto; gap: 16px; align-items: center; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: var(--ord-card-bg); padding: 13px 18px; }
figcaption span { color: var(--ord-brand); font-size: 10px; font-weight: 750; text-transform: uppercase; }
figcaption strong { color: var(--ord-text); font-size: 15px; }
figcaption small { color: var(--ord-muted); font-size: 12px; }
</style>
