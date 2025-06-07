import closeIcon from "../../assets/images/icons/burgerClose.svg";
import highlight from "../../assets/images/icons/highlight.svg";
import sendIcon from "../../assets/images/icons/goside.svg";

export function createModalFeedback() {
  const modal = document.createElement("div");
  modal.className = "modal modal-feedback";
  modal.id = "modalFeedback";

  modal.innerHTML = `
  <div class="modal-feedback__top">
    <button class="modal__close" id="modalFeedbackClose">
      <img class="icon__close" src="${closeIcon}" alt="Закрыть">
    </button>
    <div class="title__container">
      <img src="${highlight}" alt=""/>
      <h2 class="title__text">Обратная связь</h2>
    </div>
    </div>
    <form class="modal__form">
    <div class="form__inputs">
      <input type="text" placeholder="Имя" class="modal__input" />
      <input type="tel" placeholder="Телефон" class="modal__input" />
      <input type="email" placeholder="Электронная почта" class="modal__input" />
      <textarea placeholder="Сообщение" class="modal__textarea"></textarea>
      <p class="modal__policy">
      Нажимая "отправить", вы даете согласие на
      <a href="#">обработку персональных данных</a> и соглашаетесь с нашей
      <a href="#">политикой конфиденциальности</a>
      </p>
      </div>
      <button class="modal__submit">Отправить <img src="${sendIcon}"/> </button>
    </form>
  `;

  return modal;
}


export function initModalFeedbackLogic() {
  const modal = document.getElementById("modalFeedback");
  const closeBtn = document.getElementById("modalFeedbackClose");
  const overlay = document.querySelector(".overlay");

  const openModal = () => {
    modal.style.display = "flex";
    overlay.style.display = "block";
    document.body.classList.add("no-scroll");
    document.body.classList.add("feedback-open");
    console.log("Нажали на кнопку звонка");
  };

  const closeModal = () => {
    modal.style.display = "none";
    if (document.body.classList.contains("feedback-open")) {
      overlay.style.display = "none";
      document.body.classList.remove("no-scroll");
      document.body.classList.remove("feedback-open");
    }
  };

  document.querySelectorAll('[data-action="open-call"]').forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openModal();
    });
  });

  closeBtn.addEventListener("click", closeModal);

  const modalWrapper = modal.closest(".modal__feedback");
  if (modalWrapper) {
    modalWrapper.addEventListener("click", (e) => {
      if (e.target === modalWrapper) {
        closeModal();
      }
    });
  }

  overlay.addEventListener("click", () => {
    if (document.body.classList.contains("feedback-open")) {
      closeModal();
    }
  });

  console.log("Кнопки:", document.querySelectorAll('[data-action="open-call"]'));

}

