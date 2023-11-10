////////////////////
////////  SWIPER
///////////////////
const swiper = new Swiper(".repairSwiperSwiper", {
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
    el: ".repairPagination",
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
    nextEl: ".repairBtnNext",
    prevEl: ".repairBtnPrev",
  },
});

////////////////////
////////  OPEN CARDS
///////////////////

const items = document.querySelectorAll(".servicesItem");

let isShown = false;

items.forEach((item) => {
  const button = item.querySelector(".servicesBtn");
  const additionalBox = item.querySelector(".servicesAdditionalBox");
  const arrow = item.querySelector(".arrRight");
  let isShow = false;

  button.addEventListener("click", () => {
    if (!isShow) {
      isShow = true;
      additionalBox.style.display = "flex";
    } else {
      isShow = false;
      additionalBox.style.display = "none";
    }
  });
});

////////////////////
////////  OPEN POPUP
///////////////////

const popupWrapper = document.querySelector(".repairPopupWrapper");
const popupOpenBtns = document.querySelectorAll(".repairOpenPopUp");
const popupCloseBtn = document.querySelector(".closeRepairPopupBtn");
const popupLink = document.querySelector(".popupRepairLink");
const phoneInput = document.querySelector(".phoneRepairInput");
const errorPhone = document.querySelector(".errorRepairPhone");
const nameInput = document.querySelector(".nameRepairInput");
const errorName = document.querySelector(".errorRepairName");

let isPhoneValidFlag = false;
let isNameValidFlag = false;

for (const button of popupOpenBtns) {
  button.addEventListener("click", openPopup);
}
popupCloseBtn.addEventListener("click", closePopup);
popupLink.addEventListener("click", () => {
  popupLink.innerHTML = `<span class="leftSpanBtn popupSpanLeft"></span><svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 3C7.92487 3 3 7.92487 3 14C3 14.5523 2.55228 15 2 15C1.44772 15 1 14.5523 1 14C1 6.8203 6.8203 1 14 1C14.5523 1 15 1.44772 15 2C15 2.55228 14.5523 3 14 3ZM26 13C26.5523 13 27 13.4477 27 14C27 21.1797 21.1797 27 14 27C13.4477 27 13 26.5523 13 26C13 25.4477 13.4477 25 14 25C20.0751 25 25 20.0751 25 14C25 13.4477 25.4477 13 26 13Z" fill="#F93D20"/></svg><span class="rightSpanBtn popupSpanRight"></span>`;
  closePopup();
});

function openPopup() {
  nameInput.disabled = false;
  phoneInput.disabled = false;
  popupWrapper.style.display = "flex";
  document.body.style.overflow = "hidden";
  document.body.addEventListener("click", preventClick);
  document.body.addEventListener("touchstart", preventClick);
  document.addEventListener("keydown", closeEsc);
  document.addEventListener("click", clickOutPopup);
  popupLink.innerHTML = `<span class="leftSpanBtn popupSpanLeft"></span>Залишити заявку<span class="rightSpanBtn popupSpanRight"></span>`;
}

function closePopup() {
  phoneInput.value = "";
  nameInput.value = "";
  nameInput.disabled = true;
  phoneInput.disabled = true;
  popupWrapper.style.display = "none";
  document.body.style.overflow = "auto";
  document.body.removeEventListener("click", preventClick);
  document.body.removeEventListener("touchstart", preventClick);
  document.removeEventListener("keydown", closeEsc);
  document.removeEventListener("click", clickOutPopup);
}

function preventClick(event) {
  if (!popupWrapper.contains(event.target)) {
    event.preventDefault();
    event.stopPropagation();
  }
}

function closeEsc(evt) {
  if (evt.key === "Escape") {
    closePopup();
  }
}

function clickOutPopup(evt) {
  if (evt.target === popupWrapper) {
    closePopup();
  }
}

function isPhoneValid(phoneNumber) {
  return phoneNumber.length >= 10;
}

function isNameValid(name) {
  return name.length > 1;
}

function updatePopupLink() {
  const phoneValue = phoneInput.value.replace(/\D/g, "");
  isPhoneValidFlag = isPhoneValid(phoneValue);
  isNameValidFlag = isNameValid(nameInput.value);

  if (isPhoneValidFlag && isNameValidFlag) {
    popupLink.disabled = false;
  } else {
    popupLink.disabled = true;
  }
}

phoneInput.addEventListener("input", function () {
  const phoneNumber = phoneInput.value.replace(/\D/g, "");
  if (phoneNumber.length >= 10 && phoneNumber.length <= 13) {
    errorPhone.style.display = "none";
    phoneInput.style.border = "";
    phoneInput.style.background = "";
    phoneInput.style.color = "";
  } else {
    errorPhone.style.display = "flex";
    phoneInput.style.border = "1px solid #F93D20";
    phoneInput.style.background = "#FFF9F9";
    phoneInput.style.color = "#F93D20";
  }
  updatePopupLink();
});

nameInput.addEventListener("input", function () {
  if (nameInput.value.length > 1) {
    errorName.style.display = "none";
    nameInput.style.border = "";
    nameInput.style.background = "";
  } else {
    errorName.style.display = "flex";
    nameInput.style.border = "1px solid #F93D20";
    nameInput.style.background = "#FFF9F9";
  }
  updatePopupLink();
});

///////////////////////////
////////  OPEN POPUP THX
///////////////////////////

const thxWrapper = document.querySelector(".thxRepairWrapper");
const thxClosePopupBtn = document.querySelector(".thxRepairClosePopupBtn");

thxClosePopupBtn.addEventListener("click", closeThxPopup);

function openThxPopup() {
  thxWrapper.style.display = "flex";
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", closeThxEsc);
  document.addEventListener("click", clickOutThxPopup);
  document.body.addEventListener("click", preventThxClick);
  document.body.addEventListener("touchstart", preventThxClick);
}

function closeThxPopup() {
  thxWrapper.style.display = "none";
  document.body.style.overflow = "auto";
  document.removeEventListener("keydown", closeThxEsc);
  document.removeEventListener("click", clickOutThxPopup);
  document.body.removeEventListener("click", preventThxClick);
  document.body.removeEventListener("touchstart", preventThxClick);
}

function preventThxClick(event) {
  if (!thxWrapper.contains(event.target)) {
    event.preventDefault();
    event.stopPropagation();
  }
}

function closeThxEsc(evt) {
  if (evt.key === "Escape") {
    closeThxPopup();
  }
}

function clickOutThxPopup(evt) {
  if (evt.target === thxWrapper) {
    closeThxPopup();
  }
}
