import { copyFileSync, mkdirSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PROJECTS } from '../src/data/site.js'

// GitHub Pages hosts plain static files, so every client-side route gets a
// real directory with an index.html clone of the SPA shell — deep links then
// answer 200 (like classic multi-page sites) instead of leaning on the
// 404-fallback trick. dist/404.html stays for genuinely unknown paths.
const here = dirname(fileURLToPath(import.meta.url))
const dist = resolve(here, '..', 'dist')
const index = resolve(dist, 'index.html')

if (!existsSync(index)) {
  console.error('write-pages: dist/index.html missing — run `vite build` first')
  process.exit(1)
}

const routes = ['work', 'about', 'uses', 'contact', ...PROJECTS.map((p) => `work/${p.slug}`)]

for (const route of routes) {
  const dir = resolve(dist, route)
  mkdirSync(dir, { recursive: true })
  copyFileSync(index, resolve(dir, 'index.html'))
}

copyFileSync(index, resolve(dist, '404.html'))
console.log(`write-pages: ${routes.length} route dirs + 404.html written`)
