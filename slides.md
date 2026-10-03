---
theme: default
routeAlias: introduction
title: Open Resource Discovery
info: |
  A public introduction to the Open Resource Discovery specification.
colorSchema: dark
canvasWidth: 1280
aspectRatio: 16/9
transition: fade
drawings:
  enabled: false
---

<CoverSlide></CoverSlide>

---
routeAlias: why-section
deckSection: Why
---

<SectionSlide
  number="01"
  title="Why"
  text="Connect fragmented resource metadata without replacing the standards that describe it."
></SectionSlide>

---
routeAlias: metadata-silos
---

<div class="slide-shell split-slide light-slide challenge-slide">
<DeckLogo section="Metadata silos"></DeckLogo>
<section class="text-column">
<h2 class="combined-heading"><span>The challenge:</span> Resource metadata lives in silos</h2>
<p class="lead small">Specialized standards describe individual resources well, but they do not provide a shared inventory of a system or landscape.</p>
<ul class="statement-list compact-list">
<li>Catalogs often integrate with every provider and format separately.</li>
<li>High-level context and relationships are expressed inconsistently.</li>
<li>Static documentation can drift from what a running system exposes.</li>
</ul>
</section>
<section class="diagram-column">
<SilosDiagram></SilosDiagram>
</section>
</div>

---
routeAlias: metadata-alignment
---

<div class="slide-shell light-slide">
<DeckLogo section="Alignment"></DeckLogo>
<header class="slide-header wide-header">
<h2>One discovery contract replaces many custom adapters</h2>
<p class="slide-subtitle">ORD aligns metadata description and discovery while preserving specialized resource-definition standards.</p>
</header>
<AlignmentDiagram></AlignmentDiagram>
</div>

---
routeAlias: how-section
deckSection: How
---

<SectionSlide
  number="02"
  title="How"
  text="Publish a self-description, aggregate it into an effective view, and expose it for discovery."
></SectionSlide>

---
routeAlias: self-description
---

<div class="slide-shell split-slide light-slide">
<DeckLogo section="What is ORD?"></DeckLogo>
<section class="text-column">
<h2>A protocol for self-description</h2>
<p class="lead small">Open Resource Discovery enables applications and services to describe their exposed resources and capabilities in a standardized, machine-readable way.</p>
<div class="boundary-callout">
<strong>ORD adds the shared context.</strong>
<span>Detailed contracts remain in formats such as OpenAPI, AsyncAPI, OData CSDL, A2A Agent Cards, or other definitions.</span>
</div>
</section>
<section class="diagram-column">
<ProviderDiagram></ProviderDiagram>
</section>
</div>

---
routeAlias: pull-overview
---

<div class="slide-shell light-slide">
<DeckLogo section="Pull transport"></DeckLogo>
<header class="slide-header wide-header">
<h2>Discovery follows links from one known entry point</h2>
<p class="slide-subtitle">An aggregator or direct consumer starts with a known system, reads its ORD configuration, then crawls the linked metadata.</p>
</header>
<DiscoveryFlowDiagram></DiscoveryFlowDiagram>
<DeepDiveLink to="pull-sequence" label="Sequence diagram"></DeepDiveLink>
</div>

---
routeAlias: ord-by-example
---

<div class="slide-shell light-slide example-slide">
<DeckLogo section="ORD by example"></DeckLogo>
<header class="slide-header wide-header">
<h2>Follow the links through a real provider</h2>
</header>
<OrdExampleExplorer></OrdExampleExplorer>
</div>

---
routeAlias: information-model
---

<div class="slide-shell split-slide light-slide">
<DeckLogo section="Information model"></DeckLogo>
<section class="text-column">
<h2>Resources become connected metadata</h2>
<ul class="statement-list compact-list">
<li><strong>Resources:</strong> APIs, Events, Data Products <span class="beta-pill">beta</span>, Agents <span class="beta-pill">beta</span>, Capabilities, and Integration Dependencies.</li>
<li><strong>Taxonomy and access context:</strong> Vendors, Products, Packages, Entity Types, Groups / Group Types, and Consumption Bundles.</li>
<li><strong>Relationships:</strong> connect resources to definitions, semantics, ownership, lifecycle, and dependencies.</li>
</ul>
</section>
<section class="diagram-column">
<DataModelDiagram></DataModelDiagram>
</section>
<DeepDiveLink to="namespace-concept" label="Namespaces and IDs"></DeepDiveLink>
</div>

