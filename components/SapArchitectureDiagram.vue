<script setup lang="ts">
const position = (x: number, y: number, width: number, height: number) => ({
  left: `${x / 1136 * 100}%`, top: `${y / 416 * 100}%`,
  width: `${width / 1136 * 100}%`, height: `${height / 416 * 100}%`,
})
const consumers = ['Joule', 'Joule Studio', 'SAP BTP', 'SAP Business Data Cloud', 'SAP Event Hub', '…']
</script>

<template>
  <figure class="sap-metadata-architecture" aria-label="Shared SAP applications publish both static and dynamic metadata. UMS receives both perspectives and other landscape metadata; SAP Business Accelerator Hub receives only static metadata. Knowledge Graph receives UMS metadata and other metadata sources, and feeds the consumer tools.">
    <div class="architecture-canvas">
      <div class="column-label provider-label" :style="position(0, 0, 244, 20)">Shared providers</div>
      <div class="column-label aggregator-label" :style="position(307, 0, 266, 20)">Aggregators</div>
      <div class="column-label knowledge-label" :style="position(637, 0, 208, 20)">Knowledge integration</div>
      <div class="column-label consumer-label" :style="position(908, 0, 228, 20)">Consumers</div>

      <svg class="metadata-connectors" viewBox="0 0 1136 416" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <marker id="sap-case-provider-arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 10 5 0 10Z" fill="var(--ord-provider)" /></marker>
          <marker id="sap-case-aggregator-arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 10 5 0 10Z" fill="var(--ord-aggregator)" /></marker>
          <marker id="sap-case-other-arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 10 5 0 10Z" fill="var(--ord-faint)" /></marker>
          <marker id="sap-case-knowledge-arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 10 5 0 10Z" fill="var(--ord-brand)" /></marker>
        </defs>
        <path class="provider-edge" data-flow="dynamic-to-ums" d="M230 237H264V164H307" marker-end="url(#sap-case-provider-arrow)" />
        <path class="provider-edge" data-flow="static-to-ums" d="M230 375H283V204H307" marker-end="url(#sap-case-provider-arrow)" />
        <path class="provider-edge" data-flow="static-to-bah" d="M283 375H307" marker-end="url(#sap-case-provider-arrow)" />
        <path class="other-edge" data-flow="other-to-ums" d="M440 74V110" marker-end="url(#sap-case-other-arrow)" />
        <path class="aggregator-edge" data-flow="ums-to-knowledge-graph" d="M573 164H637" marker-end="url(#sap-case-aggregator-arrow)" />
        <path class="other-edge" data-flow="other-to-knowledge-graph" d="M741 74V110" marker-end="url(#sap-case-other-arrow)" />
        <path class="aggregator-edge" data-flow="ums-to-consumers" d="M573 210H609V270H880" />
        <path class="aggregator-edge" data-flow="bah-to-consumers" d="M573 375H880M880 270V375" />
        <path class="aggregator-edge" data-flow="discovery-to-consumers" d="M880 322H908" marker-end="url(#sap-case-aggregator-arrow)" />
        <path class="knowledge-edge" data-flow="knowledge-graph-to-consumers" d="M845 188H880V222H908" marker-end="url(#sap-case-knowledge-arrow)" />
        <circle cx="283" cy="375" r="3" fill="var(--ord-provider)" />
      </svg>

      <section class="shared-provider" :style="position(0, 110, 244, 306)">
        <span class="node-role">ORD Providers</span>
        <h3>Applications / services</h3>
        <div class="provider-output dynamic-output"><strong>Dynamic</strong><span>System-instance metadata</span></div>
        <div class="provider-output static-output"><strong>Static</strong><span>System type / version</span></div>
      </section>

      <aside class="other-source landscape-source" :style="position(307, 30, 266, 44)"><strong>Other landscape metadata</strong><span>BTP destinations / registries</span></aside>
      <aside class="other-source knowledge-source" :style="position(637, 30, 208, 44)"><strong>Other metadata sources</strong></aside>
      <section class="metadata-node ums-node" :style="position(307, 110, 266, 124)">
        <span class="node-role">ORD Aggregator</span><h3>Unified Metadata<br />Service (UMS)</h3><p>Static + dynamic metadata</p>
      </section>
      <section class="metadata-node bah-node" :style="position(307, 314, 266, 102)">
        <span class="node-role">ORD Aggregator</span><h3>SAP Business<br />Accelerator Hub</h3><p>Static catalog only</p>
      </section>
      <section class="metadata-node knowledge-node" :style="position(637, 110, 208, 124)">
        <span class="node-role">Combine metadata</span><h3>Knowledge Graph</h3><p>UMS + other sources</p>
      </section>
      <section class="consumer-node" :style="position(908, 110, 228, 306)">
        <h3>Consumers</h3>
        <ul><li v-for="consumer in consumers" :key="consumer" :aria-label="consumer === '…' ? 'Other consumers' : undefined">{{ consumer }}</li></ul>
      </section>
    </div>
    <figcaption><strong>UMS combines both perspectives; BAH takes the static catalog.</strong><span>Arrows show metadata delivery, not runtime or business-data flow. Knowledge Graph also integrates other metadata sources.</span></figcaption>
  </figure>
