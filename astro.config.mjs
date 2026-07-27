import { defineConfig } from 'astro/config';

// GitHub Pages project site: served at https://alekspasseo.github.io/coffeedant/
export default defineConfig({
  site: 'https://alekspasseo.github.io',
  base: '/coffeedant',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
