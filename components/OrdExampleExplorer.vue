<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

type Json = Record<string, any>

const origin = 'https://ord-reference-application.cfapps.sap.hana.ondemand.com'
const steps = [
  {
    label: 'Configuration',
    path: '/.well-known/open-resource-discovery',
    purpose: 'Discover documents, perspectives, and access strategies.',
    fallback: {
      openResourceDiscoveryV1: {
        documents: [
          { url: '/open-resource-discovery/v1/documents/system-version', accessStrategies: [{ type: 'open' }], perspective: 'system-version' },
          { url: '/open-resource-discovery/v1/documents/system-instance', accessStrategies: [{ type: 'basic-auth' }], perspective: 'system-instance' },
        ],
      },
    },
  },
  {
    label: 'ORD document',
    path: '/open-resource-discovery/v1/documents/system-version',
    purpose: 'Read the system context, resources, taxonomy, and links.',
    fallback: {
      openResourceDiscovery: '1.12',
      perspective: 'system-version',
      describedSystemVersion: { version: '1.1.1' },
      apiResources: [
        { ordId: 'sap.xref:apiResource:astronomy:v1', title: 'Astronomy API', version: '1.0.3', visibility: 'public', releaseStatus: 'active' },
        { ordId: 'sap.xref:apiResource:crm:v1', title: 'CRM API', version: '1.0.0', visibility: 'internal', releaseStatus: 'beta' },
      ],
      eventResources: [{ ordId: 'sap.xref:eventResource:odm-finance-costobject:v0', title: 'ODM Finance Cost Center Events' }],
      packages: [{ ordId: 'sap.xref:package:ord-reference-app-api:v1', title: 'ORD Reference App APIs' }],
      tombstones: [{ ordId: 'sap.xref:apiResource:astronomy:v0' }],
    },
  },
  {
    label: 'Resource definition',
    path: '/astronomy/v1/openapi/oas3.json',
    purpose: 'Follow the resource link to its detailed OpenAPI contract.',
    fallback: {
      openapi: '3.0.0',
      info: {
        title: 'Astronomy API',
        description: 'This is just a sample API',
        version: '1.0.3',
      },
      servers: [{ url: `${origin}/astronomy/v1` }],
      paths: {
        '/constellations': {
          get: {
            operationId: 'getConstellations',
            summary: 'Returns a list of constellations.',
            responses: {
              200: { description: 'A JSON array of constellations' },
            },
          },
        },
      },
    },
  },
]

const active = ref(0)
const status = ref<'loading' | 'live' | 'snapshot' | 'embedded'>('snapshot')
const response = ref('')
const frameKey = ref(0)
let pendingRequest: AbortController | undefined
const current = computed(() => steps[active.value])
const liveUrl = computed(() => `${origin}${current.value.path}`)
const highlightedLines = computed(() => response.value.split('\n').map(highlightJsonLine))

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function highlightJsonLine(line: string) {
  const tokenPattern = /"(?:\\.|[^"\\])*"|\btrue\b|\bfalse\b|\bnull\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g
  let highlighted = ''
  let cursor = 0

  for (const match of line.matchAll(tokenPattern)) {
    const token = match[0]
    const offset = match.index
    const safeToken = escapeHtml(token)
    const isString = token.startsWith('"')
    const isKey = isString && /^\s*:/.test(line.slice(offset + token.length))
    let rendered = safeToken

    highlighted += escapeHtml(line.slice(cursor, offset))

    if (isKey) rendered = `<span class="json-key">${safeToken}</span>`
    else if (isString) {
      let rawValue = ''
      try { rawValue = JSON.parse(token) } catch { /* keep malformed input readable */ }
      const relativeUrlField = rawValue.startsWith('/') && /"url"\s*:\s*$/.test(line.slice(0, offset))
      const href = rawValue.startsWith('https://') || rawValue.startsWith('http://')
        ? rawValue
        : relativeUrlField
          ? `${origin}${rawValue}`
          : ''

      if (href) {
        rendered = `<a class="json-link" href="${escapeHtml(href)}" target="_blank" rel="noreferrer">${safeToken}</a>`
      } else rendered = `<span class="json-string">${safeToken}</span>`
    } else if (token === 'true' || token === 'false') rendered = `<span class="json-boolean">${safeToken}</span>`
    else if (token === 'null') rendered = `<span class="json-null">${safeToken}</span>`
    else rendered = `<span class="json-number">${safeToken}</span>`

    highlighted += rendered
    cursor = offset + token.length
  }

  return highlighted + escapeHtml(line.slice(cursor))
}

