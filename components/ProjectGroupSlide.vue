<script setup lang="ts">
import { computed } from 'vue'
import ProjectShowcase from './ProjectShowcase.vue'

type Repository = {
  name: string
  role: string
  description: string
  url: string
  liveUrl?: string
  liveLabel?: string
}

type ProjectGroup = {
  label: string
  title: string
  summary: string
  concept?: { label: string; route: string }
  repositories: Repository[]
}

const groups: Record<string, ProjectGroup> = {
  specification: {
    label: 'Specification toolchain',
    title: 'Generate schemas, docs, and models together',
    summary: 'Spec Toolkit turns the ORD source schemas into artifacts that stay in sync.',
    repositories: [
      {
        name: 'specification',
        role: 'Protocol & schemas',
        description: 'Read the normative rules, validate documents, and use the published schemas and models.',
        url: 'https://github.com/open-resource-discovery/specification',
        liveUrl: 'https://open-resource-discovery.org/',
        liveLabel: 'Read the specification',
      },
      {
        name: 'spec-toolkit',
        role: 'Schema toolchain',
        description: 'Generate schemas and reference documentation from a shared source model.',
        url: 'https://github.com/open-resource-discovery/spec-toolkit',
        liveUrl: 'https://open-resource-discovery.github.io/spec-toolkit/',
        liveLabel: 'Toolkit documentation',
      },
    ],
  },
  reference: {
    label: 'Reference & Explorer',
    title: 'Explore metadata from a running Provider',
    summary: 'Connect the Explorer to a Provider, find a resource, then inspect its native definition.',
    repositories: [
      {
        name: 'reference-application',
        role: 'Runnable provider',
        description: 'A running Provider whose embedded Explorer shows public or demo-authenticated tenant metadata.',
        url: 'https://github.com/open-resource-discovery/reference-application',
        liveUrl: 'https://ord-reference-application.cfapps.sap.hana.ondemand.com/',
        liveLabel: 'Explore live metadata',
      },
      {
        name: 'explorer',
        role: 'Discovery client',
        description: 'Discover, search, and inspect resources as a standalone app or embedded Provider UI.',
        url: 'https://github.com/open-resource-discovery/explorer',
        liveUrl: 'https://open-resource-discovery.github.io/explorer/',
        liveLabel: 'Open live explorer',
      },
    ],
  },
  publishing: {
    label: 'Publishing',
    title: 'Publish ORD from files or Java',
    summary: 'Serve a metadata folder or add discovery endpoints to an existing Spring Boot application.',
    repositories: [
      {
        name: 'provider-server',
        role: 'Static metadata server',
        description: 'Serve metadata from files or GitHub, using npm or Docker.',
        url: 'https://github.com/open-resource-discovery/provider-server',
      },
      {
        name: 'spring-boot-starter-ord',
        role: 'Spring integration',
        description: 'Add endpoints with annotations, static documents, or both.',
        url: 'https://github.com/open-resource-discovery/spring-boot-starter-ord',
      },
      {
        name: 'ord-maven',
        role: 'Java models',
        description: 'Use generated Java models and annotations for ORD.',
        url: 'https://github.com/open-resource-discovery/ord-maven',
      },
    ],
  },
  overlays: {
    label: 'Overlay tools',
    title: 'Add guidance to an existing API definition',
    summary: 'An ORD Overlay patches a consumer’s view while keeping the original definition unchanged.',
    concept: { label: 'How ORD Overlays work', route: 'ord-overlays' },
    repositories: [
      {
        name: 'overlay-editor',
        role: 'View & edit',
        description: 'View and edit an overlay in the browser or embed the React components.',
        url: 'https://github.com/open-resource-discovery/overlay-editor',
        liveUrl: 'https://open-resource-discovery.github.io/overlay-editor/',
        liveLabel: 'Open playground',
      },
      {
        name: 'overlay-tools',
        role: 'CLI & library',
        description: 'Validate, dry-run, convert, and apply overlays with a CLI or TypeScript library.',
        url: 'https://github.com/open-resource-discovery/overlay-tools',
      },
      {
        name: 'overlay-golang',
        role: 'Go library',
        description: 'Apply overlays in Go to supported native definitions.',
        url: 'https://github.com/open-resource-discovery/overlay-golang',
      },
    ],
  },
  ui: {
    label: 'UI foundations',
    title: 'Embed metadata views in your application',
    summary: 'Pass a definition to one React component; it selects the renderer for that format.',
    repositories: [
      {
        name: 'ui-components',
        role: 'Design system',
        description: 'Reuse the themed controls and styles behind the tool UIs.',
        url: 'https://github.com/open-resource-discovery/ui-components',
        liveUrl: 'https://open-resource-discovery.github.io/ui-components/',
        liveLabel: 'Browse Storybook',
      },
      {
        name: 'metadata-renderer',
        role: 'Format-aware rendering',
        description: 'Choose a format renderer automatically through one React API.',
        url: 'https://github.com/open-resource-discovery/metadata-renderer',
        liveUrl: 'https://open-resource-discovery.github.io/metadata-renderer/playground',
        liveLabel: 'Open playground',
      },
    ],
  },
  a2a: {
    label: 'A2A tools',
    title: 'Inspect Agent Cards, then test A2A interaction',
    summary: 'Read what an agent offers, validate its card, and try the protocol against a test server.',
    concept: { label: 'ORD relationships for AI & Agents', route: 'ai-discovery' },
    repositories: [
      {
        name: 'a2a-editor',
        role: 'Editor & playground',
        description: 'Inspect and edit cards; try Chat, Raw HTTP, and Validation views.',
        url: 'https://github.com/open-resource-discovery/a2a-editor',
        liveUrl: 'https://open-resource-discovery.github.io/a2a-editor/playground',
        liveLabel: 'Open playground',
      },
      {
        name: 'a2a-editor-vscode',
        role: 'IDE extension',
        description: 'Use the card editor and protocol testing inside VS Code.',
        url: 'https://github.com/open-resource-discovery/a2a-editor-vscode',
      },
      {
        name: 'a2a-sample-server',
        role: 'Test backend',
        description: 'Run agents for testing streaming, protocol versions, and authentication.',
        url: 'https://github.com/open-resource-discovery/a2a-sample-server',
      },
      {
        name: 'a2a-ord-demo',
        role: 'Integration demo',
        description: 'See ORD discovery followed by A2A delegation.',
        url: 'https://github.com/open-resource-discovery/a2a-ord-demo',
      },
    ],
  },
  mcp: {
    label: 'MCP tools',
    title: 'Discover MCP tools before connecting',
    summary: 'When a Server Card includes tool definitions, a consumer can inspect them before opening a session.',
    concept: { label: 'ORD relationships for AI & Agents', route: 'ai-discovery' },
    repositories: [
      {
        name: 'mcp-server-card-ui',
        role: 'Editor & playground',
        description: 'Inspect and edit cards, validate metadata, and test server interaction.',
        url: 'https://github.com/open-resource-discovery/mcp-server-card-ui',
        liveUrl: 'https://open-resource-discovery.github.io/mcp-server-card-ui/playground',
        liveLabel: 'Open playground',
      },
      {
        name: 'ord-mcp-server-card-demo',
        role: 'Discovery demo',
        description: 'Compare manual setup, ORD discovery, and tool selection using static cards.',
        url: 'https://github.com/open-resource-discovery/ord-mcp-server-card-demo',
      },
    ],
  },
  compaction: {
    label: 'Metadata compaction',
    title: 'Reduce metadata to use less LLM context',
    summary: 'Trim large definitions to the essentials or the metadata you want to share.',
    repositories: [
      {
        name: 'metadata-compactor-golang',
        role: 'Library & CLI',
        description: 'Trim metadata with configurable rules, using the Go library or CLI. Currently supports CSN JSON.',
        url: 'https://github.com/open-resource-discovery/metadata-compactor-golang',
      },
    ],
  },
  registry: {
    label: 'Registry workflow',
    title: 'Automate one part of registry governance',
    summary: 'The bot handles a GitHub request workflow; it is a building block, not a complete ORD namespace registry.',
    repositories: [
      {
        name: 'global-registry-bot',
        role: 'Workflow automation',
        description: 'Validates issue-form requests, creates registry YAML pull requests, routes approvals, and merges safe changes.',
        url: 'https://github.com/open-resource-discovery/global-registry-bot',
      },
    ],
  },
}

