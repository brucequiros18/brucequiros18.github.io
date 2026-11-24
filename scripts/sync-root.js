// Ships a fresh build to the repo root, which is what GitHub Pages serves
// (deploy from branch: main / root). Replaces the committed production
// shell — index.html, assets/ and the per-route directories — with the
// contents of dist/, so pushing afterwards publishes the new site.
import { cpSync, readdirSync, rmSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const root = resolve(here, '..')
const dist = resolve(root, 'dist')

if (!existsSync(resolve(dist, 'index.html'))) {
  console.error('sync-root: dist/index.html missing — run `npm run build` first')
  process.exit(1)
}

// Drop the previous hashed bundle so stale assets never accumulate.
rmSync(resolve(root, 'assets'), { recursive: true, force: true })

let copied = 0
for (const entry of readdirSync(dist)) {
  cpSync(resolve(dist, entry), resolve(root, entry), { recursive: true })
  copied++
}

console.log(`sync-root: ${copied} entries copied from dist/ to the repo root`)
