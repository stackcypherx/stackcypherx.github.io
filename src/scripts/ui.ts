/**
 * Client runtime: progress store, scrollspy, command palette, filters, theme.
 *
 * Everything re-initialises on `astro:page-load` so it survives View Transitions.
 * Listeners that must not stack are registered once, guarded by `wired`.
 */

/* ══════════════════════════════════════════════════════ progress store */

const STORE = 'gtr.progress.v1';
type State = Record<string, true>;

let storageOk = true;

function load(): State {
  try {
    const raw = localStorage.getItem(STORE);
    return raw ? (JSON.parse(raw) as State) : {};
  } catch {
    storageOk = false;
    return {};
  }
}
function save(s: State) {
  try {
    localStorage.setItem(STORE, JSON.stringify(s));
    storageOk = true;
  } catch {
    storageOk = false;
  }
  showStorageWarning();
}

// Blocked storage (private mode, disabled site data) would otherwise lose every tick silently.
function showStorageWarning() {
  document.querySelectorAll<HTMLElement>('[data-storage-warning]').forEach((el) => {
    el.hidden = storageOk;
  });
}

let state = load();

const boxes = () =>
  Array.from(document.querySelectorAll<HTMLInputElement>('input[type="checkbox"][data-key]'));

function refreshBars() {
  const totals = new Map<string, { done: number; all: number; nDone: number; n: number }>();

  for (const el of boxes()) {
    const w = Number(el.dataset.weight) > 0 ? Number(el.dataset.weight) : 1;
    for (const g of (el.dataset.group ?? '').split(/\s+/).filter(Boolean)) {
      const t = totals.get(g) ?? { done: 0, all: 0, nDone: 0, n: 0 };
      t.all += w; t.n += 1;
      if (el.checked) { t.done += w; t.nDone += 1; }
      totals.set(g, t);
    }
  }

  document.querySelectorAll<HTMLElement>('[data-bar-for]').forEach((bar) => {
    const t = totals.get(bar.dataset.barFor!);
    if (!t || !t.all) return;
    const pct = Math.round((t.done / t.all) * 100);
    const fill = bar.querySelector<HTMLElement>('span');
    if (fill) fill.style.width = `${pct}%`;
    bar.setAttribute('role', 'progressbar');
    bar.setAttribute('aria-valuenow', String(pct));
    bar.setAttribute('aria-valuemin', '0');
    bar.setAttribute('aria-valuemax', '100');
  });

  document.querySelectorAll<HTMLElement>('[data-figure-for]').forEach((el) => {
    const t = totals.get(el.dataset.figureFor!);
    if (!t) return;
    const pct = t.all ? Math.round((t.done / t.all) * 100) : 0;
    const mode = el.dataset.figureMode ?? 'both';
    el.textContent = mode === 'pct' ? `${pct}%` : mode === 'count' ? `${t.nDone}/${t.n}` : `${t.nDone}/${t.n} · ${pct}%`;
  });
}

function hydrate() {
  for (const el of boxes()) el.checked = state[el.dataset.key!] === true;
  refreshBars();
  showStorageWarning();
}

/* ═════════════════════════════════════════════════════════ scrollspy */

function initRail() {
  const rail = document.querySelector<HTMLElement>('.rail');
  if (!rail) return;
  const links = Array.from(rail.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
  const sections = links
    .map((a) => document.getElementById(decodeURIComponent(a.hash.slice(1))))
    .filter(Boolean) as HTMLElement[];
  if (!sections.length) return;

  const o = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((l) => l.classList.toggle('active', l.hash.slice(1) === e.target.id));
      });
    },
    { rootMargin: '-15% 0px -70% 0px' },
  );
  sections.forEach((s) => o.observe(s));
}

/* ═══════════════════════════════════════════════════ command palette */

type Doc = { t: string; s: string; u: string; k?: string };