const props = defineProps<{ group: string }>()
const project = computed(() => groups[props.group])
const groupOrder = ['specification', 'reference', 'publishing', 'overlays', 'ui', 'a2a', 'mcp', 'compaction']
const groupIndex = computed(() => groupOrder.indexOf(props.group))
const previousGroup = computed(() => groupIndex.value > 0 ? groupOrder[groupIndex.value - 1] : undefined)
const nextGroup = computed(() => groupIndex.value >= 0 && groupIndex.value < groupOrder.length - 1 ? groupOrder[groupIndex.value + 1] : undefined)
</script>

<template>
  <div v-if="project" class="slide-shell light-slide deep-slide ecosystem-project-slide">
    <DeckLogo :section="project.label"></DeckLogo>
    <nav class="ecosystem-nav" aria-label="Tools and ecosystem navigation">
      <RouterLink to="/tools-ecosystem">All tools</RouterLink>
      <RouterLink v-if="previousGroup" :to="`/project-${previousGroup}`" :title="groups[previousGroup].title">← Previous</RouterLink>
      <RouterLink v-if="nextGroup" :to="`/project-${nextGroup}`" :title="groups[nextGroup].title">Next →</RouterLink>
    </nav>
    <header class="slide-header wide-header">
      <h2>{{ project.title }}</h2>
      <p class="slide-subtitle">{{ project.summary }}</p>
    </header>

    <div class="project-content" :class="{ 'reference-content': group === 'reference' }">
      <ProjectShowcase :group="group" />
      <aside class="repository-rail" :class="`count-${project.repositories.length}`" aria-label="Choose a tool">
        <span class="rail-label">Choose a tool</span>
        <article v-for="repository in project.repositories" :key="repository.name" class="repository-card">
          <span class="repository-role">{{ repository.role }}</span>
          <h3><a :href="repository.url" target="_blank" rel="noopener noreferrer">{{ repository.name }}</a></h3>
          <p>{{ repository.description }}</p>
          <footer>
            <a :href="repository.url" target="_blank" rel="noopener noreferrer">Source ↗</a>
            <a v-if="repository.liveUrl" :href="repository.liveUrl" target="_blank" rel="noopener noreferrer">{{ repository.liveLabel }} ↗</a>
          </footer>
        </article>
        <RouterLink v-if="project.concept" class="concept-link" :to="`/${project.concept.route}`">{{ project.concept.label }} →</RouterLink>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.ecosystem-project-slide { gap: 18px; }
