/**
 * Agentic-engineering portfolio: software built by orchestrating coding agents.
 *
 * Reconstructed from Claude Code session history (Jun–Sep 2026).
 *
 * SANITISATION RULE (keep it):
 *   Internal system codenames, server hostnames, private IP ranges, database
 *   names, bot tokens and customer data are NEVER named here. Employer-internal
 *   work is described by capability, stack and outcome only. Everything on this
 *   page should be safe to hand to a competitor.
 */

export type Build = {
  id: string;
  title: string;
  kind: 'Platform' | 'Automation' | 'Web' | 'Tooling';
  /** internal = employer system, personal = own tooling, public = published */
  visibility: 'Internal' | 'Personal' | 'Public';
  period: string;
  /** One line that says what it is. */
  summary: string;
  /** The problem it existed to solve. */
  problem: string;
  /** What was actually built. */
  built: string[];
  stack: string[];
  /** Honest scale/effort signal. */
  scale?: string;
  /** What the process taught: the agentic-engineering angle. */
  lesson?: string;
  url?: string;
  repo?: string;
};

export const builds: Build[] = [
  {
    id: 'ops-analytics',
    title: 'Network operations analytics & assurance platform',
    kind: 'Platform',
    visibility: 'Internal',
    period: 'Jun – Sep 2026',
    summary:
      'A multi-application internal platform for regional network operations: order fulfilment tracking, service assurance dashboards, and reconciliation of operational data scattered across spreadsheets and legacy systems.',
    problem:
      'Operational truth lived in half a dozen places: a legacy PHP application, a stack of shared spreadsheets, and per-region conventions that had quietly diverged. Answering "what is the actual state of this region\'s orders" meant opening five tabs and trusting whoever last edited the sheet. Regional column mappings disagreed, so the same field meant different things in different territories.',
    built: [
      'A React/Next.js operations console with role-scoped views, JWT authentication, and ECharts dashboards over live fulfilment and assurance data.',
      'A FastAPI backend with SQLAlchemy models over MySQL/MariaDB, exposing normalised endpoints over sources that were never designed to be queried together.',
      'A spreadsheet ingestion and reconciliation layer that resolves per-region column mappings, normalises non-standard free-text fields, and backfills records the legacy system dropped.',
      'Detail views surfacing the equipment, feeder and last-mile fields operators previously had to click through to find, chosen by asking which fields actually get looked up during an escalation.',
      'Scheduled jobs and process supervision (cron, pm2) behind nginx, with restart monitoring so a silently dead worker is noticed.',
      'Geospatial site views for regional coverage.',
    ],
    stack: [
      'Next.js', 'React', 'TypeScript', 'Bun', 'Vite', 'ECharts', 'Tailwind',
      'FastAPI', 'Python', 'SQLAlchemy', 'pandas', 'openpyxl',
      'MySQL / MariaDB', 'JWT', 'nginx', 'pm2', 'cron', 'Leaflet',
    ],
    scale:
      'The largest of these builds by a wide margin: roughly three months of sustained sessions, and the reason the tooling stack on this page looks like a product team rather than a script collection.',
    lesson:
      'Data problems are domain problems. The agent could write the ingestion code in minutes; what took the time was me knowing that two regions recorded the same field differently and that one of them was right. Reviewing output against what I know the network actually does caught defects no test would have.',
  },
  {
    id: 'site-monitor-bot',
    title: 'Site monitoring & alerting bot',
    kind: 'Automation',
    visibility: 'Internal',
    period: 'Jul – Sep 2026',
    summary:
      'A Telegram bot that watches operational site state and pushes alerts to the people who can act on them, instead of waiting for someone to refresh a dashboard.',
    problem:
      'Dashboards are pull. Operations is push. A degradation at 02:00 matters only if it reaches a human. The gap between "the data shows a problem" and "the right engineer knows" was measured in hours.',
    built: [
      'Scheduled polling of operational state with change detection, so alerts fire on transitions rather than repeating a standing condition.',
      'Chat-native delivery to the group that already runs escalations, so there is no new tool for anyone to adopt.',
      'Health and restart-count monitoring across the bot fleet, because an alerting system that dies silently is worse than none.',
    ],
    stack: ['Python', 'python-telegram-bot', 'MySQL', 'cron', 'pm2'],
    lesson:
      'The hardest part was alert design, more than the code. Anything that cries wolf gets muted within a week, and a muted alert channel is a liability you cannot see.',
  },
  {
    id: 'phototodoc',
    title: 'Photo-to-document bot',
    kind: 'Automation',
    visibility: 'Personal',
    period: 'Sep 2026',
    summary:
      'A Telegram bot that turns a batch of uploaded photos into a formatted .docx field report: two photos per page in a proper grid, captions aligned regardless of orientation, title space reserved.',
    problem:
      'Field documentation is a universal tax on operations work: photograph the site, then spend an evening pasting images into a document and fighting the layout. It is pure repetition and everybody does it by hand.',
    built: [
      'Conversational upload flow: the bot asks, you send photos, it confirms and generates.',
      'Deterministic 2×2 page layout that handles mixed portrait and landscape without breaking the grid, with table rules and caption rows that stay aligned across a row regardless of image orientation.',
      'Reserved title space on the first page and consistent caption spacing, so the output is ready to fill in rather than ready to reformat.',
      'Deployed to a server with an isolated virtualenv and supervised process.',
      'A plain-language user guide in Bahasa Indonesia, exported to PDF, the part that decides whether a tool gets adopted or abandoned.',
    ],
    stack: ['Python', 'python-telegram-bot', 'python-docx', 'Pillow'],
    lesson:
      'Layout is where "it works" and "it is usable" diverge. The first version produced a technically valid document that looked wrong, and the fix was several rounds of looking at real output, which the model could not evaluate for me.',
  },
  {
    id: 'search-to-doc',
    title: 'Search-capture-to-document tool',
    kind: 'Automation',
    visibility: 'Personal',
    period: 'Sep 2026',
    summary:
      'A companion tool that automates a search workflow and assembles the captured results into a structured document.',
    problem:
      'The sibling of the photo problem: repeated lookups where the evidence has to end up in a document. Same tax, different input.',
    built: [
      'Automated query execution with capture of the result state.',
      'Assembly into the same document pipeline as the photo tool, reusing the layout engine rather than duplicating it.',
      'Separated into its own module rather than bolted onto the existing bot, a structural call made before writing the code.',
      'Deployed alongside the first tool with a shared environment and its own Bahasa-language guide.',
    ],
    stack: ['Python', 'Browser automation', 'python-docx'],
    lesson:
      'Asking for the second tool to live in its own folder instead of extending the first one cost ten minutes of planning and saved the refactor. Structure decisions are the part you cannot delegate.',
  },
  {
    id: 'learning-tracker',
    title: 'Cyber Security Learning Tracker',
    kind: 'Web',
    visibility: 'Public',
    period: 'Sep 2026',
    summary:
      'A published static site turning a 100-day security study programme into a navigable, trackable web page.',
    problem:
      'A study plan trapped in a spreadsheet is a study plan you stop opening. It needed to be a URL, with structure and progress visible at a glance.',
    built: [
      'Full extraction and restructuring of the source curriculum into a browsable index.',
      'Static site published on free hosting with a deployment pipeline.',
      'Three data-integrity issues found and corrected during the restructure.',
    ],
    stack: ['HTML', 'Static hosting', 'GitHub Pages'],
    url: 'https://stackcypherx.github.io/cyber-security-learning-tracker/',
    repo: 'https://github.com/stackcypherx/cyber-security-learning-tracker',
  },
  {
    id: 'this-site',
    title: 'This portfolio and roadmap',
    kind: 'Web',
    visibility: 'Public',
    period: 'Sep 2026',
    summary:
      'The site you are reading: an Astro static build with a data-driven content layer, client-side progress tracking, and a command palette.',
    problem:
      'Eleven years of work that no stranger could verify, and a specialisation plan that existed only as intent. Both needed to be one URL.',
    built: [
      'A typed content layer: every page is a thin renderer over TypeScript data modules, so content changes never touch markup.',
      'Progress tracking over localStorage with weighted per-phase and per-track roll-ups, plus JSON export/import.',
      'A build-time search index powering a ⌘K command palette across every page, milestone and credential.',
      'An accessible command palette (keyboard-driven, focus-managed) and View Transitions between pages.',
      'CI/CD to GitHub Pages via GitHub Actions on every push.',
    ],
    stack: ['Astro', 'TypeScript', 'View Transitions', 'GitHub Actions'],
    url: 'https://stackcypherx.github.io',
    repo: 'https://github.com/stackcypherx/stackcypherx.github.io',
  },
];

