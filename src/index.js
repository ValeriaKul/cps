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
import { createModalFeedback, initModalFeedbackLogic } from "./components/ModalFeedback/ModalFeedback.js";

function showOverlay(reason) {
  const overlay = document.querySelector(".overlay");

  if (reason === "menu") {
    document.body.classList.add("menu-open");
    const burgerWrapper = document.querySelector(".burger-wrapper");
    if (burgerWrapper) burgerWrapper.style.display = "flex";
  }

  if (reason === "feedback") {
    document.body.classList.add("feedback-open");
  }
}

function hideOverlay(reason) {
  const overlay = document.querySelector(".overlay");

  if (reason === "menu") {
    document.body.classList.remove("menu-open");
    const burgerWrapper = document.querySelector(".burger-wrapper");
    if (burgerWrapper) burgerWrapper.style.display = "none";
  }

  if (reason === "feedback") {
    document.body.classList.remove("feedback-open");
  }

  if (
    !document.body.classList.contains("menu-open") &&
    !document.body.classList.contains("feedback-open")
  ) {
    overlay.style.display = "none";
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

const header = createHeader();
const burgerWrapper = createBurgerWrapper();
burgerWrapper.style.display = "none";
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
document.body.appendChild(overlay);

overlay.addEventListener("click", () => {
  closeBurger();
  hideOverlay("feedback");
});

function renderPage(page) {
  switch (page) {
    case "main": renderMainPage(); loadSwipers(); break;
    case "brands": renderBrandsPage(); loadSwipers(); break;
    case "devices": renderDevicesPage(); loadSwipers(); break;
    case "price": renderPricePage(); loadSwipers(); break;
    default: console.warn("Неизвестная страница:", page);
  }
}

function setupNavigation() {
  document.body.addEventListener("click", (e) => {
    const link = e.target.closest("[data-page]");
    if (!link) return;

    e.preventDefault();
    const page = link.dataset.page;
    renderPage(page);
    closeBurger();
  });
}

function setupBurgerMenu() {
  document.body.addEventListener("click", (e) => {
    const menu = document.querySelector(".burger-menu");
    const openBtn = e.target.closest(".burger-open-btn");
    const closeBtn = e.target.closest(".burger-menu__close");

    if (openBtn) {
      openBurger();
    } else if (closeBtn || (window.innerWidth < 1120 && !menu.contains(e.target))) {
      closeBurger();
    }
  });
}

const feedbackModal = createModalFeedback();
document.body.appendChild(feedbackModal);

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

document.addEventListener("DOMContentLoaded", () => {
  renderMainPage();
  loadSwipers();
  setupNavigation();
  setupBurgerMenu();
  initModalFeedbackLogic(showOverlay, hideOverlay);
});
