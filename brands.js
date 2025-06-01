import { initSwiper } from "./initSwiper.js";
import { setupButtonToggles, updateButtonsVisibility } from './readMoreToggle.js';

setupButtonToggles(); 
updateButtonsVisibility(); 


const html = `
<section class="main__brands">
  <div class="brands__title">
    <p class="brands__title-text">Ремонт техники различных брендов</p>
  </div>
  <!-- !слайдер! -->
  <div class="swiper brands-slider limited">
    <div class="swiper-wrapper swiper-wrapper__brands">
      <div class="swiper-slide brands-slider__slide">
        <div class="brands-slider__image brand-card">
          <img src="./images/logo_brands/Lenovo.svg" alt="Lenovo" />
          <img src="./images/icons/go.svg" alt="arrow" />
        </div>
      </div>
      <div class="swiper-slide brands-slider__slide">
        <div class="brands-slider__image brand-card">
          <img src="./images/logo_brands/Samsung.svg" alt="Samsung" />
          <img src="./images/icons/go.svg" alt="arrow" />
        </div>
      </div>
      <div class="swiper-slide brands-slider__slide">
        <div class="brands-slider__image brand-card">
          <img src="./images/logo_brands/Apple.svg" alt="Apple" />
          <img src="./images/icons/go.svg" alt="arrow" />
        </div>
      </div>
      <div class="swiper-slide brands-slider__slide">
        <div class="brands-slider__image brand-card">
          <img src="./images/logo_brands/viewsonic.svg" alt="viewSonic" />
          <img src="./images/icons/go.svg" alt="arrow" />
        </div>
      </div>
      <div class="swiper-slide brands-slider__slide">
        <div class="brands-slider__image brand-card">
          <img src="./images/logo_brands/bosch.svg" alt="bosch" />
          <img src="./images/icons/go.svg" alt="arrow" />
        </div>
      </div>
      <div class="swiper-slide brands-slider__slide">
        <div class="brands-slider__image brand-card">
          <img src="./images/logo_brands/hp.svg" alt="hp" />
          <img src="./images/icons/go.svg" alt="arrow" />
        </div>
      </div>
      <div class="swiper-slide brands-slider__slide">
        <div class="brands-slider__image brand-card">
          <img src="./images/logo_brands/acer.svg" alt="acer" />
          <img src="./images/icons/go.svg" alt="arrow" />
        </div>
      </div>
      <div class="swiper-slide brands-slider__slide">
        <div class="brands-slider__image brand-card">
          <img src="./images/logo_brands/sony.svg" alt="sony" />
          <img src="./images/icons/go.svg" alt="arrow" />
        </div>
      </div>
       <div class="swiper-slide brands-slider__slide">
        <div class="brands-slider__image brand-card">
          <img src="./images/logo_brands/Lenovo.svg" alt="Lenovo" />
          <img src="./images/icons/go.svg" alt="arrow" />
        </div>
      </div>
      <div class="swiper-slide brands-slider__slide">
        <div class="brands-slider__image brand-card">
          <img src="./images/logo_brands/Samsung.svg" alt="Samsung" />
          <img src="./images/icons/go.svg" alt="arrow" />
        </div>
      </div>
      <div class="swiper-slide brands-slider__slide">
        <div class="brands-slider__image brand-card">
          <img src="./images/logo_brands/Apple.svg" alt="Apple" />
          <img src="./images/icons/go.svg" alt="arrow" />
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
  <button class="read-more button__read button--hidden">
    <img src="./images/icons/expand.svg" alt="expand" />
    <p>Показать все</p>
  </button>
   <button class="read-more button__close button--hidden">
    <img src="./images/icons/expandClose.svg" alt="close" />
    <p>Скрыть</p>
  </button>
</section>
  `

export function renderBrandsPage() {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = html;
  initSwiper(".brands-slider");
}
