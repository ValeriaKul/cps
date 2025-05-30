let swiperInstances = [];

function initAllSwipers() {

  swiperInstances.forEach((instance) => instance.destroy(true, true));
  swiperInstances = [];

  const isMobile = window.innerWidth < 768;
  const sliders = document.querySelectorAll(".swiper");

  sliders.forEach((sliderEl) => {
    const paginationEl = sliderEl.querySelector(".swiper-pagination");
    const instance = new Swiper(sliderEl, {
      slidesPerView: isMobile ? "auto" : 1,
      spaceBetween: isMobile ? 16 : 0,
      pagination: paginationEl
        ? {
            el: paginationEl,
            clickable: true,
          }
        : undefined,
    });
    swiperInstances.push(instance);
  });
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
  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("Ошибка загрузки");
      return res.text();
    })
    .then((html) => {
      const container = document.getElementById("main-content");
      container.innerHTML = html;

      initReadMore();
      setupButtonToggles();
      updateButtonsVisibility();
      initAllSwipers();

      const burgerLogo = document.querySelector(".burger-logo");
      if (burgerLogo) {
        burgerLogo.addEventListener("click", (e) => {
          e.preventDefault();
          loadPage("pages/main.html");

          const menuToggle = document.querySelector("#menu-toggle");
          if (window.innerWidth < 1120 && menuToggle) {
            menuToggle.checked = false;
            document.body.classList.remove("menu-open");
          }
        });
      }
    })
    .catch((err) => {
      console.error("Ошибка при загрузке страницы:", err);
      document.getElementById("main-content").innerHTML = `<p>${err.message}</p>`;
    });
}

function initReadMore() {
  const aboutUsSection = document.querySelector(".about-us");
  const secondParagraph = document.querySelector(
    ".about-us__paragraph--secondary"
  );
  const readMoreBtn = document.querySelector(".about-us .read-more");

  if (!aboutUsSection || !secondParagraph || !readMoreBtn) return;

  function updateParagraphVisibility() {
    const width = window.innerWidth;

    if (width >= 1120) {
      secondParagraph.style.display = "block";
    } else if (width >= 768) {
      secondParagraph.style.display = "";
    } else {
      secondParagraph.style.display = aboutUsSection.classList.contains(
        "expanded"
      )
        ? "block"
        : "none";
    }
  }

  readMoreBtn.addEventListener("click", () => {
    aboutUsSection.classList.toggle("expanded");
    const isExpanded = aboutUsSection.classList.contains("expanded");

    readMoreBtn.querySelector("p").textContent = isExpanded
      ? "Скрыть"
      : "Читать далее";
    readMoreBtn.querySelector("img").src = isExpanded
      ? "./images/icons/expandClose.svg"
      : "./images/icons/expand.svg";

    updateParagraphVisibility();
  });

  window.addEventListener("resize", updateParagraphVisibility);
  updateParagraphVisibility();
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

  const menuToggle = document.querySelector("#menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("change", () => {
      document.body.classList.toggle("menu-open", menuToggle.checked);
    });
  }

  loadPage("pages/main.html");

  window.addEventListener("resize", () => {
    updateButtonsVisibility();
    initAllSwipers();
  });
});
