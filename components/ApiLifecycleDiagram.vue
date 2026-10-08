<template>
  <figure class="api-lifecycle" aria-label="An active API evolves under the same ORD ID; an incompatible contract branches to a new ID while the old API is deprecated and retired">
    <!-- Adapted from ord-public/static/img/versioning-and-lifecycle.drawio.svg; normative rules take precedence. -->
    <svg viewBox="0 0 1136 390" role="img" aria-label="Four stages: baseline, compatible update, successor contract, and retirement. The v1 and v2 resources coexist during migration.">
      <defs>
        <marker id="lifecycle-update-arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 10 5 0 10Z" class="update-fill" /></marker>
        <marker id="lifecycle-successor-arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 10 5 0 10Z" class="successor-fill" /></marker>
      </defs>
      <g class="stage"><text x="0" y="24">01 · Baseline</text><text x="304" y="24">02 · Compatible update</text><text x="608" y="24">03 · Breaking contract</text><text x="912" y="24">04 · Retire old API</text></g>
      <path d="M224 134H304" class="update-line" marker-end="url(#lifecycle-update-arrow)" />
      <path d="M528 134H608" class="update-line" marker-end="url(#lifecycle-update-arrow)" />
      <path d="M832 134H912" class="update-line" marker-end="url(#lifecycle-update-arrow)" />
      <path d="M568 134V306H608" class="successor-line" marker-end="url(#lifecycle-successor-arrow)" />
      <path d="M832 306H912" class="update-line" marker-end="url(#lifecycle-update-arrow)" />
      <g class="resource" transform="translate(0 66)"><rect width="224" height="136" rx="8" /><text x="18" y="30" class="name">Orders API</text><text x="18" y="62" class="id">…:Order:v1</text><text x="18" y="91">version: 1.0.0</text><text x="18" y="116">releaseStatus: active</text></g>
      <g class="resource" transform="translate(304 66)"><rect width="224" height="136" rx="8" /><text x="18" y="30" class="name">Same resource</text><text x="18" y="62" class="id">…:Order:v1</text><text x="18" y="91">version: 1.1.0</text><text x="18" y="116">releaseStatus: active</text></g>
      <g class="resource old-resource" transform="translate(608 66)"><rect width="224" height="136" rx="8" /><text x="18" y="30" class="name">Retained contract</text><text x="18" y="62" class="id">…:Order:v1</text><text x="18" y="91">version: 1.1.0</text><text x="18" y="116">releaseStatus: deprecated</text></g>
      <g class="resource" transform="translate(912 66)"><rect width="224" height="136" rx="8" /><text x="18" y="30" class="name">Sunset old API</text><text x="18" y="62" class="id">…:Order:v1</text><text x="18" y="91">releaseStatus: sunset</text><text x="18" y="116">Record sunsetDate</text></g>
      <g class="resource successor" transform="translate(608 238)"><rect width="224" height="136" rx="8" /><text x="18" y="30" class="name">New resource</text><text x="18" y="62" class="id">…:Order:v2</text><text x="18" y="91">version: 2.0.0</text><text x="18" y="116">releaseStatus: active</text></g>
      <g class="resource" transform="translate(912 238)"><rect width="224" height="136" rx="8" /><text x="18" y="30" class="name">Continues evolving</text><text x="18" y="62" class="id">…:Order:v2</text><text x="18" y="91">version: 2.1.0</text><text x="18" y="116">releaseStatus: active</text></g>
      <text x="0" y="238" class="annotation">Optional feature added?</text><text x="0" y="264" class="explanation">Update version; preserve the ORD ID.</text>
      <text x="304" y="338" class="annotation breaking-note">Consumer contract breaks?</text><text x="304" y="364" class="explanation">Create a successor with a new major ID.</text>
      <text x="618" y="225" class="coexist">Both contracts coexist during migration</text>
    </svg>
    <figcaption><p>Deprecation is an explicit decision: link <code>successors</code> and provide migration dates. Development and beta resources may break without a new major ID; tenant extensions update <code>lastUpdate</code>.</p></figcaption>
  </figure>
</template>

<style scoped>
.api-lifecycle { display: flex; flex: 1; min-height: 0; flex-direction: column; justify-content: center; gap: 22px; margin: 0; }
svg { display: block; width: 100%; overflow: visible; }
text { fill: var(--ord-muted); font-family: var(--ord-font); font-size: 15px; }
.stage text { fill: var(--ord-faint); font-size: 14px; font-weight: 750; }
.resource rect { fill: var(--ord-card-bg); stroke: var(--ord-border); }
.resource .name { fill: var(--ord-text); font-size: 17px; font-weight: 750; }
.resource .id { fill: var(--ord-text); font-family: var(--ord-mono); font-size: 17px; font-weight: 650; }
.old-resource rect { fill: var(--ord-accent-coral-bg); }
.successor rect { fill: var(--ord-accent-teal-bg); stroke: var(--ord-brand); stroke-width: 2; }
.update-line { fill: none; stroke: var(--ord-brand); stroke-width: 2; }
.update-fill { fill: var(--ord-brand); }
.successor-line { fill: none; stroke: #bd4c36; stroke-width: 2; }
.successor-fill { fill: #bd4c36; }
.annotation { fill: var(--ord-brand); font-size: 16px; font-weight: 700; }
.breaking-note { fill: #bd4c36; }
.explanation { font-size: 14px; }
.coexist { fill: var(--ord-faint); font-size: 12px; }
figcaption { border-top: 1px solid var(--ord-sep); padding-top: 16px; color: var(--ord-muted); font-size: 14px; line-height: 1.5; }
figcaption code { color: var(--ord-brand); font-size: 12px; }
</style>
