---
theme: default
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

<SectionSlide
  number="01"
  title="Why"
  text="Connect fragmented resource metadata without replacing the standards that describe it."
></SectionSlide>

---

<div class="slide-shell split-slide light-slide challenge-slide">
<DeckLogo></DeckLogo>
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

<div class="slide-shell light-slide">
<DeckLogo></DeckLogo>
<header class="slide-header wide-header">
<p class="eyebrow">Alignment</p>
<h2>One discovery contract replaces many custom adapters</h2>
<p class="slide-subtitle">ORD aligns metadata description and discovery while preserving specialized resource-definition standards.</p>
</header>
<AlignmentDiagram></AlignmentDiagram>
</div>

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
<DeckLogo></DeckLogo>
<section class="text-column">
<p class="eyebrow">What is ORD?</p>
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
routeAlias: information-model
---

<div class="slide-shell split-slide light-slide">
<DeckLogo></DeckLogo>
<section class="text-column">
<p class="eyebrow">Information model</p>
<h2>Resources become connected metadata</h2>
<ul class="statement-list compact-list">
<li><strong>Resources:</strong> APIs, Events, Data Products, Agents <span class="beta-pill">beta</span>, Capabilities, and Integration Dependencies.</li>
<li><strong>Taxonomy and access context:</strong> Products, Packages, Entity Types, Groups, and Consumption Bundles.</li>
<li><strong>Relationships:</strong> connect resources to definitions, semantics, ownership, lifecycle, and dependencies.</li>
</ul>
</section>
<section class="diagram-column">
<DataModelDiagram></DataModelDiagram>
</section>
<DeepDiveLink to="namespace-concept" label="Namespaces and IDs"></DeepDiveLink>
</div>

---

<div class="slide-shell light-slide">
<DeckLogo></DeckLogo>
<header class="slide-header wide-header">
<p class="eyebrow">Architecture</p>
<h2>Three roles, clear responsibilities</h2>
<p class="slide-subtitle">Providers publish a simple self-description, aggregators build a connected view, and consumers retrieve metadata through a discovery-oriented API.</p>
</header>
<RolesDiagram></RolesDiagram>
</div>

---
routeAlias: pull-overview
---

<div class="slide-shell light-slide">
<DeckLogo></DeckLogo>
<header class="slide-header wide-header">
<p class="eyebrow">Pull transport</p>
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
<DeckLogo></DeckLogo>
<header class="slide-header wide-header">
<p class="eyebrow">ORD by example</p>
<h2>Follow the links through a real provider</h2>
</header>
<OrdExampleExplorer></OrdExampleExplorer>
</div>

---
routeAlias: perspectives-overview
---

<div class="slide-shell split-slide light-slide">
<DeckLogo></DeckLogo>
<section class="text-column">
<p class="eyebrow">Perspectives</p>
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
<DeckLogo></DeckLogo>
<header class="slide-header wide-header">
<p class="eyebrow">Connected landscape</p>
<h2>Aggregation turns self-descriptions into a bigger picture</h2>
<p class="slide-subtitle">Shared identifiers, taxonomy, and dependency links make resources navigable across systems without creating a single mandatory system of record.</p>
</header>
<LandscapeDiagram></LandscapeDiagram>
<DeepDiveLink to="landscape-model" label="Landscape model"></DeepDiveLink>
</div>

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
<DeckLogo></DeckLogo>
<section class="text-column">
<p class="eyebrow">AI-ready discovery</p>
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

<div class="slide-shell light-slide">
<DeckLogo></DeckLogo>
<header class="slide-header wide-header">
<p class="eyebrow">Scope</p>
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

<div class="slide-shell light-slide">
<DeckLogo></DeckLogo>
<header class="slide-header wide-header">
<p class="eyebrow">Outcomes</p>
<h2>One foundation, many metadata-driven experiences</h2>
</header>
<div class="outcome-grid">
<section class="outcome-card"><span>01</span><h3>Catalogs</h3><p>Build searchable inventories across resource types and providers.</p></section>
<section class="outcome-card"><span>02</span><h3>Developer tooling</h3><p>Find contracts, documentation, and access context programmatically.</p></section>
<section class="outcome-card"><span>03</span><h3>Landscape insight</h3><p>Understand the capabilities and dependencies of running systems.</p></section>
<section class="outcome-card"><span>04</span><h3>Automation and AI</h3><p>Ground tools and agents in governed, current, machine-readable metadata.</p></section>
</div>
</div>

---

<div class="slide-shell light-slide">
<DeckLogo></DeckLogo>
<header class="slide-header wide-header">
<p class="eyebrow">Adoption</p>
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
<section class="end-copy">
<p class="eyebrow">Open standard</p>
<h2>Explore, implement, and help shape ORD</h2>
<p class="lead small">Open Resource Discovery is open source under Apache 2.0 and governed by the NeoNephos Foundation under Linux Foundation Europe.</p>
<div class="next-grid">
<a href="https://open-resource-discovery.org/introduction" target="_blank"><span>5-minute primer</span><small>open-resource-discovery.org/introduction</small></a>
<a href="https://open-resource-discovery.org/spec-v1/" target="_blank"><span>Specification 1.16</span><small>open-resource-discovery.org/spec-v1</small></a>
<a href="https://github.com/open-resource-discovery" target="_blank"><span>Project on GitHub</span><small>github.com/open-resource-discovery</small></a>
</div>
</section>
</div>

