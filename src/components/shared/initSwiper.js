
import Swiper from "swiper/bundle";

const swiperInstances = new Map();

export function initSwiper(
  selector,
  slidesOffsetBefore = 16,
  slidesOffsetAfter = 16
) {
  
  const sliderEl = document.querySelector(selector);

  if (!sliderEl) return;

  if (swiperInstances.has(selector)) {
    swiperInstances.get(selector).destroy(true, true);
    swiperInstances.delete(selector);
  }

  if (screenWidth < 768) {
    const paginationEl = sliderEl.querySelector(".swiper-pagination");

    const swiper = new Swiper(sliderEl, {
      slidesPerView: "auto",
      spaceBetween: 16,
      slidesOffsetBefore: slidesOffsetBefore,
      slidesOffsetAfter: slidesOffsetAfter,
      pagination: paginationEl
        ? {
            el: paginationEl,
            clickable: true,
          }
        : undefined,
      breakpoints: {
        768: {
          enabled: false,
        },
      },
    });

    swiperInstances.set(selector, swiper);
    return swiper;
  }
}
