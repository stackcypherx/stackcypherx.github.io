# Design direction

Owner's choice (2026-10-08): a PlayStation 5 home-screen feel, inspired by it rather than copied,
applied with restraint on the portfolio and in full on the learning plan. This replaces the earlier
editorial, light-first direction. Edit freely; antislop only filters against this file.

## Identity

A console home screen for one person's career: calm, dark, cinematic. Content floats over a
full-bleed photo that belongs to the page it sits on.

## Personality

Quiet confidence. The portfolio reads senior and steady; the learning plan is the one place that
feels interactive.

## Where the effect goes

- **Top bar (every page):** "Portfolio | Learning plan" tabs like a console's "Games | Media", my
  local time in Makassar (useful to recruiters in other timezones), search, and an initials badge
  instead of a photo. Each tab's pages sit in a second row underneath.
- **Home (2026-10-08, after nanaaquasi/playstation-5-uidesign):** a console home screen. A row of
  square icons (Experience, Work, Writing, Learning plan, then the featured builds); hovering or
  focusing one swaps the panel below and the background to that item. The default panel is the
  intro with the page h1, which is also what shows on touch screens and without JavaScript. Blur
  is light (5px) so the photo reads. Below the first screen, Home continues as the CV.
- **Other portfolio pages:** dark, blurred (16px) background photo, rounded panels. No icon row.
- **Learning plan** (`/plan`): a row of focus tiles that swap the background, as before.

## Backgrounds

One photo per slot in `src/assets/backgrounds/`, named after the slot. Blurred 16px (5px on Home)
and darkened by a scrim measured per photo and per blur at build time, so any photo keeps text
above WCAG AA. Section icons on Home show the same photos as thumbnails.

| Slot | Used on | Photo should show |
| --- | --- | --- |
| `field` | Home, Experience, About, network track, Readiness tile | Field work: fibre, towers, sites |
| `lab` | Learning plan, foundations track, Certifications tile | A network rack or lab |
| `security` | Labs, cybersecurity track | Security work: screens, code, a CTF desk |
| `work` | Work, AI track, Project briefs tile | Software you built |
| `writing` | Writing, Recommendations tile | A desk with notes |

Missing photos fall back to a dark slate-blue gradient, all in one hue family.

## Palette

- Canvas `#06080e`; panels are translucent near-black (`rgba(14,17,24,.72)`)
- Text `#f3f5f9`, secondary `#c3c9d4`, small/labels `#aeb5c1`
- One cool accent `#8cbcff` for focus, current state and section numbers
- Status only: green `#8fd19e`, amber `#f0c060`
- Dark only

## Typography

One system sans (SF Pro / Segoe UI / system-ui) in light weights: thin large headings, regular
body. No Sony typeface. Letter-spacing only on the small label above section heads.

## Shape and depth

Radii: 8px controls, 14px panels, 18px tiles, 22px home icons; the main action is a fully
rounded button. One frosted surface (the header). One shadow (the
search dialog). One glow style (the focused tile or home icon).

## Motion

Background crossfade (~450ms), tile lift on focus, page cross-fade. Nothing loops. All of it off
under reduced motion.

## Not allowed

PlayStation logos, controller button symbols, sounds, boot screens, looping video backgrounds,
"Play" wording, or Sony trademarks. Labels say what happens ("Open experience").

## Dials

Dial: ENERGY 2 / RHYTHM 2 / MOTION 2
