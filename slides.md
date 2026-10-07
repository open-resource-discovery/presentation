---
theme: default
routeAlias: introduction
title: Open Resource Discovery (ORD) Presentation
titleTemplate: '%s'
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
<h2>One metadata interface, fewer custom adapters</h2>
<p class="slide-subtitle">ORD gives providers and consumers a common way to describe and discover metadata, while resource definitions stay in their specialized standards.</p>
</header>
<AlignmentDiagram></AlignmentDiagram>
</div>

---
routeAlias: unified-metadata-view
---
<div class="slide-shell light-slide unified-metadata-slide">
<DeckLogo section="One connected view"></DeckLogo>
<header class="slide-header wide-header">
<h2>One Discovery API based on<br /> a well-connected metadata graph</h2>
<p class="slide-subtitle">An ORD aggregator connects resources, shared semantics, and taxonomy into one view for consumers.</p>
</header>
<UnifiedMetadataDiagram></UnifiedMetadataDiagram>
</div>

<!--
Successor to metadata-silos and metadata-alignment. Existing inventories and
specialized formats remain in place; an ORD aggregator connects their resource
descriptions and relationships in one graph, served to consumers through its
Discovery API. Entity Types provide shared semantics; Taxonomy provides context
such as Groups and Products. The graph edges illustrate relationships across
resource kinds rather than prescribing a required relationship for every resource.
This is an architecture illustration, not a claim that ORD
replaces detailed resource-definition standards.
-->

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
<DeepDiveLink to="integration-dependencies" label="Dependencies"></DeepDiveLink>
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
<DeepDiveLink to="aggregator-discovery" label="Discovery API"></DeepDiveLink>
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
<h2>A connected resource graph</h2>
<p class="slide-subtitle">An order event triggers the Agent to read the order and create a shipment.</p>
</header>
<LandscapeDiagram></LandscapeDiagram>
<DeepDiveLink to="grouping-packaging" label="Taxonomy and grouping"></DeepDiveLink>
</div>

<!--
The Orders Provider publishes Order Created and the Orders API. An event handler triggers the Fulfillment Agent, which reads the order and uses the Shipping Provider's Shipment API to create a shipment. Runtime event handling and Agent logic implement that workflow.

The Agent declares dependencies on the external Event and both APIs. Each coral edge summarizes Agent.integrationDependencies → IntegrationDependency.aspects.eventResources or apiResources → the required resource. Arrow direction follows the metadata reference, from the Agent to what it needs; it does not indicate runtime data flow.

The Agent uses relatedEntityTypes to identify Order as its domain context. The Event and Orders API use exposedEntityTypes to reference that same Order Entity Type by ORD ID. The Shipment API exposes the Shipment Entity Type. These selected links illustrate how different resource kinds, dependencies, and business semantics form one discoverable graph.

The later Agent graph expands this scenario to reusable Skills and MCP APIs. ORD describes the contracts and dependencies; it does not configure subscriptions or execute the fulfillment workflow.
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
<DeepDiveLink to="ai-discovery" label="AI &amp; Agents"></DeepDiveLink>
</div>

---
routeAlias: sap-case-study
---
<div class="slide-shell light-slide sap-case-slide">
<DeckLogo section="SAP case study"></DeckLogo>
<header class="slide-header wide-header">
<h2>SAP: shared metadata, connected views</h2>
<p class="slide-subtitle">Applications describe what they offer and what is running, through the same protocol.</p>
</header>
<SapArchitectureDiagram></SapArchitectureDiagram>
</div>

<!--
Case study adapted from ../ord-public/docs/introduction.mdx#ord-architecture-at-sap
and static/img/ord-sap-architecture-overview.svg (specification 1.16.4).
https://open-resource-discovery.org/introduction#ord-architecture-at-sap

The same applications and services publish static system-type / version metadata
and dynamic system-instance metadata. UMS (Unified Metadata Service) receives
both perspectives, plus other landscape metadata such as BTP destinations and
registries. SAP Business Accelerator Hub receives the static catalog only.
Knowledge Graph combines metadata from UMS and other metadata sources, and
feeds the consumer tools alongside the aggregators.
The shared-provider model, UMS naming, and Knowledge Graph connections follow
the presentation author's updates to the older source diagram.

