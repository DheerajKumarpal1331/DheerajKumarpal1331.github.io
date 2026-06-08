/* ============================================================
   PORTFOLIO SCRIPT — Interactions, rendering, dark mode
   ============================================================ */

const ROLE_META = {
  "Data Science":     { cls: "ds",    label: "Data Science"   },
  "Data Engineering": { cls: "de",    label: "Data Eng"       },
  "ML Engineering":   { cls: "mle",   label: "ML Engineering" },
  "AI Engineering":   { cls: "ai",    label: "AI Engineering" },
  "GenAI":            { cls: "genai", label: "GenAI"          },
};

// ── Helpers ───────────────────────────────────────────────────
const $  = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

// ── Dark mode ─────────────────────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  setTheme(theme, false);

  $('#theme-toggle').addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(next, true);
  });
}

function setTheme(theme, save) {
  document.documentElement.dataset.theme = theme;
  const moon = $('#theme-icon-moon');
  const sun  = $('#theme-icon-sun');
  if (theme === 'dark') {
    moon.style.display = 'none';
    sun.style.display  = 'block';
  } else {
    moon.style.display = 'block';
    sun.style.display  = 'none';
  }
  if (save) localStorage.setItem('theme', theme);
}

// ── Navbar scroll ─────────────────────────────────────────────
function initNav() {
  const navbar = $('#navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 48);
  }, { passive: true });

  // Smooth scroll
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = $(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile drawer
      $('#nav-drawer')?.classList.remove('open');
      $('#nav-burger')?.classList.remove('open');
    });
  });

  // Hamburger
  const burger = $('#nav-burger');
  const drawer = $('#nav-drawer');
  burger?.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  });
}

// ── Active nav on scroll ──────────────────────────────────────
function initActiveNav() {
  const sections = $$('main section[id]');
  const links    = $$('.nav-links a');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => io.observe(s));
}

// ── Typing animation ──────────────────────────────────────────
function initTyping() {
  const el = $('#typed-role');
  if (!el) return;
  const roles = PORTFOLIO.roles;
  let ri = 0, ci = 0, del = false, paused = false;

  function tick() {
    const cur = roles[ri];
    if (paused) { paused = false; setTimeout(tick, 1800); return; }
    if (!del) {
      el.textContent = cur.slice(0, ci + 1); ci++;
      if (ci === cur.length) { paused = true; del = true; setTimeout(tick, 60); return; }
      setTimeout(tick, 90);
    } else {
      el.textContent = cur.slice(0, ci - 1); ci--;
      if (ci === 0) { del = false; ri = (ri + 1) % roles.length; setTimeout(tick, 400); return; }
      setTimeout(tick, 48);
    }
  }
  tick();
}

// ── Scroll-reveal (IntersectionObserver) ─────────────────────
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -36px 0px' });
  $$('.reveal').forEach(el => io.observe(el));
}

// ── Skill bar animation ───────────────────────────────────────
function initSkillBars() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = (bar.dataset.pct || '0') + '%';
        });
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  $$('.skill-card').forEach(c => io.observe(c));
}

// ── Render: Hero stats ────────────────────────────────────────
function renderHeroStats() {
  const row = $('#hero-stats-row');
  if (!row) return;
  row.className = 'hero-stats-row';
  row.innerHTML = PORTFOLIO.personal.stats.map(s => `
    <div class="hero-stat">
      <span class="hero-stat-val">${s.value}</span>
      <span class="hero-stat-lbl">${s.label}</span>
    </div>
  `).join('');
}

// ── Render: About ─────────────────────────────────────────────
function renderAbout() {
  const bio = $('#about-bio');
  if (bio) bio.textContent = PORTFOLIO.personal.bio;

  const cards = $('#competency-cards');
  if (cards) {
    cards.innerHTML = PORTFOLIO.competencies.map((c, i) => `
      <div class="competency-card reveal delay-${i + 2}">
        <div class="comp-icon">
          <i data-lucide="${c.icon}" width="22" height="22"></i>
        </div>
        <div>
          <div class="comp-title">${c.title}</div>
          <div class="comp-desc">${c.desc}</div>
        </div>
      </div>
    `).join('');
  }
}

