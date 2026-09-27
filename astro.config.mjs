import { defineConfig } from 'astro/config';

// Deployed as a GitHub Pages *user site* (repo: stackcypherx.github.io),
// so the site lives at the domain root and `base` stays "/".
// If you ever move this into a project repo (e.g. github.com/stackcypherx/portfolio),
// change `base` to '/portfolio' and nothing else needs to move.
export default defineConfig({
  site: 'https://stackcypherx.github.io',
  base: '/',
  trailingSlash: 'ignore',
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});
