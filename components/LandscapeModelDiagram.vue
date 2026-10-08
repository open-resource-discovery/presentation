<script setup lang="ts">
import { assetUrl } from '../utils/asset-url'
</script>

<template>
  <figure class="landscape-model" aria-label="Authoritative ORD system landscape model, including namespaces and cardinalities">
    <!-- Unmodified diagram from ord-public/static/img/system-landscape/system.drawio.svg (1.16.4). -->
    <img :src="assetUrl('img/spec/system-landscape.drawio.svg')" alt="System instances belong to deployments and system types; types connect to products, vendors, and namespaces. ORD resources are provided by instances and can declare a minimum system version." />
    <figcaption><span><b>Static context</b> · types, versions, products, namespaces</span><span><b>Dynamic context</b> · deployments and instances</span></figcaption>
  </figure>
</template>

<style scoped>
.landscape-model { display: flex; flex: 1; min-height: 0; flex-direction: column; gap: 12px; margin: 0; }
.landscape-model img { display: block; flex: 1; width: 100%; min-height: 0; object-fit: contain; }
figcaption { display: flex; align-items: center; justify-content: space-between; gap: 16px; color: var(--ord-muted); font-size: 13px; }
figcaption b { color: var(--ord-text); }
</style>
