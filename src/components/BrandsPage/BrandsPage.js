import { icons } from "../shared/icons.js";

import expand from "../../assets/images/icons/expand.svg";
import expandClose from "../../assets/images/icons/expandClose.svg";

import lenovo from "../../assets/images/logo_brands/Lenovo.svg";
import samsung from "../../assets/images/logo_brands/Samsung.svg";
import apple from "../../assets/images/logo_brands/Apple.svg";
import viewsonic from "../../assets/images/logo_brands/viewsonic.svg";
import bosch from "../../assets/images/logo_brands/bosch.svg";
import hp from "../../assets/images/logo_brands/hp.svg";
import acer from "../../assets/images/logo_brands/acer.svg";
import sony from "../../assets/images/logo_brands/sony.svg";
import arrow from "../../assets/images/icons/go.svg";

import { initSwiper } from "../shared/initSwiper.js";
import {
  setupButtonToggles,
  updateButtonsVisibility,
} from "../shared/readMoreToggle.js";

const logos = [
  lenovo,
  samsung,
  apple,
  viewsonic,
  bosch,
  hp,
  acer,
  sony,
  lenovo,
  samsung,
  apple,
];

export function renderBrandsPage() {
  const mainContent = document.getElementById("main-content");

  const slides = logos
    .map(
      (logo) => `
      <div class="swiper-slide brands-slider__slide">
        <button class="brands-slider__image brand-card">
          <img src="${logo}" alt="brand logo" />
          <span class="icon">${icons.go}<span/>
        </button>
      </div>`
    )
    .join("");

  const html = `
    <section class="main__brands">
      <div class="brands__title">
        <p class="brands__title-text">Ремонт техники различных брендов</p>
      </div>
      <div class="swiper brands-slider limited fade-left">
        <div class="swiper-wrapper swiper-wrapper__brands">
          ${slides}
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <button class="read-more button__read button--hidden">
        <img src="${expand}" alt="expand" />
        <p>Показать все</p>
      </button>
      <button class="read-more button__close button--hidden">
        <img src="${expandClose}" alt="close" />
        <p>Скрыть</p>
      </button>
    </section>
  `;

  mainContent.innerHTML = html;
  setupButtonToggles(".brands-slider");
  updateButtonsVisibility(".brands-slider");

  setTimeout(() => {
    initSwiper(".brands-slider");
  }, 50);
}
