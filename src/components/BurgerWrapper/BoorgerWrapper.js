import { icons } from "../shared/icons.js";

export function createBurgerWrapper() {
  const burgerWrapper = document.createElement("div");
  burgerWrapper.className = "burger-wrapper";
  burgerWrapper.innerHTML = ` 
    <div class="burger-menu">
      <div class="burger-menu__sections">
        <div class="burger-menu__top">
          <div class="burger-menu__left">
            <button class="burger-menu__close" aria-label="Закрыть меню">
              <span class="icon">${icons.burgerClose}</span>
            </button>
            <a href="#" class="burger-logo" data-page="main" aria-label="На главную">
              <span class="icon-logo">${icons.logo}</span>
            </a>
          </div>
          <span class="icon icon--search" aria-hidden="true">${icons.search}</span>
        </div>

        <nav class="burger-menu__nav">
          <ul class="burger-menu__list">
            ${[
              { text: "Ремонт техники", page: "brands" },
              { text: "Услуги и сервисы", page: "devices" },
              { text: "Корпоративным клиентам", page: "price" },
              { text: "Продавцам техники" },
              { text: "Партнерам" },
              { text: "Производителям" },
              { text: "Наши сервисные центры" },
              { text: "Контакты" },
            ]
              .map(
                (item) => `
                <li class="burger-menu__item ${
                  item.page === "brands" ? "burger-menu__item--active" : ""
                }">
                  <span class="icon burger-menu__icon">${icons.highlight}</span>
                  <a href="#" class="burger-menu__link" ${
                    item.page ? `data-page="${item.page}"` : ""
                  }>${item.text}</a>
                </li>`
              )
              .join("")}
          </ul>
        </nav>
      </div>

      <div class="burger-menu__bottom">
        <div class="burger-menu__contacts">
          <div class="burger-menu__icons">
            <button class="call-btn" data-action="open-call" aria-label="Позвонить">
              <span class="icon">${icons.call}</span>
            </button>
            <button class="call-btn" data-action="open-feedback" aria-label="Чат">
              <span class="icon">${icons.chat}</span>
            </button>
            <button class="call-btn" data-action="open-profile" aria-label="Профиль">
              <span class="icon">${icons.profile}</span>
            </button>
          </div>
          <a class="burger-menu__mail" href="mailto:mail@cps.com">mail@cps.com</a>
          <a class="burger-menu__phone" href="tel:+88008908900">8 800 890 8900</a>
        </div>

        <div class="burger-menu__languages">
          <button class="burger-menu__button burger-menu__button--active">RU</button>
          <button class="burger-menu__button">EN</button>
          <button class="burger-menu__button">CH</button>
        </div>
      </div>
    </div>
  `;
  return burgerWrapper;
}
