# ORD Presentation

A public introduction to the [Open Resource Discovery (ORD)](https://open-resource-discovery.org/) specification, built as a [Slidev](https://sli.dev/) deck.

Read the [ORD Introduction](https://open-resource-discovery.org/introduction) for the complete primer and links to the specification.

## View the deck

**https://open-resource-discovery.github.io/presentation/**

The site deploys automatically from `main` via GitHub Actions.

## Run locally

```sh
npm install
npm run dev
```

The deck opens at http://localhost:3030.

The Orders example on the "ORD by example" slide can fetch live metadata from the public reference application through the dev server's proxy. In the static build that proxy is absent, so the "Try live demo" button falls back to the bundled example in `data/orders/`. Everything else works identically.

## Build and export

```sh
npm run build    # static site into dist/
npm run export   # slides-export.pdf
```

## Editing

- Slide content lives in `slides.md`.
- Diagrams are Vue components under `components/`.
- The connected metadata graph, overlay explanation, and Draw.io SVGs use shared sources from the specification. Run `npm run sync:diagrams` to update the vendored copies and `npm run check:diagrams` to detect drift. These commands find a sibling checkout named `ord-public` or `ord-spec`; use `-- --spec-root=/path/to/specification` for a different location. Builds use the local copies. See the specification's [`diagrams/README.md`](https://github.com/open-resource-discovery/specification/blob/main/diagrams/README.md) for the diagram mapping and visual review workflow.
- See [`AGENTS.md`](./AGENTS.md) for authoring conventions (routing, roles, styling).

## Visual checks

Run `npm run inspect` to render every visible slide at 1280×720. It writes screenshots and `inspection.json` to `screenshots/` and exits with a failure status for content overflow, text overlaps, broken images, browser errors, or text contrast below 3:1. Decorative background bleed and scrolling code are excluded from geometry checks.

The contrast check composites solid and transparent CSS backgrounds, including code labels. It is a conservative regression guard, not a complete accessibility audit: SVG text, image/gradient backgrounds, and group opacity need visual review. Use `-- --min-contrast=4.5` for a stricter threshold, or `-- --report-only=true` to collect findings without failing. Inspect an existing dev server with `-- --url=http://localhost:3030`.

Install the browser with `npx playwright install chromium --only-shell` if needed. `npm run test:inspection` exercises the inspection logic against browser fixtures, including the pale-text-on-white regression.

## License

Licensed under the [Apache License 2.0](./LICENSE), governed by the [NeoNephos Foundation](https://neonephos.org/) under [Linux Foundation Europe](https://linuxfoundation.eu/).

Copyright 2026 SAP SE or an SAP affiliate company and presentation contributors.
