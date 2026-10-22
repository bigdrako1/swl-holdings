(() => {
  const brands = document.querySelector('.brands');
  const toggle = brands?.querySelector('.brand-toggle');
  if (!brands || !toggle) return;

  toggle.hidden = false;
  brands.classList.add('is-ready');
  toggle.addEventListener('click', () => {
    const paused = brands.classList.toggle('is-paused');
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.textContent = paused ? 'Resume logos' : 'Pause logos';
  });
})();
