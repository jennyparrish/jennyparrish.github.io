// Button navigation for Code Logs: follow data-href on click, support middle-click/new tab (opens via location for same-tab)
  document.querySelectorAll('.btn-list button').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const url = btn.dataset.href;
      if(!url) return;
      // open in same tab
      window.location.href = url;
    });
    // keyboard activation
    btn.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
    });
  });

  // Dropdown toggle behavior for Tiny Projects
  const toggle = document.getElementById('projectsToggle');
  const menu = document.getElementById('projectsMenu');

  function closeMenu(){
    menu.classList.remove('show');
    toggle.setAttribute('aria-expanded','false');
  }
  function openMenu(){
    menu.classList.add('show');
    toggle.setAttribute('aria-expanded','true');
  }

  toggle.addEventListener('click', ()=>{
    if(menu.classList.contains('show')) closeMenu(); else openMenu();
  });

  // close when clicking outside
  document.addEventListener('click', (e)=>{
    if(!toggle.contains(e.target) && !menu.contains(e.target)) closeMenu();
  });

  // keyboard: Esc closes, ArrowDown focuses first item
  toggle.addEventListener('keydown', (e)=>{
    if(e.key === 'ArrowDown'){ e.preventDefault(); openMenu(); const first = menu.querySelector('a'); if(first) first.focus(); }
    if(e.key === 'Escape') closeMenu();
  });
  menu.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') { closeMenu(); toggle.focus(); }
  });