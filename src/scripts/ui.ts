/**
 * Client runtime: progress store, reveals, counters, spotlight, scrollspy,
 * command palette, filters, and the hero network canvas.
 *
 * Everything re-initialises on `astro:page-load` so it survives View Transitions.
 * Listeners that must not stack are registered once, guarded by `wired`.
 */

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ══════════════════════════════════════════════════════ progress store */

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
function save(s: State) {
  try { localStorage.setItem(STORE, JSON.stringify(s)); } catch { /* private mode */ }
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
}

/* ══════════════════════════════════════════════════════════ reveals */

let revealObs: IntersectionObserver | null = null;

function initReveals() {
  revealObs?.disconnect();
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (reduced()) { targets.forEach((t) => t.classList.add('in')); return; }

  const revealAll = () => targets.forEach((t) => t.classList.add('in'));

  // A hidden tab suspends IntersectionObserver and rAF entirely. Without these
  // two guards, restoring a backgrounded tab shows a blank page.
  if (document.hidden) {
    document.addEventListener('visibilitychange', function onVis() {
      if (document.hidden) return;
      document.removeEventListener('visibilitychange', onVis);
      initReveals();
    });
  }
  // Last-resort: whatever has not been revealed after 2s gets revealed anyway.
  window.setTimeout(revealAll, 2000);

  revealObs = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        const delay = Number(el.dataset.reveal) || 0;
        window.setTimeout(() => el.classList.add('in'), delay);
        revealObs!.unobserve(el);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.06 },
  );
  targets.forEach((t) => revealObs!.observe(t));

  // timeline dots light up as they enter
  const dots = document.querySelectorAll<HTMLElement>('.tl > li');
  if (dots.length) {
    const o = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { rootMargin: '0px 0px -30% 0px' },
    );
    dots.forEach((d) => o.observe(d));
  }
}

/* ═════════════════════════════════════════════════════════ counters */

function initCounters() {
  const els = document.querySelectorAll<HTMLElement>('[data-count]');
  if (!els.length) return;

  const run = (el: HTMLElement) => {
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target)) return;
    const suffix = el.dataset.countSuffix ?? '';
    if (reduced()) { el.textContent = target.toLocaleString() + suffix; return; }

    const dur = 1100;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString() + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const o = new IntersectionObserver(
    (es) => es.forEach((e) => {
      if (!e.isIntersecting) return;
      run(e.target as HTMLElement);
      o.unobserve(e.target);
    }),
    { threshold: 0.4 },
  );
  els.forEach((e) => o.observe(e));

  // If the tab never becomes visible, still show the final numbers.
  window.setTimeout(() => {
    els.forEach((el) => {
      if (el.textContent === '0') {
        const n = Number(el.dataset.count);
        if (Number.isFinite(n)) el.textContent = n.toLocaleString() + (el.dataset.countSuffix ?? '');
      }
    });
  }, 2500);
}

/* ═════════════════════════════════════════════════════════ spotlight */

function initSpotlight() {
  document.querySelectorAll<HTMLElement>('.spot').forEach((el) => {
    if (el.dataset.spotWired) return;
    el.dataset.spotWired = '1';
    el.addEventListener('pointermove', (ev) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${ev.clientX - r.left}px`);
      el.style.setProperty('--my', `${ev.clientY - r.top}px`);
    });
  });
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
  try { docs = JSON.parse(document.getElementById('search-index')?.textContent || '[]'); } catch { /* */ }

  let results: Doc[] = [];
  let cursor = 0;

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

  const render = () => {
    if (!results.length) {
      list.innerHTML = `<div class="cmdk-empty">No matches</div>`;
      return;
    }
    list.innerHTML = results
      .map(
        (r, i) =>
          `<a class="cmdk-item" role="option" aria-selected="${i === cursor}" href="${r.u}" data-i="${i}">
             <span class="t">${esc(r.t)}</span><span class="s">${esc(r.s)}</span>
           </a>`,
      )
      .join('');
    list.querySelector<HTMLElement>('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
  };

  const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]!));

  const search = (q: string) => {
    const query = q.trim().toLowerCase();
    results = !query
      ? docs.slice(0, 8)
      : docs
          .map((d) => ({ d, sc: score(d, query) }))
          .filter((x) => x.sc > 0)
          .sort((a, b) => b.sc - a.sc)
          .slice(0, 24)
          .map((x) => x.d);
    cursor = 0;
    render();
  };

  const open = () => {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    input.value = '';
    search('');
    input.focus();
  };
  const close = () => {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  };

  input.addEventListener('input', () => search(input.value));

  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  list.addEventListener('mousemove', (e) => {
    const item = (e.target as HTMLElement).closest<HTMLElement>('.cmdk-item');
    if (!item) return;
    const i = Number(item.dataset.i);
    if (i !== cursor) { cursor = i; render(); }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); cursor = (cursor + 1) % Math.max(results.length, 1); render(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); cursor = (cursor - 1 + results.length) % Math.max(results.length, 1); render(); }
    else if (e.key === 'Enter') {
      e.preventDefault();
      const r = results[cursor];
      if (r) { close(); window.location.href = r.u; }
    } else if (e.key === 'Escape') { close(); }
  });

  document.querySelectorAll('[data-cmdk-open]').forEach((b) => b.addEventListener('click', open));

  if (!(window as any).__cmdkKeys) {
    (window as any).__cmdkKeys = true;
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const m = document.querySelector<HTMLElement>('[data-cmdk]');
        if (m?.classList.contains('show')) {
          m.classList.remove('show'); document.body.style.overflow = '';
        } else {
          document.querySelector<HTMLElement>('[data-cmdk-open]')?.click();
        }
      }
      if (e.key === 'Escape') {
        const m = document.querySelector<HTMLElement>('[data-cmdk]');
        if (m?.classList.contains('show')) { m.classList.remove('show'); document.body.style.overflow = ''; }
      }
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

function initChrome() {
  const root = document.documentElement;
  // Light is the design's default. Dark applies only when explicitly chosen,
  // so the OS preference never overrides the intended presentation.
  const effective = () => (root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  const paint = () => {
    const i = document.querySelector('[data-theme-icon]');
    if (i) i.textContent = effective() === 'dark' ? '☀' : '☾';
  };
  document.querySelector('[data-theme-toggle]')?.addEventListener('click', () => {
    const next = effective() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch { /* */ }
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
  state = load();
  hydrate();
  initReveals();
  initCounters();
  initSpotlight();
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

// Module scope — keeps this file out of the global script namespace.
export {};
