<template>
  <div class="ecosystem-index">
    <a v-for="project in projects" :key="project.route" :href="`./${project.route}`">
      <span>{{ project.number }} · {{ project.category }}</span>
      <strong>{{ project.title }}</strong>
      <small>{{ project.repositories }}</small>
    </a>
  </div>
</template>

<script setup lang="ts">
const projects = [
  { number: '01', category: 'Standard', title: 'Specification toolchain', repositories: 'specification · spec-toolkit', route: 'project-specification' },
  { number: '02', category: 'Explore', title: 'Reference experience', repositories: 'reference-application · explorer', route: 'project-reference' },
  { number: '03', category: 'Publish', title: 'Provider & Java tooling', repositories: 'provider-server · Spring Boot · Maven', route: 'project-publishing' },
  { number: '04', category: 'Enrich', title: 'Overlay toolchain', repositories: 'TypeScript · Go · React', route: 'project-overlays' },
  { number: '05', category: 'Present', title: 'Shared UI foundation', repositories: 'ui-components · metadata-renderer', route: 'project-ui' },
  { number: '06', category: 'Agents', title: 'A2A development tools', repositories: 'Editor · VS Code · samples · demo', route: 'project-a2a' },
  { number: '07', category: 'Agents', title: 'MCP Server Card tools', repositories: 'UI playground · ORD demo', route: 'project-mcp' },
  { number: '08', category: 'AI metadata', title: 'Metadata compaction', repositories: 'metadata-compactor-golang', route: 'project-compaction' },
  { number: '09', category: 'Building block', title: 'Registry workflow helper', repositories: 'global-registry-bot', route: 'project-registry' },
]
</script>

<style scoped>
.ecosystem-index {
  display: grid;
  flex: 1;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 11px;
  align-content: center;
}

.ecosystem-index a {
  display: grid;
  min-height: 144px;
  grid-template-rows: 18px 44px minmax(32px, 1fr);
  gap: 6px;
  border: 1px solid var(--ord-sep);
  border-top: 4px solid var(--ord-accent-teal);
  border-radius: var(--ord-radius);
  background: var(--ord-accent-teal-bg);
  padding: 15px 18px;
  text-decoration: none;
  transition: border-color 150ms ease, transform 150ms ease;
}

.ecosystem-index a:nth-child(2),
.ecosystem-index a:nth-child(7) { border-top-color: var(--ord-accent-sky); background: var(--ord-accent-sky-bg); }
.ecosystem-index a:nth-child(4),
.ecosystem-index a:nth-child(8) { border-top-color: var(--ord-accent-violet); background: var(--ord-accent-violet-bg); }
.ecosystem-index a:nth-child(6) { border-top-color: var(--ord-accent-coral); background: var(--ord-accent-coral-bg); }
.ecosystem-index a:nth-child(9) { border-top-color: var(--ord-accent-lime); background: var(--ord-accent-lime-bg); }

.ecosystem-index a:hover {
  border-color: var(--ord-brand-2);
  transform: translateY(-2px);
}

.ecosystem-index span {
  color: var(--ord-brand);
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.ecosystem-index strong {
  min-height: 44px;
  margin-top: 0;
  color: var(--ord-text);
  font-size: 19px;
  line-height: 1.15;
}

.ecosystem-index small {
  color: var(--ord-muted);
  font-size: 12px;
  line-height: 1.25;
}
</style>
