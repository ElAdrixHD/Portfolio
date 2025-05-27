// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Ensure proper build output for static hosting
  output: 'static',
  
  // Configure the site URL for proper asset linking
  site: 'https://adrianmmudarra.es',
  
  // Configure base path if deploying to a subdirectory
  // base: '/portfolio',
  
  build: {
    // Ensure all assets are properly handled
    assets: 'assets',
    // Generate clean URLs for better SEO
    format: 'directory'
  },
  
  // Enable experimental features if needed
  experimental: {
    // Add any experimental features you want to use
  },
  
  // Configure Vite for optimized builds
  vite: {
    build: {
      // Ensure proper asset optimization
      assetsInlineLimit: 4096,
      // Generate source maps for debugging (disable for production)
      sourcemap: false,
      // Optimize CSS
      cssCodeSplit: true
    }
  }
});