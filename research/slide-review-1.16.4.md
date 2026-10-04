# Presentation review and implemented fixes against ORD 1.16.4

Reviewed on 2026-10-03 against the latest local presentation and the authoritative
sibling `ord-public`, whose `package.json` declares **1.16.4** (specification commit
`ce0dea1478c56238f0aff75f7665c301e74f0577`). Applicable `AGENTS.md` instructions
were read. The specification repository was left unchanged. A follow-up on **2026-10-04**
refined the generic Provider diagram, alignment connectors, shared-domain graph,
Capability examples, speaker notes, feature-status presentation, grouped indexes,
identifier examples, and dark-slide backgrounds. Concurrent cover, divider,
and deep-dive improvements were preserved and the latest state was inspected again.

## Overall assessment and story

The main presentation now tells a complete story in 17 slides: fragmented
metadata → alignment → self-description and roles → scope → pull discovery → a
concrete Orders API → information model and perspectives → connected metadata →
benefits → a small adoption pilot → closing. Deep dives and
the ecosystem appendix support that story, with explicit return links.

The material changes were bringing discovery before the abstract model, carrying
one vendor-neutral Orders example through the walkthrough and connected graphs,
and giving adoption a concrete first task. The connected resource graph shows
event-triggered fulfillment, with Order and Shipment supplying domain context.
The AI & Agents graph is now a detail slide with seven concept nodes. It distinguishes
an Agent's interaction API from its Integration Dependencies, whose aspects reference
external APIs, Events, and Capabilities. Generic Capability references are released
in 1.16.4. The dashed Capability-to-dependency edge marks the proposed
`Capability.integrationDependencies` property; standardized Skill/Plugin types,
ZIP definitions, and plugin subsets also belong to PR #102. API-to-Entity-Type
links in the main graph supply domain context without implying that an Entity Type
is a callable interface.

All 47 source slugs were preserved; the registry slide is now hidden, leaving
46 active slides. Their current order is recorded in
[slide-navigation.md](./slide-navigation.md).

## Specification corrections

The findings below are resolved in the presentation or in the linked reference
application PR. Paths and sections refer to the authoritative sibling repository.

