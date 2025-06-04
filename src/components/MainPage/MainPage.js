import highlight from '../../assets/images/icons/highlight.svg';
import repair from '../../assets/images/icons/repair.svg';
import checkstatus from '../../assets/images/icons/checkstatus.svg';
import expand from '../../assets/images/icons/expand.svg';
import expandClose from '../../assets/images/icons/expandClose.svg';
import picture from '../../assets/images/Picture_Copy.jpg';

export function renderMainPage() {
  const mainContent = document.getElementById("main-content");

  const html = `
  <div class="main__menu">
    <section class="main__title">
      <div class="main__title-heading">
        <img src="${highlight}" alt="highlight" />
        <h1>Услуги и сервисы</h1>
      </div>
      <div class="main__buttons">
        <button class="button">
          Оставить заявку
          <img src="${repair}" alt="Оставить заявку" />
        </button>
        <button class="button">
          Статус ремонта
          <img src="${checkstatus}" alt="Статус ремонта" />
        </button>
      </div>
    </section>
    <section class="services-list" aria-label="Навигация по услугам">
      <ul class="services-list__items">
        <li class="services-list__item" data-page="brands">Ремонтируемые бренды</li>
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
        <img src="${expand}" alt="expand" />
        <p>Читать далее</p>
      </div>
    </div>
    <div>
      <img src="${picture}" alt="about" />
    </div>
  </section>
  `;

  mainContent.innerHTML = html;

  initReadMore(expand, expandClose);
}

function initReadMore(expand, expandClose) {
  const aboutUsSection = document.querySelector(".about-us");
  const secondParagraph = document.querySelector(".about-us__paragraph--secondary");
  const readMoreBtn = document.querySelector(".about-us .read-more");

  if (!aboutUsSection || !secondParagraph || !readMoreBtn) return;

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
    readMoreBtn.querySelector("img").src = isExpanded ? expandClose : expand;

    updateParagraphVisibility();
  });

  window.addEventListener("resize", updateParagraphVisibility);
  updateParagraphVisibility();
}
