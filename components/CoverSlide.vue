<script setup lang="ts">
import { useId } from 'vue'

/* Landscape graph background: a hub about one third from the top, with nearest-neighbour edges. */
const graphHub: [number, number] = [1180, 200]
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

// SVG ids must be unique per instance; Slidev keeps neighbouring slides in the DOM.
const uid = `cover-${useId()}`
</script>

<template>
  <div class="slide-shell ord-cover dark-slide">
    <div class="cover-bg" aria-hidden="true">
      <svg viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient :id="`${uid}-fade-g`" cx="0.92" cy="0.28" r="0.7">
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
        <g class="cover-graph" :mask="`url(#${uid}-fade)`">
          <line v-for="([a, b], i) in graphEdges" :key="i" :x1="graphNodes[a][0]" :y1="graphNodes[a][1]" :x2="graphNodes[b][0]" :y2="graphNodes[b][1]" :class="{ near: a === 0 || b === 0 }" />
          <circle :cx="graphHub[0]" :cy="graphHub[1]" r="26" class="halo" />
          <circle v-for="(n, i) in graphNodes" :key="`n${i}`" :cx="n[0]" :cy="n[1]" :r="i === 0 ? 8 : graphNear.has(i) ? 4.5 : 3.5" :class="{ hub: i === 0 }" />
        </g>
      </svg>
    </div>
    <DeckLogo></DeckLogo>
    <div class="cover-grid">
      <section class="cover-copy">
        <p class="cover-index">Connected metadata, open discovery</p>
        <h1>Open Resource Discovery</h1>
        <p class="lead">
          An open protocol to connect fragmented metadata, building on the industry standards that describe application and service resources.
        </p>
        <a class="cover-spec-link" href="https://open-resource-discovery.org/spec-v1" target="_blank" rel="noopener noreferrer">
          Read the ORD specification <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>
        </a>
      </section>
    </div>
    <nav class="cover-agenda" aria-label="Presentation agenda">
      <a href="./why-section"><small>01</small><span>Connect fragmented metadata</span></a>
      <a href="./how-section"><small>02</small><span>How it works</span></a>
      <a href="./enables-section"><small>03</small><span>What it enables</span></a>
      <a href="./deep-dive-section"><small>04</small><span>Deep dives</span></a>
      <a href="./tools-ecosystem-section"><small>05</small><span>Tools &amp; ecosystem</span></a>
    </nav>
  </div>
</template>
