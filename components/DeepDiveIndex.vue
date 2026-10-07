<script setup>
const categories = [
  {
    title: 'Landscape & identity',
    description: 'Place, identify, organize',
    topics: [
      { to: 'landscape-model', title: 'Landscape model', description: 'Systems, tenants, resources' },
      { to: 'namespace-concept', title: 'Namespaces', description: 'Ownership and governance' },
      { to: 'ord-identifiers', title: 'ORD IDs & related IDs', description: 'How IDs work · 2 slides' },
      { to: 'grouping-packaging', title: 'Grouping & packaging', description: 'Packages, bundles, taxonomy' },
      { to: 'perspective-resolution', title: 'Perspectives', description: 'Baselines and tenant views' },
    ],
  },
  {
    title: 'Resource patterns',
    description: 'Dependencies, data, agents',
    topics: [
      { to: 'integration-dependencies', title: 'Integration dependencies', description: 'Requirements and alternatives' },
      { to: 'data-products', title: 'Data Products', description: 'Ownership, lineage, ports' },
      { to: 'ai-discovery', title: 'AI & Agents', description: 'Interaction APIs, dependencies' },
      { to: 'skills-preview', title: 'Skills & API metadata', description: 'Reusable behavior · 2 slides' },
    ],
  },
  {
    title: 'Change & extension',
    description: 'Evolve and enrich safely',
    topics: [
      { to: 'versioning-lifecycle', title: 'Versioning & lifecycle', description: 'Compatible change, maturity' },
      { to: 'api-lifecycle', title: 'API lifecycle example', description: 'Successors, retirement' },
      { to: 'ord-overlays', title: 'ORD Overlays', description: 'Enrich an existing definition' },
      { to: 'ai-enrichment', title: 'AI enrichment', description: 'Hints and definition guidance' },
      { to: 'ord-extensibility', title: 'Extensibility', description: 'Labels, groups, custom types' },
    ],
  },
  {
    title: 'Publishing & governance',
    description: 'Control, validate, distribute',
    topics: [
      { to: 'visibility', title: 'Visibility', description: 'Public, internal, private' },
      { to: 'policy-validation', title: 'Policy & validation', description: 'Declare, check, aggregate' },
      { to: 'pull-sequence', title: 'Pull & Discovery API', description: 'Crawl, resolve, serve · 2 slides' },
      { to: 'push-preview', title: 'Push proposal', description: 'Stage, validate, publish' },
    ],
  },
]
</script>

<template>
  <nav class="deep-dive-index" aria-label="Deep dives by topic">
    <section v-for="category in categories" :key="category.title" class="topic-category" :aria-label="category.title">
      <header>
        <h3>{{ category.title }}</h3>
        <p>{{ category.description }}</p>
      </header>
      <a v-for="topic in category.topics" :key="topic.to" :href="'./' + topic.to">
        <strong>{{ topic.title }}</strong>
        <small>{{ topic.description }}</small>
        <span aria-hidden="true">→</span>
      </a>
    </section>
  </nav>
</template>

<style scoped>
.deep-dive-index { display: grid; flex: 1; min-height: 0; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; align-content: stretch; align-items: stretch; }
.topic-category { --category-accent: var(--ord-accent-sky); --category-bg: var(--ord-accent-sky-bg); display: flex; min-height: 0; flex-direction: column; gap: 8px; border: 1px solid var(--ord-sep); border-top: 4px solid var(--category-accent); border-radius: var(--ord-radius); background: var(--category-bg); padding: 0 12px 12px; }
.topic-category:nth-child(2) { --category-accent: var(--ord-accent-teal); --category-bg: var(--ord-accent-teal-bg); }
.topic-category:nth-child(3) { --category-accent: var(--ord-accent-coral); --category-bg: var(--ord-accent-coral-bg); }
.topic-category:nth-child(4) { --category-accent: var(--ord-accent-violet); --category-bg: var(--ord-accent-violet-bg); }
header { display: flex; min-height: 54px; flex: 0 0 54px; flex-direction: column; justify-content: center; gap: 3px; padding: 8px 2px 4px; }
h3 { color: var(--ord-text); font-size: 19px; font-weight: 800; line-height: 1.15; letter-spacing: -0.01em; white-space: nowrap; }
header p { color: var(--ord-muted); font-size: 12.5px; font-weight: 600; line-height: 1.35; white-space: nowrap; }
.topic-category a { position: relative; display: flex; min-height: 0; flex: 1; flex-direction: column; justify-content: center; gap: 4px; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: #fff; color: var(--ord-text); padding: 8px 28px 8px 14px; text-decoration: none; }
.topic-category a:hover { border-color: var(--category-accent); background: #fff; box-shadow: 0 2px 10px rgba(10, 15, 18, 0.08); }
.topic-category a:focus-visible { outline: 2px solid var(--ord-brand); outline-offset: 2px; background: #fff; }
strong { font-size: 16px; font-weight: 650; line-height: 1.2; }
small { color: var(--ord-muted); font-size: 12.5px; line-height: 1.35; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.topic-category a span { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); color: var(--ord-brand); font-size: 16px; }
</style>
