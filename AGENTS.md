# ORD Presentation Notes

- This repository contains a Slidev deck for a public Open Resource Discovery (ORD) presentation.
- Primary grounding source: `grounding/ord-public/docs/introduction.mdx`. The `grounding/` directory is ignored and should stay untracked.
- Keep slide copy close to the ORD spec wording. Do not add claims that are not present in the grounding material.
- The visual style should stay close to the ORD Docusaurus site: dark minimal base, Inter/system sans, teal brand accents, neutral separators, and the official ORD logo asset in `public/img/`.
- Prefer diagrams as Vue components in `components/` using HTML and CSS. Use separate SVG assets only when HTML/CSS becomes impractical.
- Useful commands: `npm run dev`, `npm run build`, `npm run export`, and `npm run inspect`.
- `npm run inspect` starts Slidev locally and writes Playwright screenshots to `screenshots/` for visual review.

