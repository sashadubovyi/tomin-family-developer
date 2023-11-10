var swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".custom-button-next",
    prevEl: ".custom-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        " - " +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },
    formatFractionCurrent: function (number) {
      return number.toString().padStart(2, "0");
    },
    formatFractionTotal: function (number) {
      return number.toString().padStart(2, "0");
    },
  },
});

var swiperStory = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    disableOnInteraction: false,
  },

  pagination: {
    el: ".custom-swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
  navigation: {
    nextEl: ".custom-swiper-button-next",
    prevEl: ".custom-swiper-button-prev",
  },
  loop: true,
});

swiperStory.on("slideChange", function () {
  const bullets = document.querySelectorAll(
    ".custom-swiper-pagination .swiper-pagination-bullet"
  );
  const activeIndex = swiperStory.realIndex;

  for (let i = 0; i < bullets.length; i++) {
    if (i < activeIndex) {
      bullets[i].style.opacity = "1";
      bullets[i].style.borderRadius = "2px";
      bullets[i].style.backgroundColor = "var(--bcg-white-color)";
    } else {
      bullets[i].style.opacity = "";
      bullets[i].style.backgroundColor = "";
    }
  }
});

var swiperFamily = new Swiper(".swiperFamily", {
  spaceBetween: 20,
  centeredSlides: false,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
    loop: true,
  },
  slidesPerView: 3,
});
