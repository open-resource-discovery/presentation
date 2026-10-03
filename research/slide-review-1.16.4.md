# Slide review against ORD 1.16.4

Reviewed on 2026-10-03, directly on `main`, using the running presentation at `http://localhost:3030`. All 47 slides were rendered and visually inspected at 1280×720, including the main story, deep dives, and ecosystem appendix.

## Changes

- Added `npm start` as an alias for `npm run dev`.
- Fixed the specification button's dashed outline: Slidev's default anchor rule was overriding its custom border. The button now has a solid teal border and an SVG external-link arrow.
- Removed the theme's unintended dimming of paragraphs after headings, restored paragraph line spacing, and removed duplicate square/circle bullet markers.
- Standardized main and split-slide heading sizes, increased contrast for secondary labels, and corrected inline code backgrounds on light slides.
- Marked both Data Products and Agents as beta. The cover and closing do not display a specification version; the authoritative release is pinned in this review and asset provenance.
- Rebuilt the alignment diagram's point-to-point connections and added buses connecting every provider and consumer to the aggregator.
- Replaced overlapping landscape bubbles and connectors crossing provider cards with a connected metadata view and a separate Discovery API consumer row.
- Clarified that arrows in the roles diagram represent metadata delivery; crawl/query request arrows would point in the opposite direction.
- Reused two unmodified specification Draw.io SVGs: the system landscape on `landscape-model` and integration dependencies on `integration-dependencies`. The latter now includes the callback reference to the declaring system, alongside readable AND/OR and subset explanations. Asset provenance is recorded in `public/img/spec/README.md`.
- Closed connector gaps at the alignment and role cards and at the pull/push sequence lifelines. Corrected the provider's required-interface socket orientation and attached its stem to the curve; also attached the Entity Type stem to the application boundary.
- Matched the pull sequence to the specification's registration, instance discovery, per-instance configuration, per-document fetch, and per-definition fetch nesting. All requests and responses now fit inside their loops. The caption notes access strategies and externally hosted definitions.
- Added Vendors and Group Types to the information model, and made resource labels easier to read.
- Clarified exact-version and latest-stable SemVer selection, whole-resource precedence, tombstone handling, and the separation of system-independent content in perspective resolution.
- Added the empty Product/Vendor version-fragment rule to the ORD ID diagram.
- Clarified lifecycle independence: successors do not automatically deprecate previous resources; development/beta contracts can break without a new major ID; tenant extensions use `lastUpdate`.
- Improved the visibility diagram's text layout while retaining the separation between metadata visibility and runtime authorization.
- Corrected the Overlay selector example to use an `operation` selector object and clarified that `purpose` belongs to the definition entry.
- Verified the push preview against PR #187 and corrected the opening endpoint to `/v1/submissions`. Push and Agent Skills remain explicitly labeled proposals.
- Increased ecosystem card body text and removed theme-added dashed borders from repository links.
- Fixed an existing race in the interactive example: switching tabs now aborts the previous request, so a late configuration response cannot overwrite the selected ORD document or definition.

## Follow-up presentation refinements

- Replaced the full-height deep-dive hover underline with a compact rounded background. Hover leaves the link's position unchanged; keyboard focus has a visible outline.
- Kept the current slide label non-clickable and added a navbar breadcrumb back to the current section's divider.
- Removed the decorative gradient line from the footer. Each slide now shows its own number and the deck total, including in print/export contexts.
- Added stable, unique URL slugs to all 47 slides and changed internal links and the inspection script to use them. The complete list is in [slide-navigation.md](./slide-navigation.md).
- Rebuilt the Outcomes cards with native SVG icons, compact spacing, and matching heading/description rows. Adoption, perspective, skill, and index cards also use consistent text rows where appropriate.
- Introduced explicit semantic role colors matching the specification's roles drawing: **Provider = blue**, **Aggregator = purple**, **Consumer = green**. These are used consistently in role/adoption cards, alignment, landscape views, and transport participants; general card accents use a softer palette.
- Increased separation between the white canvas and neutral cards with subtle light-grey surfaces and clearer borders. Cards with colored tops have very pale matching tints; role surfaces are explicitly defined in the light theme so they cannot inherit a dark background. The original rounded border/top style is kept consistent. The pull-overview cards also use shared rows for their numbers, headings, and descriptions.
- The self-description diagram introduces the blue ORD Provider hexagon and matching exposed ports, adds REST/MCP/A2A examples and an Agent port. The required socket connects to a second blue Provider hexagon and explicitly references its external API/Event contract. Detailed definitions use a neutral annotation, distinct from dependency ports. The metadata-silos diagram adds Systems / Services inventory and service discovery alongside the four resource catalogs.
- Kept the selected diagram with examples on `self-description` and removed the duplicate comparison slide. It includes REST/MCP/A2A, CloudEvents and AsyncAPI definitions, Domain Model taxonomy / Ontology, Delta Sharing / SQL, A2A Agent Cards, and proposed Skills / Agent Plugins. Label boxes use a consistent 8-unit corner radius and “ORD Provider API”; the roles overview uses the same API label. The former `self-description-examples` URL redirects to the retained slide.
- Expanded the Provider diagram to a 700×570 viewBox in a 680-pixel-wide column, with longer port stems, wider label padding, larger gaps between the labels, and more vertical room. Removed the Data Product and Agent beta labels from this overview diagram; detailed resource-status labeling elsewhere remains unchanged.
- Reduced the Provider port circles and required-interface socket by about a quarter, with lighter connector strokes and adjusted endpoints so the lines remain attached.

