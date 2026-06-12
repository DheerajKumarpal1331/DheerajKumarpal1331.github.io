/* ============================================================
   CASE-STUDY PAGE — renders PORTFOLIO.caseStudies by ?id=…
   ============================================================ */

const $ = s => document.querySelector(s);

// ── Theme (mirrors script.js behavior) ────────────────────────
function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(saved || (prefersDark ? 'dark' : 'light'), false);

  $('#theme-toggle')?.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(next, true);
  });
}

function setTheme(theme, save) {
  document.documentElement.dataset.theme = theme;
  const moon = $('#theme-icon-moon');
  const sun  = $('#theme-icon-sun');
  if (moon && sun) {
    moon.style.display = theme === 'dark' ? 'none'  : 'block';
    sun.style.display  = theme === 'dark' ? 'block' : 'none';
  }
  if (save) localStorage.setItem('theme', theme);
}

// ── Custom cursor (mirrors script.js) ─────────────────────────
function initCustomCursor() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const dot  = document.createElement('div');
  const ring = document.createElement('div');
  dot.className  = 'c-dot';
  ring.className = 'c-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mx = -100, my = -100, rx = -100, ry = -100;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  function animateRing() {
    rx += (mx - rx) * 0.11;
    ry += (my - ry) * 0.11;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  function bindHover() {
    document.querySelectorAll('a, button, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', () => { dot.classList.add('c-hover'); ring.classList.add('c-hover'); });
      el.addEventListener('mouseleave', () => { dot.classList.remove('c-hover'); ring.classList.remove('c-hover'); });
    });
  }
  bindHover();
  // Rebind after dynamic content renders / re-renders
  initCustomCursor.rebind = bindHover;
}

// ── Render ────────────────────────────────────────────────────
function renderCase() {
  const root = $('#case-root');
  if (!root) return;

  // id from hash (case.html#clickhouse) with ?id= fallback
  const id = window.location.hash.slice(1) ||
             new URLSearchParams(window.location.search).get('id');
  const cs = PORTFOLIO.caseStudies.find(c => c.id === id);

  if (!cs) {
    root.innerHTML = `
      <div class="cs-notfound">
        <h1>Story not found.</h1>
        <p>This case study doesn't exist, but four others do.</p>
        <a href="index.html#projects" class="btn-primary">← Back to projects</a>
      </div>`;
    return;
  }

  document.title = `${cs.title} · Dheerajkumar Pal`;

  const nextCs = PORTFOLIO.caseStudies.find(c => c.id === cs.next);

  root.innerHTML = `
    <a href="index.html#projects" class="back-link">← Back to projects</a>

    <header class="cs-header">
      <h1 class="cs-title">${cs.title}</h1>
      <p class="cs-subtitle">${cs.subtitle}</p>
      <div class="cs-meta">
        <span>${cs.role}</span>
        <span>${cs.period}</span>
        ${cs.github ? `<a href="${cs.github}" target="_blank" rel="noopener" class="cs-gh">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          View code on GitHub
        </a>` : ''}
      </div>
      <div class="cs-stack">
        ${cs.stack.map(s => `<span class="stack-chip">${s}</span>`).join('')}
      </div>
    </header>

    <section class="cs-section">
      <h2>The Problem</h2>
      ${cs.problem.map(p => `<p>${p}</p>`).join('')}
    </section>

    <section class="cs-section">
      <h2>The Approach</h2>
      <ol class="cs-steps">
        ${cs.approach.map(step => `<li><span>${step}</span></li>`).join('')}
      </ol>
    </section>

    <section class="cs-section cs-arch">
      <h2>Architecture</h2>
      ${cs.architecture.svg ? `
      <div class="arch-diagram">${cs.architecture.svg}</div>
      ` : `
      <div class="arch-flow">
        ${cs.architecture.nodes.map((n, i) => `
          <div class="arch-node">${n}</div>
          ${i < cs.architecture.nodes.length - 1 ? '<div class="arch-arrow">→</div>' : ''}
        `).join('')}
      </div>
      `}
      <p class="arch-caption">${cs.architecture.caption}</p>
    </section>

    <section class="cs-section cs-arch">
      <h2>Results</h2>
      <div class="cs-results">
        ${cs.results.map(r => `
          <div class="result-card">
            <b>${r.value}</b>
            <span>${r.label}</span>
          </div>
        `).join('')}
      </div>
    </section>

    ${nextCs ? `
    <div class="cs-next">
      <a href="index.html#projects">
        <span class="next-label">All projects</span>
        <span class="next-title">← Back to overview</span>
      </a>
      <a href="case.html#${nextCs.id}">
        <span class="next-label">Next case study</span>
        <span class="next-title">${nextCs.title} →</span>
      </a>
    </div>` : ''}
  `;

  initCustomCursor.rebind?.();
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderCase();
  initCustomCursor();
  if (window.lucide) lucide.createIcons();
  const yr = $('#footer-year');
  if (yr) yr.textContent = new Date().getFullYear();
});

// Re-render when navigating between case studies (hash change)
window.addEventListener('hashchange', () => {
  renderCase();
  window.scrollTo({ top: 0, behavior: 'instant' });
});
