import burgerIcon from "../../assets/images/icons/burger.svg";
import slashIcon from "../../assets/images/icons/slash.svg";
import logoIcon from "../../assets/images/icons/logo-cps.svg";
import callIcon from "../../assets/images/icons/call.svg";
import chatIcon from "../../assets/images/icons/chat.svg";
import profileIcon from "../../assets/images/icons/profile.svg";
import repairIcon from "../../assets/images/icons/repair.svg";
import checkStatusIcon from "../../assets/images/icons/checkstatus.svg";

export function createHeader() {
  const header = document.createElement("header");
  header.className = "header";
  header.innerHTML = `
        <div class="header__menu">
          <nav class="header__nav">
            <div class="header__left-side">
              <label for="menu-toggle" class="burger-button">
                <img src="${burgerIcon}" alt="open menu" />
              </label>
              <img
                class="header__slash"
                src="${slashIcon}"
                alt="slash"
                aria-hidden="true"
              />
              <a href="#" data-page="main"
                ><img src="${logoIcon}" alt="Логотип CPS"
              /></a>
            </div>
            <div class="header__right-side">
              <div class="header__contacts">
                <a href="tel:+9780000000"
                  ><img src="${callIcon}" alt="phone"
                /></a>
                <a href="mailto:mail@mail.ru"
                  ><img src="${chatIcon}" alt="chat"
                /></a>
                <a href="#"
                  ><img src="${profileIcon}" alt="your_profile"
                /></a>
              </div>
              <img
                class="header__slash--center"
                src="${slashIcon}"
                alt=""
                aria-hidden="true"
              />
              <a href="#"
                ><img src="${repairIcon}" alt="Ремонт"
              /></a>
              <a href="#"
                ><img
                  src="${checkStatusIcon}"
                  alt="Проверить статус"
              /></a>
            </div>
          </nav>
        </div>
  `;
  return header;
}
