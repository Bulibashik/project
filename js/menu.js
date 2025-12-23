document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  const overlay = document.querySelector('.menu-overlay');

  if (!btn || !menu || !overlay) return;

  function openMenu() {
    menu.classList.add('open');
    overlay.classList.add('active');
  }

  function closeMenu() {
    menu.classList.remove('open');
    overlay.classList.remove('active');
  }

  btn.addEventListener('click', e => {
    e.stopPropagation();
    menu.classList.contains('open') ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  document.addEventListener('click', e => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      closeMenu();
    }
  });
});

document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('open');
  });
});

