import "../src/components/Swiper/Swiper.js";
import "./assets/styles/index.css";

import { createHeader } from "./components/Header/Header.js";
import { createFooter } from "./components/Footer/Footer.js";
import { createBurgerWrapper } from "./components/BurgerWrapper/BoorgerWrapper.js";

import { renderMainPage } from "./components/MainPage/MainPage.js";
import { renderBrandsPage } from "./components/BrandsPage/BrandsPage.js";
import { renderDevicesPage } from "./components/DevicesPage/DevicesPage.js";
import { renderPricePage } from "./components/PricePage/PricePage.js";

import { initSwiper } from "./components/shared/initSwiper.js";
import { updateButtonsVisibility } from "./components/shared/readMoreToggle.js";

const root = document.getElementById("root");

const layout = document.createElement("div");
layout.className = "layout";

const header = createHeader();
const burgerWrapper = createBurgerWrapper();
const content = document.createElement("div");
const main = document.createElement("main");
const footer = createFooter();

content.className = "content";
main.id = "main-content";
main.className = "main";

content.appendChild(main);
content.appendChild(footer);

layout.appendChild(header);
layout.appendChild(burgerWrapper);
layout.appendChild(content);
root.appendChild(layout);

const overlay = document.createElement("div");
overlay.className = "overlay";
root.appendChild(overlay);

function renderPage(page) {
  switch (page) {
    case "main":
      renderMainPage();
      break;
    case "brands":
      renderBrandsPage();
      break;
    case "devices":
      renderDevicesPage();
      break;
    case "price":
      renderPricePage();
      break;
    default:
      console.warn("Неизвестная страница:", page);
  }
}

function setupNavigation() {
  document.body.addEventListener("click", (e) => {
    const link = e.target.closest("[data-page]");
    if (!link) return;

    e.preventDefault();
    const page = link.dataset.page;

    renderPage(page);

    const menuToggle = document.getElementById("menu-toggle");
    if (window.innerWidth < 1120 && menuToggle) {
      menuToggle.checked = false;
      document.body.classList.remove("menu-open");
    }
  });
}

function loadSwipers() {
  initSwiper(".brands-slider");
  initSwiper(".devices-slider");
  initSwiper(".prices-slider");
  updateButtonsVisibility(".brands-slider");
  updateButtonsVisibility(".devices-slider");
  updateButtonsVisibility(".prices-slider");
}

window.addEventListener("resize", () => {
  loadSwipers();
});

const checkbox = document.getElementById("menu-toggle");
if (checkbox) {
  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("menu-open", checkbox.checked);
  });
}

document.addEventListener("click", (e) => {
  const menu = document.querySelector(".burger-menu");
  const toggle = document.querySelector("#menu-toggle");

  if (
    window.innerWidth < 1120 &&
    toggle?.checked &&
    !menu.contains(e.target) &&
    !e.target.closest("#menu-toggle") &&
    !e.target.closest(".burger-menu__close")
  ) {
    toggle.checked = false;
    document.body.classList.remove("menu-open");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  renderMainPage();
  setupNavigation();
});