</template>

<style scoped>
.sap-metadata-architecture { display: flex; flex: 1; min-height: 0; flex-direction: column; gap: 16px; margin: 0; }
.architecture-canvas { position: relative; flex: 1; min-height: 0; }
.column-label { position: absolute; display: flex; align-items: center; justify-content: center; color: var(--ord-provider); font-size: 12px; font-weight: 750; letter-spacing: .045em; text-align: center; text-transform: uppercase; }
.aggregator-label { color: var(--ord-aggregator); }
.knowledge-label { color: var(--ord-brand); }
.consumer-label { color: var(--ord-consumer); }
.metadata-connectors { position: absolute; z-index: 2; inset: 0; width: 100%; height: 100%; overflow: visible; pointer-events: none; }
.metadata-connectors > path { fill: none; stroke-width: 2; stroke-linejoin: round; stroke-linecap: round; }
.provider-edge { stroke: var(--ord-provider); }
.aggregator-edge { stroke: var(--ord-aggregator); }
.other-edge { stroke: var(--ord-faint); }
.knowledge-edge { stroke: var(--ord-brand); }
.shared-provider { position: absolute; isolation: isolate; padding: 20px 16px 16px; }
.shared-provider::before { position: absolute; z-index: -1; inset: 0; border: 1px solid var(--ord-sep); border-top: 4px solid var(--ord-provider); border-radius: var(--ord-radius); background: var(--ord-provider-soft); content: ""; }
.shared-provider > h3 { color: var(--ord-text); font-size: 20px; line-height: 1.15; margin-top: 7px; }
.node-role { color: var(--ord-provider); font-size: 11px; font-weight: 750; line-height: 1.3; letter-spacing: .025em; text-transform: uppercase; }
/* Match the SVG's provider coordinates, including when the canvas height changes. */
.provider-output { position: absolute; right: 14px; left: 14px; display: flex; height: calc(58 / 306 * 100%); flex-direction: column; justify-content: center; gap: 3px; border: 1px solid color-mix(in srgb, var(--ord-provider) 28%, var(--ord-sep)); border-radius: 5px; background: var(--ord-panel); padding: 8px 12px; }
.dynamic-output { top: calc(98 / 306 * 100%); }
.static-output { bottom: calc(12 / 306 * 100%); }
.provider-output strong { color: var(--ord-text); font-size: 17px; line-height: 1.2; }
.provider-output span { color: var(--ord-muted); font-size: 12px; line-height: 1.25; }
.other-source { position: absolute; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; border: 1px solid var(--ord-sep); border-radius: 5px; background: var(--ord-card-bg); color: var(--ord-muted); padding: 4px 8px; text-align: center; }
.other-source strong { color: var(--ord-muted); font-size: 13px; line-height: 1.25; }
.other-source span { font-size: 12px; line-height: 1.2; }
.metadata-node { --node-color: var(--ord-aggregator); --node-bg: var(--ord-aggregator-soft); position: absolute; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; border: 1px solid var(--ord-sep); border-top: 4px solid var(--node-color); border-radius: var(--ord-radius); background: var(--node-bg); padding: 8px 16px; text-align: center; }
.metadata-node .node-role { color: var(--node-color); }
.metadata-node h3 { color: var(--ord-text); font-size: 20px; line-height: 1.15; }
.metadata-node p { color: var(--ord-muted); font-size: 14px; line-height: 1.3; }
.bah-node h3 { font-size: 19px; }
.knowledge-node { --node-color: var(--ord-brand); --node-bg: var(--ord-accent-teal-bg); }
.consumer-node { position: absolute; display: flex; flex-direction: column; border: 1px solid var(--ord-sep); border-top: 4px solid var(--ord-consumer); border-radius: var(--ord-radius); background: var(--ord-consumer-soft); padding: 14px 10px; }
.consumer-node h3 { color: var(--ord-text); font-size: 18px; line-height: 1.2; padding-bottom: 12px; text-align: center; }
.consumer-node ul { display: flex; flex: 1; min-height: 0; flex-direction: column; gap: 7px; margin: 0; padding: 0; list-style: none; }
.consumer-node li { display: flex; flex: 1; align-items: center; justify-content: center; margin: 0; padding: 2px 7px; border: 1px solid color-mix(in srgb, var(--ord-consumer) 22%, var(--ord-sep)); border-radius: 4px; background: var(--ord-panel); color: var(--ord-text); font-size: 14px; font-weight: 650; line-height: 1.2; text-align: center; }
figcaption { display: flex; flex-direction: column; gap: 4px; color: var(--ord-muted); font-size: 13px; line-height: 1.3; }
figcaption strong { color: var(--ord-text); font-size: 17px; }
</style>