| Priority | Slide slug / location | Evidence and implemented correction | Exact grounding |
| --- | --- | --- | --- |
| High | `self-description` | Entity Types previously looked like exposed interfaces. Their association is now a neutral line without a port, with a solid neutral card labeled business semantics. The Provider retains its blue hexagon, provided circles, and required socket connected to another Provider. | `docs/spec-v1/concepts/grouping-and-bundling.md`, **Entity Type**; `static/img/ord-provider-overview.svg` |
| High | `namespace-concept`, `ord-by-example`, reference application | A Product must use a vendor namespace, not the application's system namespace. Examples now use `foo:product:Orders:` and `foo:vendor:Example:`; resources use `foo.orders`. The placeholder is explicitly replaceable. [Reference application PR #27](https://github.com/open-resource-discovery/reference-application/pull/27) corrects the published Product and adds its Vendor. | `docs/spec-v1/index.md`, **Vendor Namespace**, **ORD ID Construction**; `spec/v1/Document.schema.yaml`, **Product**, **Vendor** |
| High | `ai-discovery`, `skills-preview` | The information model carries Agent beta status. Agents link interaction APIs through `exposedApiResources` and declare requirements through Integration Dependencies. Their aspects already reference APIs, Events, and generic Capabilities in 1.16.4. PR #102 adds standardized Skill/Plugin types, ZIP definitions, `Capability.integrationDependencies`, and plugin subsets using `skillName`. The dashed arrow specifically marks the proposed Capability property. MCP Servers and A2A interaction APIs remain separate API Resources linking their native definitions. | `docs/spec-v1/concepts/ai-agents-and-protocols.md`, **Exposing Capabilities (Interaction)** and **Consuming Capabilities (Dependencies)**; `spec/v1/Document.schema.yaml`, **Agent**, **ApiResourceDefinition**, **IntegrationDependency**, **IntegrationAspect**, **CapabilityIntegrationAspect**; [Skills PR #102](https://github.com/open-resource-discovery/specification/pull/102), commit `18fc27e67548f91c13f21ad0b283bb0725d47400` |
| Medium | `ord-roles`, `adoption` | Roles are nonexclusive; direct consumers may also read Providers. An Aggregator's Discovery API has its own contract. The slides no longer imply ORD standardizes that contract. | `docs/spec-v1/index.md`, **ORD Roles**, **ORD Discovery API** |
| Medium | `connected-landscape` | The Fulfillment Agent requires Order Created and Orders API from the Orders Provider, and Shipment API from the Shipping Provider. The coral edges summarize intermediate Integration Dependencies; each arrow points from the Agent to a required external resource. The Agent, Event, and Orders API reference Order; Shipment API references Shipment. APIs and Events use `exposedEntityTypes`; the Agent uses `relatedEntityTypes`. Entity Types have neutral cards without ports. Speaker notes distinguish metadata references from runtime event handling and workflow execution. | `docs/spec-v1/concepts/grouping-and-bundling.md`, **Entity Type**; `spec/v1/Document.schema.yaml`, **ApiResource.exposedEntityTypes**, **EventResource.exposedEntityTypes**, **Agent.relatedEntityTypes**, **Agent.integrationDependencies**, **IntegrationDependency.description**, **IntegrationAspect.eventResources**, **IntegrationAspect.apiResources** |
| Medium | `information-model`, `grouping-packaging` | The overview includes taxonomy **and access** context. Consumption Bundles express technical access; API/Event relationships to Entity Types use `exposedEntityTypes`. | `docs/spec-v1/concepts/grouping-and-bundling.md`, **Consumption Bundle**, **Entity Type**, **Groups**; `spec/v1/Document.schema.yaml`, **ApiResource**, **EventResource**, **ExposedEntityType** |
| Medium | `ai-discovery`, `outcomes`, `integration-dependencies` | Dependencies reference described resource contracts; they do not record runtime connections. The Agent graph connects Fulfillment's dependency to the Orders API. The deep dive retains the normative callback example and now distinguishes dashed ORD references from solid runtime calls. | `docs/spec-v1/concepts/integration-dependency.md`, **Concept**; `static/img/integration-dependency.drawio.svg`; `spec/v1/Document.schema.yaml`, **IntegrationDependency**, **IntegrationAspect** |
| Medium | `perspectives-overview`, `perspective-resolution` | Perspectives are included in 1.16.4 with beta status. The resolution slide distinguishes complete instance views, exact version requests, greatest stable version selection, system-type fallback, and tombstones. Representations are not property-merged. | `docs/spec-v1/concepts/perspectives.md`, **Effective System-Instance Resolution**, **Static Perspective Resolution**; `spec/v1/Document.schema.yaml`, root **perspective** |
| Medium | `ord-by-example` | The default walkthrough is a short, bundled ORD 1.16 example. Complete downloaded fixtures satisfy required fields and resolve their references. The optional live provider declares its own version; its responses are separate from the teaching example. | `spec/v1/Configuration.schema.yaml`; `spec/v1/Document.schema.yaml`, **Ord Document**, **Package**, **ApiResource**, **EntityType**, **Product**, **Vendor** |
| Medium | `versioning-lifecycle`, `api-lifecycle` | A breaking contract creates a successor resource; the old contract is retained during migration. Development/beta exceptions and tenant-extension `lastUpdate` behavior remain explicit. | `docs/spec-v1/concepts/versioning-and-lifecycle.md`, **Versioning**, **Lifecycle**, **Sunset and Tombstones**; `spec/v1/Document.schema.yaml`, **version**, **releaseStatus**, **successors**, **Tombstone** |
| Medium | `self-description`, `ord-extensibility`, `ai-enrichment`, `ord-overlays` | Capability examples include features/configuration and illustrative custom Skills. `aiHint` belongs to supported resources; fine-grained definition enrichment uses beta ORD Overlays. `ord:overlay:v1` and `ord:ai-enrichment` retain their specification-owned namespace. | `spec/v1/Document.schema.yaml`, **Capability**, **CapabilityDefinition**, **aiHint**, **ApiResourceDefinition**; `spec/v1/OrdOverlay.schema.yaml`, **OverlaySelector**, **OverlayPatch** |
| Low | `information-model`, `self-description` | Capabilities show skills and agent plugins as illustrative types. Information-model speaker notes explain custom capabilities, Specification ID / `customType` typing, and custom definitions. They distinguish generic extensibility and released Capability references from proposed standardized types and the Capability's own dependencies. | `spec/v1/Document.schema.yaml`, **Capability**, **Capability.type**, **Capability.customType**, **CapabilityDefinition**, **CapabilityIntegrationAspect** |
| Low | `related-identifiers` | The title describes three common identifier families rather than an exhaustive list. Concept IDs are called out for Group Types. ORD IDs wrap at a fragment boundary. | `docs/spec-v1/index.md`, **ORD ID**, **Correlation ID**, **Specification ID**, **Concept ID**; `spec/v1/Document.schema.yaml`, **GroupType** |

