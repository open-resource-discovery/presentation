<script setup>
import { useId } from 'vue'
const id = useId()
const dependencyMarker = `${id}-dependency`
const proposalMarker = `${id}-proposal`
const contextMarker = `${id}-context`
</script>

<template>
  <figure class="ai-diagram" aria-label="Fulfillment Agent resource graph with released API dependencies and proposed Skill dependencies">
    <svg viewBox="0 0 1136 410" role="img" aria-label="An Agent depends directly on an Orders API and, in the Skill proposal, on an Order Lookup Skill that needs an MCP Server">
      <desc>The Fulfillment Provider describes an Agent. It declares an Integration Dependency referencing the Orders REST API on another Provider. The proposed skill path references an Order Lookup Capability published by a separate Skill Library Provider, which depends on an Orders MCP Server API Resource. Both API Resources reference the Order Entity Type through exposedEntityTypes. The Skill path is proposed in PR 102 and is not released in ORD 1.16.4.</desc>
      <defs>
        <marker :id="dependencyMarker" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path class="dependency-head" d="M0 0L10 5L0 10Z" /></marker>
        <marker :id="proposalMarker" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path class="proposal-head" d="M0 0L10 5L0 10Z" /></marker>
        <marker :id="contextMarker" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="context-head" d="M0 0L10 5L0 10Z" /></marker>
      </defs>

      <rect class="provider-frame" x="20" y="12" width="496" height="164" rx="8" />
      <rect class="provider-frame" x="20" y="192" width="496" height="140" rx="8" />
      <rect class="provider-frame" x="654" y="12" width="462" height="376" rx="8" />
      <text class="provider-title" x="42" y="43">Fulfillment system · Provider</text>
      <text class="provider-title" x="42" y="223">Skill library · Provider</text>
      <text class="provider-title" x="676" y="43">Order system · Provider</text>

      <path class="dependency-edge" d="M342 110H676" :marker-end="`url(#${dependencyMarker})`" />
      <text class="dependency-label" x="585" y="80" text-anchor="middle"><tspan x="585">API</tspan><tspan x="585" dy="18">dependency</tspan></text>
      <path class="proposal-edge" d="M42 110H8V280H256" :marker-end="`url(#${proposalMarker})`" />
      <text class="proposal-label" x="42" y="263">Skill dependency</text>
      <path class="proposal-edge" d="M506 280H600V230H676" :marker-end="`url(#${proposalMarker})`" />
      <text class="proposal-label" x="585" y="201" text-anchor="middle"><tspan x="585">API</tspan><tspan x="585" dy="18">dependency</tspan></text>
      <path class="context-edge" d="M1086 110H1100V294H996V320" :marker-end="`url(#${contextMarker})`" />
      <path class="context-edge" d="M860 270V320" :marker-end="`url(#${contextMarker})`" />

      <g class="agent-node" transform="translate(42 70)">
        <rect width="300" height="80" rx="8" />
        <text class="kind" x="16" y="24">Agent</text>
        <text class="name" x="16" y="52">Fulfillment Agent</text>
        <text class="detail" x="16" y="72">Plan a shipment</text>
      </g>
      <g class="skill-node" transform="translate(256 240)">
        <rect width="250" height="80" rx="8" />
        <text class="kind" x="16" y="25">Capability · proposed</text>
        <text class="skill-name" x="16" y="54">Order Lookup Skill</text>
      </g>
      <text class="source-note" x="42" y="352">Dependencies reference resources by ORD ID.</text>
      <text class="source-note" x="42" y="378">MCP subsets can select specific tools.</text>

      <g class="api-node" transform="translate(676 70)">
        <rect width="410" height="80" rx="8" />
        <text class="kind" x="16" y="24">API Resource · REST</text>
        <text class="name" x="16" y="52">Orders API</text>
        <text class="detail" x="16" y="72">OpenAPI definition</text>
      </g>
      <g class="api-node" transform="translate(676 190)">
        <rect width="410" height="80" rx="8" />
        <text class="kind" x="16" y="24">API Resource · MCP</text>
        <text class="name" x="16" y="52">Orders MCP Server</text>
        <text class="detail" x="16" y="72">MCP Server Card definition</text>
      </g>
      <rect class="label-background" x="770" y="281" width="228" height="24" />
      <text class="context-label" x="884" y="299" text-anchor="middle">exposedEntityTypes</text>
      <g class="taxonomy-node" transform="translate(776 320)">
        <rect width="260" height="58" rx="8" />
        <text class="small-name" x="16" y="25">Order Entity Type</text>
        <text class="detail" x="16" y="47">Shared business semantics</text>
      </g>
    </svg>
  </figure>
</template>

<style scoped>
.ai-diagram { display: flex; flex: 1; min-height: 0; flex-direction: column; justify-content: center; gap: 8px; margin: 0; }
svg { display: block; width: 100%; min-height: 0; flex: 1; }
text { fill: var(--ord-text); font-family: var(--ord-font); font-size: 18px; }
.provider-frame { fill: var(--ord-provider-soft); stroke: var(--ord-provider); stroke-width: 1.5; }
.provider-title { fill: var(--ord-provider); font-size: 20px; font-weight: 750; }
.agent-node rect, .api-node rect, .skill-node rect, .taxonomy-node rect { fill: var(--ord-pill-bg); stroke: var(--ord-border); stroke-width: 1.5; }
.agent-node rect { stroke: var(--ord-accent-coral); stroke-width: 2; fill: var(--ord-accent-coral-bg); }
.api-node rect { stroke: var(--ord-accent-sky); stroke-width: 2; fill: var(--ord-accent-sky-bg); }
.skill-node rect { stroke: #8061bd; stroke-width: 2; stroke-dasharray: 6 4; fill: var(--ord-accent-violet-bg); }
.taxonomy-node rect { stroke: var(--ord-border); }
.kind { fill: var(--ord-muted); font-size: 16px; font-weight: 650; }
.name { font-size: 23px; font-weight: 750; }
.skill-name { font-size: 20px; font-weight: 750; }
.skill-node .kind { fill: #6b49bc; }
.detail, .source-note { fill: var(--ord-muted); font-size: 17px; }
.small-name { font-size: 20px; font-weight: 700; }
.dependency-edge, .proposal-edge, .context-edge { fill: none; stroke-width: 2; }
.dependency-edge { stroke: #c6503b; }
.proposal-edge { stroke: #8061bd; stroke-dasharray: 6 4; }
.context-edge { stroke: var(--ord-faint); }
.dependency-head { fill: #c6503b; }
.proposal-head { fill: #8061bd; }
.context-head { fill: var(--ord-faint); }
.dependency-label { fill: #ac4432; font-size: 17px; font-weight: 650; }
.proposal-label { fill: #6b49bc; font-size: 16px; font-weight: 650; }
.context-label { fill: var(--ord-muted); font-size: 17px; }
.label-background { fill: var(--ord-provider-soft); }
</style>
