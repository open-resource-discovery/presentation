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
  exampleUrl?: string
  exampleLabel?: string
}

type ProjectGroup = {
  label: string
  name: string
  projectUrl: string
  title: string
  summary: string
  summaryLink?: { label: string; url: string }
  concept?: { label: string; route: string }
  repositories: Repository[]
}

const groups: Record<string, ProjectGroup> = {
  specification: {
    label: 'Schema toolchain',
    name: 'Spec Toolkit',
    projectUrl: 'https://github.com/open-resource-discovery/spec-toolkit',
    title: 'Generate a specification from one source schema',
    summary: 'Use a schema-first workflow for JSON or YAML files: author specifications and contracts in JSON Schema, then generate distributable schemas, documentation, and developer types.',
    repositories: [
      {
        name: 'spec-toolkit',
        role: 'Specification generator',
        description: 'Generate schemas, Markdown documentation, and TypeScript types.',
        url: 'https://github.com/open-resource-discovery/spec-toolkit',
        liveUrl: 'https://open-resource-discovery.github.io/spec-toolkit/',
        liveLabel: 'Toolkit documentation',
        exampleUrl: 'https://github.com/open-resource-discovery/specification/blob/main/spec-toolkit.config.json',
        exampleLabel: 'ORD example',
      },
    ],
  },
  reference: {
    label: 'Reference & Explorer',
    name: 'ORD Explorer',
    projectUrl: 'https://github.com/open-resource-discovery/explorer',
    title: 'Explore metadata from a running Provider',
    summary: 'Connect it to an ORD Provider to discover which resources it offers and how to use them.',
    repositories: [
      {
        name: 'reference-application',
        role: 'Runnable provider',
        description: 'Run a Provider with public and demo-authenticated tenant metadata.',
        url: 'https://github.com/open-resource-discovery/reference-application',
        liveUrl: 'https://ord-reference-application.cfapps.sap.hana.ondemand.com/',
        liveLabel: 'Explore live metadata',
      },
      {
        name: 'explorer',
        role: 'Discovery client',
        description: 'Browse resources, relationships, and native definitions.',
        url: 'https://github.com/open-resource-discovery/explorer',
        liveUrl: 'https://open-resource-discovery.github.io/explorer/',
        liveLabel: 'Open live explorer',
      },
    ],
  },
  publishing: {
    label: 'Static publishing',
    name: 'Provider Server',
    projectUrl: 'https://github.com/open-resource-discovery/provider-server',
    title: 'Publish ORD metadata from files',
    summary: 'Expose ORD Documents and referenced resource definitions from a local directory or GitHub through the ORD Provider API.',
    repositories: [
      {
        name: 'provider-server',
        role: 'Static metadata server',
        description: 'Serve metadata from a local directory or GitHub, using npm or Docker.',
        url: 'https://github.com/open-resource-discovery/provider-server',
      },
    ],
  },
  'framework-publishing': {
    label: 'Framework integration',
    name: 'Spring Boot Starter for ORD',
    projectUrl: 'https://github.com/open-resource-discovery/spring-boot-starter-ord',
    title: 'Add ORD publishing to a Spring Boot application',
    summary: 'Add ORD discovery and document endpoints to your application using annotations, static documents, or both.',
    repositories: [
      {
        name: 'spring-boot-starter-ord',
        role: 'Spring Boot integration',
        description: 'Generate and serve ORD documents from annotations or static files.',
        url: 'https://github.com/open-resource-discovery/spring-boot-starter-ord',
      },
      {
        name: 'ord-maven',
        role: 'Java building blocks',
        description: 'Use ORD’s generated Java models and annotations.',
        url: 'https://github.com/open-resource-discovery/ord-maven',
      },
    ],
  },
  overlays: {
    label: 'Overlay tools',
    name: 'Overlay Tools',
    projectUrl: 'https://github.com/open-resource-discovery/overlay-tools',
    title: 'Add guidance to an existing API definition',
    summary: 'patches a consumer’s view while keeping the original definition unchanged.',
    summaryLink: {
      label: 'An ORD Overlay',
      url: 'https://open-resource-discovery.org/spec-v1/interfaces/OrdOverlay',
    },
    concept: { label: 'How ORD Overlays work', route: 'ord-overlays' },
    repositories: [
      {
        name: 'overlay-editor',
        role: 'View & edit',
        description: 'View and edit overlays in a browser or embed the editor in another application.',
        url: 'https://github.com/open-resource-discovery/overlay-editor',
        liveUrl: 'https://open-resource-discovery.github.io/overlay-editor/',
        liveLabel: 'Open playground',
      },
      {
        name: 'overlay-tools',
        role: 'CLI & library',
        description: 'Validate, dry-run, convert, and apply overlays.',
        url: 'https://github.com/open-resource-discovery/overlay-tools',
      },
      {
        name: 'overlay-golang',
        role: 'Go library',
        description: 'Apply overlays to native definitions in Go.',
        url: 'https://github.com/open-resource-discovery/overlay-golang',
      },
    ],
  },
  ui: {
    label: 'UI foundations',
    name: 'Metadata Renderer',
    projectUrl: 'https://github.com/open-resource-discovery/metadata-renderer',
    title: 'Render metadata consistently',
    summary: 'Auto-detect OpenAPI, AsyncAPI, CSN, A2A, MCP Server Cards, and ORD Overlays and select the appropriate interactive view.',
    repositories: [
      {
        name: 'metadata-renderer',
        role: 'Format-aware rendering',
        description: 'Render supported metadata formats through one consistent interface.',
        url: 'https://github.com/open-resource-discovery/metadata-renderer',
        liveUrl: 'https://open-resource-discovery.github.io/metadata-renderer/playground',
        liveLabel: 'Open playground',
      },
    ],
  },
  a2a: {
    label: 'A2A tools',
    name: 'A2A Editor',
    projectUrl: 'https://github.com/open-resource-discovery/a2a-editor',
    title: 'Inspect Agent Cards, then test A2A interaction',
    summary: 'describe what agents offer; inspect and validate them before trying the A2A protocol against a test server.',
    summaryLink: {
      label: 'Agent Cards',
      url: 'https://agent2agent.info/docs/concepts/agentcard/',
    },
    concept: { label: 'ORD relationships for AI & Agents', route: 'ai-discovery' },
    repositories: [
      {
        name: 'a2a-editor',
        role: 'Editor & playground',
        description: 'Edit and validate cards; test Chat and Raw HTTP.',
        url: 'https://github.com/open-resource-discovery/a2a-editor',
        liveUrl: 'https://open-resource-discovery.github.io/a2a-editor/playground',
        liveLabel: 'Open playground',
      },
      {
        name: 'a2a-editor-vscode',
        role: 'IDE extension',
        description: 'Edit cards and test A2A inside VS Code.',
        url: 'https://github.com/open-resource-discovery/a2a-editor-vscode',
      },
      {
        name: 'a2a-sample-server',
        role: 'Test backend',
        description: 'Test streaming, versions, and authentication.',
        url: 'https://github.com/open-resource-discovery/a2a-sample-server',
      },
      {
        name: 'a2a-ord-demo',
        role: 'Integration demo',
        description: 'Discover agents with ORD, then delegate using A2A.',
        url: 'https://github.com/open-resource-discovery/a2a-ord-demo',
      },
    ],
  },
  mcp: {
    label: 'MCP tools',
    name: 'MCP Server Card UI',
    projectUrl: 'https://github.com/open-resource-discovery/mcp-server-card-ui',
    title: 'Discover MCP servers before connecting',
    summary: 'describes a remote server’s identity, transport endpoints, and supported protocol versions before you connect.',
    summaryLink: {
      label: 'An MCP Server Card',
      url: 'https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/seps/2127-mcp-server-cards.md',
    },
    concept: { label: 'ORD relationships for AI & Agents', route: 'ai-discovery' },
    repositories: [
      {
        name: 'mcp-server-card-ui',
        role: 'Editor & playground',
        description: 'Edit cards and test servers; includes prototype tool metadata.',
        url: 'https://github.com/open-resource-discovery/mcp-server-card-ui',
        liveUrl: 'https://open-resource-discovery.github.io/mcp-server-card-ui/playground',
        liveLabel: 'Open playground',
      },
      {
        name: 'ord-mcp-server-card-demo',
        role: 'Discovery demo',
        description: 'Compare manual setup, ORD discovery, and prototype tool selection.',
        url: 'https://github.com/open-resource-discovery/ord-mcp-server-card-demo',
      },
    ],
  },
  compaction: {
    label: 'Metadata compaction',
    name: 'Metadata Compactor',
    projectUrl: 'https://github.com/open-resource-discovery/metadata-compactor-golang',
    title: 'Make metadata context-efficient for LLMs',
    summary: 'Apply configurable rules to keep only the CSN metadata needed for a task.',
    repositories: [
      {
        name: 'metadata-compactor-golang',
        role: 'Library & CLI',
        description: 'Compact CSN JSON using configurable rules in Go or the CLI.',
        url: 'https://github.com/open-resource-discovery/metadata-compactor-golang',
      },
    ],
  },
  registry: {
    label: 'Registry workflow',
    name: 'Global Registry Bot',
    projectUrl: 'https://github.com/open-resource-discovery/global-registry-bot',
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
</script>

<template>
  <div v-if="project" class="slide-shell light-slide deep-slide ecosystem-project-slide">
    <DeckLogo :section="project.label"></DeckLogo>
    <header class="slide-header wide-header">
      <div class="project-heading">
        <h1><a :href="project.projectUrl" target="_blank" rel="noopener noreferrer">{{ project.name }}</a></h1>
        <h2>{{ project.title }}</h2>
      </div>
      <p class="slide-subtitle">
        <template v-if="project.summaryLink"><a :href="project.summaryLink.url" target="_blank" rel="noopener noreferrer">{{ project.summaryLink.label }}</a> {{ project.summary }}</template>
        <template v-else>{{ project.summary }}</template>
      </p>
    </header>
    <RouterLink v-if="project.concept" class="concept-link" :to="`/${project.concept.route}`">{{ project.concept.label }} →</RouterLink>

    <div class="project-content">
      <ProjectShowcase :group="group" />
      <aside class="repository-rail" :class="`count-${project.repositories.length}`" aria-label="What we offer">
        <span class="rail-label">What we offer</span>
        <article v-for="repository in project.repositories" :key="repository.name" class="repository-card">
          <span class="repository-role">{{ repository.role }}</span>
          <h3><a :href="repository.url" target="_blank" rel="noopener noreferrer">{{ repository.name }}</a></h3>
          <p>{{ repository.description }}</p>
          <footer>
            <a :href="repository.url" target="_blank" rel="noopener noreferrer">Source ↗</a>
            <a v-if="repository.liveUrl" :href="repository.liveUrl" target="_blank" rel="noopener noreferrer">{{ repository.liveLabel }} ↗</a>
            <a v-if="repository.exampleUrl" :href="repository.exampleUrl" target="_blank" rel="noopener noreferrer">{{ repository.exampleLabel }} ↗</a>
          </footer>
        </article>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.ecosystem-project-slide { gap: 14px; }
.ecosystem-project-slide .slide-header { gap: 2px; }
.project-heading { display: flex; max-width: 1136px; min-width: 0; align-items: baseline; gap: 10px; }
.ecosystem-project-slide .slide-header h1 { flex: none; max-width: none; font-size: 38px; line-height: 1.08; white-space: nowrap; }
.ecosystem-project-slide .slide-header h1 a { border: 0; color: var(--ord-text); text-decoration: none; }
.ecosystem-project-slide .slide-header h1 a:hover { color: var(--ord-brand); }
.ecosystem-project-slide .slide-header h1 a:focus-visible { outline: 2px solid var(--ord-brand); outline-offset: 3px; }
.ecosystem-project-slide .slide-header h2 { min-width: 0; max-width: none; transform: translateY(1px); color: #1e9095; font-size: 21px; font-weight: 650; line-height: 1.25; white-space: nowrap; }
.ecosystem-project-slide .slide-subtitle { max-width: 1130px; font-size: 16px; line-height: 1.35; }
.ecosystem-project-slide .slide-subtitle a { color: var(--ord-brand); font-weight: 700; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }
.ecosystem-project-slide .slide-subtitle a:hover { color: var(--ord-text); }
.ecosystem-project-slide .slide-subtitle a:focus-visible { outline: 2px solid var(--ord-brand); outline-offset: 3px; }
.repository-card a:focus-visible, .concept-link:focus-visible { outline: 2px solid var(--ord-brand); outline-offset: 3px; }
.project-content { display: flex; flex: 1; min-height: 0; flex-direction: column; justify-content: center; align-items: stretch; gap: 12px; }
.project-content :deep(.showcase) { flex: 1; min-height: 0; justify-content: center; }
.project-content :deep(.showcase-ui), .project-content :deep(.showcase-a2a), .project-content :deep(.showcase-mcp) { width: 100%; max-width: 1080px; align-self: center; }
.repository-rail { display: grid; gap: 12px; min-width: 0; }
.repository-rail.count-1 { grid-template-columns: 1fr; }
.repository-rail.count-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.repository-rail.count-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.repository-rail.count-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.rail-label { color: var(--ord-muted); font-size: 12px; font-weight: 750; letter-spacing: .05em; text-transform: uppercase; }
.rail-label { display: none; }
.repository-card { display: grid; min-width: 0; grid-template-columns: minmax(0, 1fr) auto; gap: 4px 16px; border: 1px solid var(--ord-sep); border-top: 3px solid var(--ord-accent-teal); border-radius: var(--ord-radius); background: var(--ord-accent-teal-bg); padding: 10px 15px; }
.repository-role { color: var(--ord-brand); font-size: 10px; font-weight: 750; letter-spacing: .04em; text-transform: uppercase; }
.repository-card h3 { font-size: 18px; font-weight: 750; line-height: 1.2; }
.repository-card h3, .repository-card p, .repository-card footer { margin: 0; }
.repository-card .repository-role, .repository-card h3 { grid-column: 1; }
.repository-card h3 a { color: var(--ord-text); border: 0; text-decoration: none; }
.repository-card h3 a:hover { color: var(--ord-brand); }
.repository-card p { grid-column: 1 / -1; color: var(--ord-muted); font-size: 13px; line-height: 1.35; }
.repository-card footer { display: flex; grid-column: 2; grid-row: 1 / 3; flex-direction: column; align-self: center; align-items: flex-end; gap: 5px; padding: 0; }
.repository-card footer a { border: 0; color: var(--ord-brand); font-size: 11px; font-weight: 700; text-decoration: none; }
.repository-card footer a:hover { text-decoration: underline; }
.concept-link { position: absolute; bottom: 16px; left: 24px; z-index: 7; border: 0; border-radius: 3px; background: var(--ord-link-bg); color: var(--ord-brand); font-size: 13px; font-weight: 700; line-height: 20px; margin: -1px -4px; padding: 1px 4px; text-decoration: none; transition: background-color 140ms ease; }
.concept-link:hover { border: 0; background: var(--ord-link-bg-hover); color: var(--ord-brand); }
</style>
