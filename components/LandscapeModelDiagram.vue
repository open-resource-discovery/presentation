<template>
  <figure class="landscape-model" aria-label="Authoritative ORD system landscape model, including namespaces and cardinalities">
    <!-- Unmodified diagram from ord-public/static/img/system-landscape/system.drawio.svg (1.16.4). -->
    <img src="/img/spec/system-landscape.drawio.svg" alt="System instances belong to deployments and system types; types connect to products, vendors, and namespaces. ORD resources are provided by instances and can declare a minimum system version." />
    <figcaption><span><b>Static context</b> · types, versions, products, namespaces</span><span><b>Dynamic context</b> · deployments and instances</span><a href="https://open-resource-discovery.org/spec-v1/concepts/system-landscape-model" target="_blank" rel="noopener noreferrer">Specification diagram ↗</a></figcaption>
  </figure>
</template>

<style scoped>
.landscape-model { display: flex; flex: 1; min-height: 0; flex-direction: column; gap: 12px; margin: 0; }
.landscape-model img { display: block; flex: 1; width: 100%; min-height: 0; object-fit: contain; }
figcaption { display: flex; align-items: center; justify-content: space-between; gap: 16px; color: var(--ord-muted); font-size: 13px; }
figcaption b { color: var(--ord-text); }
figcaption a { border: 0; color: var(--ord-brand); font-size: 12px; }
</style>
