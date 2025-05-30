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

window.addEventListener("resize", initSwiperIfMobile);
document.addEventListener("DOMContentLoaded", initSwiperIfMobile);

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

  loadPage("pages/main.html");
  window.addEventListener("resize", initSwiperIfMobile);
});

document.addEventListener("click", function (e) {
  const readMoreBtn = e.target.closest(".button__read");
  const closeBtn = e.target.closest(".button__close");
  const slider = document.querySelector(".brands-slider");

  if (!slider) return;

  if (readMoreBtn) {
    slider.classList.remove("limited");
    document.querySelector(".button__read").style.display = "none";
    document.querySelector(".button__close").style.display = "flex";
  }

  if (closeBtn) {
    slider.classList.add("limited");
    document.querySelector(".button__close").style.display = "none";
    document.querySelector(".button__read").style.display = "flex";
  }
});