Consumers are selected examples, not an exhaustive inventory. Joule and
Joule Studio are included per the presentation author's update to the older diagram;
the Business Application Studio consumer label is replaced with Joule Studio.
This does not assert that SAP Build or Business Application Studio as a whole
was renamed. Current Joule Studio naming and authoring scope are described at:
https://www.sap.com/products/artificial-intelligence/joule-studio.html
https://news.sap.com/2026/05/new-joule-studio-enterprise-scale-agentic-development/

Arrows show delivery of metadata from Providers to Aggregators to Consumers.
The shared consumer connector represents access to the individual aggregators,
not a combined API or a claim that every consumer uses every source.
The original overview also shows discovery requests in the opposite direction
and runtime integrations between applications. Neither is drawn here; no arrow
implies that ORD executes business processes or transports business data.
-->

---
routeAlias: sap-landscape-examples
---
<div class="slide-shell light-slide sap-case-slide">
<DeckLogo section="SAP case study · UI examples"></DeckLogo>
<header class="slide-header wide-header">
<h2>SAP: the two views in practice</h2>
<p class="slide-subtitle">Business Accelerator Hub for product discovery; BTP System Landscape for running systems.</p>
</header>
<SapLandscapeExamples></SapLandscapeExamples>
</div>

<!--
The annotated screenshots are copied unchanged from the ORD introduction:
../ord-public/static/img/business-accelerator-hub-example1.png
../ord-public/static/img/btp-cockpit-ucl-example.png
https://open-resource-discovery.org/introduction#ord-by-examples

The Business Accelerator Hub screenshot shows product documentation and how
APIs, Events, and Packages appear in a static catalog. The BTP System Landscape
screenshot shows actual system instances and system types, with detail views
for APIs, Events, and Consumption Bundles. It illustrates the customer landscape
aggregated by UMS, per the presentation author's updated service naming.

Use the screenshot links to inspect the original images at full size. The
existing annotations and redactions are retained; these are illustrative
screenshots from the introduction rather than captures of today's product UI.
-->

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
<div class="adoption-note"><strong>Pilot: describe → validate → discover.</strong><span>Keep the contract in its native format; add Entity Types and dependencies as the use case grows.</span><nav aria-label="Pilot tools"><RouterLink to="/project-reference">Explore a reference implementation →</RouterLink><RouterLink to="/project-publishing">Choose publishing tools →</RouterLink></nav></div>
</div>

---
routeAlias: closing
---
<div class="slide-shell end-slide dark-slide">
<CoverBackdrop></CoverBackdrop>
<DeckLogo></DeckLogo>
<div class="end-layout">
<section class="end-copy">
<p class="eyebrow">Open standard</p>
<h2>Explore, implement, and help shape ORD</h2>
<p class="lead small">ORD is open source under <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noopener noreferrer">Apache 2.0</a> and governed by the <a href="https://neonephos.org/" target="_blank" rel="noopener noreferrer">NeoNephos Foundation</a> under <a href="https://linuxfoundation.eu/" target="_blank" rel="noopener noreferrer">Linux Foundation Europe</a>.</p>
<div class="next-grid">
<a href="https://open-resource-discovery.org/introduction" target="_blank" rel="noopener noreferrer"><span>ORD introduction</span><small>open-resource-discovery.org/introduction</small></a>
<a href="https://open-resource-discovery.org/spec-v1" target="_blank" rel="noopener noreferrer"><span>ORD specification</span><small>open-resource-discovery.org/spec-v1</small></a>
<a href="https://github.com/open-resource-discovery" target="_blank" rel="noopener noreferrer"><span>Project on GitHub</span><small>github.com/open-resource-discovery</small></a>
</div>
</section>
<ClosingQr></ClosingQr>
</div>
<GovernanceNotice></GovernanceNotice>
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
<h2>Explore ORD by topic</h2>
<p class="slide-subtitle">Choose a topic, or follow the four paths from left to right.</p>
</header>
<DeepDiveIndex></DeepDiveIndex>
</div>

