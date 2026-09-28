/**
 * Search index, assembled at build time from every data module and serialised
 * into the page as JSON. No runtime fetch, no search service — the whole corpus
 * is a few KB, so shipping it inline beats any network round trip.
 */
import { nav } from './site';
import { tracks } from './roadmap';
import { certs } from './certs';
import { projects } from './projects';
import { builds } from './vibe';
import { recommendations } from './recommendations';
import { pillars, markets } from './global';
import { roomGroups } from './labs';
import { profile } from './profile';
import { itemKey, slug } from './types';

export type Doc = { t: string; s: string; u: string; k?: string };

export function buildIndex(base = ''): Doc[] {
  const b = base.replace(/\/$/, '');
  const docs: Doc[] = [];

  for (const n of nav) docs.push({ t: n.label, s: 'Page', u: `${b}${n.href}` });
  docs.push({ t: 'Home', s: 'Page', u: `${b}/` });

  for (const job of profile.experience) {
    docs.push({
      t: job.role,
      s: 'Experience',
      u: `${b}/experience#experience`,
      k: `${job.company} ${job.scope} ${job.tags.join(' ')}`,
    });
  }
  for (const a of profile.achievements) docs.push({ t: a.title, s: 'Field record', u: `${b}/experience#record`, k: a.org });
  for (const c of profile.credentials) docs.push({ t: c.name, s: 'Credential', u: `${b}/experience#credentials`, k: `${c.issuer} ${c.domain}` });
  for (const g of profile.skills) for (const s of g.items) docs.push({ t: s, s: 'Skill', u: `${b}/experience#skills`, k: g.group });

  for (const build of builds) {
    docs.push({ t: build.title, s: 'Build', u: `${b}/agentic#${build.id}`, k: `${build.summary} ${build.stack.join(' ')}` });
  }

  for (const t of tracks) {
    docs.push({ t: t.title, s: 'Track', u: `${b}/roadmap/${t.slug}`, k: t.tagline });
    for (const p of t.phases) {
      docs.push({ t: p.title, s: `${t.short} · phase`, u: `${b}/roadmap/${t.slug}#${t.id}.${p.id}`, k: p.goal });
      for (const i of p.items) {
        docs.push({
          t: i.title,
          s: `${t.short} · ${i.kind}`,
          u: `${b}/roadmap/${t.slug}#${itemKey(t.id, p.id, i.title)}`,
          k: i.detail ?? '',
        });
      }
    }
  }

  for (const c of certs) docs.push({ t: c.name, s: `Cert · ${c.track}`, u: `${b}/certifications#${slug(c.track)}`, k: `${c.vendor} ${c.verdict}` });
  for (const p of projects) docs.push({ t: p.title, s: `Project · ${p.track}`, u: `${b}/projects#${p.id}`, k: `${p.pitch} ${p.stack.join(' ')}` });
  for (const r of recommendations) docs.push({ t: r.title, s: `Recommendation ${r.n}`, u: `${b}/recommendations#rec-${r.n}`, k: r.claim });
  for (const p of pillars) docs.push({ t: p.title, s: `Pillar ${p.n}`, u: `${b}/global-readiness#${p.id}`, k: p.why });
  for (const m of markets) docs.push({ t: m.region, s: 'Market', u: `${b}/global-readiness#${slug(m.region)}`, k: `${m.frameworks.join(' ')} ${m.visas.map((v) => v.name).join(' ')}` });

  for (const g of roomGroups) {
    docs.push({ t: g.topic, s: 'Lab topic', u: `${b}/labs#thm`, k: g.why });
    for (const r of g.rooms) docs.push({ t: r.n, s: `Room · ${g.topic}`, u: `${b}/labs#thm`, k: r.d });
  }

  // de-duplicate on title+url
  const seen = new Set<string>();
  return docs.filter((d) => {
    const key = `${d.t}|${d.u}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
