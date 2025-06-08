import burgerClose from "../../assets/images/icons/burgerClose.svg";
import logo from "../../assets/images/icons/logo-cps.svg";
import search from "../../assets/images/icons/search.svg";
import highlight from "../../assets/images/icons/highlight.svg";
import callIcon from "../../assets/images/icons/call.svg";
import chatIcon from "../../assets/images/icons/chat.svg";
import profileIcon from "../../assets/images/icons/profile.svg";

export function createBurgerWrapper() {
  const burgerWrapper = document.createElement("div");
  burgerWrapper.className = "burger-wrapper";
  burgerWrapper.innerHTML = ` 
    <div class="burger-menu">
      <div class="burger-menu__sections">
        <div class="burger-menu__top">
          <div class="burger-menu__left">
            <button class="burger-menu__close">
              <img src="${burgerClose}" alt="close" />
            </button>
            <a href="#" class="burger-logo" data-page="main">
              <img src="${logo}" alt="logo" />
            </a>
          </div>
          <img src="${search}" alt="search" />
        </div>
        <nav class="burger-menu__nav">
          <ul class="burger-menu__list">
            <li class="burger-menu__item burger-menu__item--active">
              <img src="${highlight}" alt="highlight" class="burger-menu__icon" />
              <a href="#" class="burger-menu__link" data-page="brands">Ремонт техники</a>
            </li>
            <li class="burger-menu__item">
              <img src="${highlight}" alt="highlight" class="burger-menu__icon" />
              <a href="#" class="burger-menu__link" data-page="devices">Услуги и сервисы</a>
            </li>
            <li class="burger-menu__item">
              <img src="${highlight}" alt="highlight" class="burger-menu__icon" />
              <a href="#" class="burger-menu__link" data-page="price">Корпоративным клиентам</a>
            </li>
            <li class="burger-menu__item">
              <img src="${highlight}" alt="highlight" class="burger-menu__icon" />
              <a href="#" class="burger-menu__link">Продавцам техники</a>
            </li>
            <li class="burger-menu__item">
              <img src="${highlight}" alt="highlight" class="burger-menu__icon" />
              <a href="#" class="burger-menu__link">Партнерам</a>
            </li>
            <li class="burger-menu__item">
              <img src="${highlight}" alt="highlight" class="burger-menu__icon" />
              <a href="#" class="burger-menu__link">Производителям</a>
            </li>
            <li class="burger-menu__item">
              <img src="${highlight}" alt="highlight" class="burger-menu__icon" />
              <a href="#" class="burger-menu__link">Наши сервисные центры</a>
            </li>
            <li class="burger-menu__item">
              <img src="${highlight}" alt="highlight" class="burger-menu__icon" />
              <a href="#" class="burger-menu__link">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="burger-menu__bottom">
        <div class="burger-menu__contacts">
          <div class="burger-menu__icons">
            <button class="call-btn" data-action="open-call">
              <img src="${callIcon}" alt="phone"/>
            </button>
            <button class="call-btn" data-action="open-feedback">
              <img src="${chatIcon}" alt="chat"/>
            </button>
            <button class="call-btn" data-action="open-profile">
              <img src="${profileIcon}" alt="profile"/>
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
