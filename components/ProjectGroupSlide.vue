<script setup lang="ts">
import { computed } from 'vue'

type Repository = {
  name: string
  language: string
  role: string
  description: string
  url: string
  liveUrl?: string
  liveLabel?: string
}

type ProjectGroup = {
  number: string
  title: string
  summary: string
  flow: string[]
  repositories: Repository[]
  highlights?: string[]
}

const groups: Record<string, ProjectGroup> = {
  specification: {
    number: '01',
    title: 'Build the standard from schemas',
    summary: 'The canonical specification and the generator behind its documentation form one release toolchain.',
    flow: ['Model', 'Generate', 'Publish', 'Consume'],
    repositories: [
      {
        name: 'specification',
        language: 'TypeScript',
        role: 'Protocol & schemas',
        description: 'The source of truth for ORD, including schemas, documentation, examples, validation code, and the published package.',
        url: 'https://github.com/open-resource-discovery/specification',
        liveUrl: 'https://open-resource-discovery.org/',
        liveLabel: 'Read the specification',
      },
      {
        name: 'spec-toolkit',
        language: 'TypeScript',
        role: 'Schema toolchain',
        description: 'A CLI for creating JSON Schema specifications and generating their Markdown documentation.',
        url: 'https://github.com/open-resource-discovery/spec-toolkit',
        liveUrl: 'https://open-resource-discovery.github.io/spec-toolkit/',
        liveLabel: 'Toolkit documentation',
      },
    ],
  },
  reference: {
    number: '02',
    title: 'Learn ORD against a running system',
    summary: 'A reference provider and a browser-based consumer make both sides of the pull protocol tangible.',
    flow: ['Expose', 'Discover', 'Browse', 'Inspect'],
    repositories: [
      {
        name: 'reference-application',
        language: 'TypeScript',
        role: 'Runnable provider',
        description: 'Demonstrates pull transport, APIs and Events, resource definitions, access strategies, and tenant-aware metadata.',
        url: 'https://github.com/open-resource-discovery/reference-application',
        liveUrl: 'https://ord-reference-application.cfapps.sap.hana.ondemand.com/',
        liveLabel: 'Open reference provider',
      },
      {
        name: 'explorer',
        language: 'TypeScript',
        role: 'Discovery client',
        description: 'Connects to ORD endpoints or document URLs, then fetches, merges, searches, filters, and renders their resources.',
        url: 'https://github.com/open-resource-discovery/explorer',
        liveUrl: 'https://open-resource-discovery.github.io/explorer/',
        liveLabel: 'Open live explorer',
      },
    ],
  },
  publishing: {
    number: '03',
    title: 'Publish ORD from files or Java',
    summary: 'Use a ready-made server for static metadata or integrate ORD directly into a Spring Boot application.',
    flow: ['Describe', 'Expose endpoints', 'Fetch'],
    repositories: [
      {
        name: 'provider-server',
        language: 'TypeScript',
        role: 'Static metadata server',
        description: 'Exposes ORD files over HTTP from a local directory or GitHub source, available through npm and Docker.',
        url: 'https://github.com/open-resource-discovery/provider-server',
      },
      {
        name: 'spring-boot-starter-ord',
        language: 'Java',
        role: 'Spring integration',
        description: 'Adds ORD endpoints through Spring Boot auto-configuration, using generated annotations, static documents, or both.',
        url: 'https://github.com/open-resource-discovery/spring-boot-starter-ord',
      },
      {
        name: 'ord-maven',
        language: 'Java',
        role: 'Java models',
        description: 'Publishes generated ORD models and annotations that stay synchronized with the specification.',
        url: 'https://github.com/open-resource-discovery/ord-maven',
      },
    ],
  },
  overlays: {
    number: '04',
    title: 'Author, validate, and apply ORD Overlays',
    summary: 'The Overlay toolchain spans interactive authoring, TypeScript automation, and Go-based processing.',
    flow: ['Author', 'Validate or convert', 'Apply', 'Render'],
    repositories: [
      {
        name: 'overlay-editor',
        language: 'TypeScript · React',
        role: 'View & edit',
        description: 'React components and a playground for viewing and editing ORD Overlay 0.1 documents.',
        url: 'https://github.com/open-resource-discovery/overlay-editor',
        liveUrl: 'https://open-resource-discovery.github.io/overlay-editor/',
        liveLabel: 'Open playground',
      },
      {
        name: 'overlay-tools',
        language: 'TypeScript',
        role: 'CLI & library',
        description: 'Validates, dry-runs, merges, and converts overlays for JSON, YAML, and EDMX targets.',
        url: 'https://github.com/open-resource-discovery/overlay-tools',
      },
      {
        name: 'overlay-golang',
        language: 'Go',
        role: 'Go library',
        description: 'Applies overlays to OpenAPI, OData, CSN, A2A Agent Cards, and generic JSON or YAML definitions.',
        url: 'https://github.com/open-resource-discovery/overlay-golang',
      },
    ],
  },
  ui: {
    number: '05',
    title: 'Render metadata consistently',
    summary: 'Shared, themeable React foundations keep ORD tools visually coherent while supporting specialized metadata formats.',
    flow: ['Design tokens', 'UI components', 'Format renderers', 'Product UI'],
    repositories: [
      {
        name: 'ui-components',
        language: 'TypeScript · React',
        role: 'Design system',
        description: 'Accessible, themeable UI components with host-style isolation for embedding across ORD experiences.',
        url: 'https://github.com/open-resource-discovery/ui-components',
        liveUrl: 'https://open-resource-discovery.github.io/ui-components/',
        liveLabel: 'Browse Storybook',
      },
      {
        name: 'metadata-renderer',
        language: 'TypeScript · React',
        role: 'Format-aware rendering',
        description: 'Auto-detects and renders OpenAPI, AsyncAPI, CSN, A2A, MCP Server Cards, and ORD Overlays.',
        url: 'https://github.com/open-resource-discovery/metadata-renderer',
        liveUrl: 'https://open-resource-discovery.github.io/metadata-renderer/playground',
        liveLabel: 'Open playground',
      },
    ],
  },
  a2a: {
    number: '06',
    title: 'Build, test, and discover A2A agents',
    summary: 'A connected toolkit covers Agent Card authoring, IDE workflows, protocol testing, and ORD-based discovery.',
    flow: ['Describe', 'Edit & test', 'Publish with ORD', 'Call with A2A'],
    repositories: [
      {
        name: 'a2a-editor',
        language: 'TypeScript · React',
        role: 'Editor & playground',
        description: 'Components for editing, viewing, and testing agents that implement the A2A protocol.',
        url: 'https://github.com/open-resource-discovery/a2a-editor',
        liveUrl: 'https://open-resource-discovery.github.io/a2a-editor/playground',
        liveLabel: 'Open playground',
      },
      {
        name: 'a2a-editor-vscode',
        language: 'TypeScript',
        role: 'IDE extension',
        description: 'Brings Agent Card browsing, editing, validation, discovery, and live testing into VS Code.',
        url: 'https://github.com/open-resource-discovery/a2a-editor-vscode',
      },
      {
        name: 'a2a-sample-server',
        language: 'TypeScript',
        role: 'Test backend',
        description: 'A self-contained multi-agent server for exercising protocol versions, streaming, and authentication schemes.',
        url: 'https://github.com/open-resource-discovery/a2a-sample-server',
      },
      {
        name: 'a2a-ord-demo',
        language: 'TypeScript',
        role: 'Integration demo',
        description: 'Shows a supervising agent discovering agents through ORD and delegating to them through A2A.',
        url: 'https://github.com/open-resource-discovery/a2a-ord-demo',
      },
    ],
  },
  mcp: {
    number: '07',
    title: 'Discover MCP tools before connecting',
    summary: 'MCP Server Cards and ORD turn server and tool discovery into inspectable metadata.',
    flow: ['Discover server', 'Inspect card', 'Select tools', 'Connect'],
    repositories: [
      {
        name: 'mcp-server-card-ui',
        language: 'TypeScript · React',
        role: 'Editor & playground',
        description: 'Components for editing, viewing, validating, and testing MCP servers through their Server Cards.',
        url: 'https://github.com/open-resource-discovery/mcp-server-card-ui',
        liveUrl: 'https://open-resource-discovery.github.io/mcp-server-card-ui/playground',
        liveLabel: 'Open playground',
      },
      {
        name: 'ord-mcp-server-card-demo',
        language: 'TypeScript',
        role: 'Discovery demo',
        description: 'Compares manual MCP configuration with ORD discovery and Server Card metadata, including tool preselection.',
        url: 'https://github.com/open-resource-discovery/ord-mcp-server-card-demo',
      },
    ],
  },
  compaction: {
    number: '08',
    title: 'Make large definitions practical for AI',
    summary: 'Rules-based compaction keeps the metadata an AI consumer needs while removing avoidable payload.',
    flow: ['Source definition', 'Apply rules', 'Compact', 'Expose'],
    repositories: [
      {
        name: 'metadata-compactor-golang',
        language: 'Go',
        role: 'Library & CLI',
        description: 'Compacts metadata for AI-friendly exposure, with configurable rules and current support for CSN JSON.',
        url: 'https://github.com/open-resource-discovery/metadata-compactor-golang',
      },
    ],
    highlights: ['Rules control retained metadata', 'Library and command-line tool', 'CSN JSON supported today'],
  },
  registry: {
    number: '09',
    title: 'Turn registry requests into governed changes',
    summary: 'A configurable GitHub app automates repetitive registry work while preserving explicit approval gates.',
    flow: ['Request', 'Validate', 'Review', 'Merge'],
    repositories: [
      {
        name: 'global-registry-bot',
        language: 'TypeScript',
        role: 'Registry automation',
        description: 'Validates issue-form requests, creates registry YAML pull requests, routes approvals, and merges safe changes.',
        url: 'https://github.com/open-resource-discovery/global-registry-bot',
      },
    ],
    highlights: ['Configuration-driven workflows', 'GitHub remains the system of record', 'Repository rules still govern merges'],
  },
}

