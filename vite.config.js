import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// apex user site (brucequiros18.github.io) → base stays '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
