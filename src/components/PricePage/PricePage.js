import arrow from "../../assets/images/icons/goside.svg";
import moreIcon from "../../assets/images/icons/more.svg";
import { initSwiper } from "../shared/initSwiper.js";

const html = `
<section class="main__brands prices">
  <div class="brands__title price__title">
    <p class="brands__title-text price__title-text">Цены на услуги</p>
  </div>
  <div class="slider__container">
    <div class="prices__header">
      <span class="item-1">Ремонтные услуги</span>
      <span class="item-2">Цена</span>
      <span class="item-3">Срок</span>
      <span class="item-4"></span>
    </div>
    <div class="swiper prices-slider fade-left">
      <div class="swiper-wrapper price-wrapper">
        ${generateSlides()}
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
  <div class="information">
    <p class="information__text">
      Все цены указаны с учетом НДС. Стоимость ремонта указана на единичную
      услугу. Для получения коммерческого предложения на постоянное
      обслуживание, оставьте заявку.
    </p>
    <button class="information__button">
      <span class="information__button--text">Получить коммерческое предложение</span>
      <img class="information__button--img-go" src="${moreIcon}" alt="more information" />
    </button>
  </div>
</section>
`;

function generateSlides() {
  const data = [
    ["Диагностика", "Бесплатно", "30 мин"],
    ["Замена дисплея", "1000 ₽", "30–120 мин"],
    ["Замена полифонического динамика", "1000 ₽", "30–120 мин"],
    ["Тестирование с заключением", "1000 ₽", "30–120 мин"],
    ["Замена ПО", "1000 ₽", "30–120 мин"],
  ];

  return data
    .map(
      ([service, price, time]) => `
    <div class="swiper-slide prices-slide">
      <div class="prices-slide__item">
        <div class="slide__group item-1">
          <span class="slide__label">Ремонтные услуги</span>
          <p class="slide__value">${service}</p>
        </div>
        <div class="slide__group item-2">
          <span class="slide__label">Цена</span>
          <p class="slide__value">${price}</p>
        </div>
        <div class="slide__group item-3">
          <span class="slide__label">Срок</span>
          <p class="slide__value">${time}</p>
        </div>
        <div class="slide__group item-4">
          <button class="slide__button">
            Заказать <img src="${arrow}" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

export function renderPricePage() {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = html;
  initSwiper(".prices-slider");
}