const props = defineProps<{ group: string }>()
const project = computed(() => groups[props.group])
</script>

<template>
  <div v-if="project" class="slide-shell light-slide deep-slide ecosystem-project-slide">
    <DeckLogo></DeckLogo>
    <nav class="ecosystem-nav" aria-label="Tools and ecosystem navigation">
      <a href="./tools-ecosystem">All tools &amp; ecosystem</a>
    </nav>
    <header class="slide-header wide-header">
      <p class="eyebrow">Tools &amp; Ecosystem · {{ project.number }}</p>
      <h2>{{ project.title }}</h2>
      <p class="slide-subtitle">{{ project.summary }}</p>
    </header>

    <div class="project-flow">
      <template v-for="(step, index) in project.flow" :key="step">
        <span>{{ step }}</span>
        <i v-if="index < project.flow.length - 1" aria-hidden="true">→</i>
      </template>
    </div>

    <div class="project-content" :class="{ 'single-project': project.repositories.length === 1 }">
      <div class="repository-grid" :class="`count-${project.repositories.length}`">
        <article v-for="repository in project.repositories" :key="repository.name" class="repository-card">
          <div class="repository-meta">
            <span>{{ repository.role }}</span>
            <small>{{ repository.language }}</small>
          </div>
          <h3><a :href="repository.url" target="_blank">{{ repository.name }}</a></h3>
          <p>{{ repository.description }}</p>
          <footer>
            <a :href="repository.url" target="_blank">GitHub ↗</a>
            <a v-if="repository.liveUrl" :href="repository.liveUrl" target="_blank">{{ repository.liveLabel }} ↗</a>
          </footer>
        </article>
      </div>

      <aside v-if="project.highlights" class="project-highlights">
        <span>At a glance</span>
        <ul>
          <li v-for="highlight in project.highlights" :key="highlight">{{ highlight }}</li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.ecosystem-project-slide {
  gap: 14px;
}