function initPalette() {
  const modal = document.querySelector<HTMLElement>('[data-cmdk]');
  const input = document.querySelector<HTMLInputElement>('[data-cmdk-input]');
  const list = document.querySelector<HTMLElement>('[data-cmdk-list]');
  if (!modal || !input || !list) return;

  let docs: Doc[] = [];
  let indexOk = true;
  try { docs = JSON.parse(document.getElementById('search-index')?.textContent || '[]'); } catch { indexOk = false; }

  let results: Doc[] = [];
  let cursor = 0;
  let returnFocus: HTMLElement | null = null;

  const score = (d: Doc, q: string) => {
    const hay = `${d.t} ${d.s} ${d.k ?? ''}`.toLowerCase();
    const t = d.t.toLowerCase();
    if (t.startsWith(q)) return 100;
    if (t.includes(q)) return 70;
    if (hay.includes(q)) return 40;
    // loose subsequence match
    let i = 0;
    for (const ch of hay) if (ch === q[i]) i++;
    return i === q.length ? 12 : 0;
  };

  const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]!));

  const render = (query = '') => {
    if (!indexOk) {
      list.innerHTML = `<div class="cmdk-empty">The search index failed to load. Reload the page, or use the menu.</div>`;
      return;
    }
    if (!results.length) {
      list.innerHTML = `<div class="cmdk-empty">Nothing matches “${esc(query)}”. Try a cert code, a room name, or a track.</div>`;
      return;
    }
    list.innerHTML = results
      .map(
        (r, i) =>
          `<a class="cmdk-item" role="option" aria-selected="${i === cursor}" href="${r.u}" data-i="${i}" tabindex="-1">
             <span class="t">${esc(r.t)}</span><span class="s">${esc(r.s)}</span>
           </a>`,
      )
      .join('');
    list.querySelector<HTMLElement>('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
  };

  let lastQuery = '';
  const search = (q: string) => {
    lastQuery = q.trim();
    const query = lastQuery.toLowerCase();
    results = !query
      ? docs.slice(0, 8)
      : docs
          .map((d) => ({ d, sc: score(d, query) }))
          .filter((x) => x.sc > 0)
          .sort((a, b) => b.sc - a.sc)
          .slice(0, 24)
          .map((x) => x.d);
    cursor = 0;
    render(lastQuery);
  };

  const open = () => {
    returnFocus = document.activeElement as HTMLElement | null;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    input.value = '';
    search('');
    input.focus();
  };
  const close = () => {
    if (!modal.classList.contains('show')) return;
    modal.classList.remove('show');
    document.body.style.overflow = '';
    returnFocus?.focus();
    returnFocus = null;
  };

  input.addEventListener('input', () => search(input.value));

  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  list.addEventListener('mousemove', (e) => {
    const item = (e.target as HTMLElement).closest<HTMLElement>('.cmdk-item');
    if (!item) return;
    const i = Number(item.dataset.i);
    if (i !== cursor) { cursor = i; render(lastQuery); }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); cursor = (cursor + 1) % Math.max(results.length, 1); render(lastQuery); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); cursor = (cursor - 1 + results.length) % Math.max(results.length, 1); render(lastQuery); }
    else if (e.key === 'Enter') {
      e.preventDefault();
      const r = results[cursor];
      if (r) { close(); window.location.href = r.u; }
    } else if (e.key === 'Escape') { close(); }
    // The input is the only tab stop inside the dialog; results are driven by the arrow keys.
    else if (e.key === 'Tab') { e.preventDefault(); }
  });

  document.querySelectorAll('[data-cmdk-open]').forEach((b) => b.addEventListener('click', open));

  (window as any).__cmdk = { open, close, isOpen: () => modal.classList.contains('show') };

  if (!(window as any).__cmdkKeys) {
    (window as any).__cmdkKeys = true;
    document.addEventListener('keydown', (e) => {
      const api = (window as any).__cmdk;
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (api.isOpen()) api.close(); else api.open();
      }
      if (e.key === 'Escape' && api.isOpen()) api.close();
    });
  }
}

/* ═════════════════════════════════════════════════════════ filtering */

function initFilters() {
  document.querySelectorAll<HTMLElement>('[data-filter-scope]').forEach((scope) => {
    const search = scope.querySelector<HTMLInputElement>('[data-filter-search]');
    const chips = Array.from(scope.querySelectorAll<HTMLButtonElement>('[data-filter-value]'));
    const items = Array.from(scope.querySelectorAll<HTMLElement>('[data-filter-item]'));

    const apply = () => {
      const q = (search?.value ?? '').trim().toLowerCase();
      const active = chips.filter((c) => c.getAttribute('aria-pressed') === 'true').map((c) => c.dataset.filterValue!);
      for (const item of items) {
        const text = (item.dataset.filterText ?? item.textContent ?? '').toLowerCase();
        const tags = (item.dataset.filterTags ?? '').split('|').filter(Boolean);
        item.hidden = !((!q || text.includes(q)) && (!active.length || active.some((a) => tags.includes(a))));
      }
      scope.querySelectorAll<HTMLElement>('[data-filter-container]').forEach((box) => {
        box.hidden = box.querySelectorAll('[data-filter-item]:not([hidden])').length === 0;
      });
      const empty = scope.querySelector<HTMLElement>('[data-filter-empty]');
      if (empty) empty.hidden = items.some((i) => !i.hidden);
    };

    search?.addEventListener('input', apply);
    chips.forEach((c) =>
      c.addEventListener('click', () => {
        c.setAttribute('aria-pressed', String(c.getAttribute('aria-pressed') !== 'true'));
        apply();
      }),
    );
    apply();
  });
}