---
routeAlias: landscape-model
---
<div class="slide-shell light-slide deep-slide">
<DeckLogo section="System landscape model"></DeckLogo>
<DeepDiveNav back-to="connected-landscape" back-label="Resource graph" spec-href="https://open-resource-discovery.org/spec-v1/concepts/system-landscape-model"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>ORD adds detail to systems you already know</h2>
<p class="slide-subtitle">Service discovery identifies system instances; ORD describes their resources and connects them to static system and portfolio context.</p>
</header>
<LandscapeModelDiagram></LandscapeModelDiagram>
</div>

---
routeAlias: namespace-concept
---
<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Namespace concept"></DeckLogo>
<DeepDiveNav back-to="information-model" back-label="Information model" spec-href="https://open-resource-discovery.org/spec-v1#namespaces"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Identity starts with clear ownership</h2>
<p class="slide-subtitle">System namespaces describe system-owned information; authority namespaces identify shared contracts, definitions, or taxonomy.</p>
</header>
<NamespaceConceptDiagram></NamespaceConceptDiagram>
</div>

---
routeAlias: ord-identifiers
---
<div class="slide-shell light-slide deep-slide">
<DeckLogo section="ORD identifiers"></DeckLogo>
<DeepDiveNav back-to="namespace-concept" back-label="Namespace concept" next-to="related-identifiers" next-label="Related IDs" spec-href="https://open-resource-discovery.org/spec-v1#ord-id-construction"></DeepDiveNav>
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
<DeepDiveNav back-to="ord-identifiers" back-label="ORD IDs" spec-href="https://open-resource-discovery.org/spec-v1#id-concepts"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Three common identifiers, three jobs</h2>
<p class="slide-subtitle">The namespace establishes who governs the identifier; its remaining fragments determine what kind of reference it represents.</p>
</header>
<IdentifierTypesDiagram></IdentifierTypesDiagram>
</div>

---
routeAlias: grouping-packaging
---
<script setup>
import GroupingPackagingDiagram from './components/GroupingPackagingDiagram.vue'
</script>

<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Grouping &amp; packaging"></DeckLogo>
<DeepDiveNav back-to="connected-landscape" back-label="Resource graph" spec-href="https://open-resource-discovery.org/spec-v1/concepts/grouping-and-bundling#choosing-the-right-concept"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Grouping &amp; packaging: choose by concern</h2>
</header>
<GroupingPackagingDiagram></GroupingPackagingDiagram>
</div>

---
routeAlias: perspective-resolution
---
<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Perspective resolution"></DeckLogo>
<DeepDiveNav back-to="perspectives-overview" back-label="Perspectives" spec-href="https://open-resource-discovery.org/spec-v1/concepts/perspectives#effective-system-instance-resolution"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Resolve the most specific complete view</h2>
</header>
<PerspectiveResolutionDiagram></PerspectiveResolutionDiagram>
</div>

---
routeAlias: integration-dependencies
---
<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Integration dependencies"></DeckLogo>
<DeepDiveNav back-to="self-description" back-label="Self-description" spec-href="https://open-resource-discovery.org/spec-v1/concepts/integration-dependency#concept"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Describe what a system needs from others</h2>
</header>
<IntegrationDependencyDiagram></IntegrationDependencyDiagram>
</div>

---
routeAlias: data-products
---
<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Data Products"></DeckLogo>
<DeepDiveNav back-to="information-model" back-label="Information model" spec-href="https://open-resource-discovery.org/spec-v1/concepts/data-product"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Data Products: ownership, lineage, and access</h2>
<p class="slide-subtitle">ORD describes a governed data set and connects it to its input lineage, output ports, and business meaning.</p>
</header>
<DataProductDiagram></DataProductDiagram>
</div>

<!--
A Data Product is a data set exposed for consumption through APIs or Events.
The Data Product resource owns the descriptive metadata; inputPorts reference
Integration Dependencies for lineage, outputPorts reference API or Event
Resources, and entityTypes connect the data set to business semantics.
ORD describes discovery metadata and relationships, not the data transport.
The Data Product concept contains beta properties in ORD 1.16.4.

