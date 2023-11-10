//////////////////////
//// partObj Swiper
//////////////////////

const swiper = new Swiper(".partObjSwiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    1440: {
      slidesPerView: 1.5,
      spaceBetween: 40,
    },
  },

  pagination: {
    el: ".partObjPagination",
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
    nextEl: ".partObjBtnNext",
    prevEl: ".partObjBtnPrev",
  },
});

//////////////////////
//// team Swiper
//////////////////////

const swiperTeam = new Swiper(".teamSwiper", {
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

///////////////////////////////////
//// validation form
///////////////////////////////////

function initializeFormValidation() {
  const forms = document.querySelectorAll(".formOnPage");

  forms.forEach(function (form) {
    const nameInputOnPage = form.querySelector(".nameInputOnPage");
    const phoneInputOnPage = form.querySelector(".phoneInputOnPage");
    const errorNameOnPage = form.querySelector(".errorNameOnPage");
    const errorPhoneOnPage = form.querySelector(".errorPhoneOnPage");
    const popupLinkOnPage = form.querySelector(".popupLinkOnPage");

    if (
      !nameInputOnPage ||
      !phoneInputOnPage ||
      !errorNameOnPage ||
      !errorPhoneOnPage ||
      !popupLinkOnPage
    ) {
      return;
    }

    let isPhoneValidFlagOnPage = false;
    let isNameValidFlagOnPage = false;

    function isPhoneValidOnPage(phoneNumber) {
      return phoneNumber.length >= 10;
    }

    function isNameValidOnPage(name) {
      return name.length > 1;
    }

    function updatePopupLinkOnPage() {
      const phoneValueOnPage = phoneInputOnPage.value.replace(/\D/g, "");
      isPhoneValidFlagOnPage = isPhoneValidOnPage(phoneValueOnPage);
      isNameValidFlagOnPage = isNameValidOnPage(nameInputOnPage.value);

      if (isPhoneValidFlagOnPage && isNameValidFlagOnPage) {
        popupLinkOnPage.disabled = false;
      } else {
        popupLinkOnPage.disabled = true;
      }
    }

    if (phoneInputOnPage) {
      phoneInputOnPage.addEventListener("input", function () {
        const phoneNumberOnPage = phoneInputOnPage.value.replace(/\D/g, "");
        if (phoneNumberOnPage.length >= 10 && phoneNumberOnPage.length <= 13) {
          errorPhoneOnPage.style.display = "none";
          phoneInputOnPage.style.border = "";
          phoneInputOnPage.style.background = "";
          phoneInputOnPage.style.color = "";
        } else {
          errorPhoneOnPage.style.display = "flex";
          phoneInputOnPage.style.border = "1px solid #F93D20";
          phoneInputOnPage.style.background = "#FFF9F9";
          phoneInputOnPage.style.color = "#F93D20";
        }
        updatePopupLinkOnPage();
      });
    }

    if (nameInputOnPage) {
      nameInputOnPage.addEventListener("input", function () {
        if (nameInputOnPage.value.length > 1) {
          errorNameOnPage.style.display = "none";
          nameInputOnPage.style.border = "";
        } else {
          errorNameOnPage.style.display = "flex";
          nameInputOnPage.style.border = "1px solid #F93D20";
        }
        updatePopupLinkOnPage();
      });
    }

    if (popupLinkOnPage) {
      popupLinkOnPage.addEventListener("click", function (event) {
        event.preventDefault();

        openThxPopup();
      });
    }

    function openThxPopup() {
      const thxPopup = document.querySelector(".thxWrapper");
      thxPopup.style.display = "flex";
    }
  });
}

initializeFormValidation();
