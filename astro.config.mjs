import { defineConfig } from 'astro/config';

// Deployed as a GitHub Pages *user site* (repo: stackcypherx.github.io),
// so the site lives at the domain root and `base` stays "/".
// If you ever move this into a project repo (e.g. github.com/stackcypherx/portfolio),
// change `base` to '/portfolio' and nothing else needs to move.
export default defineConfig({
  site: 'https://stackcypherx.github.io',
  base: '/',
  trailingSlash: 'ignore',
  // Old URLs from before the portfolio / learning-plan split (2026-10-08).
  // Each becomes a small static page that forwards, so shared links keep working.
  redirects: {
    '/roadmap': '/plan',
    '/roadmap/[track]': '/plan/roadmap/[track]',
    '/labs': '/plan/labs',
    '/certifications': '/plan/certifications',
    '/global-readiness': '/plan/readiness',
    '/projects': '/plan/projects',
    '/recommendations': '/plan/recommendations',
    '/agentic': '/work',
    '/notes': '/writing',
    '/notes/starting-point': '/writing/starting-point',
    '/notes/writeup-template': '/writing/writeup-template',
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});
