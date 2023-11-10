//////////////////////
////  PARTNERS cards
//////////////////////

const partnersBtn = document.querySelector(".allPartnersBtn");
const partnersItems = document.querySelectorAll(".partnersItem");

let isShow = false;

partnersBtn.addEventListener("click", toggleOpenClosePartners);

function toggleOpenClosePartners() {
  if (isShow) {
    partnersItems.forEach((item, index) => {
      if (index < 3) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
    partnersBtn.innerHTML = `<span class="orangePartnersDot"></span>Дивитись всі`;
  } else {
    partnersItems.forEach((item) => {
      item.style.display = "flex";
    });
    partnersBtn.innerHTML = `<span class="orangePartnersDot"></span>Згорнути`;
  }
  isShow = !isShow;
}

//////////////////////
////  SWIPER
//////////////////////

const swiper = new Swiper(".developerSwiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".developerPagination",
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
    nextEl: ".developerBtnNext",
    prevEl: ".developerBtnPrev",
  },
});
