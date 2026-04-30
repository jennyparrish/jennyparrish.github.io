/* Scripts for Major Project (Neighbors Helping Neighbors - Jenny Parrish) */

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav-list');
  if (!nav) return;

  // Ensure mobile starts collapsed; desktop will override via media query
  nav.classList.remove('is-open');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');

  if (toggle) {
    toggle.addEventListener('click', () => {
      const opened = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(opened));
    });
  }

  // Keep state synced on resize (desktop forces visible)
  const mql = window.matchMedia('(min-width:800px)');
  function sync(e) {
    if (e.matches) {
      // desktop: ensure visible, but keep toggle aria false (toggle hidden)
      nav.classList.add('is-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    } else {
      // mobile: collapse by default
      nav.classList.remove('is-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  }
  // initial sync and listen for changes
  sync(mql);
  mql.addEventListener('change', sync);
});

