# stackcypher — portfolio & learning hub

An open roadmap, lab tracker, and portfolio for three fields: **cybersecurity**, **network
engineering**, and **AI / agentic engineering** — sequenced into milestones built for the global
hiring market.

Live: **https://stackcypherx.github.io**

---

## What's in it

| Page | What it holds |
| --- | --- |
| `/` | Overview, headline progress, 24-month quarter plan, cadence table |
| `/roadmap` | Four tracks, 20 phases, ~130 milestones — every one with a required artifact |
| `/roadmap/[track]` | Per-track checklists: foundations, cybersecurity, networks, AI/agentic |
| `/labs` | The 84-room free TryHackMe track + 300-odd OSCP-style and red-team machines, all checkable |
| `/certifications` | 25 credentials with cost, format, and an honest verdict — including what to skip |
| `/projects` | 10 project briefs with hiring signals and acceptance criteria |
| `/global-readiness` | Four non-technical pillars + market-by-market certs, frameworks, and visa routes |
| `/recommendations` | 12 additions beyond the original brief, written as direct advice |
| `/notes` | Weekly writeup log (Markdown) |
| `/about` | Who, why, and credit for sources |

## Progress tracking

Checkboxes persist to `localStorage` under the key `gtr.progress.v1`. No account, no backend, no
analytics — nothing leaves the browser. Because of that, **clearing site data or switching device
wipes it**, so use the *Export JSON* button on the roadmap page occasionally and keep the file.

Item keys are derived from `track.phase.slugified-title`, so **renaming a milestone resets that one
checkbox**. Reordering or adding items is safe.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve the built output
npm run check    # astro check (types + template diagnostics)
```

Requires Node 20+.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to GitHub
Pages. One-time setup in the repo: **Settings → Pages → Build and deployment → Source: GitHub
Actions**.

This is configured as a GitHub Pages **user site** (repo named `stackcypherx.github.io`), so
`base` in `astro.config.mjs` is `/`. To host it as a project repo instead, change `base` to
`'/<repo-name>'` — every internal link resolves through `import.meta.env.BASE_URL`, so nothing else
needs to move.

### Custom domain

Add a `public/CNAME` file containing just the domain, point a CNAME record at
`stackcypherx.github.io`, then set the domain under Settings → Pages. Update `site` in
`astro.config.mjs` to match.

## Editing content

All content is data, not markup. The pages are thin renderers.

```
src/data/
  site.ts              # name, tagline, profile links, nav  ← start here
  types.ts             # Item/Phase/Track types + key derivation
  roadmap.ts           # track registry, 24-month timeline, cadence
  track-foundation.ts  # Track 0 — shared fundamentals
  track-cyber.ts       # Track 1 — cybersecurity
  track-network.ts     # Track 2 — network engineering
  track-ai.ts          # Track 3 — AI / agentic engineering
  labs.ts              # TryHackMe rooms, platforms, machine lists
  certs.ts             # certification assessments
  global.ts            # readiness pillars, markets, interview loops
  projects.ts          # project briefs
  recommendations.ts   # the 12 recommendations
```

**First edits to make it yours:**

1. `src/data/site.ts` — your name, handle, and profile links. Empty strings are hidden from the UI,
   so add them as accounts exist rather than leaving placeholders.
2. `src/pages/about.astro` — replace the "Who" paragraph.
3. `src/data/projects.ts` — set `repo`, `live`, and `status` as projects ship.

**Adding a writeup:** create `src/pages/notes/my-slug.md`:

```markdown
---
layout: ../../layouts/Note.astro
title: Room writeup — Pickle Rick
description: One line on what this covers.
date: 2026-10-05
track: Cybersecurity
tags: [tryhackme, web]
lang: en
---

## Goal
...
```

It appears on `/notes` automatically, newest first. Set `draft: true` to hide one.

`src/pages/notes/writeup-template.md` is a reusable structure — copy it rather than starting blank.

## Credit

The cybersecurity lab plan is transcribed from the **Cyber Security Learning Tracker** spreadsheet —
an Indonesian bootcamp's 100-day TryHackMe programme, with a 50-room checkpoint before mentored
study. The OSCP-like and post-OSCP red team machine lists within it are **LainKusanagi's** public
lists. Both are reproduced with attribution, restructured for the web, and translated to English with
the original Indonesian descriptions preserved alongside.

Room links point at TryHackMe's `hacktivities` search rather than hardcoded room slugs — THM slugs
are not derivable from room titles (e.g. *Windows Fundamentals 1* lives at
`/room/windowsfundamentals1xbx`), and a search link that always resolves beats a direct link that
silently 404s.

## Accuracy

Market figures, certification costs, exam codes, and visa criteria reflect research current as of
**September 2026**. All of it moves. Verify against the official source before booking an exam or
making an immigration decision — nothing here is immigration or financial advice.

## Stack

Astro 5, hand-written CSS with light/dark tokens, ~150 lines of TypeScript for progress and
filtering. No UI framework, no CSS framework, no runtime dependencies. Static output, deployable
anywhere.
