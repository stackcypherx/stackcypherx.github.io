export const site = {
  name: 'stackcypher',
  handle: 'stackcypherx',
  title: 'stackcypher — Security · Networks · Agentic AI',
  tagline: 'Learning in public toward global-market readiness.',
  description:
    'A portfolio and open learning hub for cybersecurity, network engineering, and AI / agentic engineering — with a milestone checklist built for the global hiring market.',
  url: 'https://stackcypherx.github.io',
  repo: 'https://github.com/stackcypherx/stackcypherx.github.io',
  // Fill these in as you create them. Empty strings are hidden from the UI.
  links: {
    github: 'https://github.com/stackcypherx',
    linkedin: '',
    tryhackme: '',
    hackthebox: '',
    credly: '',
    email: '',
    x: '',
  },
  // Source tracker this site's cyber lab plan was built from.
  sources: {
    tracker:
      'https://docs.google.com/spreadsheets/d/1lHRLa8iZe9Rc4-TKGIWh4_9F9B_UzYweMRJK0QjjAlo/edit',
    trackerName: 'Cyber Security Learning Tracker',
  },
  startedOn: '2026-09-28',
} as const;

export const nav = [
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Labs', href: '/labs' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Projects', href: '/projects' },
  { label: 'Global Readiness', href: '/global-readiness' },
  { label: 'Recommendations', href: '/recommendations' },
  { label: 'Notes', href: '/notes' },
  { label: 'About', href: '/about' },
] as const;
