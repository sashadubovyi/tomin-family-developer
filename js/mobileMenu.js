const menuOpenBtn = document.querySelector(".menuBtn");
const menuCloseBtn = document.querySelector(".menuClose");
const menuWrap = document.querySelector(".mobileMenuWrapper");

menuOpenBtn.addEventListener("click", openMenu);
menuCloseBtn.addEventListener("click", closeMenu);

function openMenu() {
  menuWrap.classList.remove("close-animation");
  menuWrap.style.display = "flex";
  document.body.classList.add("menu-open");
  document.addEventListener("keydown", EscClose);
  menuWrap.addEventListener("click", closeMenuPressOutOfModal);
}

function closeMenu() {
  menuWrap.classList.add("close-animation");
  setTimeout(() => {
    menuWrap.style.display = "none";
    document.body.classList.remove("menu-open");
    document.removeEventListener("keydown", EscClose);
    menuWrap.removeEventListener("click", closeMenuPressOutOfModal);
  }, 600);
}

function EscClose(evt) {
  if (evt.key === "Escape") {
    closeMenu();
  }
}

function closeMenuPressOutOfModal(evt) {
  if (evt.target === menuWrap) {
    closeMenu();
  }
}

//////////////////
///// number count
//////////////////

const statisticsNumbers = document.querySelectorAll(".statisticsNumber");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        const targetNumberText = entry.target.textContent.replace(/\s/g, "");
        const targetNumber = parseInt(targetNumberText, 10);
        startCounting(entry.target, targetNumber);
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 1,
  }
);

function startCounting(element, targetNumber) {
  let currentNumber = 0;
  const duration = 2000;
  const steps = 60;

  const increment = targetNumber / steps;
  const interval = duration / steps;

  const countInterval = setInterval(() => {
    if (currentNumber < targetNumber) {
      currentNumber += increment;
      element.textContent = Math.floor(currentNumber).toLocaleString();
    } else {
      element.textContent = targetNumber.toLocaleString();
      clearInterval(countInterval);
    }
  }, interval);
}

statisticsNumbers.forEach((number) => {
  observer.observe(number);
});
