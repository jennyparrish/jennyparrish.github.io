(function() {
  const btn = document.querySelector('.nav-toggle-btn');
  const list = document.getElementById('site-nav-list');
  if (!btn || !list) return;

  // Ensure initital ARIA states
  btn.setAttribute('aria-expanded', 'false');
  list.setAttribute('hidden', '');
  
  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';  

    if (isOpen) {
      // close the menu
      btn.setAttribute('aria-expanded', 'false');
      btn.classList.remove('open');
      list.classList.remove('open');
    
      // wait for transition then set hidden to remove from accessibility tree
      const onTransitionEnd = () => {
        list.setAttribute('hidden', '');
        list.removeEventListener('transitioned', onTransitionEnd);
      } else {
        // open the menu
        list.removeAttribute('hidden');       // make visible for transition
        // force a reflow to ensure the transition runs when .open is added
        list.getBoundingClientRect();   // added by Ai, not sure what this does

        btn.setAttribute('aria-expanded', 'true');
        btn.classList.add('open');
        list.classList.add('open');
      }
    
    expanded = btn.getAttribute('aria-expanded') === 'true';
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