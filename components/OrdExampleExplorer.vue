<script setup lang="ts">
import { computed, onUnmounted, ref } from 'vue'
import configuration from '../data/orders/configuration.json'
import document from '../data/orders/document.json'
import openapi from '../data/orders/openapi.json'

type Json = Record<string, any>
const origin = 'https://ord-reference-application.cfapps.sap.hana.ondemand.com'
const steps = [
  {
    label: 'Configuration', path: '/.well-known/open-resource-discovery',
    livePath: '/.well-known/open-resource-discovery', file: 'configuration', data: configuration,
    purpose: 'Find documents and access strategies.',
    excerpt: `{
  "baseUrl": "${configuration.baseUrl}",
  "openResourceDiscoveryV1": {
    "documents": [{
      "url": "${configuration.openResourceDiscoveryV1.documents[0].url}",
      "accessStrategies": [{"type": "open"}]
    }]
  }
}`,
  },
  {
    label: 'ORD document', path: '/ord/v1/orders',
    livePath: '/open-resource-discovery/v1/documents/system-version', file: 'document', data: document,
    purpose: 'Read the contract link and domain context.',
    excerpt: `{
  "openResourceDiscovery": "${document.openResourceDiscovery}",
  "apiResources": [{
    "ordId": "${document.apiResources[0].ordId}",
    "title": "${document.apiResources[0].title}",
    "resourceDefinitions": [{
      "type": "${document.apiResources[0].resourceDefinitions[0].type}",
      "url": "${document.apiResources[0].resourceDefinitions[0].url}"
    }],
    "exposedEntityTypes": [
      {"ordId": "${document.apiResources[0].exposedEntityTypes[0].ordId}"}
    ]
  }]
}`,
  },
  {
    label: 'API definition', path: '/orders/openapi.json',
    livePath: '/astronomy/v1/openapi/oas3.json', file: 'openapi', data: openapi,
    purpose: 'Read operations, schemas, and responses.',
    excerpt: `{
  "openapi": "${openapi.openapi}",
  "info": {"title": "${openapi.info.title}", "version": "${openapi.info.version}"},
  "paths": {
    "/orders": {
      "get": {
        "operationId": "${openapi.paths['/orders'].get.operationId}",
        "summary": "${openapi.paths['/orders'].get.summary}",
        "responses": {"200": {"description": "Customer orders"}}
      }
    }
  }
}`,
  },
]

const active = ref(0)
const mode = ref<'example' | 'live'>('example')
const status = ref<'example' | 'loading' | 'live' | 'fallback'>('example')
const response = ref(steps[0].excerpt)
let pendingRequest: AbortController | undefined
const current = computed(() => steps[active.value])
const liveUrl = computed(() => `${origin}${current.value.livePath}`)
const requestPath = computed(() => mode.value === 'live' ? current.value.livePath : current.value.path)
const downloadUrl = computed(() => `data:application/json;charset=utf-8,${encodeURIComponent(JSON.stringify(current.value.data, null, 2))}`)
const highlightedLines = computed(() => response.value.split('\n').map(highlightJsonLine))

function escapeHtml(value: string) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')
}

function highlightJsonLine(line: string) {
  const tokenPattern = /"(?:\\.|[^"\\])*"|\btrue\b|\bfalse\b|\bnull\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g
  let highlighted = '', cursor = 0
  for (const match of line.matchAll(tokenPattern)) {
    const token = match[0], offset = match.index, safe = escapeHtml(token)
    const isString = token.startsWith('"')
    const isKey = isString && /^\s*:/.test(line.slice(offset + token.length))
    let rendered = safe
    highlighted += escapeHtml(line.slice(cursor, offset))
    if (isKey) rendered = `<span class="json-key">${safe}</span>`
    else if (isString) {
      let value = ''
      try { value = JSON.parse(token) } catch { /* preserve malformed live data */ }
      const target = mode.value === 'example' ? steps.findIndex(step => step.path === value) : -1
      const isUrl = /^https?:\/\//.test(value) || (value.startsWith('/') && /"url"\s*:\s*$/.test(line.slice(0, offset)))
      if (target >= 0) rendered = `<button class="json-link" data-step="${target}" aria-label="Follow link to ${steps[target].label}">${safe}</button>`
      else if (mode.value === 'live' && isUrl) {
        const url = new URL(value, origin).href
        rendered = `<a class="json-link" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${safe}</a>`
      } else rendered = `<span class="json-string">${safe}</span>`
    } else rendered = `<span class="json-literal">${safe}</span>`
    highlighted += rendered
    cursor = offset + token.length
  }
  return highlighted + escapeHtml(line.slice(cursor))
}

