import { copyFile } from 'node:fs/promises'

await copyFile('.github/pages-404.html', 'dist/404.html')