Sources: ../ord-public/docs/spec-v1/concepts/data-product.md and
../ord-public/spec/v1/Document.schema.yaml#DataProduct.
-->

---
routeAlias: ai-discovery
---
<div class="slide-shell light-slide deep-slide">
<DeckLogo section="AI &amp; Agents"></DeckLogo>
<DeepDiveNav back-to="connected-landscape" back-label="Resource graph" next-to="skills-preview" next-label="Skills &amp; Plugins" spec-href="https://open-resource-discovery.org/spec-v1/concepts/ai-agents-and-protocols#connectivity--protocols"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>AI &amp; Agents: interaction and dependencies</h2>
<p class="slide-subtitle">Including Skills and Plugins as proposed in <a href="https://github.com/open-resource-discovery/specification/pull/102" target="_blank" rel="noopener noreferrer">PR #102</a> for 1.17.</p>
</header>
<AiDiscoveryDiagram></AiDiscoveryDiagram>
</div>

<!--
An Agent is a conceptual resource describing autonomous task execution. It can exist without an exposed API. When it exposes an interaction contract, exposedApiResources references a separate API Resource; A2A with an Agent Card is one example, not a required protocol.

Agent.integrationDependencies references Integration Dependency resources. Their aspects already support apiResources, eventResources, and generic capabilities in ORD 1.16.4. The central box represents that shared concept, not a single dependency instance used by every resource. Each owner describes its own external requirements. Multiple aspects combine with AND; alternatives within an aspect combine with OR.

PR #102 at commit 18fc27e67548f91c13f21ad0b283bb0725d47400 proposes agent-skill and agent-plugin types, agent-skill-zip and agent-plugin-zip definitions, Capability.integrationDependencies, and Capability subset selection through skillName. The dashed Capability-to-dependency arrow marks the proposed property. Capability references themselves are already released. A plugin bundles skills and assets; its internal layout depends on the consuming format, not a vendor-neutral ORD packaging standard.

API subsets can select MCP tools by operationId using the tool name. The accepted SEP-2127 Server Card format excludes static tool lists, so a consumer obtains tool definitions through runtime tools/list or demo-specific metadata. Plugin subsets use skillName. Runtime loading, invocation, and configuration remain the responsibility of the consumer. Agents and Capabilities also relate to Entity Types, Groups, labels, and tags; the main resource graph and other deep dives cover that context.
-->

---
routeAlias: skills-preview
---
<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Preview · proposed for 1.17"></DeckLogo>
<DeepDiveNav back-to="ai-discovery" back-label="AI &amp; Agents" next-to="metadata-skills-boundary" next-label="Metadata boundary" spec-href="https://github.com/open-resource-discovery/specification/blob/18fc27e67548f91c13f21ad0b283bb0725d47400/docs/spec-v1/concepts/ai-agents-and-protocols.md#agent-skills-as-capabilities" spec-label="Skills proposal"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Make reusable agent skills discoverable</h2>
</header>
<SkillsPreviewDiagram></SkillsPreviewDiagram>
</div>

---
routeAlias: metadata-skills-boundary
---
<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Skills and API metadata"></DeckLogo>
<DeepDiveNav back-to="skills-preview" back-label="Skills &amp; Plugins" next-to="ai-enrichment" next-label="AI enrichment" spec-href="https://open-resource-discovery.org/spec-v1/concepts/ai-agents-and-protocols#ai-hints-on-ord-resources"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>API knowledge belongs in metadata. Skills orchestrate it.</h2>
<p class="slide-subtitle">Keep shared, tenant-aware API meaning in governed metadata; let skills describe how an agent applies it in a workflow.</p>
</header>
<MetadataSkillsBoundaryDiagram></MetadataSkillsBoundaryDiagram>
</div>

