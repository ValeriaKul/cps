import { renderMainPage } from './main.js';
import { renderBrandsPage } from './brands.js';
import { renderDevicesPage } from './devices.js';
import { renderPricePage } from './price.js';
import { setupBurgerMenu } from './burger.js';
import {initSwiper} from './initSwiper.js'

renderMainPage();
setupBurgerMenu();
loadSwiper();

function loadSwiper () {
initSwiper(".brands-slider");
initSwiper(".devices-slider");
initSwiper(".prices-slider");
}

window.addEventListener("resize", () => {
  loadSwiper();
});

document.body.addEventListener('click', (e) => {
  const item = e.target.closest('[data-page]');
  if (!item) return;

  const page = item.dataset.page;

  switch (page) {
    case 'main':
      renderMainPage();
      break;
    case 'brands':
      renderBrandsPage();
      break;
    case 'devices':
      renderDevicesPage();
      break;
    case 'price':
      renderPricePage();
      break;
    default:
      console.warn('Неизвестная страница: ', page);
  }

  const menuToggle = document.querySelector('#menu-toggle');
  if (window.innerWidth < 1120 && menuToggle) {
    menuToggle.checked = false;
    document.body.classList.remove('menu-open');
  }
});

const menuToggle = document.querySelector("#menu-toggle");
if (menuToggle) {
  menuToggle.addEventListener("change", () => {
    document.body.classList.toggle("menu-open", menuToggle.checked);
  });
}


window.addEventListener("load", initSwiper());
window.addEventListener("resize", initSwiper());