---
routeAlias: ord-roles
---

<div class="slide-shell light-slide">
<DeckLogo section="Architecture"></DeckLogo>
<header class="slide-header wide-header">
<h2>Three roles, clear responsibilities</h2>
<p class="slide-subtitle">Providers publish a simple self-description, aggregators build a connected view, and consumers retrieve metadata through a discovery-oriented API.</p>
</header>
<RolesDiagram></RolesDiagram>
</div>

---
routeAlias: perspectives-overview
---

<div class="slide-shell split-slide light-slide">
<DeckLogo section="Perspectives"></DeckLogo>
<section class="text-column">
<h2>Describe what is offered and what is running</h2>
<ul class="statement-list compact-list">
<li><strong>Static:</strong> a system type or version describes the reusable baseline without tenant-specific context.</li>
<li><strong>Dynamic:</strong> a system instance describes the complete runtime view, including configuration and extensions.</li>
<li><strong>System-independent:</strong> shared taxonomy can be published once outside a system context.</li>
</ul>
</section>
<section class="diagram-column">
<PerspectivesDiagram></PerspectivesDiagram>
</section>
<DeepDiveLink to="perspective-resolution" label="Resolution rules"></DeepDiveLink>
</div>

---
routeAlias: connected-landscape
---

<div class="slide-shell light-slide">
<DeckLogo section="Connected landscape"></DeckLogo>
<header class="slide-header wide-header">
<h2>Aggregation turns self-descriptions into a bigger picture</h2>
<p class="slide-subtitle">Shared identifiers, taxonomy, and dependency links make resources navigable across systems without creating a single mandatory system of record.</p>
</header>
<LandscapeDiagram></LandscapeDiagram>
<DeepDiveLink to="landscape-model" label="Landscape model"></DeepDiveLink>
</div>

---
routeAlias: enables-section
deckSection: What it enables
---

<SectionSlide
  number="03"
  title="What it enables"
  text="Reuse connected metadata across catalogs, developer tools, automation, and AI."
></SectionSlide>

---
routeAlias: ai-discovery
---

<div class="slide-shell split-slide light-slide">
<DeckLogo section="AI-ready discovery"></DeckLogo>
<section class="text-column">
<h2>Give AI consumers context, not another silo</h2>
<ul class="statement-list compact-list">
<li>Agents <span class="beta-pill">beta</span> can be cataloged with ownership, purpose, relationships, and lifecycle metadata.</li>
<li>A2A interfaces and MCP servers can be represented through ORD API Resources; A2A resources link Agent Card definitions.</li>
<li><code>aiHint</code> adds focused guidance for LLMs and agent orchestrators without mixing it into human-facing descriptions.</li>
</ul>
<a class="outlook-callout" href="https://github.com/open-resource-discovery/specification/pull/102" target="_blank">
<span>Outlook · proposed for 1.17</span>
<strong>Agent Skills and Agent Plugins as discoverable Capability types</strong>
</a>
</section>
<section class="diagram-column">
<AiDiscoveryDiagram></AiDiscoveryDiagram>
</section>
<DeepDiveLink to="skills-preview" label="Skills preview"></DeepDiveLink>
</div>

---
routeAlias: scope
---

<div class="slide-shell light-slide">
<DeckLogo section="Scope"></DeckLogo>
<header class="slide-header wide-header">
<h2>ORD standardizes discovery, not everything</h2>
</header>
<div class="scope-grid">
<section class="scope-card does">
<p class="scope-label">ORD does</p>
<h3>Describe and connect</h3>
<ul>
<li>Inventory exposed resources and capabilities</li>
<li>Link detailed machine-readable definitions</li>
<li>Add common identity, lifecycle, taxonomy, and relations</li>
<li>Standardize publishing and discovery behavior</li>
</ul>
</section>
<section class="scope-card does-not">
<p class="scope-label">ORD does not</p>
<h3>Replace specialized concerns</h3>
<ul>
<li>Replace OpenAPI, AsyncAPI, A2A, or other contracts</li>
<li>Transport business data or fast-moving telemetry</li>
<li>Discover unknown systems before their location is known</li>
<li>Make private or internal metadata public</li>
</ul>
</section>
</div>
</div>

