export const site = {
  name: 'Dickie Zulfickar Hervianto',
  shortName: 'dickie.zh',
  role: 'netops · security · agentic ai',
  handle: 'stackcypherx',
  title: 'Dickie Zulfickar Hervianto · Network Operations · Security · Agentic AI',
  tagline: 'Carrier network operations, specialising into security and agentic AI.',
  description:
    'Portfolio of Dickie Zulfickar Hervianto, a telecom network and service operations engineer with over a decade at Telkom Indonesia and Smartfren, now specialising into cybersecurity and agentic AI. Experience, agent-built software, and technical writing, plus the learning plan behind the specialisation.',
  url: 'https://stackcypherx.github.io',
  repo: 'https://github.com/stackcypherx/stackcypherx.github.io',
  // Empty strings are hidden from the UI; add them as the accounts exist.
  // Phone number deliberately excluded from this public site; keep it on the CV you send.
  links: {
    github: 'https://github.com/stackcypherx',
    linkedin: 'https://www.linkedin.com/in/dickiezh/',
    tryhackme: 'https://tryhackme.com/p/stackcypher',
    hackthebox: '',
    credly: '',
    email: 'zulfickarhervianto@gmail.com',
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

// Primary nav is the portfolio. The learning plan is one entry, with its own
// sub-navigation (planNav) rendered on every /plan page.
export const nav = [
  { label: 'Experience', href: '/experience' },
  { label: 'Work', href: '/work' },
  { label: 'Writing', href: '/writing' },
  { label: 'About', href: '/about' },
  { label: 'Learning plan', href: '/plan' },
] as const;

export const planNav = [
  { label: 'Overview', href: '/plan' },
  { label: 'Labs', href: '/plan/labs' },
  { label: 'Certifications', href: '/plan/certifications' },
  { label: 'Project briefs', href: '/plan/projects' },
  { label: 'Readiness', href: '/plan/readiness' },
  { label: 'Recommendations', href: '/plan/recommendations' },
] as const;
