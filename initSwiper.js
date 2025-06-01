const swiperInstances = new Map();

export function initSwiper(selector) {
  const screenWidth = window.innerWidth;
  const sliderEl = document.querySelector(selector);

  if (!sliderEl) return;

  if (sliderEl.swiper) {
    sliderEl.swiper.destroy(true, true);
  }

  if (screenWidth < 768) {
    const paginationEl = sliderEl.querySelector(".swiper-pagination");

    const swiper = new Swiper(sliderEl, {
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: paginationEl
        ? {
            el: paginationEl,
            clickable: true,
          }
        : undefined,
    });

    swiperInstances.set(selector, swiper);
  }
}
