import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// The repo root doubles as the deployed GitHub Pages site: the committed
// production shell (index.html + assets/) is what visitors get, so it must
// not be used as the Vite entry — otherwise `vite dev` serves the old
// pre-built bundle and every source edit looks like it did nothing.
//
// app.html is the real source entry instead:
//   dev   → served at `/` by the middleware below
//   build → emitted as dist/app.html, renamed to dist/index.html by
//           scripts/write-pages.js
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'spa-dev-entry',
      configureServer(server) {
        // Vite's SPA fallback resolves unknown paths to the repo-root
        // index.html (the committed production build). Point every
        // page-shaped request at app.html instead, leaving real files and
        // Vite internals (/src/…, /images/…, /@vite/…) alone.
        server.middlewares.use((req, _res, next) => {
          const url = (req.url || '').split('?')[0]
          const last = url.split('/').pop() || ''
          const isFile = last.includes('.')
          const isInternal =
            url.startsWith('/@') ||
            url.startsWith('/node_modules') ||
            url.startsWith('/__')
          if (url === '/' || url === '/index.html' || (!isFile && !isInternal)) {
            req.url = '/app.html'
          }
          next()
        })
      },
    },
  ],
  base: '/',
  build: {
    rollupOptions: {
      input: resolve(process.cwd(), 'app.html'),
    },
  },
})
