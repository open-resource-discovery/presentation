# Stable slide URLs

Every slide has a unique Slidev `routeAlias`. Keep existing aliases when editing or reordering slides so bookmarks remain stable. Slide numbers are for presentation order and appear in the footer.

The navbar breadcrumb links to the nearest preceding divider marked with `deckSection` in frontmatter. The current slide label is plain text.

| Number | URL slug |
| --- | --- |
| 1 | [introduction](http://localhost:3030/introduction) |
| 2 | [why-section](http://localhost:3030/why-section) |
| 3 | [metadata-silos](http://localhost:3030/metadata-silos) |
| 4 | [metadata-alignment](http://localhost:3030/metadata-alignment) |
| 5 | [how-section](http://localhost:3030/how-section) |
| 6 | [self-description](http://localhost:3030/self-description) |
| 7 | [self-description-examples](http://localhost:3030/self-description-examples) |
| 8 | [pull-overview](http://localhost:3030/pull-overview) |
| 9 | [ord-by-example](http://localhost:3030/ord-by-example) |
| 10 | [information-model](http://localhost:3030/information-model) |
| 11 | [ord-roles](http://localhost:3030/ord-roles) |
| 12 | [perspectives-overview](http://localhost:3030/perspectives-overview) |
| 13 | [connected-landscape](http://localhost:3030/connected-landscape) |
| 14 | [enables-section](http://localhost:3030/enables-section) |
| 15 | [ai-discovery](http://localhost:3030/ai-discovery) |
| 16 | [scope](http://localhost:3030/scope) |
| 17 | [outcomes](http://localhost:3030/outcomes) |
| 18 | [adoption](http://localhost:3030/adoption) |
| 19 | [closing](http://localhost:3030/closing) |
| 20 | [deep-dive-section](http://localhost:3030/deep-dive-section) |
| 21 | [deep-dives](http://localhost:3030/deep-dives) |
| 22 | [namespace-concept](http://localhost:3030/namespace-concept) |
| 23 | [landscape-model](http://localhost:3030/landscape-model) |
| 24 | [ord-identifiers](http://localhost:3030/ord-identifiers) |
| 25 | [related-identifiers](http://localhost:3030/related-identifiers) |
| 26 | [versioning-lifecycle](http://localhost:3030/versioning-lifecycle) |
| 27 | [api-lifecycle](http://localhost:3030/api-lifecycle) |
| 28 | [perspective-resolution](http://localhost:3030/perspective-resolution) |
| 29 | [pull-sequence](http://localhost:3030/pull-sequence) |
| 30 | [ai-enrichment](http://localhost:3030/ai-enrichment) |
| 31 | [visibility](http://localhost:3030/visibility) |
| 32 | [ord-overlays](http://localhost:3030/ord-overlays) |
| 33 | [skills-preview](http://localhost:3030/skills-preview) |
| 34 | [push-preview](http://localhost:3030/push-preview) |
| 35 | [integration-dependencies](http://localhost:3030/integration-dependencies) |
| 36 | [ord-extensibility](http://localhost:3030/ord-extensibility) |
| 37 | [grouping-packaging](http://localhost:3030/grouping-packaging) |
| 38 | [tools-ecosystem-section](http://localhost:3030/tools-ecosystem-section) |
| 39 | [tools-ecosystem](http://localhost:3030/tools-ecosystem) |
| 40 | [project-specification](http://localhost:3030/project-specification) |
| 41 | [project-reference](http://localhost:3030/project-reference) |
| 42 | [project-publishing](http://localhost:3030/project-publishing) |
| 43 | [project-overlays](http://localhost:3030/project-overlays) |
| 44 | [project-ui](http://localhost:3030/project-ui) |
| 45 | [project-a2a](http://localhost:3030/project-a2a) |
| 46 | [project-mcp](http://localhost:3030/project-mcp) |
| 47 | [project-compaction](http://localhost:3030/project-compaction) |
| 48 | [project-registry](http://localhost:3030/project-registry) |

Numeric URLs still resolve through Slidev, but presentation links use slugs. The inspection script also uses slugs and records them in `inspection.json`.
