<script setup lang="ts">
import { assetUrl } from '../utils/asset-url'
</script>

<template>
  <figure class="agent-model-diagram" aria-label="Agent relationship model: ownership, interaction APIs, domain context, and dependencies">
    <!-- Canonical editable model lives in the specification; refresh with npm run sync:diagrams. -->
    <img :src="assetUrl('img/spec/ord-ai-agent.drawio.svg')" alt="An Agent belongs to one Package and can reference Products, Groups, Entity Types, successor Agents, APIs and Integration Dependencies. Dependency aspects can reference Agent Skills and Plugins through Capabilities." />
  </figure>
</template>

<style scoped>
.agent-model-diagram { display: flex; flex: 1; min-height: 0; margin: 0; }
.agent-model-diagram img { display: block; width: 100%; height: 100%; min-height: 0; object-fit: contain; }
</style>
