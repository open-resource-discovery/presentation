import { copyFile, mkdir, readFile } from 'node:fs/promises'
import { parseSync } from '@slidev/parser'

const source = await readFile('slides.md', 'utf8')
const slides = parseSync(source, 'slides.md').slides
  .filter(slide => !slide.frontmatter.hide && !slide.frontmatter.disabled)
const routes = new Set(slides.flatMap((slide, index) => [
  String(index + 1),
  slide.frontmatter.routeAlias,
]).filter(Boolean))

for (const route of routes) {
  const routeDirectory = `dist/${route}`
  await mkdir(routeDirectory, { recursive: true })
  await copyFile('dist/index.html', `${routeDirectory}/index.html`)
}

await copyFile('.github/pages-404.html', 'dist/404.html')
