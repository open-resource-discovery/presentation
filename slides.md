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
<h2>Shared provider metadata reduces custom adapters</h2>
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

<div class="slide-shell split-slide light-slide self-description-slide">
<DeckLogo section="What is ORD?"></DeckLogo>
<section class="text-column">
<h2>A protocol for self-description</h2>
<p class="lead small">Applications and services publish a standard, machine-readable description of their resources and capabilities.</p>
<div class="boundary-callout">
<strong>ORD adds the shared context.</strong>
<span>Detailed contracts stay in OpenAPI, AsyncAPI, OData CSDL, A2A Agent Cards, and other formats.</span>
</div>
<a class="spec-link" href="https://open-resource-discovery.org/spec-v1#ord-provider" target="_blank" rel="noopener noreferrer">Provider specification ↗</a>
</section>
<section class="diagram-column">
<ProviderDiagram></ProviderDiagram>
</section>
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
<h2>Discover the Orders API and follow its contract</h2>
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
<li><strong>Resources:</strong> APIs, Events, Data Products, Agents, Capabilities, and Integration Dependencies.</li>
<li><strong>Taxonomy and access context:</strong> Vendors, Products, Packages, Entity Types, Groups / Group Types, and Consumption Bundles.</li>
<li><strong>Relationships:</strong> connect resources to definitions, semantics, ownership, lifecycle, and dependencies.</li>
</ul>
<p class="feature-status-note">Beta in ORD 1.16.4: Data Products, Agents, Perspectives, and ORD Overlays.</p>
</section>
<section class="diagram-column">
<DataModelDiagram></DataModelDiagram>
</section>
<DeepDiveLink to="namespace-concept" label="Namespaces and IDs"></DeepDiveLink>
</div>

<!--
Resources describe what a system exposes or requires. Taxonomy and access context make those descriptions easier to understand, group, and consume.

Capabilities also provide an extensibility mechanism. A Provider can publish custom capabilities and define custom capability types, then link a machine-readable capability definition when more detail is needed. Skills and agent plugins are examples of what a capability could describe.

The capability type is identified by a Specification ID, or by customType when type is custom. The generic Capability concept is released in ORD 1.16.4. Standardizing Skill types and their dependency semantics is a separate proposal, PR #102; the examples here do not imply standardized type IDs.

Beta status is collected here so it does not distract from the diagrams that follow. Data Products, Agents, Perspectives, and ORD Overlays retain their specified beta status.
-->

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
<a class="spec-link" href="https://open-resource-discovery.org/spec-v1/concepts/perspectives" target="_blank" rel="noopener noreferrer">Perspectives specification ↗</a>
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
<h2>Shared domain context connects resources</h2>
<p class="slide-subtitle">A shared Entity Type lets an aggregator connect related APIs and Events across Providers.</p>
</header>
<LandscapeDiagram></LandscapeDiagram>
<DeepDiveLink to="grouping-packaging" label="Taxonomy and grouping"></DeepDiveLink>
</div>

<!--
This is one selected relationship, rather than the complete ORD graph. The two APIs and the Event all expose the Order Entity Type. A Shipment API can expose order information alongside its shipment data.

Their exposedEntityTypes references use the same ORD ID. An aggregator can follow that identity to bring related resources together across Provider descriptions. The Entity Type supplies business context; it is not an exposed interface or a runtime connection.

The Agent graph later uses the same linking principle to express dependencies. This slide focuses only on shared domain context.
-->

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
<section class="outcome-card"><span>03</span><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 10V15M7 22V15H25V22"/><rect x="11" y="2" width="10" height="8" rx="2"/><rect x="2" y="22" width="10" height="8" rx="2"/><rect x="20" y="22" width="10" height="8" rx="2"/></svg><h3>Landscape insight</h3><p>Understand capabilities and declared dependencies across systems.</p></section>
<section class="outcome-card"><span>04</span><svg viewBox="0 0 32 32" aria-hidden="true"><rect x="5" y="8" width="22" height="20" rx="4"/><path d="M16 3V8M2 15V22M30 15V22M11 22H21"/><circle cx="11" cy="16" r="1.5"/><circle cx="21" cy="16" r="1.5"/></svg><h3>Automation and AI</h3><p>Ground tools and agents in structured, discoverable metadata.</p></section>
</div>
</div>

---
routeAlias: ai-discovery
---

<div class="slide-shell light-slide">
<DeckLogo section="AI-ready discovery"></DeckLogo>
<header class="slide-header wide-header">
<h2>Follow an Agent's resource graph</h2>
<p class="slide-subtitle">An Agent can require APIs directly. The Skill proposal adds a reusable capability that declares its own API dependencies.</p>
</header>
<AiDiscoveryDiagram></AiDiscoveryDiagram>
<DeepDiveLink to="skills-preview" label="Skills preview"></DeepDiveLink>
</div>

---
routeAlias: adoption
---

<div class="slide-shell light-slide">
<DeckLogo section="Adoption"></DeckLogo>
<header class="slide-header wide-header">
<h2>Start with one API and one useful consumer</h2>
</header>
<div class="adoption-grid">
<section class="adoption-card provider-card">
<span class="adoption-number">01</span>
<h3>Provider</h3>
<p>Publish a Package and one API Resource. Link the existing OpenAPI definition and expose ORD configuration.</p>
</section>
<section class="adoption-card aggregator-card">
<span class="adoption-number">02</span>
<h3>Aggregator</h3>
<p>Crawl and validate the metadata. Resolve the effective view and preserve metadata access boundaries.</p>
</section>
<section class="adoption-card consumer-card">
<span class="adoption-number">03</span>
<h3>Consumer</h3>
<p>Make the API discoverable in one catalog or developer tool, through an aggregator or directly from its Provider.</p>
</section>
</div>
<div class="adoption-note"><strong>Pilot: describe → validate → discover.</strong><span>Keep the contract in its native format; add Entity Types and dependencies as the use case grows.</span><nav aria-label="Pilot tools"><a href="./project-reference">Explore a reference implementation →</a><a href="./project-publishing">Choose publishing tools →</a></nav></div>
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
<p class="lead small">ORD is open source under <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a> and governed by the <a href="https://neonephos.org/" target="_blank">NeoNephos Foundation</a> under <a href="https://linuxfoundation.eu/" target="_blank">Linux Foundation Europe</a>.</p>
<div class="next-grid">
<a href="https://open-resource-discovery.org/introduction" target="_blank"><span>5-minute primer</span><small>open-resource-discovery.org/introduction</small></a>
<a href="https://open-resource-discovery.org/spec-v1" target="_blank" rel="noopener noreferrer"><span>ORD specification</span><small>open-resource-discovery.org/spec-v1</small></a>
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
<DeepDiveNav back-to="introduction" back-label="Main presentation" :show-index="false"></DeepDiveNav>
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
<h2>Three common identifiers, three jobs</h2>
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
<DeckLogo section="ORD Overlays"></DeckLogo>
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
<DeepDiveNav back-to="introduction" back-label="Main presentation" :show-index="false"></DeepDiveNav>
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
