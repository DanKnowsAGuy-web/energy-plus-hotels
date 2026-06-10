import { defineConfig } from 'astro/config';

// Grand-hotel variant: deployed to a subfolder so the navy site stays at root.
// https://danknowsaguy-web.github.io/energy-plus-hotels/grand-hotel/
export default defineConfig({
  site: 'https://danknowsaguy-web.github.io',
  base: '/energy-plus-hotels/grand-hotel',
});
