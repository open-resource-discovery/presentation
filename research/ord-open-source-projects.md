# ORD open-source projects

Research snapshot: 2026-10-04. Tool READMEs rechecked against public `main` branches.

## Scope

This note inventories public, user-facing repositories in the `open-resource-discovery` GitHub organization for the presentation's “Tools & Ecosystem” section.
Repository descriptions and capabilities were verified against each project's public README or package metadata.
Operational repositories, community administration, redirects, templates, and the presentation repository itself are outside this section.

## Recommended project groups

### 1. Specification toolchain

- [`specification`](https://github.com/open-resource-discovery/specification#readme) is the canonical ORD specification repository and publishes the documentation, generated schemas, validation code, examples, and npm package.
- [`spec-toolkit`](https://github.com/open-resource-discovery/spec-toolkit#readme) is a CLI for creating JSON Schema specifications and generating Markdown documentation from them.
- These repositories belong together because the specification invokes Spec Toolkit during generation and build.

### 2. Live reference experience

- [`reference-application`](https://github.com/open-resource-discovery/reference-application#readme) demonstrates an ORD provider and consumer flow with APIs, Events, pull transport, access strategies, and tenant-aware metadata.
- [`explorer`](https://github.com/open-resource-discovery/explorer#readme) connects to ORD system endpoints or document URLs and provides catalog, resource-list, and resource-detail views.
- These repositories form a practical provider and consumer pair.

### 3. Provider and Java tooling

- [`provider-server`](https://github.com/open-resource-discovery/provider-server#readme) serves static ORD metadata over HTTP from local files or a GitHub source and is available through npm and Docker.
- [`spring-boot-starter-ord`](https://github.com/open-resource-discovery/spring-boot-starter-ord#readme) adds ORD endpoints through Spring Boot auto-configuration and supports annotation-generated and static ORD documents.
- [`ord-maven`](https://github.com/open-resource-discovery/ord-maven#readme) generates and publishes Java models and annotations synchronized with the ORD specification.
- These repositories offer complementary ways to publish ORD from files or Java applications.

### 4. Overlay toolchain

- [`overlay-editor`](https://github.com/open-resource-discovery/overlay-editor#readme) provides React components and a playground for viewing and editing ORD Overlay 0.1 documents.
- [`overlay-tools`](https://github.com/open-resource-discovery/overlay-tools#readme) provides a TypeScript CLI and library for validating, dry-running, merging, and converting ORD Overlays.
- [`overlay-golang`](https://github.com/open-resource-discovery/overlay-golang#readme) is a Go library for applying overlays to OpenAPI, OData, CSN, A2A Agent Card, and generic JSON or YAML definitions.
- These repositories cover authoring, automation, and application across TypeScript, React, and Go.

### 5. Shared UI foundation

- [`ui-components`](https://github.com/open-resource-discovery/ui-components#readme) is an accessible and themeable React component library with scoped styles for embedding.
- [`metadata-renderer`](https://github.com/open-resource-discovery/metadata-renderer#readme) renders OpenAPI, AsyncAPI, CSN, A2A Agent Cards, MCP Server Cards, and ORD Overlays through a consistent React API.
- These repositories provide the common visual foundation used by specialized ORD tools.

### 6. A2A development tooling

- [`a2a-editor`](https://github.com/open-resource-discovery/a2a-editor#readme) provides React components and a playground for editing, viewing, and testing A2A agents.
- [`a2a-editor-vscode`](https://github.com/open-resource-discovery/a2a-editor-vscode#readme) brings Agent Card discovery, editing, validation, and live testing into VS Code.
- [`a2a-sample-server`](https://github.com/open-resource-discovery/a2a-sample-server#readme) is a self-contained multi-agent test server covering multiple protocol versions, streaming, and authentication schemes.
- [`a2a-ord-demo`](https://github.com/open-resource-discovery/a2a-ord-demo#readme) demonstrates agent discovery through ORD followed by communication through A2A.
- These repositories form one end-to-end development and demonstration toolkit.

### 7. MCP Server Card tooling

- [`mcp-server-card-ui`](https://github.com/open-resource-discovery/mcp-server-card-ui#readme) provides components for editing, viewing, validating, and testing MCP servers through Server Cards.
- [`ord-mcp-server-card-demo`](https://github.com/open-resource-discovery/ord-mcp-server-card-demo#readme) compares manual MCP configuration, ORD discovery, and Server Card based tool discovery.
- These repositories show how static server and tool metadata can support discovery before connecting to an MCP server.

### 8. Metadata compaction

- [`metadata-compactor-golang`](https://github.com/open-resource-discovery/metadata-compactor-golang#readme) is a Go library and CLI for rules-based, AI-friendly metadata compaction.
- Its purpose is to reduce large metadata files to use less LLM context, retaining
  the essentials or the metadata a publisher wants to share. Its scope is broader
  than preserving a domain model or processing CSN alone.
- The project currently supports CSN JSON and is designed to add further formats.

### Deferred: Registry automation

This group is hidden from the deck until a registry schema and specification
are available for building a registry. Its source slide remains in `slides.md`.

- [`global-registry-bot`](https://github.com/open-resource-discovery/global-registry-bot#readme) is a configurable Probot application that validates registry requests, creates YAML pull requests, routes approvals, and merges safe changes under repository rules.
- GitHub remains its system of record, and it does not keep a separate database for request content.
- The bot is a workflow building block rather than a complete ORD namespace registry.
- A deployable registry also needs an owned registry schema and dataset, governance rules, publication and lookup interfaces, and hosting.

## Excluded repositories

- `pr-preview` and `pr-preview-action` are presentation and documentation preview infrastructure.
- `github-release` is release automation rather than a user-facing ORD tool.
- `steering`, `.github`, and `repository-template` are governance or repository administration.
- `website-redirect` only redirects the former website domain.
- Private repositories and `presentation` are not part of a public open-source project inventory.

## Presentation implication

The active section has eight project slides covering nineteen repositories.
Each slide explains a task through a concrete example and has a compact set of
separately linked tool cards. The overview uses task descriptions rather than
repository names alone.
The section should follow the conceptual deep dives because it answers the practical question of what someone can run, reuse, or contribute to.

## Example grounding

- Specification generation: `ord-public/package.json` (`generate`),
  `spec-toolkit.config.json`, and `spec/v1/Document.schema.yaml`. The displayed
  YAML is an excerpt; `1.16` is the document protocol version, while the verified
  package release is **1.16.4**.
- Publishing: Provider server README, **Local Directory Structure**, **CLI
  Configuration Options**, and **Usage**. The metadata root separates ORD
  documents from native definitions. The illustrated launch command is from
  the documented CLI syntax; it was not executed in this presentation pass.
- Overlays: `ord-public/spec/v1/OrdOverlay.schema.yaml`, **Overlay Patch** and
  **Overlay Selector By Operation**. `selector.operation` matches an OpenAPI
  `operationId`; `merge` adds the example description. The original file remains
  unchanged. The diagram shows an illustrative patch excerpt and its effect,
  not a complete overlay document.
- UI and AI tools: actual playground screenshots with example input, recorded
  in [the asset provenance](../public/img/tools/README.md). A2A Agent Card
  `skills` are protocol metadata, distinct from ORD Skill Capabilities.
- Explorer: actual built-in sample catalog screenshot supplied by the user,
  displayed in a wider viewport with a link to the unchanged original image.
- MCP Server Cards: [SEP-2127](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/2127)
  is open and unmerged as of 2026-10-04; the slide explicitly calls it a proposal.
- Compaction: Metadata Compactor README, **Rules** and **How CSN Compaction
  Works**. `csn.preserve: []` removes annotations/private properties; the depicted
  entity and built-in ID type remain. No measured size or token reduction is
  claimed. The illustration and CLI syntax were reviewed against the README;
  the Go compactor was not built or executed.
