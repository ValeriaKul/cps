export function initSwiper(selector) {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 768) return;

  const sliderEl = document.querySelector(selector);
  if (!sliderEl) return;

  const paginationEl = sliderEl.querySelector(".swiper-pagination");

  new Swiper(sliderEl, {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: paginationEl
      ? {
          el: paginationEl,
          clickable: true,
        }
      : undefined,
  });
}