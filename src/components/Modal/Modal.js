import closeIcon from "../../assets/images/icons/burgerClose.svg";
import highlight from "../../assets/images/icons/highlight.svg";
import sendIcon from "../../assets/images/icons/goside.svg";

/**
 * @param {Object} config - параметры
 * @param {string} config.id - id модалки
 * @param {string} config.title - заголовок окна
 * @param {Array} config.fields - массив полей (input/textarea)
 * @returns HTMLElement
 */

export function createModalWindow({ id, title, fields }) {
  const modal = document.createElement("div");
  modal.className = "modal modal-feedback";
  modal.id = id;

  modal.innerHTML = `
    <div class="modal-feedback__top">
      <button class="modal__close" id="${id}Close">
        <img class="icon__close" src="${closeIcon}" alt="Закрыть">
      </button>
      <div class="title__container">
        <img src="${highlight}" alt="" />
        <h2 class="title__text">${title}</h2>
      </div>
    </div>
    <form class="modal__form">
      <div class="form__inputs">
        ${fields
          .map(field => {
            if (field.type === "textarea") {
              return `<textarea name="${field.name}" placeholder="${field.placeholder}" class="modal__textarea"></textarea>`;
            }
            return `<input type="${field.type}" name="${field.name}" placeholder="${field.placeholder}" class="modal__input" />`;
          })
          .join("")}
        <p class="modal__policy">
          Нажимая "отправить", вы даете согласие на
          <a href="#">обработку персональных данных</a> и соглашаетесь с нашей
          <a href="#">политикой конфиденциальности</a>
        </p>
      </div>
      <button class="modal__submit">Отправить <img src="${sendIcon}" /></button>
    </form>
  `;

  return modal;
}

export function initModalLogic(modalId, triggerSelector, reason, showOverlay, hideOverlay) {
  const modal = document.getElementById(modalId);
  const closeBtn = document.getElementById(`${modalId}Close`);
  const overlay = document.querySelector(".overlay");

  const openModal = () => {
    modal.style.display = "flex";
    modal.style.zIndex = 2500;
    overlay.style.zIndex = 2000;
    showOverlay(reason);
    // document.body.classList.add("no-scroll");
  };

  const closeModal = () => {
    overlay.style.zIndex = 500;
    modal.style.zIndex = 1000;
    modal.style.display = "none";
    hideOverlay(reason);
    // document.body.classList.remove("no-scroll");
  };

  document.querySelectorAll(triggerSelector).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openModal();
    });
  });

  closeBtn?.addEventListener("click", closeModal);

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

}