---
routeAlias: versioning-lifecycle
---
<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Versioning and lifecycle"></DeckLogo>
<DeepDiveNav back-to="information-model" back-label="Information model" next-to="api-lifecycle" next-label="API lifecycle example" spec-href="https://open-resource-discovery.org/spec-v1/concepts/versioning-and-lifecycle"></DeepDiveNav>
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
<DeepDiveNav back-to="versioning-lifecycle" back-label="Versioning &amp; lifecycle" spec-href="https://open-resource-discovery.org/spec-v1/concepts/versioning-and-lifecycle#lifecycle"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>API lifecycle: evolve, replace, then retire</h2>
</header>
<ApiLifecycleDiagram></ApiLifecycleDiagram>
</div>

---
routeAlias: ord-overlays
---
<div class="slide-shell light-slide deep-slide">
<DeckLogo section="ORD Overlays"></DeckLogo>
<DeepDiveNav back-to="information-model" back-label="Information model" spec-href="https://open-resource-discovery.org/spec-v1/interfaces/OrdOverlay"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Enrich a definition without changing its source</h2>
</header>
<OverlayDiagram></OverlayDiagram>
</div>

---
routeAlias: ai-enrichment
---
<div class="slide-shell light-slide deep-slide">
<DeckLogo section="AI-oriented metadata enrichment"></DeckLogo>
<DeepDiveNav back-to="metadata-skills-boundary" back-label="Metadata boundary" spec-href="https://open-resource-discovery.org/spec-v1/concepts/ai-agents-and-protocols#ai-hints-on-ord-resources"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Help AI choose a resource, then use it well</h2>
</header>
<AiEnrichmentDiagram></AiEnrichmentDiagram>
</div>

---
routeAlias: ord-extensibility
---
<script setup>
import ExtensibilityDiagram from './components/ExtensibilityDiagram.vue'
</script>

<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Extensibility in ORD"></DeckLogo>
<DeepDiveNav spec-href="https://open-resource-discovery.org/spec-v1/interfaces/Document#capability"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Extend through the right ORD extension point</h2>
<p class="slide-subtitle">Keep the shared discovery model; add domain-specific meaning where ORD provides an extension mechanism.</p>
</header>
<ExtensibilityDiagram></ExtensibilityDiagram>
</div>

---
routeAlias: visibility
---
<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Visibility and access"></DeckLogo>
<DeepDiveNav back-to="information-model" back-label="Information model" spec-href="https://open-resource-discovery.org/spec-v1/interfaces/Document#api-resource_visibility"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Expose metadata only to its intended audience</h2>
</header>
<VisibilityDiagram></VisibilityDiagram>
</div>

---
routeAlias: policy-validation
---
<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Policy levels &amp; validation"></DeckLogo>
<DeepDiveNav back-to="information-model" back-label="Information model" spec-href="https://open-resource-discovery.org/spec-extensions/policy-levels/"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Make metadata governance evolvable</h2>
<p class="slide-subtitle">Keep a stable validity gate, then let providers declare and shift-left validate the policies their resources meet.</p>
</header>
<PolicyValidationDiagram></PolicyValidationDiagram>
</div>

<!--
Policy levels are Specification IDs and can be defined by any organization.
The example is intentionally vendor-neutral. Multiple independently owned policy
concerns can apply to the same published resources and evolve on separate version
tracks. Document-level policyLevels can be overridden at Package or resource level.
Providers can compare the same content against current and next policy versions
before changing their declared target. Aggregators still validate retrieved ORD
documents and add checks that require a connected landscape.

Presenter context: the API Metadata Validator demonstrates this model through a
CLI/library, layered versioned rulesets, and configurable failure severity. It is
currently internal and planned for future open sourcing; do not present it as a
publicly available tool yet.

Sources: ../ord-public/docs/spec-extensions/policy-levels/index.mdx,
../ord-public/spec/v1/Document.schema.yaml#policyLevels, and
../ord-public/docs/spec-v1/index.md#validation-rules.
-->

---
routeAlias: pull-sequence
---
<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Pull transport sequence"></DeckLogo>
<DeepDiveNav back-to="pull-overview" back-label="Pull transport" next-to="aggregator-discovery" next-label="Discovery API" spec-href="https://open-resource-discovery.org/spec-v1#pull-transport-sequence-diagram"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Discover, fetch, then follow definitions</h2>
<p class="slide-subtitle">Service discovery supplies known system instances; ORD begins at the provider's well-known configuration.</p>
</header>
<PullSequenceDiagram></PullSequenceDiagram>
</div>

