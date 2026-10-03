<template>
  <figure class="push-preview" aria-label="Proposed transactional ORD push transport sequence">
    <svg viewBox="0 0 1120 400" role="img" aria-labelledby="push-title push-desc">
      <title id="push-title">Proposed transactional ORD push transport</title>
      <desc id="push-desc">A provider opens a submission, stages ORD documents and resource definitions, commits, and polls while the aggregator validates and atomically publishes accepted units.</desc>
      <defs><marker id="push-arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z"/></marker></defs>

      <g class="participant provider"><rect x="50" y="15" width="230" height="50" rx="7"/><text x="165" y="46">Provider / CI pipeline</text></g>
      <g class="participant aggregator"><rect x="445" y="15" width="230" height="50" rx="7"/><text x="560" y="46">Aggregator Push API</text></g>
      <g class="participant discovery-view"><rect x="840" y="15" width="230" height="50" rx="7"/><text x="955" y="46">Discovery view</text></g>
      <g class="lifelines"><path d="M165 65V382M560 65V382M955 65V382"/></g>

      <g class="message"><text x="360" y="99">1 · POST /v1/submissions</text><path d="M165 109H560" marker-end="url(#push-arrow)"/><path class="response" d="M560 128H165" marker-end="url(#push-arrow)"/></g>
      <g class="staging"><rect x="105" y="148" width="570" height="112" rx="8"/><path d="M105 148H250L235 171H105Z"/><text x="118" y="165">isolated staging area</text></g>
      <g class="message"><text x="360" y="196">2 · PUT documents + definitions</text><path d="M165 206H560" marker-end="url(#push-arrow)"/></g>
      <g class="message"><text x="360" y="239">3 · POST /…/{id}/commit</text><path d="M165 249H560" marker-end="url(#push-arrow)"/></g>
      <g class="validation"><rect x="492" y="276" width="136" height="55" rx="7"/><text x="560" y="299">async validation</text><text x="560" y="317">+ authorization</text></g>
      <g class="message status"><text x="330" y="296">4 · GET /…/{id} and /issues</text><path d="M165 306H492" marker-end="url(#push-arrow)"/><path class="response" d="M492 325H165" marker-end="url(#push-arrow)"/></g>
      <g class="message publish"><text x="760" y="354">5 · publish accepted units atomically</text><path d="M560 364H955" marker-end="url(#push-arrow)"/></g>
    </svg>
    <figcaption>
      <span><b>Default</b> merge + unit-level acceptance</span>
      <span><b>Optional</b> strict all-or-nothing validation</span>
      <span><b>Scoped replace</b> omission removes within one authorized boundary</span>
      <a href="https://github.com/open-resource-discovery/specification/pull/187" target="_blank" rel="noreferrer">Proposal PR #187 ↗</a>
    </figcaption>
  </figure>
</template>

<style scoped>
.push-preview { display: flex; flex: 1; min-height: 0; flex-direction: column; justify-content: center; gap: 10px; margin: 0; }
svg { width: 100%; max-height: 410px; font-family: var(--ord-font); }
.participant rect { fill: var(--ord-card-bg); stroke: var(--ord-border); stroke-width: 1.5; }
.participant.provider rect { fill: var(--ord-provider-soft); stroke: var(--ord-provider); stroke-width: 2; }
.participant.aggregator rect { fill: var(--ord-aggregator-soft); stroke: var(--ord-aggregator); stroke-width: 2; }
.participant text { fill: var(--ord-text); font-size: 17px; font-weight: 650; text-anchor: middle; }
.lifelines path { fill: none; stroke: var(--ord-border); stroke-dasharray: 7 7; stroke-width: 1.4; }
.message text { fill: var(--ord-muted); font-size: 15px; text-anchor: middle; }
.message path { fill: none; stroke: var(--ord-brand); stroke-width: 1.8; }
.message path.response { stroke: var(--ord-faint); stroke-dasharray: 5 5; }
marker path { fill: var(--ord-brand); }
.staging rect { fill: rgba(30,143,149,.035); stroke: var(--ord-teal-line); stroke-width: 1.2; }
.staging path { fill: var(--ord-teal-soft); stroke: var(--ord-teal-line); }
.staging text { fill: var(--ord-brand); font-size: 10px; font-weight: 750; text-transform: uppercase; }
.validation rect { fill: var(--ord-aggregator-soft); stroke: var(--ord-aggregator); }
.validation text { fill: var(--ord-muted); font-size: 11px; text-anchor: middle; }
figcaption { display: grid; grid-template-columns: repeat(3, 1fr) auto; gap: 12px; align-items: center; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: var(--ord-panel-soft); padding: 12px 16px; }
figcaption span { color: var(--ord-muted); font-size: 11px; line-height: 1.3; }
figcaption b { color: var(--ord-text); }
figcaption a { color: var(--ord-brand); font-size: 11px; font-weight: 700; text-decoration: none; white-space: nowrap; }
</style>
