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
    });
    
    // close on escape when open
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
        btn.click(); // trigger the click handler to close the menu
        btn.focus(); // return focus to the toggle button
      }
    });

    // keep desktop behavior if window is resized: make sure hidden attribute doesnt hide menu on desktop
    const mq = window.matchMedia('(min-width: 800px)');
    const syncDesktop = () => {
      if (mq.matches) {
        list.removeAttribute('hidden');
        list.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.classList.remove('open');
      } else {
        // mobile: keep it hidden by default if not explicity opened
        if btn.getAttribute('aria-expanded') !== 'true') list.setAttribute('hidden', '');

        }
    };
     mq.addEventListener ? mq.addEventListener('change', syncDesktop) : mq.addListener(syncDesktop);

     syncDesktop();
     
  })();
  