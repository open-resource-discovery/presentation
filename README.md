# ORD Presentation

A public introduction to the [Open Resource Discovery (ORD)](https://open-resource-discovery.org/) specification, built as a [Slidev](https://sli.dev/) deck.

Read the [ORD Introduction](https://open-resource-discovery.org/introduction) alongside the deck for the full talk track and links to the specification.

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
- The connected metadata graph uses shared data from the specification. Run `npm run sync:diagrams` to update the vendored copy and `npm run check:diagrams` to detect drift (both checkouts required; use `-- --spec-root=/path/to/specification` for a different location). Builds use the local copy. See the specification's [`diagrams/README.md`](https://github.com/open-resource-discovery/specification/blob/main/diagrams/README.md) for the diagram mapping and visual review workflow.
- See [`AGENTS.md`](./AGENTS.md) for authoring conventions (routing, roles, styling).

## License

Licensed under the [Apache License 2.0](./LICENSE), governed by the [NeoNephos Foundation](https://neonephos.org/) under [Linux Foundation Europe](https://linuxfoundation.eu/).

Copyright 2026 SAP SE or an SAP affiliate company and presentation contributors.
