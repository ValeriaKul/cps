import arrow from '../../assets/images/icons/go.svg';
import expand from '../../assets/images/icons/expand.svg';
import expandClose from '../../assets/images/icons/expandClose.svg';

import { initSwiper } from '../shared/initSwiper.js';
import { setupButtonToggles, updateButtonsVisibility } from '../shared/readMoreToggle.js';

export function renderDevicesPage() {
  const mainContent = document.getElementById('main-content');

  const html = `
    <section class="main__brands">
      <div class="brands__title devices__title">
        <p class="brands__title-text devices__title-text">Ремонт различных видов техники</p>
      </div>

      <div class="swiper brands-slider devices-slider limited">
        <div class="swiper-wrapper swiper-wrapper__devices">
          ${[
            'Ремонт ноутбуков',
            'Ремонт планшетов',
            'Ремонт ПК',
            'Ремонт мониторов',
            'Ремонт телевизоров',
          ]
            .map(
              (text) => `
            <div class="swiper-slide brands-slider__slide devices-slider__slide">
              <div class="brands-slider__image devices-slider__image brand-card">
                <p class="image__text">${text}</p>
                <img src="${arrow}" alt="arrow" />
              </div>
            </div>`
            )
            .join('')}
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
  setupButtonToggles('.devices-slider');
  updateButtonsVisibility('.devices-slider');

  setTimeout(() => {
    initSwiper('.devices-slider');
  }, 50);
}
