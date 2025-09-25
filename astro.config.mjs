// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.apiwatchdog.shelkepradeep.in', // <-- your subdomain (custom domain) or the GitHub Pages URL
  base: '/',                         // '/' for root; use '/REPO/' for project pages without custom domain
  integrations: [
    starlight({
      title: '',
      logo: {
        light: './src/assets/logo-bg-light.png',
        dark: './src/assets/logo-bg-dark.png',
      },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Prad001/APIWatchdog' }],
      sidebar: [
        {
          label: 'Docs',
          items: [
            { label: 'Getting Started', slug: 'docs/getting-started' },
            { label: 'Discover Endpoints', slug: 'docs/discover-endpoints' },
            { label: 'Generate Specs', slug: 'docs/generate-specs' },
            { label: 'Visualize Flows', slug: 'docs/visualize-flows' },
            { label: 'Security Analysis', slug: 'docs/security-analysis' },
            { label: 'Full Report', slug: 'docs/full-report' }
          ],
        }
      ],
      head: [
        {
          tag: 'link',
          attrs: { rel: 'shortcut icon', href: '/favicon.svg', type: 'image/svg+xml' }, // <-- corrected
        },
      ]
    }),
  ],
});
