let swiperInstance = null;

export function initSwiper(selector) {
  const screenWidth = window.innerWidth;
  const sliderEl = document.querySelector(selector);
  if (!sliderEl) return;

  const paginationEl = sliderEl.querySelector(".swiper-pagination");

  if (screenWidth < 768 && !swiperInstance) {
    swiperInstance = new Swiper(sliderEl, {
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: paginationEl
        ? {
            el: paginationEl,
            clickable: true,
          }
        : undefined,
    });
  } else if (screenWidth >= 768 && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}
