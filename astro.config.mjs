import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://arx-shop.example',
  integrations: [sitemap()],
  output: 'static'
});
