/**
 * Client-side progress tracking.
 *
 * Every checkbox on the site carries `data-key`. State lives in one localStorage
 * object so it survives navigation and can be exported as a JSON backup — which
 * matters, because localStorage is per-browser and clearing site data wipes it.
 *
 * Progress bars declare `data-bar-for="<group>"`; checkboxes declare
 * `data-group="<group>"` (space-separated for multiple groups) plus an optional
 * `data-weight`. Bars recompute on every change.
 */

const STORE = 'gtr.progress.v1';

type State = Record<string, true>;

function load(): State {
  try {
    const raw = localStorage.getItem(STORE);
    return raw ? (JSON.parse(raw) as State) : {};
  } catch {
    return {};
  }
}

function save(state: State): void {
  try {
    localStorage.setItem(STORE, JSON.stringify(state));
  } catch {
    /* quota or private mode — progress simply will not persist */
  }
}

let state = load();

function boxes(): HTMLInputElement[] {
  return Array.from(document.querySelectorAll<HTMLInputElement>('input[type="checkbox"][data-key]'));
}

function groupsOf(el: HTMLInputElement): string[] {
  return (el.dataset.group ?? '').split(/\s+/).filter(Boolean);
}

function weightOf(el: HTMLInputElement): number {
  const w = Number(el.dataset.weight);
  return Number.isFinite(w) && w > 0 ? w : 1;
}

function refreshBars(): void {
  const totals = new Map<string, { done: number; all: number; nDone: number; n: number }>();

  for (const el of boxes()) {
    const w = weightOf(el);
    for (const g of groupsOf(el)) {
      const t = totals.get(g) ?? { done: 0, all: 0, nDone: 0, n: 0 };
      t.all += w;
      t.n += 1;
      if (el.checked) {
        t.done += w;
        t.nDone += 1;
      }
      totals.set(g, t);
    }
  }

  document.querySelectorAll<HTMLElement>('[data-bar-for]').forEach((bar) => {
    const g = bar.dataset.barFor!;
    const t = totals.get(g);
    if (!t || t.all === 0) return;
    const pct = Math.round((t.done / t.all) * 100);
    const fill = bar.querySelector<HTMLElement>('span');
    if (fill) fill.style.width = `${pct}%`;
    bar.setAttribute('role', 'progressbar');
    bar.setAttribute('aria-valuenow', String(pct));
    bar.setAttribute('aria-valuemin', '0');
    bar.setAttribute('aria-valuemax', '100');
  });

  document.querySelectorAll<HTMLElement>('[data-figure-for]').forEach((el) => {
    const g = el.dataset.figureFor!;
    const t = totals.get(g);
    if (!t) return;
    const pct = t.all === 0 ? 0 : Math.round((t.done / t.all) * 100);
    const mode = el.dataset.figureMode ?? 'both';
    if (mode === 'pct') el.textContent = `${pct}%`;
    else if (mode === 'count') el.textContent = `${t.nDone}/${t.n}`;
    else el.textContent = `${t.nDone}/${t.n} · ${pct}%`;
  });
}

function hydrate(): void {
  for (const el of boxes()) {
    el.checked = state[el.dataset.key!] === true;
  }
  refreshBars();
}

document.addEventListener('change', (e) => {
  const el = e.target as HTMLElement | null;
  if (!(el instanceof HTMLInputElement) || el.type !== 'checkbox' || !el.dataset.key) return;
  if (el.checked) state[el.dataset.key] = true;
  else delete state[el.dataset.key];
  save(state);
  refreshBars();
});

// --- export / import / reset controls (present on the roadmap page) ---------

document.querySelector('[data-progress-export]')?.addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `progress-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
});

document.querySelector('[data-progress-import]')?.addEventListener('click', () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'application/json,.json';
  input.addEventListener('change', async () => {
    const file = input.files?.[0];
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text());
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        state = { ...state, ...(parsed as State) };
        save(state);
        hydrate();
        announce('Progress imported and merged.');
      } else {
        announce('That file did not contain a progress object.');
      }
    } catch {
      announce('Could not read that file as JSON.');
    }
  });
  input.click();
});

document.querySelector('[data-progress-reset]')?.addEventListener('click', () => {
  // Deliberately gated: this is the one destructive control on the site.
  const el = document.querySelector<HTMLElement>('[data-progress-reset]');
  if (el?.dataset.armed !== 'yes') {
    if (el) {
      el.dataset.armed = 'yes';
      const original = el.textContent;
      el.textContent = 'Click again to confirm reset';
      window.setTimeout(() => {
        if (el.dataset.armed === 'yes') {
          el.dataset.armed = 'no';
          el.textContent = original;
        }
      }, 4000);
    }
    return;
  }
  state = {};
  save(state);
  hydrate();
  if (el) {
    el.dataset.armed = 'no';
    el.textContent = 'Reset all progress';
  }
  announce('All progress cleared.');
});

function announce(msg: string): void {
  const out = document.querySelector<HTMLElement>('[data-progress-status]');
  if (!out) return;
  out.textContent = msg;
  window.setTimeout(() => {
    if (out.textContent === msg) out.textContent = '';
  }, 4000);
}

// --- generic client-side filtering (labs, certs, projects) ------------------

function wireFilters(): void {
  const scopes = document.querySelectorAll<HTMLElement>('[data-filter-scope]');
  scopes.forEach((scope) => {
    const search = scope.querySelector<HTMLInputElement>('[data-filter-search]');
    const chips = Array.from(scope.querySelectorAll<HTMLButtonElement>('[data-filter-value]'));
    const items = Array.from(scope.querySelectorAll<HTMLElement>('[data-filter-item]'));

    const apply = (): void => {
      const q = (search?.value ?? '').trim().toLowerCase();
      const active = chips.filter((c) => c.getAttribute('aria-pressed') === 'true').map((c) => c.dataset.filterValue!);

      for (const item of items) {
        const text = (item.dataset.filterText ?? item.textContent ?? '').toLowerCase();
        const tags = (item.dataset.filterTags ?? '').split('|').filter(Boolean);
        const matchesQuery = !q || text.includes(q);
        const matchesTags = active.length === 0 || active.some((a) => tags.includes(a));
        item.hidden = !(matchesQuery && matchesTags);
      }

      // Hide container sections that ended up empty.
      scope.querySelectorAll<HTMLElement>('[data-filter-container]').forEach((box) => {
        const visible = box.querySelectorAll<HTMLElement>('[data-filter-item]:not([hidden])').length;
        box.hidden = visible === 0;
      });

      const empty = scope.querySelector<HTMLElement>('[data-filter-empty]');
      if (empty) empty.hidden = items.some((i) => !i.hidden);
    };

    search?.addEventListener('input', apply);
    chips.forEach((chip) =>
      chip.addEventListener('click', () => {
        const on = chip.getAttribute('aria-pressed') === 'true';
        chip.setAttribute('aria-pressed', String(!on));
        apply();
      }),
    );
    apply();
  });
}

hydrate();
wireFilters();
