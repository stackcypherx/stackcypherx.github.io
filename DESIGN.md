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

- **Portfolio** (Home, Experience, Work, Writing, About): dark, blurred background photo, frosted
  header, rounded panels. No tile row, no background changes while browsing.
- **Learning plan** (`/plan`): the same, plus a horizontal row of focus tiles. The focused tile
  lifts, gets a white outline and soft glow, and swaps the page background to its own photo.

## Backgrounds

One photo per slot in `src/assets/backgrounds/`, named after the slot. Blurred 16px (soft, but the subject
stays recognisable) and darkened by a scrim measured per photo at build time, so any photo keeps
text above WCAG AA.

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

Radii: 8px controls, 14px panels, 18px tiles. One frosted surface (the header). One shadow (the
search dialog). One glow (the focused tile).

## Motion

Background crossfade (~450ms), tile lift on focus, page cross-fade. Nothing loops. All of it off
under reduced motion.

## Not allowed

PlayStation logos, controller button symbols, sounds, or Sony trademarks.

## Dials

Dial: ENERGY 2 / RHYTHM 2 / MOTION 2
