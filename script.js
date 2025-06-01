import { renderMainPage } from "./main.js";
import { renderBrandsPage } from "./brands.js";
import { renderDevicesPage } from "./devices.js";
import { renderPricePage } from "./price.js";
import { setupBurgerMenu } from "./burger.js";
import { initSwiper } from "./initSwiper.js";

renderMainPage();
setupBurgerMenu();

function loadSwiper() {
  initSwiper(".brands-slider");
  initSwiper(".devices-slider");
  initSwiper(".prices-slider");
}

function renderPage(page) {
  switch (page) {
    case "main":
      renderMainPage();
      
      break;
    case "brands":
      renderBrandsPage();
      setTimeout(() => {
        initSwiper(".brands-slider");
      }, 0);

      break;
    case "devices":
      renderDevicesPage();
         renderBrandsPage();
      setTimeout(() => {
        initSwiper(".devices-slider");
      }, 0);
      break;
    case "price":
      renderPricePage();
         renderBrandsPage();
      setTimeout(() => {
        initSwiper(".price-slider");
      }, 0);
      break;
    default:
      console.warn("Неизвестная страница: ", page);
  }
}

window.addEventListener("resize", () => {
  loadSwiper();
});

document.body.addEventListener("click", (e) => {
  const item = e.target.closest("[data-page]");
  if (!item) return;

  e.preventDefault();
  const page = item.dataset.page;

  renderPage(page);

  const menuToggle = document.querySelector("#menu-toggle");
  if (window.innerWidth < 1120 && menuToggle) {
    menuToggle.checked = false;
    document.body.classList.remove("menu-open");
  }
});

const menuToggle = document.querySelector("#menu-toggle");
if (menuToggle) {
  menuToggle.addEventListener("change", () => {
    document.body.classList.toggle("menu-open", menuToggle.checked);
  });
}
