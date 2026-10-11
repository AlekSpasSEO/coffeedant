import { defineConfig } from 'astro/config';

const isCloudflarePages = process.env.CF_PAGES === '1';

// Keep the existing GitHub Pages preview at /coffeedant while building the
// Cloudflare deployment for the production domain at the root path.
export default defineConfig({
  site: isCloudflarePages ? 'https://coffeedant.com' : 'https://alekspasseo.github.io',
  base: isCloudflarePages ? '/' : '/coffeedant',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
