/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/React/',
  build: {
    outDir: 'docs'
  },
  test: {
    globals: true,
    environment: 'jsdom',
  }
})
