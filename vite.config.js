import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import viteCNAMEPlugin from 'vite-cname-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    viteCNAMEPlugin({ domain: 'sangnguyen.dev' })
  ],
  build: {
    outDir: 'dist'
  }
})
