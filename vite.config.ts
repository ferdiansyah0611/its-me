import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
      { find: '@stores', replacement: fileURLToPath(new URL('./src/stores', import.meta.url)) },
      { find: '@styles', replacement: fileURLToPath(new URL('./src/styles', import.meta.url)) },
      { find: '@constant', replacement: fileURLToPath(new URL('./src/constant', import.meta.url)) },
    ],
  },
})
