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
  // Source the cyber lab sequence was adapted from.
  //
  // Deliberately NOT a hyperlink: the tracker is access-restricted paid bootcamp
  // material whose learning contract prohibits redistributing the material or
  // sharing class access. Credited by name only. If you get the organiser's
  // written permission, add `trackerUrl` here and link it from the labs page.
  sources: {
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