---
routeAlias: aggregator-discovery
---
<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Aggregation &amp; Discovery API"></DeckLogo>
<DeepDiveNav back-to="ord-roles" back-label="Roles" spec-href="https://open-resource-discovery.org/spec-v1#ord-discovery-api"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Turn provider metadata into a useful discovery view</h2>
<p class="slide-subtitle">Keep provider publishing simple; let the aggregator do the work for consumers.</p>
</header>
<div class="adoption-grid">
<section class="adoption-card provider-card"><span class="adoption-number">01 · Collect</span><h3>Crawl and validate</h3><p>Fetch ORD documents and linked definitions. Validate identities, references, and consistency across providers.</p></section>
<section class="adoption-card aggregator-card"><span class="adoption-number">02 · Resolve</span><h3>Connect the view</h3><p>Resolve the effective perspective and relationships. Preserve visibility and metadata access boundaries.</p></section>
<section class="adoption-card consumer-card"><span class="adoption-number">03 · Serve</span><h3>Support discovery</h3><p>Offer a consumer API that can support search, filtering, pagination, and expansion over the connected metadata.</p></section>
</div>
<div class="adoption-note"><strong>Each aggregator defines its Discovery API contract.</strong><span>ORD standardizes provider interfaces and aggregation responsibilities; a common Discovery API contract is not yet standardized.</span></div>
</div>

---
routeAlias: push-preview
---
<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Preview · proposal"></DeckLogo>
<DeepDiveNav back-to="pull-overview" back-label="Pull transport" spec-href="https://github.com/open-resource-discovery/specification/pull/187" spec-label="Push proposal"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>Preview: ORD Push Transport Mode</h2>
</header>
<PushPreviewDiagram></PushPreviewDiagram>
</div>

---
routeAlias: tools-ecosystem-section
deckSection: Tools & Ecosystem
---
<SectionSlide
  number="05"
  title="Tools &amp; Ecosystem"
  text="Open-source building blocks for publishing, exploring, enriching, rendering, and governing ORD metadata."
  backdrop="orbit"
></SectionSlide>

---
routeAlias: tools-ecosystem
---
<div class="slide-shell light-slide deep-slide">
<DeckLogo section="Overview"></DeckLogo>
<DeepDiveNav back-to="introduction" back-label="Main presentation" :show-index="false"></DeepDiveNav>
<header class="slide-header wide-header">
<h2>From specification to working ecosystem</h2>
<p class="slide-subtitle">Nine toolsets help you publish ORD, explore metadata, and build integrations.</p>
</header>
<ToolsEcosystemIndex></ToolsEcosystemIndex>
</div>

---
routeAlias: project-specification
---
<ProjectGroupSlide group="specification"></ProjectGroupSlide>

<!--
Spec Toolkit is a generic command-line tool for a schema-first specification workflow. One run produces Markdown reference documentation, distributable JSON Schema, and TypeScript types. It also validates configured examples, and optional plugins can add other formats. The simplified Book example is illustrative. The ORD specification uses Spec Toolkit and is a reference example, not a second tool presented on this slide.
-->

---
routeAlias: project-reference
---
<ProjectGroupSlide group="reference"></ProjectGroupSlide>

<!--
Walk through the task: connect to a Provider, choose a perspective, discover which resources it offers, then inspect their descriptions, relationships, and referenced definitions.
The slide uses the user-supplied screenshot of the actual Explorer's built-in sample catalog.
Resource categories, metadata filters, descriptions, protocols, release status, and ORD IDs are visible.
The CSS viewport focuses on the catalog; the Full screenshot link opens the original image.
Sample IDs remain as the real tool displays them.
The Beta filter is resource release status, not a feature maturity badge.
The standalone Explorer link opens its built-in sample catalog.
The live reference Provider embeds the same Explorer components and switches between public system-version metadata and demo-authenticated system-instance metadata.
-->