- Replaced resource chips on the cover with five chapter links, beginning with “Connect fragmented metadata”. The pre-header is “Connected metadata, open discovery”, and the description explains ORD as an open protocol that builds on existing industry standards.
- Made the deep-dive overview neutral: shared light-grey surfaces, no arbitrary colored tops, aligned text rows, and room for 15 topic links.
- Renamed the ORD identifier heading to “ORD ID: How to construct the type-level ID”.
- Added three deep dives: `ord-extensibility`, `grouping-packaging`, and `api-lifecycle`. The lifecycle example adapts the specification’s diagram into readable parallel v1/v2 paths, including successor creation and retirement.
- Moved `pull-overview` immediately before `ord-by-example`. Existing slugs and links remain stable.
- Reduced the excessive empty space inside ecosystem repository cards with a shared compact height.

## Authoritative grounding

The sibling `ord-public/package.json` identifies release **1.16.4**. The review used the local documentation and source schemas, leaving that repository unchanged.

| Slide slugs / topic | Grounding in `../ord-public/` |
| --- | --- |
| `metadata-silos`, `metadata-alignment`, `self-description` | `docs/introduction.mdx`; `static/img/no-aligned-standards.svg`, `aligned-standards.svg`, `ord-provider-overview.svg` |
| `self-description` category examples | `spec/v1/Document.schema.yaml` API protocols, Event resource definitions, Agent resource definitions; `docs/spec-v1/concepts/data-product.md`, `grouping-and-bundling.md`; Skills remain a proposal, as described below |
| `information-model` | `docs/spec-v1/concepts/system-landscape-model.md`; `static/img/ord-high-level-data-model.drawio.svg`; `spec/v1/Document.schema.yaml` |
| `ord-roles`, `adoption` | `docs/spec-v1/index.md` ORD roles; `static/img/ord-roles-overview.svg` |
| `pull-overview`, `pull-sequence` | `docs/spec-v1/index.md` pull transport; `static/img/ord-pull-transport-sequence.mmd` and `.svg`; `spec/v1/Configuration.schema.yaml` |
| `perspectives-overview`, `perspective-resolution` | `docs/spec-v1/concepts/perspectives.md`; `static/img/perspective-resolution.drawio.svg` |
| `connected-landscape`, `landscape-model` | `docs/spec-v1/concepts/system-landscape-model.md`; `static/img/system-landscape/system.drawio.svg` |
| `namespace-concept`, `ord-identifiers`, `related-identifiers` | `docs/spec-v1/index.md` namespace, ORD ID, Correlation ID, and Specification ID sections; `static/img/namespace-concept.svg` |
| `versioning-lifecycle`, `api-lifecycle` | `docs/spec-v1/concepts/versioning-and-lifecycle.md`; `static/img/versioning-and-lifecycle.drawio.svg`; `spec/v1/Document.schema.yaml` |
| `ai-discovery`, `ai-enrichment` | `docs/spec-v1/concepts/ai-agents-and-protocols.md`; `spec/v1/Document.schema.yaml` |
| `visibility` | `spec/v1/Document.schema.yaml` resource visibility, definition visibility, and access strategies |
| `ord-overlays` | `spec/v1/OrdOverlay.intro.md`, `OrdOverlay.schema.yaml` |
| `integration-dependencies` | `docs/spec-v1/concepts/integration-dependency.md`; `static/img/integration-dependency.drawio.svg`; `spec/v1/Document.schema.yaml` IntegrationAspect |
| `ord-extensibility` | `spec/v1/Document.schema.yaml` Labels, DocumentationLabels, Capability, CapabilityDefinition, GroupType; `docs/spec-v1/index.md` Specification ID |
| `grouping-packaging` | `docs/spec-v1/concepts/grouping-and-bundling.md`; `spec/v1/Document.schema.yaml` Package, ConsumptionBundle, Group, GroupType |

The main-story overview diagrams deliberately omit cardinalities and some secondary concepts; the reused system-landscape deep dive preserves the specification's cardinalities and namespace relationships. The schemas and normative documentation take precedence when an older overview drawing is less complete. The ecosystem appendix was reviewed for presentation quality; its existing repository research remains in [ord-open-source-projects.md](./ord-open-source-projects.md).

The live reference provider used on `ord-by-example` currently advertises ORD 1.12 in its own response. The deck's specification grounding is 1.16.4; the walkthrough displays the provider's actual metadata version.

Proposal references are separate from released 1.16.4 behavior: [Agent Skills PR #102](https://github.com/open-resource-discovery/specification/pull/102) and [transactional push PR #187](https://github.com/open-resource-discovery/specification/pull/187).

## Validation and artifacts

- `npm run build` passes. The build emits the existing dependency annotation warnings from `@vueuse/core`.
- `git diff --check` passes.
- `npm start -- -- --help` confirms the alias invokes Slidev through the dev script.
- Chapter breadcrumbs, non-clickable current labels, hover/focus layout, aligned Outcomes text, and all 47 print-context counters pass browser checks.
- The five cover agenda links and 15 deep-dive destinations resolve correctly; the pull overview directly precedes the example.
- The selected Provider SVG has no detected text overlap or overflow, with every label contained inside its box; definition annotations and required-interface sockets use distinct colors. The retired comparison URL redirects correctly, preserving its query and hash.
- Live example tab switching and the pull deep-dive round trip were checked in Chromium, including the displayed response content.
- The final inspection covers all 47 slides, with zero slide-boundary overflows, zero detected HTML text overlaps, and zero browser errors.
- Screenshots and the machine-readable report are in the ignored `screenshots/final/` directory. The DOM checks complement visual review; they cannot prove SVG connector correctness or diagram semantics.

To repeat against the existing server:

```sh
npm run inspect -- --url=http://localhost:3030 --out=screenshots/final
```

Without `--url`, the inspection command starts and stops its own Slidev server on port 3131. It never stops an existing server supplied through `--url`. The Chromium browser required by Playwright must be installed in the execution environment.