function summarize(data: Json, index: number): Json {
  if (index === 0) return data
  if (index === 1) {
    return {
      openResourceDiscovery: data.openResourceDiscovery,
      perspective: data.perspective,
      describedSystemVersion: data.describedSystemVersion,
      products: data.products?.map(({ ordId, title }: Json) => ({ ordId, title })),
      apiResources: data.apiResources?.map(({ ordId, title, version, visibility, releaseStatus, resourceDefinitions }: Json) => ({
        ordId, title, version, visibility, releaseStatus, resourceDefinitions,
      })),
      eventResources: data.eventResources?.map(({ ordId, title, version, visibility, releaseStatus }: Json) => ({
        ordId, title, version, visibility, releaseStatus,
      })),
      packages: data.packages?.map(({ ordId, title }: Json) => ({ ordId, title })),
      tombstones: data.tombstones,
    }
  }
  const getConstellations = data.paths?.['/constellations']?.get ?? {}
  const okResponse = getConstellations.responses?.['200'] ?? {}
  return {
    openapi: data.openapi ?? '3.0.0',
    info: {
      title: data.info?.title ?? 'Astronomy API',
      description: data.info?.description ?? 'This is just a sample API',
      version: data.info?.version ?? '1.0.3',
    },
    servers: data.servers?.slice(0, 1) ?? [{ url: `${origin}/astronomy/v1` }],
    paths: {
      '/constellations': {
        get: {
          operationId: getConstellations.operationId ?? 'getConstellations',
          summary: getConstellations.summary ?? 'Returns a list of constellations.',
          responses: {
            200: { description: okResponse.description ?? 'A JSON array of constellations' },
          },
        },
      },
    },
  }
}

async function query() {
  pendingRequest?.abort()
  const controller = new AbortController()
  pendingRequest = controller
  const index = active.value
  const step = steps[index]
  status.value = 'loading'
  try {
    const result = await fetch(`/ord-reference${step.path}`, { cache: 'no-store', signal: controller.signal })
    if (!result.ok) throw new Error(`HTTP ${result.status}`)
    const data = await result.json()
    if (controller.signal.aborted) return
    response.value = JSON.stringify(summarize(data, index), null, 2)
    status.value = 'live'
  } catch {
    if (controller.signal.aborted) return
    status.value = 'embedded'
    frameKey.value += 1
  }
}

onUnmounted(() => pendingRequest?.abort())

function select(index: number) {
  active.value = index
  response.value = JSON.stringify(steps[index].fallback, null, 2)
  void query()
}

onMounted(() => {
  response.value = JSON.stringify(current.value.fallback, null, 2)
  void query()
})
</script>

<template>
  <div class="example-explorer">
    <aside>
      <a class="live-label" :href="origin" target="_blank" rel="noreferrer"><i></i> ORD Reference Application ↗</a>
      <button v-for="(step, index) in steps" :key="step.path" :class="{ active: active === index }" @click="select(index)">
        <span>0{{ index + 1 }}</span>
        <strong>{{ step.label }}</strong>
        <small>{{ step.purpose }}</small>
      </button>
      <p class="browser-note">Responses are simplified for this walkthrough. Open the full reference application for the complete picture.</p>
    </aside>

    <section class="response-panel">
      <header>
        <div class="window-dots"><i></i><i></i><i></i></div>
        <a class="request-url" :href="liveUrl" target="_blank" rel="noreferrer"><b>GET</b><span>{{ current.path }}</span></a>
        <button @click="query">Query live</button>
      </header>
      <div v-if="status === 'loading'" class="loading"><i></i><span>Requesting live metadata…</span></div>
      <iframe v-else-if="status === 'embedded'" :key="frameKey" :src="liveUrl" title="Live ORD reference response"></iframe>
      <pre v-else><code><span v-for="(line, index) in highlightedLines" :key="`${active}-${index}`" class="code-line"><span class="line-number">{{ index + 1 }}</span><span class="line-source" v-html="line || '&amp;nbsp;'"></span></span></code></pre>
      <footer>
        <span :class="status"><i></i>{{ status === 'live' ? 'Live response' : status === 'embedded' ? 'Live embedded response' : 'Bundled fallback' }}</span>
        <a :href="liveUrl" target="_blank">Open raw endpoint ↗</a>
      </footer>
    </section>
  </div>
</template>

