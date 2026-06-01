import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    // Vite 8 uses oxc (rolldown) by default — fastest minifier, no esbuild needed
    target: 'es2020',

    rollupOptions: {
      output: {
        // Split vendor chunks to improve caching and reduce initial bundle
        manualChunks(id) {
          if (id.includes('node_modules/gsap')) return 'gsap';
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) return 'react-vendor';
        },
      },
    },

    // Increase chunk size warning limit (GSAP is large by design)
    chunkSizeWarningLimit: 1000,

    // Enable CSS code splitting
    cssCodeSplit: true,

    // No source maps in production
    sourcemap: false,
  },
});
