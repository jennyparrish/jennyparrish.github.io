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

(function(){
  const track = document.getElementById('track');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const dots = document.getElementById('dots');
  const cards = track.children;
  let index = 0;

  function visibleCount(){
    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).gap || 0);
    const viewport = track.parentElement.getBoundingClientRect().width;
    return Math.max(1, Math.floor((viewport + gap) / (cardWidth + gap)));
  }

  function update(){
    const vc = visibleCount();
    const maxIndex = Math.max(0, cards.length - vc);
    index = Math.min(Math.max(0, index), maxIndex);
    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).gap || 0);
    track.style.transform = 'translateX(' + (-(cardWidth + gap) * index) + 'px)';
    prev.disabled = index === 0;
    next.disabled = index === maxIndex;
    renderDots(maxIndex + 1, index);
  }

  function renderDots(count, active){
    dots.innerHTML = '';
    if(count <= 1) return;
    for(let i=0;i<count;i++){
      const d = document.createElement('div');
      d.className = 'dot' + (i===active ? ' active' : '');
      d.addEventListener('click', ()=>{ index = i; update(); });
      dots.appendChild(d);
    }
  }

  prev.addEventListener('click', ()=>{ index = index - 1; update(); });
  next.addEventListener('click', ()=>{ index = index + 1; update(); });
  window.addEventListener('resize', ()=>{ setTimeout(update,100); });

  // Wait for images to load for correct sizing
  const imgPromises = Array.from(track.querySelectorAll('img')).map(img=>{
    return img.complete ? Promise.resolve() : new Promise(r=>{ img.onload = img.onerror = r; });
  });
  Promise.all(imgPromises).then(update);
})();