<style scoped>
.example-explorer { display: grid; flex: 1; grid-template-columns: 290px 1fr; gap: 18px; min-height: 0; }
aside { display: flex; flex-direction: column; gap: 10px; }
.live-label { display: flex; align-items: center; gap: 8px; color: var(--ord-brand); font-size: 11px; font-weight: 750; text-decoration: none; text-transform: uppercase; }
.live-label:hover { text-decoration: underline; text-underline-offset: 3px; }
.live-label i, footer span i { width: 7px; height: 7px; border-radius: 50%; background: var(--ord-brand-2); box-shadow: 0 0 0 4px var(--ord-teal-soft); }
aside button { display: grid; grid-template-columns: 28px 1fr; gap: 5px 8px; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: var(--ord-card-bg); color: inherit; cursor: pointer; padding: 14px; text-align: left; }
aside button.active { border-color: var(--ord-brand-2); background: var(--ord-teal-soft); }
aside button span { grid-row: 1 / 3; color: var(--ord-faint); font-size: 11px; font-weight: 750; }
aside button strong { color: var(--ord-text); font-size: 16px; }
aside button small { color: var(--ord-muted); font-size: 12px; line-height: 1.3; }
.browser-note { margin-top: auto !important; color: var(--ord-faint); font-size: 11px; line-height: 1.4; }
.response-panel { display: grid; min-width: 0; min-height: 0; grid-template-rows: 50px 1fr 38px; overflow: hidden; border: 1px solid var(--ord-sep); border-radius: var(--ord-radius); background: #11161b; }
.response-panel header { display: grid; grid-template-columns: 70px 1fr auto; align-items: center; gap: 12px; border-bottom: 1px solid #29323a; background: #1c232a; padding: 0 14px; }
.window-dots { display: flex; gap: 6px; }
.window-dots i { width: 9px; height: 9px; border-radius: 50%; background: #52606a; }
.window-dots i:first-child { background: #f78166; }
.window-dots i:nth-child(2) { background: #e7c55f; }
.window-dots i:last-child { background: #67bd78; }
.request-url { display: flex; min-width: 0; align-items: center; gap: 10px; overflow: hidden; color: #b6c2ca; font-family: var(--ord-mono); font-size: 13px; text-decoration: none; white-space: nowrap; }
.request-url b { color: #4ec9b0; font-size: 11px; }
.request-url span { overflow: hidden; text-overflow: ellipsis; }
.request-url:hover span { color: #d7e2e8; text-decoration: underline; text-underline-offset: 3px; }
.response-panel header button { border: 1px solid #45615f; border-radius: 5px; background: #243432; color: #c8f5ee; cursor: pointer; font-family: var(--ord-font); font-size: 11px; font-weight: 700; padding: 7px 10px; }
pre { min-height: 0; margin: 0; overflow: auto; background: #11161b; padding: 12px 0; }
pre code { display: block; min-width: max-content; color: #d4d4d4; font-family: var(--ord-mono); font-size: 13px; line-height: 1.28; }
.code-line { display: grid; grid-template-columns: 44px 1fr; min-height: 1.28em; padding-right: 18px; }
.code-line:hover { background: rgba(255, 255, 255, 0.035); }
.line-number { color: #5c6770; padding-right: 13px; text-align: right; user-select: none; }
.line-source { white-space: pre; }
.line-source :deep(.json-key) { color: #9cdcfe; }
.line-source :deep(.json-string) { color: #ce9178; }
.line-source :deep(.json-number) { color: #b5cea8; }
.line-source :deep(.json-boolean) { color: #569cd6; }
.line-source :deep(.json-null) { color: #c586c0; }
.line-source :deep(.json-link) { color: #ce9178; text-decoration: underline; text-decoration-color: rgba(206, 145, 120, 0.45); text-underline-offset: 2px; }
.line-source :deep(.json-link:hover) { color: #f2c1a9; text-decoration-color: currentColor; }
iframe { width: 100%; height: 100%; border: 0; background: #fff; }
.loading { display: flex; align-items: center; justify-content: center; gap: 12px; color: #93a2ac; font-size: 14px; }
.loading i { width: 16px; height: 16px; border: 2px solid #34414a; border-top-color: var(--ord-brand-2); border-radius: 50%; animation: spin .7s linear infinite; }
.response-panel footer { display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #29323a; background: #1c232a; padding: 0 14px; }
.response-panel footer span { display: flex; align-items: center; gap: 8px; color: #93a2ac; font-size: 10px; font-weight: 650; text-transform: uppercase; }
.response-panel footer span.snapshot i { background: #e7c55f; box-shadow: none; }
.response-panel footer a { color: #73cfc4; font-size: 11px; text-decoration: none; }
@keyframes spin { to { transform: rotate(360deg); } }
</style>
