# Specification diagrams

These SVGs are copied byte-for-byte from the authoritative sibling specification checkout (`ord-spec` or `ord-public`). Run `npm run sync:diagrams` to refresh them and `npm run check:diagrams` to detect drift.

The System Landscape and Integration Dependency diagrams were originally imported from release **1.16.4**, commit `ce0dea1478c56238f0aff75f7665c301e74f0577`. Their latest layouts come from the spec. The Agent model was rebuilt using the spec's Data Product diagram as a visual basis. All three use the same accent palette, neutral connectors, and rounded cards; the embedded editable sources carry the same layout and styling.

| Presentation asset | Source in specification | Slide slug |
| --- | --- | --- |
| `system-landscape.drawio.svg` | `static/img/system-landscape/system.drawio.svg` | `landscape-model` |
| `integration-dependency.drawio.svg` | `static/img/integration-dependency.drawio.svg` | `integration-dependencies` |
| `ord-ai-agent.drawio.svg` | `static/img/ord-ai-agent.drawio.svg` | `agent-model` |

Preserve the embedded Draw.io source and vector connectors when refreshing these files. The surrounding Vue components handle slide sizing, accessible descriptions, captions, and explanatory text.

Edit layouts and styling in the specification first, then sync here. The [specification's Draw.io style guide](https://github.com/open-resource-discovery/specification/blob/main/diagrams/README.md#retained-drawio-sources) documents the shared palette. Native Vue diagrams, including `DataProductDiagram.vue`, remain separate implementations.

The source specification is licensed under Apache-2.0; the original license is included in [LICENSE](./LICENSE).
