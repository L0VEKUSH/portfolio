import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  // If deploying to GitHub Pages with a repo subpath, set base to `/${repo}/`
  // base: '/your-repo-name/',
  plugins: [react(), viteCompression()],
  build: {
    target: 'es2018',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons': ['react-icons'],
        },
      },
    },
  },
});