function summarize(data: Json, index: number): Json {
  if (index === 0) return data
  if (index === 1) return {
    openResourceDiscovery: data.openResourceDiscovery,
    perspective: data.perspective,
    apiResources: data.apiResources?.slice(0, 1).map(({ordId, title, resourceDefinitions}: Json) => ({ordId, title, resourceDefinitions})),
  }
  const firstPath = Object.entries(data.paths ?? {}).find(([, value]) => (value as Json).get)
  return {openapi: data.openapi, info: data.info, paths: firstPath ? {[firstPath[0]]: firstPath[1]} : data.paths}
}

async function query() {
  pendingRequest?.abort()
  const controller = new AbortController()
  pendingRequest = controller
  const index = active.value
  mode.value = 'live'
  status.value = 'loading'
  try {
    const result = await fetch(`/ord-reference${steps[index].livePath}`, {
      cache: 'no-store', signal: AbortSignal.any([controller.signal, AbortSignal.timeout(8000)]),
    })
    if (!result.ok) throw new Error(`HTTP ${result.status}`)
    const data = await result.json()
    if (controller.signal.aborted) return
    response.value = JSON.stringify(summarize(data, index), null, 2)
    status.value = 'live'
  } catch {
    if (controller.signal.aborted) return
    mode.value = 'example'
    response.value = steps[index].excerpt
    status.value = 'fallback'
  }
}

function select(index: number) {
  active.value = index
  if (mode.value === 'live') void query()
  else response.value = current.value.excerpt
}

function showExample() {
  pendingRequest?.abort()
  mode.value = 'example'
  status.value = 'example'
  response.value = current.value.excerpt
}

function followLink(event: MouseEvent) {
  const button = (event.target as HTMLElement).closest<HTMLButtonElement>('button[data-step]')
  if (button) select(Number(button.dataset.step))
}

onUnmounted(() => pendingRequest?.abort())
</script>

<template>
  <div class="example-explorer" :class="{ 'live-mode': mode === 'live' }">
    <aside>
      <span class="example-label">Orders example · ORD 1.16</span>
      <button v-for="(step, index) in steps" :key="step.file" class="step" :class="{ active: active === index }" :aria-pressed="active === index" @click="select(index)">
        <span>0{{ index + 1 }}</span><strong>{{ step.label }}</strong><small>{{ step.purpose }}</small>
      </button>
      <p class="browser-note"><code>foo</code> is a placeholder vendor. Use your own namespace; <code>foo.orders</code> identifies a system.</p>
      <button v-if="mode === 'live'" class="mode-link" @click="showExample">Return to Orders example</button>
      <a v-else class="mode-link" :href="origin" target="_blank" rel="noreferrer">Live reference application ↗</a>
    </aside>
    <section class="response-panel">
      <header>
        <span class="method">GET</span>
        <a v-if="mode === 'live'" class="request-url" :href="liveUrl" target="_blank" rel="noreferrer">{{ requestPath }}</a>
        <span v-else class="request-url">{{ requestPath }}</span>
        <button @click="query">{{ mode === 'live' ? 'Query live' : 'Try live demo' }}</button>
      </header>
      <div v-if="status === 'loading'" class="loading"><i></i><span>Requesting live metadata…</span></div>
      <pre v-else @click="followLink"><code><span v-for="(line, index) in highlightedLines" :key="`${mode}-${active}-${index}`" class="code-line"><span class="line-number">{{ index + 1 }}</span><span class="line-source" v-html="line || '&amp;nbsp;'"></span></span></code></pre>
      <footer>
        <span>{{ status === 'live' ? 'Live excerpt · provider declares its ORD version' : status === 'loading' ? 'Loading…' : status === 'fallback' ? 'Live unavailable · Orders example' : 'Illustrative endpoints · excerpt' }}</span>
        <a v-if="mode === 'example'" :href="downloadUrl" :download="`orders-${current.file}.json`">Full JSON ↓</a>
        <a v-else :href="liveUrl" target="_blank" rel="noreferrer">Raw response ↗</a>
      </footer>
    </section>
  </div>
