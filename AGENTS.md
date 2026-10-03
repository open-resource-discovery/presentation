# ORD Presentation Notes

- This repository contains a Slidev deck for a public Open Resource Discovery (ORD) presentation.
- Primary grounding source: `../ord-public/docs/introduction.mdx`, with normative rules in `../ord-public/docs/spec-v1/` and `../ord-public/spec/v1/`. Confirm the release in `../ord-public/package.json` (currently 1.16.4). The optional `grounding/` directory is ignored and should stay untracked.
- Keep slide copy close to the ORD spec wording. Do not add claims that are not present in the grounding material.
- The visual style should stay close to the ORD Docusaurus site: dark minimal base, Inter/system sans, teal brand accents, neutral separators, and the official ORD logo asset in `public/img/`.
- Give every slide a unique, stable `routeAlias` and use it for internal links. Preserve existing aliases when reordering slides. Divider slides declare `deckSection`; `DeckLogo` uses that metadata for breadcrumbs and displays the slide number in the footer.
- Use the semantic role variables consistently: Provider blue, Aggregator purple, Consumer green, matching the specification's roles drawing. General accents use the softer `--ord-accent-*` palette and a very pale matching `--ord-accent-*-bg` surface. Neutral cards on light slides use the subtle grey `--ord-card-bg`. Keep rounded borders and colored tops consistent across cards; define light role tints on `.light-slide` so they cannot inherit a dark background.
- Prefer diagrams as Vue components in `components/` using HTML and CSS. Use separate SVG assets only when HTML/CSS becomes impractical.
- Useful commands: `npm run dev`, `npm run build`, `npm run export`, and `npm run inspect`.
- `npm run inspect` starts Slidev locally and writes Playwright screenshots to `screenshots/` for visual review.
- To inspect a running server without restarting it: `npm run inspect -- --url=http://localhost:3030`. Screenshots use a 1280×720 viewport; `inspection.json` records slide-boundary overflow, text overlaps, and browser errors. Visually review diagrams as well, since DOM checks do not verify SVG connectors or diagram semantics.
