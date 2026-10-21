import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

// GitHub Pages serves 404.html for any unknown path — cloning the built
// index.html into it turns every deep link into the SPA (BrowserRouter
// picks the route up from the URL as-is).
const dist = resolve(process.cwd(), 'dist')
const index = resolve(dist, 'index.html')
const notFound = resolve(dist, '404.html')

if (!existsSync(index)) {
  console.error('postbuild: dist/index.html missing — run `vite build` first')
  process.exit(1)
}

copyFileSync(index, notFound)
console.log('postbuild: dist/404.html written (SPA fallback for GitHub Pages)')