---
routeAlias: project-publishing
---
<ProjectGroupSlide group="publishing"></ProjectGroupSlide>

<!--
The folder is a generic example following the Provider server README: documents belong under documents/, while native definitions live elsewhere under the metadata root. The command serves that folder as an ORD Provider API.
-->

---
routeAlias: project-framework-publishing
---
<ProjectGroupSlide group="framework-publishing"></ProjectGroupSlide>

<!--
Framework-level support avoids reimplementing the ORD endpoints in each application. The Spring Boot starter can scan packages for ORD annotations, load static documents, or combine both approaches. It auto-configures the discovery configuration and ORD document endpoints. ord-maven supplies Java models and annotations generated from the ORD specification.
-->

---
routeAlias: project-overlays
---
<ProjectGroupSlide group="overlays"></ProjectGroupSlide>

<!--
The operation already exists in OpenAPI with operationId getOrder. The overlay selector matches it and merges a description into the consumer view. The shown YAML is a patch excerpt. Use the browser editor for authoring and the TypeScript or Go tools for applying it; the source definition stays unchanged.
-->

---
routeAlias: project-ui
---
<ProjectGroupSlide group="ui"></ProjectGroupSlide>

<!--
Metadata Renderer accepts a definition, detects its format, and selects the specialized view. The screenshot shows the GET /pets endpoint from the built-in Petstore OpenAPI example in the public playground.
-->

---
routeAlias: project-a2a
---
<ProjectGroupSlide group="a2a"></ProjectGroupSlide>

<!--
The screenshots show an example Agent Card and its skill list in the real A2A Editor. These are detail crops; no task was sent to the example endpoint. The Skills field belongs to A2A protocol metadata and is distinct from ORD Skill Capabilities. ORD discovers and relates resources; A2A handles agent interaction. The other tools cover VS Code, test servers, and the combined discovery/delegation demo.
-->

---
routeAlias: project-mcp
---
<ProjectGroupSlide group="mcp"></ProjectGroupSlide>

<!--
SEP-2127 was merged on 2026-10-06 and is Final on the Extensions Track: Server Cards are an accepted, optional MCP extension, not a mandatory part of core MCP. The accepted format describes remote server identity, transport endpoints, and supported protocol versions. It deliberately excludes static tools, resources, prompts, capabilities, and negotiated extension support; consumers list primitives and negotiate capabilities at runtime.
The screenshots were captured on 2026-10-04 using the playground's prototype format. Its tool lists and capability fields are outside the accepted contract; playground validation does not establish conformance to the accepted extension. The demo's static tool pre-selection is a custom experiment, while its ORD-based server discovery remains applicable. Server Cards can be linked as ORD resource definitions; AI Catalog is a complementary domain-level discovery mechanism. The recommended card location is <streamable-http-url>/server-card, with /.well-known/ai-catalog.json for the domain catalog. The card does not grant runtime access, and calls still use MCP. No example tool was invoked.
Grounding: https://github.com/modelcontextprotocol/modelcontextprotocol/blob/main/seps/2127-mcp-server-cards.md and https://github.com/modelcontextprotocol/ext-server-card/blob/main/docs/discovery.md. The extension repository README still contains pre-acceptance experimental wording as of 2026-10-07; the merged Final SEP is the status reference.
-->

---
routeAlias: project-compaction
---
<ProjectGroupSlide group="compaction"></ProjectGroupSlide>

<!--
The compactor reduces large metadata files so they use less context in an LLM. Rules let the publisher trim to the essentials or choose what metadata to share. Its scope is broader than CSN; CSN JSON is the currently supported format and more formats are planned. The worked example compares CSN excerpts: an empty csn.preserve allowlist removes the UI annotation while keeping Orders and its ID element. This is one explicit reduction rule, not a universal claim that annotations are unneeded. Rules also control custom types and associations. No size or token savings were measured.
-->

---
routeAlias: project-registry
hide: true
---
<!-- Deferred until a registry schema and specification are available. -->
<ProjectGroupSlide group="registry"></ProjectGroupSlide>
