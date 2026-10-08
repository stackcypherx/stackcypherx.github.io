export type ItemKind = 'skill' | 'cert' | 'lab' | 'project' | 'signal' | 'habit';

export type Link = { label: string; url: string };

export type Item = {
  /** Short, stable title. Used to derive the progress-storage key, so renaming resets that item. */
  title: string;
  kind: ItemKind;
  /** What you actually do. */
  detail?: string;
  /** The public artifact this milestone must produce. No artifact, no credit. */
  evidence?: string;
  links?: Link[];
  /** Relative effort, used to weight progress bars. Default 1. */
  weight?: number;
};

export type Phase = {
  id: string;
  title: string;
  /** Rough calendar window for someone starting from zero at ~15h/week. */
  window: string;
  /** One sentence: why this phase exists. */
  goal: string;
  /** The single thing that proves the phase is done. */
  exit: string;
  items: Item[];
};

export type Track = {
  id: string;
  slug: string;
  title: string;
  short: string;
  tagline: string;
  icon: string;
  accent: string;
  /** 2–4 sentences of orientation. */
  summary: string;
  /** Job titles this track leads to. */
  roles: string[];
  /** Honest market note with a number in it where possible. */
  marketNote: string;
  phases: Phase[];
};

/** Stable slug used for localStorage progress keys. */
export function slug(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

export function itemKey(trackId: string, phaseId: string, title: string): string {
  return `${trackId}.${phaseId}.${slug(title)}`;
}

export function trackWeight(track: Track): number {
  return track.phases.reduce(
    (sum, p) => sum + p.items.reduce((s, i) => s + (i.weight ?? 1), 0),
    0,
  );
}

export function countItems(track: Track): number {
  return track.phases.reduce((sum, p) => sum + p.items.length, 0);
}