// ── Tagline cycle ─────────────────────────────────────────────
function initTaglineCycle() {
  const el = $('#hero-tagline-text');
  if (!el || !PORTFOLIO.taglines || PORTFOLIO.taglines.length < 2) return;
  let i = 0;
  setInterval(() => {
    i = (i + 1) % PORTFOLIO.taglines.length;
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
    setTimeout(() => {
      el.textContent = PORTFOLIO.taglines[i];
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 380);
  }, 3200);
}

// ── Render: Skills ────────────────────────────────────────────
function renderSkills() {
  const grid = $('#skills-grid');
  if (!grid) return;
  grid.innerHTML = PORTFOLIO.skillCategories.map((cat, i) => `
    <div class="skill-card reveal delay-${(i % 4) + 2}">
      <div class="skill-card-header">
        <div class="skill-card-icon">
          <i data-lucide="${cat.icon}" width="20" height="20"></i>
        </div>
        <span class="skill-card-name">${cat.name}</span>
      </div>
      <div class="skill-list">
        ${cat.skills.map(s => `
          <div class="skill-item">
            <div class="skill-meta">
              <span class="skill-name">${s.name}</span>
              <span class="skill-pct">${s.pct}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-fill" data-pct="${s.pct}"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// ── Render: Projects ──────────────────────────────────────────
function renderProjects() {
  const grid    = $('#projects-grid');
  const filters = $('#project-filters');
  if (!grid || !filters) return;

  const roles = ['All', ...Object.keys(ROLE_META)];
  filters.innerHTML = roles.map((r, i) => `
    <button class="pf-btn${i === 0 ? ' active' : ''}" data-role="${r}">${i === 0 ? r : ROLE_META[r]?.label ?? r}</button>
  `).join('');

  grid.innerHTML = PORTFOLIO.projects.map(p => {
    const meta = ROLE_META[p.role] ?? { cls: 'ds', label: p.role };
    return `
      <div class="project-card reveal" data-role="${p.role}">
        <div class="project-top">
          <h3 class="project-title">${p.title}</h3>
          <div class="project-links">
            ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="proj-link" title="GitHub"><i data-lucide="github" width="16" height="16"></i></a>` : ''}
            ${p.demo   ? `<a href="${p.demo}"   target="_blank" rel="noopener" class="proj-link" title="Live demo"><i data-lucide="external-link" width="16" height="16"></i></a>` : ''}
          </div>
        </div>
        <p class="project-desc">${p.desc}</p>
        <div class="project-footer">
          <div class="project-tags">${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}</div>
          <span class="role-pill ${meta.cls}">${meta.label}</span>
        </div>
      </div>
    `;
  }).join('');

  // Filter interactions
  filters.querySelectorAll('.pf-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filters.querySelectorAll('.pf-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const role = btn.dataset.role;
      grid.querySelectorAll('.project-card').forEach(card => {
        card.classList.toggle('hidden', role !== 'All' && card.dataset.role !== role);
      });
    });
  });
}

// ── Render: Experience ────────────────────────────────────────
function renderExperience() {
  const tl = $('#timeline');
  if (!tl) return;
  tl.innerHTML = PORTFOLIO.experience.map((exp, i) => `
    <div class="tl-item${exp.current ? ' current' : ''}${i === 0 ? ' open' : ''} reveal delay-${Math.min(i + 2, 5)}">
      <div class="tl-dot"></div>
      <div class="tl-card">
        <button class="tl-toggle" aria-expanded="${i === 0}" aria-controls="tl-body-${i}">
          <div class="tl-header">
            <div class="tl-header-left">
              <span class="tl-role">${exp.role}</span>
              <div class="tl-meta">
                <span class="tl-company">${exp.company}</span>
                ${exp.current ? '<span class="current-tag">● Current</span>' : ''}
              </div>
            </div>
            <div class="tl-header-right">
              <span class="tl-period">${exp.period}</span>
              <span class="tl-chevron">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </span>
            </div>
          </div>
        </button>
        <div class="tl-body" id="tl-body-${i}">
          <ul class="tl-bullets">
            ${exp.achievements.map(a => `<li class="tl-bullet"><span>${a}</span></li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `).join('');

  // Accordion click handler
  tl.querySelectorAll('.tl-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.tl-item');
      const isOpen = item.classList.contains('open');
      // Close all
      tl.querySelectorAll('.tl-item').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.tl-toggle').setAttribute('aria-expanded', 'false');
      });
      // Open clicked (toggle)
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function renderEducation() {
  const grid = $('#edu-grid');
  if (!grid) return;

  const { education = [], certifications = [] } = PORTFOLIO;

  const degreeHTML = education.map(e => `
    <div class="edu-card reveal">
      <div class="edu-card-icon">🎓</div>
      <div class="edu-card-body">
        <div class="edu-card-title">${e.degree}</div>
        <div class="edu-card-sub">${e.field}</div>
        <div class="edu-card-meta">
          <span>${e.institution}</span>
          <span class="edu-dot">·</span>
          <span>${e.period}</span>
        </div>
      </div>
    </div>
  `).join('');

  const certHTML = certifications.map(c => `
    <div class="cert-chip">
      <img class="cert-chip-logo" src="${c.logo}" alt="${c.issuer} logo" loading="lazy">
      <span class="cert-chip-name">${c.name}${c.code ? ` <span class="cert-code-badge">${c.code}</span>` : ''}</span>
    </div>
  `).join('');

  grid.innerHTML = `
    <div class="edu-section reveal">
      <h3 class="edu-section-label">Degrees</h3>
      <div class="edu-cards">${degreeHTML}</div>
    </div>
    <div class="edu-section reveal delay-2">
      <h3 class="edu-section-label">Certifications</h3>
      <div class="cert-chips">${certHTML}</div>
    </div>
  `;
}

// ── Render: Footer year ───────────────────────────────────────
function renderFooter() {
  const el = $('#footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

// ── Contact form ──────────────────────────────────────────────
function initContactForm() {
  const form    = $('#contact-form');
  const success = $('#form-success');
  const btnText = $('#form-btn-text');
  const btnIcon = $('#form-btn-icon');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('input[required], textarea[required], select[required]').forEach(field => {
      field.classList.remove('error');
      const empty = !field.value.trim();
      const badEmail = field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
      if (empty || badEmail) { field.classList.add('error'); valid = false; }
    });
    if (!valid) return;

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    if (btnText) btnText.textContent = 'Sending…';

    const data = {
      name:    document.getElementById('cf-name')?.value,
      email:   document.getElementById('cf-email')?.value,
      type:    document.getElementById('cf-type')?.value,
      company: document.getElementById('cf-company')?.value || 'Not provided',
      message: document.getElementById('cf-msg')?.value,
    };

    try {
      // Formspree endpoint — replace YOUR_FORM_ID after registering at formspree.io
      const res = await fetch('https://formspree.io/f/mlgkbojn', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body:    JSON.stringify(data),
      });
      if (res.ok) {
        form.reset();
        if (success) { success.textContent = '✓ Message sent! I\'ll get back to you soon.'; success.classList.add('show'); }
        setTimeout(() => success?.classList.remove('show'), 6000);
      } else {
        throw new Error('Server error');
      }
    } catch {
      if (success) { success.textContent = '✗ Something went wrong. Please email me directly.'; success.classList.add('show'); }
      setTimeout(() => success?.classList.remove('show'), 6000);
    } finally {
      btn.disabled = false;
      if (btnText) btnText.textContent = 'Send Message';
    }
  });

  // Clear error on input
  form.querySelectorAll('input, textarea, select').forEach(f => {
    f.addEventListener('input', () => f.classList.remove('error'));
    f.addEventListener('change', () => f.classList.remove('error'));
  });
}

// ── Hero Canvas Particles ─────────────────────────────────────
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, dots = [];

  const isDark = () => document.documentElement.dataset.theme === 'dark';

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function makeDot() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      o: Math.random() * 0.4 + 0.1,
    };
  }

  function init() {
    resize();
    dots = Array.from({ length: 90 }, makeDot);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const base = isDark() ? '37,99,235' : '20,71,230';
    dots.forEach(d => {
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${base},${d.o})`;
      ctx.fill();

      d.x += d.vx; d.y += d.vy;
      if (d.x < 0) d.x = W;
      if (d.x > W) d.x = 0;
      if (d.y < 0) d.y = H;
      if (d.y > H) d.y = 0;
    });

    // draw faint connection lines between nearby dots
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = `rgba(${base},${0.06 * (1 - dist/100)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener('resize', () => { resize(); });

  // re-draw when theme toggles
  document.getElementById('theme-toggle')?.addEventListener('click', () => setTimeout(draw, 50));
}

// ── Custom cursor ──────────────────────────────────────────────
function initCustomCursor() {
  // Only on pointer devices
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const dot  = document.createElement('div');
  const ring = document.createElement('div');
  dot.className  = 'c-dot';
  ring.className = 'c-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mx = -100, my = -100, rx = -100, ry = -100;
  let rafId;

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
    rafId = requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover states on interactive elements
  const interactives = () => document.querySelectorAll('a, button, [role="button"], .pf-btn, .project-card');
  function bindHover() {
    interactives().forEach(el => {
      el.addEventListener('mouseenter', () => { dot.classList.add('c-hover'); ring.classList.add('c-hover'); });
      el.addEventListener('mouseleave', () => { dot.classList.remove('c-hover'); ring.classList.remove('c-hover'); });
    });
  }
  bindHover();

  // Rebind after dynamic content renders
  setTimeout(bindHover, 800);
}

// ── Bootstrap ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Render dynamic content
  renderHeroStats();
  renderAbout();
  renderSkills();
  renderProjects();
  renderExperience();
  renderEducation();
  renderFooter();

  // Lucide icons
  if (window.lucide) lucide.createIcons();

  // Init all interactions
  initTheme();
  initHeroCanvas();
  initNav();
  initActiveNav();
  initTyping();
  initTaglineCycle();
  initContactForm();
  initCustomCursor();

  // Observers (slight delay to let paint settle)
  requestAnimationFrame(() => requestAnimationFrame(() => {
    initReveal();
    initSkillBars();
  }));
});
