<script setup lang="ts">
const categories = [
  {
    title: 'Publish & govern',
    description: 'Define, publish, maintain',
    projects: [
      { title: 'Specification toolchain', repositories: 'specification · spec-toolkit', route: 'project-specification' },
      { title: 'Provider & Java tooling', repositories: 'provider-server · Spring Boot · Maven', route: 'project-publishing' },
      { title: 'Registry workflow helper', repositories: 'global-registry-bot', route: 'project-registry' },
    ],
  },
  {
    title: 'Explore & enrich',
    description: 'Discover, enrich, present',
    projects: [
      { title: 'Reference experience', repositories: 'reference-application · explorer', route: 'project-reference' },
      { title: 'Overlay toolchain', repositories: 'TypeScript · Go · React', route: 'project-overlays' },
      { title: 'Shared UI foundation', repositories: 'ui-components · metadata-renderer', route: 'project-ui' },
    ],
  },
  {
    title: 'AI & Agents',
    description: 'Describe and use AI resources',
    projects: [
      { title: 'A2A development tools', repositories: 'Editor · VS Code · samples · demo', route: 'project-a2a' },
      { title: 'MCP Server Card tools', repositories: 'UI playground · ORD demo', route: 'project-mcp' },
      { title: 'Metadata compaction', repositories: 'metadata-compactor-golang', route: 'project-compaction' },
    ],
  },
]
</script>

<template>
  <nav class="ecosystem-index" aria-label="Tools and ecosystem by purpose">
    <section v-for="category in categories" :key="category.title" class="project-category" :aria-label="category.title">
      <header>
        <h3>{{ category.title }}</h3>
        <p>{{ category.description }}</p>
      </header>
      <a v-for="project in category.projects" :key="project.route" :href="'./' + project.route">
        <strong>{{ project.title }}</strong>
        <small>{{ project.repositories }}</small>
        <span aria-hidden="true">→</span>
      </a>
    </section>
  </nav>
</template>

<style scoped>
.ecosystem-index { display: grid; flex: 1; min-height: 0; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; align-content: center; align-items: start; }
.project-category { --category-accent: var(--ord-accent-sky); --category-bg: var(--ord-accent-sky-bg); display: flex; min-height: 0; flex-direction: column; gap: 10px; border: 1px solid var(--ord-sep); border-top: 4px solid var(--category-accent); border-radius: var(--ord-radius); background: var(--category-bg); padding: 0 12px 12px; }
.project-category:nth-child(2) { --category-accent: var(--ord-accent-teal); --category-bg: var(--ord-accent-teal-bg); }
.project-category:nth-child(3) { --category-accent: var(--ord-accent-violet); --category-bg: var(--ord-accent-violet-bg); }
header { display: flex; min-height: 70px; flex-direction: column; justify-content: center; gap: 3px; padding: 10px 2px 4px; }
h3 { color: var(--ord-text); font-size: 21px; font-weight: 800; line-height: 1.15; letter-spacing: -0.01em; }
header p { color: var(--ord-muted); font-size: 13px; font-weight: 600; line-height: 1.35; }
.project-category a { position: relative; display: flex; min-height: 104px; flex-direction: column; justify-content: center; gap: 6px; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: #fff; color: var(--ord-text); padding: 12px 30px 12px 14px; text-decoration: none; }
.project-category a:hover { border-color: var(--category-accent); box-shadow: 0 2px 10px rgba(10, 15, 18, 0.08); }
.project-category a:focus-visible { outline: 2px solid var(--ord-brand); outline-offset: 2px; }
strong { font-size: 18px; font-weight: 650; line-height: 1.2; }
small { color: var(--ord-muted); font-size: 12.5px; line-height: 1.35; }
.project-category a span { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); color: var(--ord-brand); font-size: 16px; }
</style>
