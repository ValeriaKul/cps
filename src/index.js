import 'swiper/css';
import 'swiper/css/pagination';
import "./assets/styles/index.scss";

import { createHeader } from "./components/Header/Header.js";
import { createFooter } from "./components/Footer/Footer.js";
import { createBurgerWrapper } from "./components/BurgerWrapper/BoorgerWrapper.js";

import { renderMainPage } from "./components/MainPage/MainPage.js";
import { renderBrandsPage } from "./components/BrandsPage/BrandsPage.js";
import { renderDevicesPage } from "./components/DevicesPage/DevicesPage.js";
import { renderPricePage } from "./components/PricePage/PricePage.js";

import { initSwiper } from "./components/shared/initSwiper.js";
import {
  setupButtonToggles,
  updateButtonsVisibility,
} from "./components/shared/readMoreToggle.js";

import { createModalWindow, initModalLogic } from "./components/Modal/Modal.js";

import faviconIcon from "./assets/images/icons/logo-cps.svg";

const link = document.createElement("link");
link.rel = "icon";
link.href = faviconIcon;
document.head.appendChild(link);

let isMobile = window.innerWidth < 768;

const swiperConfigs = {
  '.brands-slider': { before: 16, after: 16 },
  '.devices-slider': { before: 16, after: 16 },
  '.prices-slider': { before: 8,  after: 8  },
};

function updateBurgerActive(page) {
  const items = document.querySelectorAll(".burger-menu__item");
  items.forEach((item) => {
    const link = item.querySelector("[data-page]");
    if (link && link.dataset.page === page) {
      item.classList.add("burger-menu__item--active");
    } else {
      item.classList.remove("burger-menu__item--active");
    }
  });
}

function showOverlay(reason) {
  const overlay = document.querySelector(".overlay");
  overlay.classList.add("overlay--visible");
  if (reason === "menu") document.body.classList.add("menu-open");
  if (reason === "feedback") document.body.classList.add("feedback-open");
}

function hideOverlay(reason) {
  const overlay = document.querySelector(".overlay");
  if (reason === "menu") document.body.classList.remove("menu-open");
  if (reason === "feedback") document.body.classList.remove("feedback-open");
  if (
    !document.body.classList.contains("menu-open") &&
    !document.body.classList.contains("feedback-open")
  ) {
    overlay.classList.remove("overlay--visible");
  }
}

function openBurger() {
  showOverlay("menu");
}

function closeBurger() {
  hideOverlay("menu");
}

const root = document.getElementById("root");
const layout = document.createElement("div");
layout.className = "layout";
document.body.insertAdjacentHTML("beforeend", '<div class="overlay"></div>');
const overlay = document.querySelector(".overlay");

const header = createHeader();
const burgerWrapper = createBurgerWrapper();
const content = document.createElement("div");
content.className = "content";
const main = document.createElement("main");
main.id = "main-content";
main.className = "main";
const footer = createFooter();

content.appendChild(main);
content.appendChild(footer);
layout.appendChild(header);
layout.appendChild(burgerWrapper);
layout.appendChild(content);
root.appendChild(layout);


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
    closeBurger();
    updateBurgerActive(page);
    renderPage(page);
  });
}

function setupBurgerMenu() {
  document.body.addEventListener("click", (e) => {
   const openBtn  = e.target.closest("[data-action='open-menu']");
  const closeBtn = e.target.closest("[data-action='close-menu']");
   if (openBtn) {
     openBurger();
   } else if (closeBtn) {
     closeBurger();
   }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1120) {
      hideOverlay("menu");
    }
  });
}

const feedbackModal = createModalWindow({
  id: "modalFeedback",
  title: "Обратная связь",
  fields: [
    { type: "text", name: "name", placeholder: "Имя" },
    { type: "tel", name: "phone", placeholder: "Телефон" },
    { type: "email", name: "email", placeholder: "Электронная почта" },
    { type: "textarea", name: "message", placeholder: "Сообщение" },
  ],
});
document.body.appendChild(feedbackModal);
initModalLogic(
  "modalFeedback",
  '[data-action="open-feedback"]',
  "feedback",
  showOverlay,
  hideOverlay
);

const callModal = createModalWindow({
  id: "modalCall",
  title: "Заказать звонок",
  fields: [
    { type: "tel", name: "phone", placeholder: "Введите номер телефона" },
  ],
});
document.body.appendChild(callModal);
initModalLogic(
  "modalCall",
  '[data-action="open-call"]',
  "feedback",
  showOverlay,
  hideOverlay
);

function loadSwipers() {
 Object.entries(swiperConfigs).forEach(([selector, { before, after }]) => {
    initSwiper(selector, before, after);
    setupButtonToggles(selector);
    updateButtonsVisibility(selector);
  });
}

function handleResize() {
  const nowMobile = window.innerWidth < 768;
  if (nowMobile !== isMobile) {
    isMobile = nowMobile;
    loadSwipers();
  }
}

window.addEventListener("resize", () => handleResize());

document.addEventListener("DOMContentLoaded", () => {
  renderMainPage();
  loadSwipers();
  setupNavigation();
  setupBurgerMenu();
});
