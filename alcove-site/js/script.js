// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  const backdrop = document.querySelector('.nav-backdrop');

  const setNavOpen = (open) => {
    nav.classList.toggle('open', open);
    if (backdrop) backdrop.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '✕' : '☰';
    document.body.style.overflow = open ? 'hidden' : '';
  };

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      setNavOpen(!nav.classList.contains('open'));
    });
    if (backdrop) {
      backdrop.addEventListener('click', () => setNavOpen(false));
    }
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setNavOpen(false));
    });
  }

  // Menu page tabs
  const tabButtons = document.querySelectorAll('.menu-tabs button');
  const panels = document.querySelectorAll('.menu-panel');
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabButtons.forEach((b) => b.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.target);
      if (target) target.classList.add('active');
    });
  });
});
