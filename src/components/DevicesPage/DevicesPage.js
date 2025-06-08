import { icons } from '../shared/icons.js';

import expand from '../../assets/images/icons/expand.svg';
import expandClose from '../../assets/images/icons/expandClose.svg';

import { initSwiper } from '../shared/initSwiper.js';
import { setupButtonToggles, updateButtonsVisibility } from '../shared/readMoreToggle.js';

export function renderDevicesPage() {
  const mainContent = document.getElementById('main-content');

  const deviceTexts = [
    'Ремонт ноутбуков',
    'Ремонт планшетов',
    'Ремонт ПК',
    'Ремонт мониторов',
    'Ремонт телевизоров',
  ];

  const slides = deviceTexts
    .map(
      (text) => `
      <div class="swiper-slide brands-slider__slide devices-slider__slide">
        <div class="brands-slider__image devices-slider__image brand-card">
          <p class="image__text">${text}</p>
          <span class="icon">${icons.go}</span>
        </div>
      </div>`
    )
    .join('');

  const html = `
    <section class="main__brands">
      <div class="brands__title devices__title">
        <p class="brands__title-text devices__title-text">Ремонт различных видов техники</p>
      </div>

      <div class="swiper brands-slider devices-slider limited">
        <div class="swiper-wrapper swiper-wrapper__devices">
          ${slides}
        </div>
        <div class="swiper-pagination"></div>
      </div>

      <button class="read-more button__read button--hidden">
        <div>
          <span class="expand-icon">${icons.expand}<span/>
        </div>
        <p>Показать все</p>
      </button>
      <button class="read-more button__close button--hidden">
         <div>
          <span class="expand-icon">${icons.expandClose}<span/>
         </div>
         <p>Скрыть</p>
      </button>
    </section>
  `;

  mainContent.innerHTML = html;
  setupButtonToggles('.devices-slider');
  updateButtonsVisibility('.devices-slider');

  setTimeout(() => {
    initSwiper('.devices-slider');
  }, 50);
}
