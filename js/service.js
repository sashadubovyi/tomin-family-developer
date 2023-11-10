/////////////////////
//////// TEAM SWIPER
/////////////////////

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  spaceBeetween: 40,
  slidesPerView: 1,
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

  pagination: {
    el: ".teamPagination",
  },

  navigation: {
    nextEl: ".teamBtnNext",
    prevEl: ".teamBtnPrev",
  },
});
