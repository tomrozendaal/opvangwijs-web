// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Served from the custom domain opvangwijs.nl (see public/CNAME).
  site: 'https://opvangwijs.nl',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
