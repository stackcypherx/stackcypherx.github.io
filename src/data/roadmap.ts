import type { Track } from './types';
import { foundation } from './track-foundation';
import { cyber } from './track-cyber';
import { network } from './track-network';
import { ai } from './track-ai';

export const tracks: Track[] = [foundation, cyber, network, ai];

export const specialistTracks: Track[] = [cyber, network, ai];

export function trackBySlug(slug: string): Track | undefined {
  return tracks.find((t) => t.slug === slug);
}

/** Quarter-by-quarter view for someone starting from zero at ~15 hours/week. */
export const timeline = [
  {
    q: 'Q1',
    months: 'Month 1–3',
    theme: 'Substrate',
    focus:
      'Foundations phase 0 in full, plus the first 30 rooms of the Cyber Security 101 track. Set up this site, the HoneyLog habit, and the weekly writeup on day one — not later.',
    output: 'Home lab running · 12 writeups · site live · GitHub profile presentable',
  },
  {
    q: 'Q2',
    months: 'Month 4–6',
    theme: 'First credentials',
    focus:
      'Finish the 84-room track. ISC2 CC then Security+. In parallel, start the primary specialist track you chose — CCNA study or the Python/LLM fundamentals block.',
    output: 'Security+ · 50+ rooms · 24 writeups · first professional-format report',
  },
  {
    q: 'Q3',
    months: 'Month 7–9',
    theme: 'Commit to a spike',
    focus:
      'Declare your primary track publicly. Blue or red if security. CCNA done and NetDevOps begun if networks. First deployed RAG app if AI. The other two tracks drop to maintenance — one session a week.',
    output: 'Primary track declared · one flagship project underway · first CTF or bug bounty attempt',
  },
  {
    q: 'Q4',
    months: 'Month 10–12',
    theme: 'Flagship',
    focus:
      'Ship the flagship project for your primary track: detection-as-code repo, network CI/CD pipeline, or production RAG with evals. Start the second-tier certification. First public talk.',
    output: 'One flagship project live · second cert · 48 writeups · first talk delivered',
  },
  {
    q: 'Q5',
    months: 'Month 13–15',
    theme: 'Hard credential',
    focus:
      'The expensive, practical one: OSCP/PNPT, CCNP, or the evals-and-LLMOps body of work. Begin applying to remote roles now — not when you feel ready. Interview feedback is a faster diagnostic than more study.',
    output: 'Hard credential in progress · 20+ applications sent · interview loop data',
  },
  {
    q: 'Q6',
    months: 'Month 16–18',
    theme: 'Convert',
    focus:
      'Land the credential. Fix whatever the interviews exposed. Build the cross-track project (AI × security, or AI × networks) that makes you hard to compare against other candidates.',
    output: 'Hard credential earned · cross-track project published · offers or clear rejection reasons',
  },
  {
    q: 'Q7',
    months: 'Month 19–21',
    theme: 'Market position',
    focus:
      'Specialise: cloud security, EVPN fabrics, agent evals. Get the third recommendation letter. Tighten the visa route paperwork for your two most likely destinations.',
    output: 'Specialisation evidence · 3 recommendation letters · visa route chosen',
  },
  {
    q: 'Q8',
    months: 'Month 22–24',
    theme: 'Leverage',
    focus:
      'Conference CFP, open-source contribution, mentoring someone publicly. Negotiate rather than accept. If you are already employed, this is when you move for a step change rather than a raise.',
    output: 'Talk accepted · OSS contribution merged · role secured or a funded relocation path',
  },
] as const;

export const cadence = [
  { rhythm: 'Daily', commitment: '60–90 min', item: 'One lab, room, or box. 15 min Anki. One HoneyLog entry.' },
  { rhythm: 'Weekly', commitment: '2–3 h', item: 'One published writeup. One review of what you skipped and why.' },
  { rhythm: 'Every 6 weeks', commitment: '—', item: 'One shipped project with a README, a demo, and a live link if applicable.' },
  { rhythm: 'Quarterly', commitment: '—', item: 'At most one certification. Re-read your target job descriptions and re-plan against them.' },
  { rhythm: 'Every 6 months', commitment: '—', item: 'One talk or article on a platform you do not own. One honest audit of whether the plan still fits.' },
] as const;