/** Measured from Claude Code session history, Jun–Sep 2026. */
export const vibeStats = {
  activeDays: 59,
  sessions: 6,
  messages: 56927,
  fileEdits: 1320,
  commands: 8358,
  since: 'Jun 2026',
};

export const method = [
  {
    title: 'Specification before prompt',
    body: 'The brief is the artifact I author. Constraints, interfaces, acceptance criteria and explicit non-goals up front. An open-ended prompt produces open-ended output, and then you pay for it in review.',
  },
  {
    title: 'Structure is not delegated',
    body: 'Where a module lives, what it owns, and what it must not reach into are my calls. Asking for the second tool to live beside the first rather than inside it cost ten minutes and saved a refactor.',
  },
  {
    title: 'Review is the job',
    body: 'Velocity without review discipline is a liability. Every diff gets read. The defects that mattered on the analytics platform were domain defects: code that ran correctly over data I knew to be wrong.',
  },
  {
    title: 'Deploy is part of done',
    body: 'Server, virtualenv, process supervision, restart monitoring, and a user guide in the language the users actually speak. A tool that only runs on my machine has not shipped.',
  },
  {
    title: 'Operations instinct as the test oracle',
    body: 'Eleven years of knowing how these systems behave is what catches the plausible-but-wrong answer. That judgement is the part of this work that does not transfer to the model.',
  },
];