---
routeAlias: outcomes
---

<div class="slide-shell light-slide">
<DeckLogo section="Outcomes"></DeckLogo>
<header class="slide-header wide-header">
<h2>One foundation, many metadata-driven experiences</h2>
</header>
<div class="outcome-grid">
<section class="outcome-card"><span>01</span><svg viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="3" width="10" height="10" rx="2"/><rect x="19" y="3" width="10" height="10" rx="2"/><rect x="3" y="19" width="10" height="10" rx="2"/><rect x="19" y="19" width="10" height="10" rx="2"/></svg><h3>Catalogs</h3><p>Build searchable inventories across resource types and providers.</p></section>
<section class="outcome-card"><span>02</span><svg viewBox="0 0 32 32" aria-hidden="true"><rect x="2" y="4" width="28" height="24" rx="3"/><path d="M2 10H30M11 15L7 19L11 23M21 15L25 19L21 23M18 14L14 24"/></svg><h3>Developer tooling</h3><p>Find contracts, documentation, and access context programmatically.</p></section>
<section class="outcome-card"><span>03</span><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 10V15M7 22V15H25V22"/><rect x="11" y="2" width="10" height="8" rx="2"/><rect x="2" y="22" width="10" height="8" rx="2"/><rect x="20" y="22" width="10" height="8" rx="2"/></svg><h3>Landscape insight</h3><p>Understand the capabilities and dependencies of running systems.</p></section>
<section class="outcome-card"><span>04</span><svg viewBox="0 0 32 32" aria-hidden="true"><rect x="5" y="8" width="22" height="20" rx="4"/><path d="M16 3V8M2 15V22M30 15V22M11 22H21"/><circle cx="11" cy="16" r="1.5"/><circle cx="21" cy="16" r="1.5"/></svg><h3>Automation and AI</h3><p>Ground tools and agents in governed, current, machine-readable metadata.</p></section>
</div>
</div>

---
routeAlias: adoption
---

<div class="slide-shell light-slide">
<DeckLogo section="Adoption"></DeckLogo>
<header class="slide-header wide-header">
<h2>Start with the role you play</h2>
</header>
<div class="adoption-grid">
<section class="adoption-card provider-card">
<span class="adoption-number">01</span>
<h3>Provider</h3>
<p>Expose the well-known configuration, one or more ORD documents, and linked definitions.</p>
</section>
<section class="adoption-card aggregator-card">
<span class="adoption-number">02</span>
<h3>Aggregator</h3>
<p>Crawl, validate, preserve perspectives, host definitions, and offer an effective discovery view.</p>
</section>
<section class="adoption-card consumer-card">
<span class="adoption-number">03</span>
<h3>Consumer</h3>
<p>Prefer an aggregator's Discovery API, or crawl a provider directly when that fits the use case.</p>
</section>
</div>
<p class="adoption-note">Adoption can be incremental: publish the resources you own, keep detailed contracts in their native formats, and add richer relations over time.</p>
</div>

---
routeAlias: closing
---

<div class="slide-shell end-slide dark-slide">
<DeckLogo></DeckLogo>
<div class="end-layout">
<section class="end-copy">
<p class="eyebrow">Open standard</p>
<h2>Explore, implement, and help shape ORD</h2>
<p class="lead small">Open Resource Discovery is open source under <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a> and governed by the <a href="https://neonephos.org/" target="_blank">NeoNephos Foundation</a> under <a href="https://linuxfoundation.eu/" target="_blank">Linux Foundation Europe</a>.</p>
<div class="next-grid">
<a href="https://open-resource-discovery.org/introduction" target="_blank"><span>5-minute primer</span><small>open-resource-discovery.org/introduction</small></a>
<a href="https://open-resource-discovery.org/spec-v1/" target="_blank"><span>ORD specification</span><small>open-resource-discovery.org/spec-v1</small></a>
<a href="https://github.com/open-resource-discovery" target="_blank"><span>Project on GitHub</span><small>github.com/open-resource-discovery</small></a>
</div>
</section>
<ClosingQr></ClosingQr>
</div>
<DeepDiveLink to="tools-ecosystem" label="Tools &amp; Ecosystem" kicker="Explore"></DeepDiveLink>
</div>