.ecosystem-project-slide .slide-header {
  gap: 5px;
}

.ecosystem-project-slide .slide-header h2 {
  max-width: 980px;
  font-size: 40px;
}

.ecosystem-project-slide .slide-subtitle {
  max-width: 1030px;
  font-size: 17px;
  line-height: 1.3;
}

.ecosystem-nav {
  position: absolute !important;
  top: 31px;
  right: 72px;
  z-index: 3;
}

.ecosystem-nav a {
  border: 1px solid var(--ord-border);
  border-radius: 999px;
  background: var(--ord-pill-bg);
  color: var(--ord-muted);
  font-size: 11px;
  font-weight: 650;
  padding: 7px 11px;
  text-decoration: none;
}

.ecosystem-nav a:hover {
  border-color: var(--ord-brand-2);
  color: var(--ord-text);
}

.project-flow {
  display: flex;
  min-height: 45px;
  align-items: center;
  gap: 11px;
  border: 1px solid var(--ord-sep);
  border-radius: var(--ord-radius);
  background: var(--ord-panel-soft);
  padding: 8px 14px;
}

.project-flow span {
  flex: 1;
  border-radius: 5px;
  background: var(--ord-teal-soft);
  color: var(--ord-text);
  font-size: 13px;
  font-weight: 680;
  padding: 8px 12px;
  text-align: center;
}

