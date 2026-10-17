import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://myainativetown.com',
  // Hindi is the default language and is served unprefixed at "/"; English at "/en/".
  i18n: {
    defaultLocale: 'hi',
    locales: ['hi', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'hi', locales: { hi: 'hi-IN', en: 'en-IN' } },
    }),
  ],
});
