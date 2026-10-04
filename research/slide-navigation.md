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
| 7 | [ord-roles](http://localhost:3030/ord-roles) |
| 8 | [scope](http://localhost:3030/scope) |
| 9 | [pull-overview](http://localhost:3030/pull-overview) |
| 10 | [ord-by-example](http://localhost:3030/ord-by-example) |
| 11 | [information-model](http://localhost:3030/information-model) |
| 12 | [perspectives-overview](http://localhost:3030/perspectives-overview) |
| 13 | [connected-landscape](http://localhost:3030/connected-landscape) |
| 14 | [enables-section](http://localhost:3030/enables-section) |
| 15 | [outcomes](http://localhost:3030/outcomes) |
| 16 | [ai-discovery](http://localhost:3030/ai-discovery) |
| 17 | [adoption](http://localhost:3030/adoption) |
| 18 | [closing](http://localhost:3030/closing) |
| 19 | [deep-dive-section](http://localhost:3030/deep-dive-section) |
| 20 | [deep-dives](http://localhost:3030/deep-dives) |
| 21 | [namespace-concept](http://localhost:3030/namespace-concept) |
| 22 | [landscape-model](http://localhost:3030/landscape-model) |
| 23 | [ord-identifiers](http://localhost:3030/ord-identifiers) |
| 24 | [related-identifiers](http://localhost:3030/related-identifiers) |
| 25 | [versioning-lifecycle](http://localhost:3030/versioning-lifecycle) |
| 26 | [api-lifecycle](http://localhost:3030/api-lifecycle) |
| 27 | [perspective-resolution](http://localhost:3030/perspective-resolution) |
| 28 | [pull-sequence](http://localhost:3030/pull-sequence) |
| 29 | [ai-enrichment](http://localhost:3030/ai-enrichment) |
| 30 | [visibility](http://localhost:3030/visibility) |
| 31 | [ord-overlays](http://localhost:3030/ord-overlays) |
| 32 | [skills-preview](http://localhost:3030/skills-preview) |
| 33 | [push-preview](http://localhost:3030/push-preview) |
| 34 | [integration-dependencies](http://localhost:3030/integration-dependencies) |
| 35 | [ord-extensibility](http://localhost:3030/ord-extensibility) |
| 36 | [grouping-packaging](http://localhost:3030/grouping-packaging) |
| 37 | [tools-ecosystem-section](http://localhost:3030/tools-ecosystem-section) |
| 38 | [tools-ecosystem](http://localhost:3030/tools-ecosystem) |
| 39 | [project-specification](http://localhost:3030/project-specification) |
| 40 | [project-reference](http://localhost:3030/project-reference) |
| 41 | [project-publishing](http://localhost:3030/project-publishing) |
| 42 | [project-overlays](http://localhost:3030/project-overlays) |
| 43 | [project-ui](http://localhost:3030/project-ui) |
| 44 | [project-a2a](http://localhost:3030/project-a2a) |
| 45 | [project-mcp](http://localhost:3030/project-mcp) |
| 46 | [project-compaction](http://localhost:3030/project-compaction) |
| 47 | [project-registry](http://localhost:3030/project-registry) |

Numeric URLs still resolve through Slidev, but presentation links use slugs. The inspection script also uses slugs and records them in `inspection.json`.

The former `self-description-examples` comparison URL redirects to `self-description`, which now contains the generic Provider diagram.
