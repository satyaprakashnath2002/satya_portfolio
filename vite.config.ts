import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/", 
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // This splits vendor libraries into a separate chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    // Increases the warning limit so the build logs stay cleaner
    chunkSizeWarningLimit: 1000, 
  },
})