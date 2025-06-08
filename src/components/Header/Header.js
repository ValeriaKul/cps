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
             <button class="burger-open-btn" aria-label="Открыть меню">
              <img src="${burgerIcon}" alt="menu" />
              </button>
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
