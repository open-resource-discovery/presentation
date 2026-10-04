<script setup>
const categories = [
  {
    title: 'Identity & context',
    description: 'Locate, identify, and organize',
    topics: [
      { to: 'landscape-model', title: 'Landscape model', description: 'Systems, tenants, and resources' },
      { to: 'namespace-concept', title: 'Namespaces', description: 'Ownership and governance' },
      { to: 'ord-identifiers', title: 'ORD and related IDs', description: 'Identity and external references' },
      { to: 'grouping-packaging', title: 'Grouping & packaging', description: 'Publishing, access, and taxonomy' },
    ],
  },
  {
    title: 'Change & views',
    description: 'Track change and resolve context',
    topics: [
      { to: 'versioning-lifecycle', title: 'Versioning & lifecycle', description: 'Compatible change and maturity' },
      { to: 'api-lifecycle', title: 'API lifecycle example', description: 'Successors, migration, retirement' },
      { to: 'perspective-resolution', title: 'Perspectives', description: 'Static baselines and tenant views' },
      { to: 'ord-overlays', title: 'ORD Overlays', description: 'Enrich an existing definition' },
    ],
  },
  {
    title: 'Discovery & access',
    description: 'Publish, retrieve, and connect',
    topics: [
      { to: 'pull-sequence', title: 'Pull sequence', description: 'Configuration to resource definitions' },
      { to: 'push-preview', title: 'Push proposal', description: 'Stage, validate, publish atomically' },
      { to: 'visibility', title: 'Visibility', description: 'Public, internal, and private metadata' },
      { to: 'integration-dependencies', title: 'Integration dependencies', description: 'Requirements and alternatives' },
    ],
  },
  {
    title: 'AI & extensibility',
    description: 'Describe behavior and add meaning',
    topics: [
      { to: 'ai-discovery', title: 'AI & Agents', description: 'Interaction APIs and dependencies' },
      { to: 'skills-preview', title: 'Skills & Plugins proposal', description: 'Reusable, discoverable behavior' },
      { to: 'ai-enrichment', title: 'AI enrichment', description: 'Hints and definition guidance' },
      { to: 'ord-extensibility', title: 'Extensibility', description: 'Custom types, metadata, definitions' },
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
.deep-dive-index { display: grid; flex: 1; min-height: 0; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; align-content: center; }
.topic-category { --category-accent: var(--ord-accent-sky); --category-bg: var(--ord-accent-sky-bg); display: grid; min-height: 476px; grid-template-rows: 94px repeat(4, minmax(0, 1fr)); border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: var(--ord-card-bg); overflow: hidden; }
.topic-category:nth-child(2) { --category-accent: var(--ord-accent-teal); --category-bg: var(--ord-accent-teal-bg); }
.topic-category:nth-child(3) { --category-accent: var(--ord-accent-coral); --category-bg: var(--ord-accent-coral-bg); }
.topic-category:nth-child(4) { --category-accent: var(--ord-accent-violet); --category-bg: var(--ord-accent-violet-bg); }
header { min-height: 94px; display: flex; flex-direction: column; gap: 8px; border-top: 4px solid var(--category-accent); background: var(--category-bg); padding: 17px 16px; }
h3 { color: var(--ord-text); font-size: 19px; font-weight: 750; line-height: 1.2; }
header p { color: var(--ord-muted); font-size: 13px; line-height: 1.35; }
.topic-category a { position: relative; display: flex; min-height: 0; flex-direction: column; justify-content: center; gap: 7px; border: 0; border-top: 1px solid var(--ord-sep); color: var(--ord-text); padding: 13px 28px 13px 16px; text-decoration: none; }
.topic-category a:hover { background: var(--category-bg); }
.topic-category a:focus-visible { outline: 2px solid var(--ord-brand); outline-offset: -4px; background: var(--category-bg); }
strong { font-size: 17px; font-weight: 650; line-height: 1.2; }
small { color: var(--ord-muted); font-size: 13px; line-height: 1.35; }
.topic-category a span { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); color: var(--ord-brand); font-size: 16px; }
</style>
