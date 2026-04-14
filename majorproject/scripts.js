(function() {
  const btn = document.querySelector('.nav-toggle-btn');
  const list = document.getElementById('site-nav-list');
  if (btn && list) {
  
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    btn.classList.toggle('open', !expanded);
    list.classList.toggle('open', !expanded);
    
    if (expanded) list.setAttribute('aria-hidden', 'true');
    else list.removeAttribute('area-hidden');
  });
  }
  
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      btn.setAttribute('aria-expanded', 'flase');
      btn.classList.remove('open');
      list.setAttribute('hidden', '');
      btn.focus();
    }
  });
  
})();