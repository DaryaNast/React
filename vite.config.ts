/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
  build: {
    outDir: 'docs'
  },
  test: {
    globals: true,
    environment: 'jsdom',
  }
})
