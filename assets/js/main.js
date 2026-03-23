/* ============================================================
   SIMONE IMPROVISE — main.js
   Gestion du menu mobile (overlay)
============================================================ */

(function () {
  const overlay = document.getElementById('navOverlay');
  if (!overlay) return;

  // Ouvre / ferme l'overlay
  function toggleNav() {
    overlay.classList.toggle('open');
    document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : '';
  }

  // Bouton burger
  const burgerBtn = document.querySelector('.burger');
  if (burgerBtn) burgerBtn.addEventListener('click', toggleNav);

  // Bouton fermer dans l'overlay
  const closeBtn = overlay.querySelector('.close-nav');
  if (closeBtn) closeBtn.addEventListener('click', toggleNav);

  // Fermer en cliquant sur un lien du menu
  overlay.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', toggleNav);
  });

  // Fermer en cliquant en dehors (sur le fond)
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) toggleNav();
  });

  // Fermer avec Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) toggleNav();
  });
})();
