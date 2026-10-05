# ORD Presentation

A public introduction to the [Open Resource Discovery (ORD)](https://open-resource-discovery.org/) specification, built as a [Slidev](https://sli.dev/) deck.

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
- See [`AGENTS.md`](./AGENTS.md) for authoring conventions (routing, roles, styling).

## License

Licensed under the [Apache License 2.0](./LICENSE), governed by the [NeoNephos Foundation](https://neonephos.org/) under [Linux Foundation Europe](https://linuxfoundation.eu/).

Copyright 2026 SAP SE or an SAP affiliate company and presentation contributors. This repository follows the [REUSE](https://reuse.software/) specification; see [`REUSE.toml`](./REUSE.toml) for per-file copyright and license information.
