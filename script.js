function initSwiperIfMobile(containerSelector) {
  const isMobile = window.innerWidth <= 768;
  const el = document.querySelector(containerSelector);
  if (!el || !isMobile) return;
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

      if (url.includes("brands.html")) {
        setTimeout(() => {
          initSwiperIfMobile(".brands-slider");
        }, 50);
      }
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
      console.log("Клик по элементу, грузим:", page);
      loadPage(page);
    }
  });

  loadPage("pages/main.html");
});

