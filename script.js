let swiperInstance = null;

function initSwiperIfMobile() {
  const isMobile = window.innerWidth < 768;
  const sliderEl = document.querySelector(".brands-slider");

  if (!sliderEl) return;

  if (isMobile && !swiperInstance) {
    swiperInstance = new Swiper(sliderEl, {
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: sliderEl.querySelector(".swiper-pagination"),
        clickable: true,
      },
    });
  } else if (!isMobile && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

function updateButtonsVisibility() {
  const slider = document.querySelector(".brands-slider");
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

function setupButtonToggles() {
  document.addEventListener("click", function (e) {
    const readMoreBtn = e.target.closest(".button__read");
    const closeBtn = e.target.closest(".button__close");
    const slider = document.querySelector(".brands-slider");

    if (!slider) return;

    if (readMoreBtn) {
      slider.classList.remove("limited");
    }

    if (closeBtn) {
      slider.classList.add("limited");
    }

    updateButtonsVisibility();
  });
}

function loadPage(url) {
  console.log("Загружаем страницу:", url);

  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("Ошибка загрузки");
      return res.text();
    })
    .then((html) => {
      document.getElementById("main-content").innerHTML = html;

      setTimeout(() => {
        if (url.includes("brands.html")) {
          initSwiperIfMobile();
          updateButtonsVisibility();
          setupButtonToggles();
        }
      }, 50);
    })
    .catch((err) => {
      console.error("Ошибка при загрузке страницы:", err);
      document.getElementById(
        "main-content"
      ).innerHTML = `<p>${err.message}</p>`;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main-content");

  main.addEventListener("click", function (event) {
    const target = event.target.closest("[data-page]");
    if (target) {
      event.preventDefault();
      const page = target.getAttribute("data-page");
      loadPage(page);
    }
  });

  initSwiperIfMobile();
  updateButtonsVisibility();
  setupButtonToggles();
  loadPage("pages/main.html");

  window.addEventListener("resize", () => {
    initSwiperIfMobile();
    updateButtonsVisibility();
  });
});

const menuToggle = document.querySelector("#menu-toggle");

menuToggle.addEventListener("change", () => {
  document.body.classList.toggle("menu-open", menuToggle.checked);
});
