<script setup lang="ts">
import { useId } from 'vue'

withDefaults(defineProps<{ variant?: 'graph' | 'orbit' }>(), { variant: 'graph' })

/* Landscape graph background: a hub about one third from the top, with nearest-neighbour edges.
   Shared by the cover and the divider slides so dark slides share one background. */
const graphHub: [number, number] = [1110, 170]
const graphNodes: [number, number][] = [
  graphHub,
  [1050, 110], [1280, 70], [1340, 240], [1240, 350], [1070, 310], [990, 200],
  [910, 50], [1130, -20], [1410, 130], [1430, 370], [1330, 460], [1140, 470], [950, 410], [850, 290], [810, 140], [730, 20],
  [670, 210], [690, 410], [850, 550], [1050, 610], [1270, 610], [1410, 580], [1450, -20], [560, 80], [570, 330],
]
const graphEdges = (() => {
  const dist = (a: number, b: number) => Math.hypot(graphNodes[a][0] - graphNodes[b][0], graphNodes[a][1] - graphNodes[b][1])
  const seen = new Set<string>()
  const edges: [number, number][] = []
  graphNodes.forEach((_, a) => {
    const nearest = graphNodes.map((__, b) => b).filter(b => b !== a).sort((x, y) => dist(a, x) - dist(a, y))
    nearest.slice(0, a === 0 ? 6 : 2).forEach((b) => {
      const key = [a, b].sort().join('-')
      if (!seen.has(key)) {
        seen.add(key)
        edges.push([a, b])
      }
    })
  })
  return edges
})()
const graphNear = new Set(graphEdges.filter(([a, b]) => a === 0 || b === 0).flat())

/* Orbit variant: discovery rings around an aggregation point, one third from the top. */
const orbitCenter: [number, number] = [1110, 170]
const orbitRings = [96, 190, 300, 420, 550]
const orbitNodes = [
  [0, 30], [0, 200], [1, 120], [1, 250], [1, 340], [2, 165], [2, 215], [2, 300], [3, 140], [3, 192], [3, 268], [4, 172], [4, 228],
].map(([ring, deg]) => {
  const r = orbitRings[ring]
  const a = (deg * Math.PI) / 180
  return { x: orbitCenter[0] + r * Math.cos(a), y: orbitCenter[1] + r * Math.sin(a), spoke: ring <= 2 }
})

// SVG ids must be unique per instance; Slidev keeps neighbouring slides in the DOM.
const uid = `cover-${useId()}`
</script>

<template>
  <div class="cover-bg" aria-hidden="true">
    <svg viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient :id="`${uid}-fade-g`" cx="0.867" cy="0.236" r="0.7">
          <stop offset="0" stop-color="#fff" />
          <stop offset="0.3" stop-color="#fff" stop-opacity="0.55" />
          <stop offset="0.65" stop-color="#fff" stop-opacity="0.12" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
        <mask :id="`${uid}-fade`" maskUnits="userSpaceOnUse" x="0" y="0" width="1280" height="720">
          <rect width="1280" height="720" :fill="`url(#${uid}-fade-g)`" />
        </mask>
        <linearGradient :id="`${uid}-dots-g`" x1="0.2" y1="0" x2="0.8" y2="0.15">
          <stop offset="0" stop-color="#fff" stop-opacity="0" />
          <stop offset="1" stop-color="#fff" />
        </linearGradient>
        <mask :id="`${uid}-dots-m`" maskUnits="userSpaceOnUse" x="0" y="0" width="1280" height="720">
          <rect width="1280" height="720" :fill="`url(#${uid}-dots-g)`" />
        </mask>
        <pattern :id="`${uid}-dots`" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#9fb8b5" />
        </pattern>
      </defs>
      <rect class="cover-dot-grid" width="1280" height="720" :fill="`url(#${uid}-dots)`" :mask="`url(#${uid}-dots-m)`" />
      <g v-if="variant === 'graph'" class="cover-graph" :mask="`url(#${uid}-fade)`">
        <line v-for="([a, b], i) in graphEdges" :key="i" :x1="graphNodes[a][0]" :y1="graphNodes[a][1]" :x2="graphNodes[b][0]" :y2="graphNodes[b][1]" :class="{ near: a === 0 || b === 0 }" />
        <circle :cx="graphHub[0]" :cy="graphHub[1]" r="26" class="halo" />
        <circle v-for="(n, i) in graphNodes" :key="`n${i}`" :cx="n[0]" :cy="n[1]" :r="i === 0 ? 8 : graphNear.has(i) ? 4.5 : 3.5" :class="{ hub: i === 0 }" />
      </g>
      <g v-else class="cover-orbit" :mask="`url(#${uid}-fade)`">
        <circle v-for="r in orbitRings" :key="r" :cx="orbitCenter[0]" :cy="orbitCenter[1]" :r="r" class="ring" />
        <line v-for="(n, i) in orbitNodes.filter(n => n.spoke)" :key="`s${i}`" :x1="orbitCenter[0]" :y1="orbitCenter[1]" :x2="n.x" :y2="n.y" class="spoke" />
        <circle v-for="(n, i) in orbitNodes" :key="`n${i}`" :cx="n.x" :cy="n.y" r="4" class="node" />
        <circle :cx="orbitCenter[0]" :cy="orbitCenter[1]" r="8" class="hub" />
      </g>
    </svg>
  </div>
</template>
