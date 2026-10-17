# Specification diagrams

These SVGs are copied byte-for-byte from the authoritative sibling specification checkout (`ord-spec` or `ord-public`). Run `npm run sync:diagrams` to refresh them and `npm run check:diagrams` to detect drift.

Originally imported from release **1.16.4**, commit `ce0dea1478c56238f0aff75f7665c301e74f0577`, they now use the presentation's pale accent palette, neutral connectors, and rounded cards. The layout, labels, connector paths, and embedded editable Draw.io geometry are preserved; the embedded source carries the same styling.

| Presentation asset | Source in specification | Slide slug |
| --- | --- | --- |
| `system-landscape.drawio.svg` | `static/img/system-landscape/system.drawio.svg` | `landscape-model` |
| `integration-dependency.drawio.svg` | `static/img/integration-dependency.drawio.svg` | `integration-dependencies` |

Preserve the embedded Draw.io source and vector connectors when refreshing these files. The surrounding Vue components handle slide sizing, accessible descriptions, captions, and explanatory text.

The source specification is licensed under Apache-2.0; the original license is included in [LICENSE](./LICENSE).
