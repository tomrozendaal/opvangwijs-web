// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. When a custom domain is added later,
  // set `site` to it and drop `base` (or set base: '/').
  site: 'https://tomrozendaal.github.io',
  base: '/opvangwijs-web/',
  vite: {
    plugins: [tailwindcss()],
  },
});