</template>

<style scoped>
.example-explorer { display: grid; flex: 1; grid-template-columns: 280px 1fr; gap: 18px; min-height: 0; }
aside { display: flex; flex-direction: column; gap: 10px; padding-bottom: 36px; }
.example-label { color: var(--ord-brand); font-size: 16px; font-weight: 750; }
.step { display: grid; grid-template-columns: 28px 1fr; gap: 5px 8px; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: var(--ord-card-bg); color: inherit; cursor: pointer; padding: 14px; text-align: left; }
.step.active { border-color: var(--ord-brand-2); background: var(--ord-teal-soft); }
.step > span { grid-row: 1 / 3; color: var(--ord-faint); font-size: 16px; font-weight: 750; }
.step strong { color: var(--ord-text); font-size: 18px; }
.step small { color: var(--ord-muted); font-size: 16px; line-height: 1.3; }
.browser-note { margin-top: auto !important; color: var(--ord-muted); font-size: 16px; line-height: 1.4; }
.browser-note code { font-size: inherit; }
.mode-link { align-self: flex-start; border: 0; background: transparent; color: var(--ord-brand); cursor: pointer; font-size: 16px; padding: 0; }
.response-panel { display: grid; min-width: 0; min-height: 0; grid-template-rows: 50px 1fr 42px; overflow: hidden; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: #11161b; }
.response-panel header { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 12px; border-bottom: 1px solid #29323a; background: #1c232a; padding: 0 14px; }
.method { color: #4ec9b0; font-family: var(--ord-mono); font-size: 16px; font-weight: 750; }
.request-url { min-width: 0; overflow: hidden; color: #b6c2ca; font-family: var(--ord-mono); font-size: 16px; text-overflow: ellipsis; white-space: nowrap; }
.response-panel header button { border: 1px solid #45615f; border-radius: 5px; background: #243432; color: #c8f5ee; cursor: pointer; font-size: 16px; font-weight: 700; padding: 7px 10px; }
pre { min-height: 0; margin: 0; overflow: auto; background: #11161b; padding: 10px 0; }
pre code { display: block; min-width: max-content; color: #d4d4d4; font-family: var(--ord-mono); font-size: 18px; line-height: 1.35; }
.live-mode pre code { font-size: 16px; }
.code-line { display: grid; grid-template-columns: 40px 1fr; min-height: 1.35em; padding-right: 14px; }
.line-number { color: #7b8891; padding-right: 12px; text-align: right; user-select: none; }
.line-source { white-space: pre; }
.line-source :deep(.json-key) { color: #9cdcfe; }
.line-source :deep(.json-string) { color: #ce9178; }
.line-source :deep(.json-literal) { color: #b5cea8; }
.line-source :deep(.json-link) { display: inline; border: 0; border-radius: 2px; background: transparent; color: #f2c1a9; cursor: pointer; font: inherit; padding: 0; text-decoration: underline; text-underline-offset: 3px; }
.line-source :deep(.json-link:hover) { color: #fff; }
.line-source :deep(.json-link:focus-visible) { outline: 2px solid #73cfc4; outline-offset: 2px; }
.loading { display: flex; align-items: center; justify-content: center; gap: 12px; color: #b6c2ca; font-size: 18px; }
.loading i { width: 16px; height: 16px; border: 2px solid #34414a; border-top-color: var(--ord-brand-2); border-radius: 50%; animation: spin .7s linear infinite; }
.response-panel footer { display: flex; align-items: center; justify-content: space-between; gap: 10px; border-top: 1px solid #29323a; background: #1c232a; padding: 0 14px; }
.response-panel footer span { color: #b6c2ca; font-size: 14px; }
.response-panel footer a { flex-shrink: 0; color: #73cfc4; font-size: 16px; }
@keyframes spin { to { transform: rotate(360deg); } }
</style>