.ecosystem-project-slide .slide-header { gap: 5px; }
.ecosystem-project-slide .slide-header h2 { max-width: 1120px; font-size: 38px; }
.ecosystem-project-slide .slide-subtitle { max-width: 1130px; font-size: 17px; line-height: 1.35; }
.ecosystem-nav { position: absolute; display: flex; gap: 18px; }
.ecosystem-nav a { color: var(--ord-muted); font-weight: 650; text-decoration: none; }
.ecosystem-nav a:hover { color: var(--ord-brand); }
.ecosystem-nav a:focus-visible, .repository-card a:focus-visible, .concept-link:focus-visible { outline: 2px solid var(--ord-brand); outline-offset: 3px; }
.project-content { display: grid; flex: 1; min-height: 0; grid-template-columns: minmax(0, 1.65fr) minmax(0, 1fr); gap: 20px; align-items: center; }
.repository-rail { display: flex; flex-direction: column; gap: 10px; min-width: 0; }
.rail-label { color: var(--ord-muted); font-size: 12px; font-weight: 750; letter-spacing: .05em; text-transform: uppercase; }
.repository-card { display: flex; flex-direction: column; gap: 5px; min-width: 0; border: 1px solid var(--ord-sep); border-top: 3px solid var(--ord-accent-teal); border-radius: var(--ord-radius); background: var(--ord-accent-teal-bg); padding: 12px 15px; }
.repository-role { color: var(--ord-brand); font-size: 10px; font-weight: 750; letter-spacing: .04em; text-transform: uppercase; }
.repository-card h3 { font-size: 18px; font-weight: 750; line-height: 1.2; }
.repository-card h3, .repository-card p, .repository-card footer { margin: 0; }
.repository-card h3 a { color: var(--ord-text); border: 0; text-decoration: none; }
.repository-card h3 a:hover { color: var(--ord-brand); }
.repository-card p { color: var(--ord-muted); font-size: 14px; line-height: 1.35; }
.repository-card footer { display: flex; flex-wrap: wrap; gap: 5px 14px; padding-top: 3px; }
.repository-card footer a { border: 0; color: var(--ord-brand); font-size: 11px; font-weight: 700; text-decoration: none; }
.repository-card footer a:hover { text-decoration: underline; }
.count-4 { gap: 8px; }
.count-4 .repository-card { gap: 4px; padding: 9px 15px; }
.count-4 .repository-card p { font-size: 13px; line-height: 1.3; }
.concept-link { align-self: flex-start; color: var(--ord-brand); font-size: 13px; font-weight: 700; text-decoration: none; }
.concept-link:hover { text-decoration: underline; }
.reference-content { display: flex; flex-direction: column; justify-content: center; align-items: stretch; gap: 12px; }
.reference-content .repository-rail { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.reference-content .rail-label, .reference-content .repository-card p { display: none; }
.reference-content .repository-card { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 4px 16px; padding: 12px 15px; }
.reference-content .repository-role { grid-column: 1; }
.reference-content .repository-card h3 { grid-column: 1; }
.reference-content .repository-card footer { grid-column: 2; grid-row: 1 / 3; flex-direction: column; align-self: center; align-items: flex-end; padding: 0; }
</style>
