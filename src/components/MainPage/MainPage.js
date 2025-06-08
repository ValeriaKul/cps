import { icons } from '../shared/icons.js';
import picture from '../../assets/images/Picture_Copy.jpg';

export function renderMainPage() {
  const mainContent = document.getElementById("main-content");

  const html = `
  <div class="main__menu">
    <section class="main__title">
      <div class="main__title-heading">
        ${icons.highlight}
        <h1>Услуги и сервисы</h1>
      </div>
      <div class="main__buttons">
        <button class="button">
          Оставить заявку
          ${icons.repair}
        </button>
        <button class="button">
          Статус ремонта
          ${icons.checkstatus}
        </button>
      </div>
    </section>
    <section class="services-list" aria-label="Навигация по услугам">
      <ul class="services-list__items">
        <li class="services-list__item services-list__item--active" data-page="brands">Ремонтируемые бренды</li>
        <li class="services-list__item" data-page="devices">Ремонтируемые устройства</li>
        <li class="services-list__item" data-page="price">Цены на услуги</li>
        <li class="services-list__item" data-page="address">Адреса сервисных центров</li>
        <li class="services-list__item" data-page="discount">Специальные цены</li>
        <li class="services-list__item" data-page="reviews">Отзывы</li>
      </ul>
    </section>
  </div>
  <section class="about-us" aria-label="Information about the company">
    <div class="about-us__info">
      <div class="about-us__text">
        <p>
          Мы являемся авторизованным сервисным центром по ремонту техники Dell.
          Только у нас вы можете отремонтировать свой ноутбук Dell с официальной
          гарантией производителя.
        </p>
        <p class="about-us__paragraph--secondary">
          Мы успешно работаем с 1992 года и заслужили репутацию надежного
          партнера, что подтверждает большое количество постоянных клиентов. Мы
          гордимся тем, что к нам обращаются по рекомендациям и, в свою очередь,
          советуют нас родным и близким.
        </p>
      </div>
      <div class="read-more">
        <span class="expand-icon">${icons.expand}</span>
        <p>Читать далее</p>
      </div>
    </div>
    <div>
      <img src="${picture}" alt="about" />
    </div>
  </section>
  `;

  mainContent.innerHTML = html;

  initReadMore();
}

function initReadMore() {
  const aboutUsSection = document.querySelector(".about-us");
  const secondParagraph = document.querySelector(".about-us__paragraph--secondary");
  const readMoreBtn = document.querySelector(".about-us .read-more");
  const iconSpan = readMoreBtn.querySelector(".expand-icon");

  if (!aboutUsSection || !secondParagraph || !readMoreBtn || !iconSpan) return;

  function updateParagraphVisibility() {
    const width = window.innerWidth;

    if (width >= 1120) {
      secondParagraph.style.display = "block";
    } else if (width >= 768) {
      secondParagraph.style.display = "";
    } else {
      secondParagraph.style.display = aboutUsSection.classList.contains("expanded") ? "block" : "none";
    }
  }

  readMoreBtn.addEventListener("click", () => {
    aboutUsSection.classList.toggle("expanded");
    const isExpanded = aboutUsSection.classList.contains("expanded");

    readMoreBtn.querySelector("p").textContent = isExpanded ? "Скрыть" : "Читать далее";
    iconSpan.innerHTML = isExpanded ? icons.expandClose : icons.expand;

    updateParagraphVisibility();
  });

  window.addEventListener("resize", updateParagraphVisibility);
  updateParagraphVisibility();
}

