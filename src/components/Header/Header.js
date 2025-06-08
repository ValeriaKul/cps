import { icons } from '../shared/icons.js';

export function createHeader() {
  const header = document.createElement("header");
  header.className = "header";
  header.innerHTML = `
    <div class="header__menu">
      <nav class="header__nav">
        <div class="header__left-side">
          <button class="burger-open-btn" aria-label="Открыть меню">
            <span class="icon" role="img" aria-hidden="true">${icons.burger}</span>
          </button>
          <span class="header__slash" aria-hidden="true">${icons.divider}</span>
          <button data-page="main" aria-label="На главную">
            <span class="icon-logo" role="img" aria-hidden="true">${icons.logo}</span>
          </button>
        </div>
        <div class="header__right-side">
          <div class="header__contacts">
            <button class="call-btn" data-action="open-call" aria-label="Позвонить">
              <span class="icon" role="img">${icons.call}</span>
            </button>
            <button class="call-btn" data-action="open-feedback" aria-label="Чат">
              <span class="icon" role="img">${icons.chat}</span>
            </button>
            <button class="call-btn" data-action="open-profile" aria-label="Профиль">
              <span class="icon" role="img">${icons.profile}</span>
            </button>
          </div>
          <span class="header__slash--center" aria-hidden="true">${icons.divider}</span>
          <button class="call-btn" aria-label="Ремонт">
            <span class="icon" role="img">${icons.repair}</span>
          </button>
          <button class="call-btn"aria-label="Проверить статус">
            <span class="icon" role="img">${icons.checkstatus}</span>
          </button>
        </div>
      </nav>
    </div>
  `;
  return header;
}