.project-flow i {
  color: var(--ord-brand);
  font-family: var(--ord-font);
  font-size: 18px;
  font-style: normal;
}

.project-content {
  display: flex;
  min-height: 0;
  flex: 1;
}

.repository-grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.repository-grid.count-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.repository-grid.count-4 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.single-project {
  gap: 14px;
}

.single-project .repository-grid {
  width: 66%;
  grid-template-columns: 1fr;
}

.repository-card {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 9px;
  border: 1px solid var(--ord-sep);
  border-top: 4px solid var(--ord-brand-2);
  border-radius: var(--ord-radius);
  background: var(--ord-card-bg);
  padding: 16px 18px 14px;
}

.count-3 .repository-card {
  padding: 15px 16px 13px;
}

.count-4 .repository-card {
  gap: 6px;
  padding: 12px 16px 10px;
}

.repository-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.repository-meta span {
  color: var(--ord-brand);
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.repository-meta small {
  border: 1px solid var(--ord-border);
  border-radius: 999px;
  color: var(--ord-muted);
  font-size: 10px;
  font-weight: 650;
  padding: 4px 8px;
  white-space: nowrap;
}

.repository-card h3 {
  font-size: 21px;
}

.count-4 .repository-card h3 {
  font-size: 18px;
}

.repository-card h3 a {
  text-decoration: none;
}

.repository-card h3 a:hover {
  color: var(--ord-brand);
}

.repository-card p {
  color: var(--ord-muted);
  font-size: 15px;
  line-height: 1.35;
}

.count-4 .repository-card p {
  font-size: 13px;
  line-height: 1.28;
}

.repository-card footer {
  display: flex;
  flex-wrap: wrap;
  gap: 7px 14px;
  margin-top: auto;
}

.repository-card footer a {
  color: var(--ord-brand);
  font-size: 11px;
  font-weight: 700;
  text-decoration: none;
}

.repository-card footer a:hover {
  text-decoration: underline;
}

.project-highlights {
  display: flex;
  width: 34%;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  border: 1px solid var(--ord-sep);
  border-radius: var(--ord-radius);
  background: var(--ord-panel-soft);
  padding: 22px 24px;
}

.project-highlights > span {
  color: var(--ord-brand);
  font-size: 11px;
  font-weight: 750;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.project-highlights ul {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.project-highlights li {
  position: relative;
  color: var(--ord-text);
  font-size: 16px;
  font-weight: 620;
  line-height: 1.3;
  padding-left: 19px;
}

.project-highlights li::before {
  position: absolute;
  top: 0.48em;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--ord-brand-2);
  content: '';
}
</style>
