/* Scripts for Major Project (Neighbors Helping Neighbors - Jenny Parrish) */
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.nav-toggle-btn');
  const navList = document.getElementById('site-nav-list');
  if (!btn || !navList) return;

  const mq = window.matchMedia('(min-width: 800px)');
  let isOpen = false;

  function setOpen(open) {
    isOpen = Boolean(open);
    btn.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      navList.classList.add('open');
      navList.setAttribute('hidden', '');
    }
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    setOpen(!isOpen);
  });

  // close when a nav link is clicked
  navList.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') setOpen(false);
    e.stopPropagation();
  });

  // click outside to close (mobile only)
  document.addEventListener('click', (e) => {
    if (mq.matches) return; // only close on mobile
    if (!navList.contains(e.target) && !btn.contains(e.target)) setOpen(false);
  });

  // Escape to close 
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mq.matches) setOpen(false);
  });

  // ensure correct state on load/resize
  let resizeTimer;
  function syncForViewport() {
    if (mq.matches) {
      btn.setAttribute('aria-expanded', 'false');
      navList.classList.add('open');
      navList.removeAttribute('hidden');
      isOpen = false;
    } else {
      setOpen(false);
    }
  }
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(syncForViewport, 120);
  });
  syncForViewport()
});