---
routeAlias: deep-dive-section
deckSection: Deep dives
---

<SectionSlide
  number="04"
  title="Deep dives"
  text="Open the protocol where the conversation needs more detail, then return to the main story."
></SectionSlide>

---
routeAlias: deep-dives
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Overview"></DeckLogo>
<DeepDiveNav back-to="introduction" back-label="Main presentation"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>ORD details, one concept at a time</h2>
</header>
<DeepDiveIndex></DeepDiveIndex>
</div>

---
routeAlias: namespace-concept
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Namespace concept"></DeckLogo>
<DeepDiveNav back-to="information-model" back-label="Information model"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Identity starts with clear ownership</h2>
<p class="slide-subtitle">System namespaces describe system-owned information; authority namespaces identify shared contracts, definitions, or taxonomy.</p>
</header>
<NamespaceConceptDiagram></NamespaceConceptDiagram>
</div>

---
routeAlias: landscape-model
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo section="System landscape model"></DeckLogo>
<DeepDiveNav back-to="connected-landscape" back-label="Connected landscape"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>ORD adds detail to systems you already know</h2>
<p class="slide-subtitle">Service discovery identifies system instances; ORD describes their resources and connects them to static system and portfolio context.</p>
</header>
<LandscapeModelDiagram></LandscapeModelDiagram>
</div>

---
routeAlias: ord-identifiers
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo section="ORD identifiers"></DeckLogo>
<DeepDiveNav back-to="namespace-concept" back-label="Namespace concept" next-to="related-identifiers" next-label="Related IDs"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>ORD ID: How to construct the type-level ID</h2>
<p class="slide-subtitle">An ORD ID identifies the governed resource at design time. Runtime uniqueness also needs the system-instance context.</p>
</header>
<OrdIdDiagram></OrdIdDiagram>
</div>

---
routeAlias: related-identifiers
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Identifier families"></DeckLogo>
<DeepDiveNav back-to="ord-identifiers" back-label="ORD IDs"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Three identifiers, three jobs</h2>
<p class="slide-subtitle">The namespace establishes who governs the identifier; its remaining fragments determine what kind of reference it represents.</p>
</header>
<IdentifierTypesDiagram></IdentifierTypesDiagram>
</div>

---
routeAlias: versioning-lifecycle
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Versioning and lifecycle"></DeckLogo>
<DeepDiveNav back-to="information-model" back-label="Information model" next-to="api-lifecycle" next-label="API lifecycle example"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Identity, change, and maturity are separate signals</h2>
</header>
<LifecycleDiagram></LifecycleDiagram>
</div>

---
routeAlias: api-lifecycle
---

<script setup>
import ApiLifecycleDiagram from './components/ApiLifecycleDiagram.vue'
</script>

<div class="slide-shell light-slide deep-slide">
<DeckLogo section="API lifecycle example"></DeckLogo>
<DeepDiveNav back-to="versioning-lifecycle" back-label="Versioning &amp; lifecycle"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>API lifecycle: evolve, replace, then retire</h2>
</header>
<ApiLifecycleDiagram></ApiLifecycleDiagram>
</div>

---
routeAlias: perspective-resolution
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Perspective resolution"></DeckLogo>
<DeepDiveNav back-to="perspectives-overview" back-label="Perspectives"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Resolve the most specific complete view</h2>
</header>
<PerspectiveResolutionDiagram></PerspectiveResolutionDiagram>
</div>

---
routeAlias: pull-sequence
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Pull transport sequence"></DeckLogo>
<DeepDiveNav back-to="pull-overview" back-label="Pull transport"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Discover, fetch, then follow definitions</h2>
<p class="slide-subtitle">Service discovery supplies known system instances; ORD begins at the provider's well-known configuration.</p>
</header>
<PullSequenceDiagram></PullSequenceDiagram>
</div>

---
routeAlias: ai-enrichment
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo section="AI-oriented metadata enrichment"></DeckLogo>
<DeepDiveNav back-to="ai-discovery" back-label="AI-ready discovery"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Help AI choose a resource, then use it well</h2>
</header>
<AiEnrichmentDiagram></AiEnrichmentDiagram>
</div>

