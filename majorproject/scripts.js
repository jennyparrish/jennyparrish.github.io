
(function() {
  const btn = document.querySelector('.nav-toggle-btn');
  const list = document.getElementById('site-nav-list');
  if (!btn || !list) return;
  
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    btn.classList.toggle('open', !expanded);
    if (expanded) {
      list.setAttribute('hidden', '');
    } else {
      list.removeAttribute('hidden');
    }
  });
  
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      btn.setAttribute('aria-expanded', 'flase');
      btn.classList.remove('open');
      list.setAttribute('hidden', '');
      btn.focus();
    }
  });
  
})();