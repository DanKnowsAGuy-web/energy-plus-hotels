import { defineConfig } from 'astro/config';

// The hotel site, served at the repo root (replaces the old navy site).
// https://danknowsaguy-web.github.io/energy-plus-hotels/
export default defineConfig({
  site: 'https://danknowsaguy-web.github.io',
  base: '/energy-plus-hotels',
});