---
routeAlias: visibility
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Visibility and access"></DeckLogo>
<DeepDiveNav back-to="information-model" back-label="Information model"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Expose metadata only to its intended audience</h2>
</header>
<VisibilityDiagram></VisibilityDiagram>
</div>

---
routeAlias: ord-overlays
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo section="ORD Overlays · beta"></DeckLogo>
<DeepDiveNav back-to="ai-discovery" back-label="AI-ready discovery"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Enrich a definition without changing its source</h2>
</header>
<OverlayDiagram></OverlayDiagram>
</div>

---
routeAlias: skills-preview
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Preview · proposed for 1.17"></DeckLogo>
<DeepDiveNav back-to="ai-discovery" back-label="AI-ready discovery"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Make reusable agent skills discoverable</h2>
</header>
<SkillsPreviewDiagram></SkillsPreviewDiagram>
</div>

---
routeAlias: push-preview
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Preview · proposal"></DeckLogo>
<DeepDiveNav back-to="pull-overview" back-label="Pull transport"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Stage, validate, then publish atomically</h2>
</header>
<PushPreviewDiagram></PushPreviewDiagram>
</div>

---
routeAlias: integration-dependencies
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Integration dependencies"></DeckLogo>
<DeepDiveNav back-to="information-model" back-label="Information model"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Describe what a system needs from others</h2>
</header>
<IntegrationDependencyDiagram></IntegrationDependencyDiagram>
</div>

---
routeAlias: ord-extensibility
---

<script setup>
import ExtensibilityDiagram from './components/ExtensibilityDiagram.vue'
</script>

<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Extensibility in ORD"></DeckLogo>
<DeepDiveNav next-to="grouping-packaging" next-label="Grouping &amp; packaging"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Extend through the right ORD extension point</h2>
<p class="slide-subtitle">Keep the shared discovery model; add domain-specific meaning where ORD provides an extension mechanism.</p>
</header>
<ExtensibilityDiagram></ExtensibilityDiagram>
</div>

---
routeAlias: grouping-packaging
---

<script setup>
import GroupingPackagingDiagram from './components/GroupingPackagingDiagram.vue'
</script>

<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Grouping &amp; packaging"></DeckLogo>
<DeepDiveNav back-to="ord-extensibility" back-label="Extensibility"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Grouping &amp; packaging: choose by concern</h2>
</header>
<GroupingPackagingDiagram></GroupingPackagingDiagram>
</div>

---
routeAlias: tools-ecosystem-section
deckSection: Tools & Ecosystem
---

<SectionSlide
  number="05"
  title="Tools &amp; Ecosystem"
  text="Open-source building blocks for publishing, exploring, enriching, rendering, and governing ORD metadata."
></SectionSlide>

---
routeAlias: tools-ecosystem
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Overview"></DeckLogo>
<DeepDiveNav back-to="introduction" back-label="Main presentation"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>From specification to working ecosystem</h2>
<p class="slide-subtitle">Twenty public repositories are grouped here into nine tools, integrations, and reference experiences.</p>
</header>
<ToolsEcosystemIndex></ToolsEcosystemIndex>
</div>

---
routeAlias: project-specification
---

<ProjectGroupSlide group="specification"></ProjectGroupSlide>

---
routeAlias: project-reference
---

<ProjectGroupSlide group="reference"></ProjectGroupSlide>

---
routeAlias: project-publishing
---

<ProjectGroupSlide group="publishing"></ProjectGroupSlide>

---
routeAlias: project-overlays
---

<ProjectGroupSlide group="overlays"></ProjectGroupSlide>

---
routeAlias: project-ui
---

<ProjectGroupSlide group="ui"></ProjectGroupSlide>

---
routeAlias: project-a2a
---

<ProjectGroupSlide group="a2a"></ProjectGroupSlide>

---
routeAlias: project-mcp
---

<ProjectGroupSlide group="mcp"></ProjectGroupSlide>

---
routeAlias: project-compaction
---

<ProjectGroupSlide group="compaction"></ProjectGroupSlide>

---
routeAlias: project-registry
---

<ProjectGroupSlide group="registry"></ProjectGroupSlide>
