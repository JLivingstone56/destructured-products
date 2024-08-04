import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/destructured-products/' : '/',
  build: {
    outDir: 'dist', // Output directly to dist
  },
  publicDir: 'public'
});
