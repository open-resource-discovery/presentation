<template>
  <div class="deep-dive-index">
    <a href="./namespace-concept"><span>01 · Identity</span><strong>Namespace concept</strong><small>Who governs an identifier?</small></a>
    <a href="./landscape-model"><span>02 · Context</span><strong>Landscape model</strong><small>Type, version, deployment, instance</small></a>
    <a href="./ord-identifiers"><span>03 · Identity</span><strong>ORD and related IDs</strong><small>Identity, correlation, and specifications</small></a>
    <a href="./versioning-lifecycle"><span>04 · Change</span><strong>Versioning &amp; lifecycle</strong><small>Compatible change, successors, tombstones</small></a>
    <a href="./perspective-resolution"><span>05 · Views</span><strong>Perspective resolution</strong><small>Static layers and runtime truth</small></a>
    <a href="./pull-sequence"><span>06 · Transport</span><strong>Pull sequence</strong><small>From a known system to definitions</small></a>
    <a href="./ai-enrichment"><span>07 · AI metadata</span><strong>AI enrichment</strong><small>Resource hints and definition overlays</small></a>
    <a href="./visibility"><span>08 · Access</span><strong>Visibility</strong><small>Public, internal, and private metadata</small></a>
    <a href="./ord-overlays"><span>09 · Beta</span><strong>ORD Overlays</strong><small>Enrich definitions without modifying source</small></a>
    <a href="./skills-preview"><span>10 · Preview</span><strong>Skills in ORD</strong><small>Discoverable, reusable agent capabilities</small></a>
    <a href="./push-preview"><span>11 · Preview</span><strong>Push transport</strong><small>Transactional publication to an aggregator</small></a>
    <a href="./integration-dependencies"><span>12 · Relationships</span><strong>Integration dependencies</strong><small>Requirements, alternatives, and subsets</small></a>
  </div>
</template>

<style scoped>
.deep-dive-index {
  display: grid;
  flex: 1;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  align-content: center;
}

.deep-dive-index a {
  display: flex;
  min-height: 122px;
  flex-direction: column;
  gap: 6px;
  border: 1px solid var(--ord-sep);
  border-top: 4px solid var(--ord-brand-2);
  border-radius: var(--ord-radius);
  background: var(--ord-card-bg);
  padding: 14px 16px;
  text-decoration: none;
}

.deep-dive-index a:nth-child(2),
.deep-dive-index a:nth-child(5) { border-top-color: var(--ord-sky); }
.deep-dive-index a:nth-child(4),
.deep-dive-index a:nth-child(6),
.deep-dive-index a:nth-child(11) { border-top-color: var(--ord-coral); }
.deep-dive-index a:nth-child(7),
.deep-dive-index a:nth-child(9) { border-top-color: #9b7cff; }
.deep-dive-index a:nth-child(8) { border-top-color: var(--ord-lime); }
.deep-dive-index a:nth-child(10) { border-top-color: var(--ord-brand); }
.deep-dive-index a:nth-child(12) { border-top-color: var(--ord-sky); }

.deep-dive-index a:hover {
  border-color: var(--ord-brand-2);
  transform: translateY(-2px);
}

.deep-dive-index span {
  color: var(--ord-brand);
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.deep-dive-index strong {
  margin-top: auto;
  color: var(--ord-text);
  font-size: 17px;
  line-height: 1.15;
}

.deep-dive-index small {
  color: var(--ord-muted);
  font-size: 12px;
  line-height: 1.25;
}
</style>
