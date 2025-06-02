import { initSwiper } from "./initSwiper.js";

const html = `
<section class="main__brands prices">
  <div class="brands__title price__title">
    <p class="brands__title-text price__title-text">Цены на услуги</p>
  </div>
  <div class="prices__header">
    <span class="item-1">Ремонтные услуги</span>
    <span class="item-2">Цена</span>
    <span class="item-3">Срок</span>
    <span class="item-4"></span>
  </div>
  <!-- !slider -->
  <div class="swiper prices-slider">
    <div class="swiper-wrapper price-wrapper">
      <div class="swiper-slide prices-slide">
        <div class="prices-slide__item">
          <div class="slide__group item-1">
            <span class="slide__label">Ремонтные услуги</span>
            <p class="slide__value">Диагностика</p>
          </div>
          <div class="slide__group item-2">
            <span class="slide__label">Цена</span>
            <p class="slide__value">Бесплатно</p>
          </div>
          <div class="slide__group item-3">
            <span class="slide__label">Срок</span>
            <p class="slide__value">30 мин</p>
          </div>
          <div class="slide__group item-4">
            <button class="slide__button">
              Заказать <img src="./images/icons/goside.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>
      <div class="swiper-slide prices-slide">
        <div class="prices-slide__item">
          <div class="slide__group item-1">
            <span class="slide__label">Ремонтные услуги</span>
            <p class="slide__value">Замена дисплея</p>
          </div>
          <div class="slide__group item-2">
            <span class="slide__label">Цена</span>
            <p class="slide__value">1000 ₽</p>
          </div>
          <div class="slide__group item-3">
            <span class="slide__label">Срок</span>
            <p class="slide__value">30–120 мин</p>
          </div>
          <div class="slide__group item-4">
            <button class="slide__button">
              Заказать <img src="./images/icons/goside.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>
      <div class="swiper-slide prices-slide">
        <div class="prices-slide__item">
          <div class="slide__group item-1">
            <span class="slide__label">Ремонтные услуги</span>
            <p class="slide__value">Замена полифонического динамика</p>
          </div>
          <div class="slide__group item-2">
            <span class="slide__label">Цена</span>
            <p class="slide__value">1000 ₽</p>
          </div>
          <div class="slide__group item-3">
            <span class="slide__label">Срок</span>
            <p class="slide__value">30–120 мин</p>
          </div>
          <div class="slide__group item-4">
            <button class="slide__button">
              Заказать <img src="./images/icons/goside.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>
      <div class="swiper-slide prices-slide">
        <div class="prices-slide__item">
          <div class="slide__group item-1">
            <span class="slide__label">Ремонтные услуги</span>
            <p class="slide__value">
              Тестирование с выдачей технического заключения
            </p>
          </div>
          <div class="slide__group item-2">
            <span class="slide__label">Цена</span>
            <p class="slide__value">1000 ₽</p>
          </div>
          <div class="slide__group item-3">
            <span class="slide__label">Срок</span>
            <p class="slide__value">30–120 мин</p>
          </div>
          <div class="slide__group item-4">
            <button class="slide__button">
              Заказать <img src="./images/icons/goside.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>
      <div class="swiper-slide prices-slide">
        <div class="prices-slide__item">
          <div class="slide__group item-1">
            <span class="slide__label">Ремонтные услуги</span>
            <p class="slide__value">Замена программного обеспечения</p>
          </div>
          <div class="slide__group item-2">
            <span class="slide__label">Цена</span>
            <p class="slide__value">1000 ₽</p>
          </div>
          <div class="slide__group item-3">
            <span class="slide__label">Срок</span>
            <p class="slide__value">30–120 мин</p>
          </div>
          <div class="slide__group item-4">
            <button class="slide__button">
              Заказать <img src="./images/icons/goside.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
  <div class="information">
    <p class="information__text">
      Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную
      услугу. Для получения коммерческого предложения на постоянное
      обслуживание, оставьте заявку.
    </p>
    <button class="information__button">
      <span class="information__button--text"
        >Получить коммерческое предложение</span
      >
      <img
        class="information__button--img-go"
        src="./images/icons/more.svg"
        alt=""
      />
    </button>
  </div>
</section>
  `;

export function renderPricePage() {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = html;
  initSwiper(".prices-slider");
}