---
routeAlias: deep-dive-section
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
<DeckLogo></DeckLogo>
<DeepDiveNav back-to="closing" back-label="Back to close" :show-index="false"></DeepDiveNav>
<header class="slide-header wide-header">
<p class="eyebrow">Choose a topic</p>
<h2>ORD details, one concept at a time</h2>
</header>
<DeepDiveIndex></DeepDiveIndex>
</div>

---
routeAlias: namespace-concept
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo></DeckLogo>
<DeepDiveNav back-to="information-model" back-label="Back to information model"></DeepDiveNav>
<header class="slide-header wide-header">
<p class="eyebrow">Namespace concept</p>
<h2>Identity starts with clear ownership</h2>
<p class="slide-subtitle">System namespaces describe system-owned information; authority namespaces identify shared contracts, definitions, or taxonomy.</p>
</header>
<NamespaceConceptDiagram></NamespaceConceptDiagram>
</div>

---
routeAlias: landscape-model
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo></DeckLogo>
<DeepDiveNav back-to="connected-landscape" back-label="Back to aggregation"></DeepDiveNav>
<header class="slide-header wide-header">
<p class="eyebrow">System landscape model</p>
<h2>ORD adds detail to systems you already know</h2>
<p class="slide-subtitle">Service discovery identifies system instances; ORD describes their resources and connects them to static system and portfolio context.</p>
</header>
<LandscapeModelDiagram></LandscapeModelDiagram>
</div>

---
routeAlias: ord-identifiers
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo></DeckLogo>
<DeepDiveNav back-to="information-model" back-label="Back to information model"></DeepDiveNav>
<header class="slide-header wide-header">
<p class="eyebrow">ORD identifiers</p>
<h2>Four fragments create a stable identity</h2>
<p class="slide-subtitle">An ORD ID identifies the governed resource at design time. Runtime uniqueness also needs the system-instance context.</p>
</header>
<OrdIdDiagram></OrdIdDiagram>
</div>

---
routeAlias: versioning-lifecycle
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo></DeckLogo>
<DeepDiveNav back-to="information-model" back-label="Back to information model"></DeepDiveNav>
<header class="slide-header wide-header">
<p class="eyebrow">Versioning and lifecycle</p>
<h2>Identity, change, and maturity are separate signals</h2>
</header>
<LifecycleDiagram></LifecycleDiagram>
</div>

---
routeAlias: perspective-resolution
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo></DeckLogo>
<DeepDiveNav back-to="perspectives-overview" back-label="Back to perspectives"></DeepDiveNav>
<header class="slide-header wide-header">
<p class="eyebrow">Perspective resolution</p>
<h2>Resolve the most specific complete view</h2>
</header>
<PerspectiveResolutionDiagram></PerspectiveResolutionDiagram>
</div>

---
routeAlias: pull-sequence
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo></DeckLogo>
<DeepDiveNav back-to="pull-overview" back-label="Back to pull transport"></DeepDiveNav>
<header class="slide-header wide-header">
<p class="eyebrow">Pull transport sequence</p>
<h2>Discover, fetch, then follow definitions</h2>
<p class="slide-subtitle">Service discovery supplies known system instances; ORD begins at the provider's well-known configuration.</p>
</header>
<PullSequenceDiagram></PullSequenceDiagram>
</div>

---
routeAlias: ai-enrichment
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo></DeckLogo>
<DeepDiveNav back-to="ai-discovery" back-label="Back to AI-ready discovery"></DeepDiveNav>
<header class="slide-header wide-header">
<p class="eyebrow">AI-oriented metadata enrichment</p>
<h2>Help AI choose a resource, then use it well</h2>
</header>
<AiEnrichmentDiagram></AiEnrichmentDiagram>
</div>

---
routeAlias: visibility
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo></DeckLogo>
<DeepDiveNav back-to="information-model" back-label="Back to information model"></DeepDiveNav>
<header class="slide-header wide-header">
<p class="eyebrow">Visibility and access</p>
<h2>Expose metadata only to its intended audience</h2>
</header>
<VisibilityDiagram></VisibilityDiagram>
</div>

---
routeAlias: ord-overlays
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo></DeckLogo>
<DeepDiveNav back-to="ai-discovery" back-label="Back to AI-ready discovery"></DeepDiveNav>
<header class="slide-header wide-header">
<p class="eyebrow">ORD Overlays <span class="beta-pill">beta</span></p>
<h2>Enrich a definition without changing its source</h2>
</header>
<OverlayDiagram></OverlayDiagram>
</div>

---
routeAlias: skills-preview
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo></DeckLogo>
<DeepDiveNav back-to="ai-discovery" back-label="Back to AI-ready discovery"></DeepDiveNav>
<header class="slide-header wide-header">
<p class="eyebrow">Preview · proposed for 1.17</p>
<h2>Make reusable agent skills discoverable</h2>
</header>
<SkillsPreviewDiagram></SkillsPreviewDiagram>
</div>

---
routeAlias: push-preview
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo></DeckLogo>
<DeepDiveNav back-to="pull-overview" back-label="Back to pull transport"></DeepDiveNav>
<header class="slide-header wide-header">
<p class="eyebrow">Preview · proposal</p>
<h2>Stage, validate, then publish atomically</h2>
</header>
<PushPreviewDiagram></PushPreviewDiagram>
</div>

---
routeAlias: integration-dependencies
---

<div class="slide-shell light-slide deep-slide">
<DeckLogo></DeckLogo>
<DeepDiveNav back-to="information-model" back-label="Back to information model"></DeepDiveNav>
<header class="slide-header wide-header">
<p class="eyebrow">Integration dependencies</p>
<h2>Describe what a system needs from others</h2>
</header>
<IntegrationDependencyDiagram></IntegrationDependencyDiagram>
</div>