Transactional push remains a proposal on `push-preview`, grounded in
[PR #187](https://github.com/open-resource-discovery/specification/pull/187), not
released 1.16.4 behavior.

## Visual defects and diagram fixes

| Priority | Slide slug | Evidence and implemented correction |
| --- | --- | --- |
| High | `ord-by-example` | The long live response required scrolling and small text. The default excerpts now use 18px code, fit without horizontal or vertical scrolling, and link Configuration → document → definition. Full JSON downloads include omitted fields. |
| Medium | `ord-by-example` | An interaction check found Slidev's bottom controls could intercept the return button. The sidebar now reserves space above those controls; pointer and keyboard checks pass. |
| Medium | `ord-roles` | Removed the detached bracket below the Aggregator. A readable caption explains arrow direction, role overlap, and direct Provider access. |
| Medium | `connected-landscape`, `ai-discovery` | The main graph shows a concrete workflow; the AI detail diagram explains the full relationship model. Checked rendered endpoints, arrow directions, containment, and label padding. The latest inline SVG checks cover 88 card labels across the deck without containment violations or detected text overlap. |
| Medium | `ai-enrichment`, `ord-overlays` | Small code and cramped side-by-side definition entries were difficult to read. Code is now 16–18px, definition entries stack vertically where needed, and the overlay example uses Orders. |
| Medium | `perspective-resolution`, `related-identifiers` | Enlarged branch rules, fallback-layer labels, identifier code, and explanatory copy. Shortened copy to keep cards separated from their captions. |
| Medium | `self-description`, `metadata-alignment`, `perspectives-overview` | The generic Provider uses Application / Service for both hexagons. Provided port circles have an approximately 8px gap to their category cards. Alignment connectors use solid color and place Consumer arrowheads away from the branch rail. The responsibility card has no left stripe. |
| Low | `self-description` | Removed the Agent subtitle and AsyncAPI line from the Events card, centered both ORD Provider API labels, and added Skills to the Capability examples. A quiet caption identifies the protocols and formats as nonexhaustive examples. AsyncAPI remains in the general explanation of detailed contracts. |
| Medium | `connected-landscape` | Resource colors distinguish Agents (coral), Events (teal), and APIs (blue), with matching API colors and neutral Entity Types. Shipment now sits directly below Shipment API with a short vertical arrow. The Orders API's dependency and Entity Type edges have separate endpoints. The explanatory caption was removed at the user's request. |
| Medium | Dark cover, dividers, and `closing` | The home link was under Slidev's toolbar. It now sits at the top with improved contrast. The closing license label and foundation names stay together. The cover and closing specification links now use `/spec-v1`, because `/spec-v1/` returns HTTP 404 on the public site. |
| Low | Deep dives and ecosystem | Added **All topics** and **All tools** return links, retaining direct parent links. Hover does not move index cards; keyboard focus has a visible outline. |
| Medium | `ord-identifiers`, `related-identifiers` | Retained the boxed construction pattern, then added `foo.orders:apiResource:Orders:v1` below it as colored text with grey separators. No dark panel or extra fragment boxes. The Correlation ID example is `foo.crm:customer:4711`. |
| Medium | `tools-ecosystem` | Nine links are grouped by purpose: **Publish & govern**, **Explore & enrich**, and **AI & Agents**. Soft category containers and white link cards follow the Deep dives overview. All nine links and return routes work; hover geometry stays stable and Tab reaches each card. |
| Low | Dark cover, graph dividers, and `closing` | Restored the original straight background connections at the user's request, preserving node positions, contrast, and the Tools divider's orbit variant. The transparent dark header no longer intercepts the closing Tools link; its logo retains pointer access. |

Provider blue (`#0087c9`), Aggregator purple (`#9326b7`), and Consumer green
(`#4e9822`) remain consistent across role diagrams and adoption cards. Entity
Types use neutral styling; the proposed Capability dependency uses a separately labeled violet
style. Resource-category tints use the existing soft accent palette, matching the silos slide; the AI graph shares Agent, Event, and API colors. Imported Draw.io figures preserve upstream colors and geometry, rather
than silently changing normative relationships.

## Editorial improvements

- The Orders walkthrough comes immediately after the pull overview, before the
  information model. It explains what the abstract metadata connects.
- Connected landscape carries the fulfillment example. The AI & Agents detail
  slide explains interaction, requirements, and the Skill/Plugin proposal; the Skill
  appendix makes portable behavior concrete with Order Lookup.
- Adoption starts with one Package, one API Resource, its existing OpenAPI
  definition, and one useful consumer. Publishing and reference implementation
  links make the next step concrete.
- Benefits describe declared metadata and discoverability, with no promise of
  live telemetry or automated runtime integration.
- `connected-landscape`, titled **A connected resource graph**, shows an event-triggered fulfillment scenario with three declared dependencies across Providers and two Entity Types. The six nodes keep dependency and domain relationships visible without adding discovery or aggregation flows. Straight and elbow connectors use smaller arrowheads, with separate endpoints on the Order border. Its deep-dive link leads to taxonomy and grouping.
- `ai-discovery` sits in **AI & extensibility**, with the legend and `aiHint` footer removed. Proposal status remains in the subtitle and Capability nodes. The main Outcomes slide links to this detail slide.
- Deep dives use four topic columns; Tools & Ecosystem uses three purpose columns.
  Detail slides link to the applicable public specification section or proposal.
- Feature beta notices are collected on `information-model`: Data Products, Agents, Perspectives, and ORD Overlays. The lifecycle diagrams still show the actual `releaseStatus` value `beta` and its versioning exception.
- Contextual public-specification links cover the Provider role and Perspectives, alongside the existing deep-dive references. The connected-graph caption and its Entity Type link were removed to keep that slide concise.
- Teaching copy avoids SAP-specific examples. Actual live-demo links retain the
  real host address.

## Verification and limits

- The original 2026-10-03 review inspected every slide through its stable URL on
  the reused server at `http://localhost:3030`, at **1280×720**, and visually
  reviewed all screenshots. On 2026-10-04, all **47 stable URLs** were captured
  again after the latest concurrent edits, and every screenshot was visually
  reviewed at full size. This includes the seven dark slides with their latest
  layouts. The restored straight backgrounds were subsequently recaptured and
  visually inspected at the same size.
- The final `connected-landscape` and `self-description` edits were recaptured
  through their stable URLs at **1280×720** and visually reviewed after the
  fulfillment scenario and label cleanup.
- The resource-category colors and simplified Shipment arrow were checked in
  new `connected-landscape` and `ai-discovery` screenshots at **1280×720**.
- Automated checks: **47 unique slugs**, correct counters, no invalid internal
  targets, no broken images, no slide-boundary overflow, no detected HTML text
  or SVG label overlap, no clipped card labels, no blocked pointer targets, and
  no browser errors in the final capture. Decorative background nodes extend
  beyond the SVG viewport intentionally and are clipped by it.
- Inspected actual diagram connectors, arrowheads, endpoints, containment, and
  legends, including the reused system-landscape and integration-dependency
  Draw.io SVGs. DOM checks alone were not used as evidence of diagram correctness.
- Validated the complete Orders Configuration and ORD document against the
  local **1.16.4 source YAML schemas** with Ajv and format validation. Checked
  reference resolution among API, Entity Type, Package, Product, and Vendor.
- Checked all three excerpts for scrolling; all three full JSON downloads match
  their source fixtures. Confirmed no default live requests, mouse/keyboard link
  following, three offline recoveries, the 8-second timeout, stale-request
  cancellation, and returning from live mode during an outstanding request.
- Checked sequential keyboard navigation, appendix return links, hover/focus,
  and the retired `self-description-examples` alias with query/hash preservation.
- Rechecked the three new specification links: HTTP 200, valid section anchors,
  stable hover geometry, sequential Tab access, and a visible 2px focus outline.
  Visible slide links were also checked against the actual pointer hit target.
  The five main category ports have equal rendered gaps of approximately 7.7px.
  The taxonomy deep-dive link reaches `grouping-packaging`. The connected-graph
  caption link was subsequently removed; its checks describe the earlier pass.
- Checked all **17 detail-slide source links** for pointer access, sequential
  Tab focus, visible outlines, and stable hover geometry. The 15 public ORD
  links return HTTP 200 and their fragments exist. The two GitHub proposal
  sources were verified through the API, including the Skills page and heading
  at commit `18fc27e67548f91c13f21ad0b283bb0725d47400`; GitHub's HTML endpoint
  rate-limited the earlier request.
- Followed all **16 deep-dive topic links**, their return links, and all **seven
  main-presentation deep-dive links**. Verified all nine Tools links and return
  routes, stable hover positions, and sequential keyboard access to all cards.
- Sampled the actual rendered paths in both resource graphs: all endpoints meet
  the intended card borders and no path crosses a relationship label. Agent,
  Event, and API colors match across the two diagrams. The metadata-alignment
  diagram's middle branches and main arrows share the same center at
  **524.0625px**, with a measured **0px** offset on both sides.
- Clicked the closing Tools link and logo after the transparent-header fix.
  Repeated navigation in one headless Chromium page exhausted its development
  request queue; the remaining route pairs passed using fresh pages. Uninterrupted
  navigation through the entire deck was not established in that browser session.
- Presentation `npm run build` and `git diff --check` pass. The build retains
  existing `@vueuse/core` annotation warnings.
- Reference application `npm run check`, `npm test`, and `npm run build` pass;
  PR #27's CI and DCO checks pass. Static and both authenticated tenant documents
  have HTTP regression coverage for Product/Vendor identity and references.

Latest screenshots and machine-readable results are in the ignored
`screenshots/latest-state-final/` and `screenshots/deep-dive-interactions/`
directories. Focused checks are in `screenshots/tools-grouped-index/`,
`screenshots/ord-id-pattern-and-example/`, `screenshots/restored-backdrops/`,
and `screenshots/closing-pointer-fix/`.
The earlier walkthrough checks remain recorded in the original review.
The screenshots are a desktop Chromium review; PDF export, other browsers,
mobile layouts, and projection conditions were not verified. Dense upstream
figures remain appendix material. The live demonstration depends on its external
deployment; its fallback is verified. The ecosystem appendix was visually
reviewed, without repeating a full code audit of all its repositories; its
research is in [ord-open-source-projects.md](./ord-open-source-projects.md).

To repeat rendering against the existing server:

```sh
npm run inspect -- --url=http://localhost:3030 --out=screenshots/cleanup-final
```

This requires the Playwright browser and its runtime libraries. `--url` reuses
the supplied server; without it, the script starts and stops its own server.

## Ecosystem follow-up, 2026-10-04

The section now has eight active tool slides covering nineteen repositories.
`project-registry` is hidden until a registry schema and specification are
available; its source remains in the deck. The overview and previous/next links
exclude it, and the active slide count is **46**. Numbered “Group” breadcrumbs
have been replaced with descriptive topic names.

The overview describes tasks. Detail slides use larger demonstrations and
compact tool-selection cards: schema generation, an actual Explorer catalog,
publishing files, an overlay's before/after effect, format-aware rendering,
Agent Card inspection, static MCP tool discovery, and metadata compaction.
Explorer, Metadata Renderer, A2A, and MCP views are real screenshots. Explorer
uses the user-supplied original with a wider CSS viewport and full-image link;
the other playgrounds render the included generic example input. Screenshot
provenance and licensing are in [public/img/tools/README.md](../public/img/tools/README.md).

Compaction is framed as reducing large files to use less LLM context and keeping
the essentials or the metadata a publisher wants to share. CSN is the worked
example and currently supported format; the broader scope and planned format
support are explicit. A2A protocol skills are distinguished from ORD Skill
Capabilities in speaker notes. MCP Server Cards are explicitly identified as
an open proposal. Native examples were checked against the tool READMEs and
ORD 1.16.4 source schemas; grounding is recorded in
[ord-open-source-projects.md](./ord-open-source-projects.md).

Verification for this pass:

- Visually reviewed the overview and all eight detail slides by stable slug at
  **1280×720**, reusing `http://localhost:3030`. Final automated checks report
  no slide overflow, text overlap, or browser errors.
- Followed all eight overview links and their return routes; verified nineteen
  separately linked repositories, visible keyboard focus, and stable hover
  geometry. Rechecked the final Explorer layout separately, including all
  twelve links and the full-image link. Its source/demo links were moved clear
  of the presentation controls.
- The MCP example passes the public playground's current card validation.
  No example agent task or MCP tool was invoked. Provider server and Go
  compactor commands were checked against their READMEs, not executed.
- `npm run build` and `git diff --check` pass. Existing dependency annotation
  warnings remain. PDF export, other browsers, and projection conditions were
  not checked in this pass.

Final captures are in ignored `screenshots/ecosystem-final/`; interaction checks
are in `screenshots/ecosystem-interactions/` and
`screenshots/ecosystem-explorer-real/`. The resumed environment required temporary
browser libraries and an installed Chromium executable for inspection; no
system packages or project dependencies were changed.
