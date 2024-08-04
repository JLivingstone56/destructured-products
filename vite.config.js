import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/destructured-products/' : '/',
  build: {
    outDir: 'dist/client', // Adjust the output directory if needed
  },
  publicDir: 'public'
});
