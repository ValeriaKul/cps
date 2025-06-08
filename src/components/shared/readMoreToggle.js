export function setupButtonToggles(sliderSelector = ".brands-slider") {
  const slider = document.querySelector(sliderSelector);
  if (!slider) return;

  const parent = slider.parentElement;
  const readBtn = parent.querySelector(".button__read");
  const closeBtn = parent.querySelector(".button__close");
  if (!readBtn || !closeBtn) return;

  readBtn.addEventListener("click", () => {
    slider.classList.remove("limited");
    readBtn.classList.add("button--hidden");
    closeBtn.classList.remove("button--hidden");
  });

  closeBtn.addEventListener("click", () => {
    slider.classList.add("limited");
    closeBtn.classList.add("button--hidden");
    readBtn.classList.remove("button--hidden");
  });
}

export function updateButtonsVisibility(selector) {
  const slider = document.querySelector(selector);
  if (!slider) return;

  const parent = slider.parentElement;
  const readBtn = parent.querySelector(".button__read");
  const closeBtn = parent.querySelector(".button__close");
  if (!readBtn || !closeBtn) return;

  if (window.innerWidth <= 768) {
    readBtn.classList.add("button--hidden");
    closeBtn.classList.add("button--hidden");
    return;
  }

  if (slider.classList.contains("limited")) {
    readBtn.classList.remove("button--hidden");
    closeBtn.classList.add("button--hidden");
  } else {
    readBtn.classList.add("button--hidden");
    closeBtn.classList.remove("button--hidden");
  }
}
