import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

const blogPageSwiper = new Swiper(".blogPageSwiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,

  pagination: {
    el: ".blogPagePagination",
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

  navigation: {
    nextEl: ".blogPageButtonNext",
    prevEl: ".blogPageButtonPrev",
  },
});

/////////////////////
/////// video
/////////////////////

const videoPlayer = document.querySelector(".video-container");
const video = videoPlayer.querySelector(".video");
const playBtn = videoPlayer.querySelector(".play-button");

if (playBtn) {
  playBtn.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      playBtn.style.display = "none";
    } else {
      video.pause();
      playBtn.style.display = "flex";
    }
  });
}

if (video) {
  video.addEventListener("ended", function () {
    playBtn.style.display = "flex";
  });
}