/* ═══════════════════════════════════════════════════ chrome + one-time */

const THEME_COLOR = { light: '#fcfbf8', dark: '#121210' };

function initChrome() {
  const root = document.documentElement;
  // Light is the design's default. Dark applies only when explicitly chosen,
  // so the OS preference never overrides the intended presentation.
  const effective = () => (root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  const paint = () => {
    const mode = effective();
    const label = document.querySelector('[data-theme-label]');
    if (label) label.textContent = mode === 'dark' ? 'Light' : 'Dark';
    document.querySelector('[data-theme-toggle]')?.setAttribute('aria-pressed', String(mode === 'dark'));
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[mode]);
  };
  document.querySelector('[data-theme-toggle]')?.addEventListener('click', () => {
    const next = effective() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch { /* the choice lasts for this page only */ }
    paint();
  });
  paint();

  const nav = document.querySelector('[data-nav]');
  const burger = document.querySelector('[data-burger]');
  burger?.addEventListener('click', () => {
    const open = nav?.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(!!open));
  });
}

/* ═════════════════════════════════════════════ progress side-controls */

function initProgressControls() {
  document.querySelector('[data-progress-export]')?.addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
    say('Progress exported as a JSON file.');
  });

  document.querySelector('[data-progress-import]')?.addEventListener('click', () => {
    const inp = document.createElement('input');
    inp.type = 'file';
    inp.accept = 'application/json,.json';
    inp.addEventListener('change', async () => {
      const file = inp.files?.[0];
      if (!file) return;
      try {
        const parsed = JSON.parse(await file.text());
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
          state = { ...state, ...(parsed as State) };
          save(state); hydrate(); say('Progress imported and merged.');
        } else say('That file did not contain a progress object.');
      } catch { say('Could not read that file as JSON.'); }
    });
    inp.click();
  });

  const reset = document.querySelector<HTMLElement>('[data-progress-reset]');
  reset?.addEventListener('click', () => {
    if (reset.dataset.armed !== 'yes') {
      reset.dataset.armed = 'yes';
      const orig = reset.textContent;
      reset.textContent = 'Click again to confirm';
      window.setTimeout(() => {
        if (reset.dataset.armed === 'yes') { reset.dataset.armed = 'no'; reset.textContent = orig; }
      }, 4000);
      return;
    }
    state = {}; save(state); hydrate();
    reset.dataset.armed = 'no'; reset.textContent = 'Reset all progress';
    say('All progress cleared.');
  });
}

function say(msg: string) {
  const out = document.querySelector<HTMLElement>('[data-progress-status]');
  if (!out) return;
  out.textContent = msg;
  window.setTimeout(() => { if (out.textContent === msg) out.textContent = ''; }, 4000);
}

/* ════════════════════════════════════════════════════════════ bootstrap */

let wired = false;

function init() {
  // Both the readyState check and astro:page-load can fire for the same document.
  // View Transitions swap <body>, so a flag on it marks one init per page.
  if (document.body.dataset.uiInit) return;
  document.body.dataset.uiInit = '1';

  state = load();
  hydrate();
  initRail();
  initPalette();
  initFilters();
  initChrome();
  initProgressControls();

  if (!wired) {
    wired = true;
    // one delegated listener survives every page swap
    document.addEventListener('change', (e) => {
      const el = e.target as HTMLElement | null;
      if (!(el instanceof HTMLInputElement) || el.type !== 'checkbox' || !el.dataset.key) return;
      if (el.checked) state[el.dataset.key] = true;
      else delete state[el.dataset.key];
      save(state);
      refreshBars();
    });
  }
}

document.addEventListener('astro:page-load', init);
if (document.readyState !== 'loading') init();
else document.addEventListener('DOMContentLoaded', init, { once: true });

// Module scope: keeps this file out of the global script namespace.
export {};
