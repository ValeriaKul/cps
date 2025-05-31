export function setupButtonToggles(sliderSelector = ".brands-slider") {
  document.addEventListener("click", function (e) {
    const readMoreBtn = e.target.closest(".button__read");
    const closeBtn = e.target.closest(".button__close");
    const slider = document.querySelector(sliderSelector);
    if (!slider) return;

    if (readMoreBtn) slider.classList.remove("limited");
    if (closeBtn) slider.classList.add("limited");

    updateButtonsVisibility(sliderSelector);
  });
}

export function updateButtonsVisibility(sliderSelector = ".brands-slider") {
  const slider = document.querySelector(sliderSelector);
  const btnRead = document.querySelector(".button__read");
  const btnClose = document.querySelector(".button__close");
  if (!slider || !btnRead || !btnClose) return;

  const isLimited = slider.classList.contains("limited");
  const screenWidth = window.innerWidth;

  if (screenWidth >= 768 && screenWidth < 1582) {
    btnRead.style.display = isLimited ? "flex" : "none";
    btnClose.style.display = isLimited ? "none" : "flex";
  } else {
    btnRead.style.display = "none";
    btnClose.style.display = "none";
  }
}
