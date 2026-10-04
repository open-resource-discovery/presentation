<script setup>
import { useId } from 'vue'

const id = useId()
const dependencyMarker = id + '-dependency'
const proposalMarker = id + '-proposal'
const interactionMarker = id + '-interaction'
</script>

<template>
  <figure class="ai-diagram" aria-label="AI and Agents: interaction contracts and external dependencies, including the Skills and Plugins proposal">
    <svg viewBox="0 0 1136 474" role="img" aria-label="Agents expose an interaction API and declare Integration Dependencies. The proposal lets Skills and Plugins declare dependencies through the same model, referencing external APIs, Events, and Capabilities.">
      <desc>This is a concept model, not one deployed workflow. An Agent links to its interaction API through exposedApiResources and to Integration Dependencies through integrationDependencies. Each dependency has aspects that reference external API Resources, Event Resources, or Capabilities. Generic Capability references are supported in ORD 1.16.4. PR 102 adds standardized agent-skill and agent-plugin types, their ZIP definitions, Capability.integrationDependencies, and plugin subsets. The dashed Capability-to-dependency edge marks that proposed property. Each Agent or Capability can reference its own Integration Dependencies; the central node represents the common concept.</desc>
      <defs>
        <marker :id="dependencyMarker" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path class="dependency-head" d="M0 0L10 5L0 10Z" /></marker>
        <marker :id="proposalMarker" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path class="proposal-head" d="M0 0L10 5L0 10Z" /></marker>
        <marker :id="interactionMarker" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path class="interaction-head" d="M0 0L10 5L0 10Z" /></marker>
      </defs>

      <text class="column-label" x="20" y="20">Described resources</text>
      <text class="column-label" x="406" y="20">Declared requirements</text>
      <text class="column-label" x="840" y="20">External resources</text>

      <path class="interaction-edge" d="M170 146V208" :marker-end="'url(#' + interactionMarker + ')'" />
      <text class="field-label interaction-label" x="184" y="180">exposedApiResources</text>
      <path class="dependency-edge" d="M320 98H380V216H406" :marker-end="'url(#' + dependencyMarker + ')'" />
      <text class="field-label dependency-label" x="392" y="178">integrationDependencies</text>
      <path class="proposal-edge" d="M320 412H380V252H406" :marker-end="'url(#' + proposalMarker + ')'" />
      <text class="field-label proposal-label" x="392" y="346">integrationDependencies</text>

      <path class="dependency-edge" d="M690 206H770V98H840" :marker-end="'url(#' + dependencyMarker + ')'" />
      <path class="dependency-edge" d="M690 244H840" :marker-end="'url(#' + dependencyMarker + ')'" />
      <path class="dependency-edge" d="M690 268H770V412H840" :marker-end="'url(#' + dependencyMarker + ')'" />
      <text class="field-label dependency-label" x="784" y="178">apiResources</text>
      <text class="field-label dependency-label" x="765" y="230" text-anchor="middle">eventResources</text>
      <text class="field-label dependency-label" x="784" y="338">capabilities</text>

      <g class="agent-node" transform="translate(20 50)">
        <rect width="300" height="96" rx="8" />
        <text class="kind" x="20" y="26">Agent</text>
        <text class="name" x="20" y="57">Fulfillment Agent</text>
        <text class="detail" x="20" y="82">Autonomous task execution</text>
      </g>
      <g class="api-node" transform="translate(20 208)">
        <rect width="300" height="96" rx="8" />
        <text class="kind" x="20" y="26">API Resource · A2A example</text>
        <text class="name" x="20" y="57">Interaction API</text>
        <text class="detail" x="20" y="82">Agent Card definition</text>
      </g>
      <g class="capability-node" transform="translate(20 364)">
        <rect width="300" height="96" rx="8" />
        <text class="kind" x="20" y="26">Capability · proposal</text>
        <text class="name" x="20" y="57">Skill / Plugin</text>
        <text class="detail" x="20" y="82">Declares its own needs</text>
      </g>
      <g class="dependency-node" transform="translate(406 196)">
        <rect width="284" height="96" rx="8" />
        <text class="name" x="20" y="34"><tspan>Integration</tspan><tspan x="20" dy="26">Dependency</tspan></text>
        <text class="detail" x="20" y="84">Aspects reference ORD IDs</text>
      </g>
      <g class="api-node" transform="translate(840 50)">
        <rect width="272" height="96" rx="8" />
        <text class="kind" x="20" y="26">API Resource</text>
        <text class="name" x="20" y="57">REST / MCP / …</text>
        <text class="detail" x="20" y="82">MCP subsets select tools</text>
      </g>
      <g class="event-node" transform="translate(840 196)">
        <rect width="272" height="96" rx="8" />
        <text class="kind" x="20" y="26">Event Resource</text>
        <text class="name" x="20" y="57">Business events</text>
        <text class="detail" x="20" y="82">e.g. Order Created</text>
      </g>
      <g class="capability-node" transform="translate(840 364)">
        <rect width="272" height="96" rx="8" />
        <text class="kind" x="20" y="26">Capability · proposal</text>
        <text class="name" x="20" y="57">Skills / Plugins</text>
        <text class="detail" x="20" y="82">Reusable behavior</text>
      </g>
    </svg>
  </figure>
</template>

<style scoped>
.ai-diagram { display: flex; flex: 1; min-height: 0; flex-direction: column; justify-content: center; margin: 0; }
svg { display: block; width: 100%; min-height: 0; flex: 1; }
text { fill: var(--ord-text); font-family: var(--ord-font); }
.agent-node rect, .api-node rect, .event-node rect, .capability-node rect, .dependency-node rect { stroke-width: 2; }
.agent-node rect { fill: var(--ord-accent-coral-bg); stroke: var(--ord-accent-coral); }
.api-node rect { fill: var(--ord-accent-sky-bg); stroke: var(--ord-accent-sky); }
.event-node rect { fill: var(--ord-accent-teal-bg); stroke: var(--ord-accent-teal); }
.capability-node rect { fill: var(--ord-accent-violet-bg); stroke: #8061bd; stroke-dasharray: 6 4; }
.dependency-node rect { fill: var(--ord-card-bg); stroke: var(--ord-border); }
.column-label { fill: var(--ord-muted); font-size: 17px; font-weight: 650; }
.kind { fill: var(--ord-muted); font-size: 16px; font-weight: 650; }
.capability-node .kind { fill: #6b49bc; }
.name { font-size: 23px; font-weight: 750; }
.detail { fill: var(--ord-muted); font-size: 17px; }
.field-label { font-family: var(--ord-mono); font-size: 15px; }
.interaction-edge, .dependency-edge, .proposal-edge { fill: none; stroke-width: 2; stroke-linejoin: round; }
.interaction-edge { stroke: var(--ord-faint); }
.interaction-head { fill: var(--ord-faint); }
.interaction-label { fill: var(--ord-muted); }
.dependency-edge { stroke: #c6503b; }
.dependency-head { fill: #c6503b; }
.dependency-label { fill: #ac4432; }
.proposal-edge { stroke: #8061bd; stroke-dasharray: 6 4; }
.proposal-head { fill: #8061bd; }
.proposal-label { fill: #6b49bc; }
</style>
