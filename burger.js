export function setupBurgerMenu() {
  const toggle = document.getElementById('menu-toggle');
  const body = document.body;

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      body.classList.add('menu-open');
    } else {
      body.classList.remove('menu-open');
    }
  });
}
