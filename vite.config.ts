import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split vendor libraries into separate chunks
          if (id.includes('node_modules')) {
            if (id.includes('@radix-ui')) return 'radix-ui'
            if (id.includes('@mui')) return 'mui'
            if (id.includes('@emotion')) return 'mui'
            if (id.includes('@supabase')) return 'supabase'
            if (id.includes('react-router-dom')) return 'react-router'
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
