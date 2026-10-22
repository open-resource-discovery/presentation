<script setup>
import { useId } from 'vue'
import graph from '../data/diagrams/agent-example.json'

const id = useId()
</script>

<template>
  <figure class="ai-diagram" aria-label="AI and Agents: interaction contracts and external dependencies, including Agent Skills, Agent Plugins, and Workflows">
    <svg :viewBox="graph.viewBox" role="img" :aria-labelledby="id + '-title ' + id + '-desc'">
      <title :id="id + '-title'">Fulfillment Agent: interaction and external dependencies</title>
      <desc :id="id + '-desc'">{{ graph.description }}</desc>
      <defs>
        <marker v-for="type in ['dependency', 'interaction']" :key="type" :id="id + '-' + type" viewBox="0 0 10 10" refX="10" refY="5" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" orient="auto"><path :class="type + '-head'" d="M0 0L10 5L0 10Z" /></marker>
      </defs>
      <text v-for="column in graph.columns" :key="column.x" class="column-label" :x="column.x" y="20">{{ column.label }}</text>
      <path v-for="link in graph.links" :key="link.from + '-' + link.to" :class="link.type + '-edge'" :d="link.path" :marker-end="'url(#' + id + '-' + link.type + ')'" />
      <text v-for="label in graph.labels" :key="label.x + '-' + label.y" :class="['field-label', label.type + '-label']" :x="label.x" :y="label.y" :text-anchor="label.anchor">{{ label.text }}</text>
      <g v-for="node in graph.nodes" :key="node.id" :class="node.type + '-node'" :transform="'translate(' + node.x + ' ' + node.y + ')'">
        <rect :width="node.width" height="96" rx="8" />
        <text v-if="node.kind" class="kind" x="20" y="26">{{ node.kind }}</text>
        <text class="name" x="20" :y="node.nameY"><tspan v-for="(line, index) in node.name" :key="line" x="20" :dy="index ? 26 : 0">{{ line }}</tspan></text>
        <text class="detail" x="20" y="82">{{ node.detail }}</text>
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
.capability-node rect { fill: var(--ord-accent-violet-bg); stroke: #8061bd; }
.dependency-node rect { fill: var(--ord-card-bg); stroke: var(--ord-border); }
.column-label { fill: var(--ord-muted); font-size: 17px; font-weight: 650; }
.kind { fill: var(--ord-muted); font-size: 16px; font-weight: 650; }
.capability-node .kind { fill: #6b49bc; }
.name { font-size: 23px; font-weight: 750; }
.detail { fill: var(--ord-muted); font-size: 17px; }
.field-label { font-family: var(--ord-mono); font-size: 15px; }
.interaction-edge, .dependency-edge { fill: none; stroke-width: 2; stroke-linejoin: round; }
.interaction-edge { stroke: var(--ord-faint); }
.interaction-head { fill: var(--ord-faint); }
.interaction-label { fill: var(--ord-muted); }
.dependency-edge { stroke: #c6503b; }
.dependency-head { fill: #c6503b; }
.dependency-label { fill: #ac4432; }
</style>
