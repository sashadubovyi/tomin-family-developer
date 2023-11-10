import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

const firstSwiper = new Swiper(".firstSwiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".firstSwiperPagination",
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
    nextEl: ".firstSwiperButtonNext",
    prevEl: ".firstSwiperButtonPrev",
  },
});

const secondSwiper = new Swiper(".secondSwiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,

  pagination: {
    el: ".secondSwiperPagination",
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
    nextEl: ".secondSwiperButtonNext",
    prevEl: ".secondSwiperButtonPrev",
  },

  breakpoints: {
    1024: {
      slidesPerView: 1.5,
      spaceBetween: 40,
    },
  },
});

const mapSwiper = new Swiper(".mapSwiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".mapSwiperPagination",
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
    nextEl: ".mapSwiperButtonNext",
    prevEl: ".mapSwiperButtonPrev",
  },
});

const planningSwiperInit = () => {
  try {
    const planningSwipers = document?.querySelectorAll(".planningSwiper");

    if (planningSwipers) {
      planningSwipers.forEach((item) => {
        let planningSwiper = new Swiper(item, {
          loop: true,
          lazy: true,
          speed: 1000,
          spaceBetween: 40,
          slidesPerView: 1,
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          },
          navigation: {
            prevEl: ".planningButtonPrev",
            nextEl: ".planningButtonNext",
          },
        });
      });
    }
  } catch (e) {
    console.error("function has some troubles, error is:", e);
  }
};
planningSwiperInit();

const tabsFunc = () => {
  try {
    const tabsBtn = document.querySelectorAll(".matchRoom");
    const tabs = document.querySelectorAll(".tabContainer");

    tabsBtn.forEach((item) => {
      let currentTabBtn = item;
      let tabId = currentTabBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      item.classList.contains("active")
        ? currentTab.classList.add("active")
        : null;

      item.addEventListener("click", () => {
        if (!currentTabBtn.classList.contains("active")) {
          tabsBtn.forEach((item) => {
            item.classList.remove("active");
          });

          tabs.forEach((item) => {
            item.classList.remove("active");
          });

          currentTabBtn.classList.add("active");
          currentTab.classList.add("active");
        }
      });
    });
  } catch (e) {
    console.error("Function tabsFunction has some troubles, error is:", e);
  }
};
tabsFunc();

const constractionSwiperInit = () => {
  try {
    const constructionSwipers = document?.querySelectorAll(
      ".constructionSwiper"
    );

    if (constructionSwipers) {
      constructionSwipers.forEach((item) => {
        let constructionSwiper = new Swiper(item, {
          // loop: true,
          lazy: true,
          speed: 1000,
          spaceBetween: 40,
          slidesPerView: 1,
          navigation: {
            prevEl: ".constructionButtonPrev",
            nextEl: ".constructionButtonNext",
          },
          pagination: {
            el: ".constructionPagination",
            type: "fraction",
            renderFraction: function (currentClass, totalClass) {
              return (
                '<span class=" ' +
                currentClass +
                '"></span>' +
                " - " +
                '<span class="active ' +
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
      });
    }
  } catch (e) {
    console.error("function has some troubles, error is:", e);
  }
};
constractionSwiperInit();

const tabsSeasonFunc = () => {
  try {
    const yearBtns = document.querySelectorAll(".yearLink");
    const tabsConst = document.querySelectorAll(".tabConstractionContainer");
    const seasonBtns = document.querySelectorAll(".seasonLink");
    const constructionSwipers = document.querySelectorAll(
      ".constructionSwiper"
    );
    function updateHiddenSeasonBtnClass() {
      seasonBtns.forEach((item) => {
        const selectedSeason = item.getAttribute("data-season");

        const hasActiveTab = Array.from(tabsConst).some((tab) => {
          const seasonSlides = tab.querySelectorAll(
            `[data-season="${selectedSeason}"]`
          );
          return seasonSlides.length > 0 && tab.classList.contains("active");
        });

        if (hasActiveTab) {
          item.classList.remove("hidden-season-btn");
        } else {
          item.classList.add("hidden-season-btn");
        }
      });
    }

    updateHiddenSeasonBtnClass();

    yearBtns.forEach((item) => {
      item.addEventListener("click", () => {
        const tabId = item.getAttribute("data-const");
        yearBtns.forEach((btn) => {
          btn.classList.remove("current");
        });
        item.classList.add("current");
        tabsConst.forEach((tab) => {
          tab.classList.remove("active");
        });
        const selectedYearTab = document.querySelector(tabId);
        selectedYearTab.classList.add("active");
        updateHiddenSeasonBtnClass();
      });
    });

    seasonBtns.forEach((item) => {
      item.addEventListener("click", () => {
        const selectedSeason = item.getAttribute("data-season");

        seasonBtns.forEach((btn) => {
          btn.classList.remove("current");
        });
        item.classList.add("current");
        updateHiddenSeasonBtnClass();
        tabsConst.forEach((tab) => {
          tab.querySelectorAll(".constructionSlide").forEach((slide) => {
            slide.classList.remove("active");
          });

          const seasonSlides = tab.querySelectorAll(
            `[data-season="${selectedSeason}"]`
          );

          if (seasonSlides.length > 0) {
            seasonSlides.forEach((slide) => {
              slide.classList.add("active");
            });
          }

          const currentSwiper = tab.querySelector(".constructionSwiper");
          if (currentSwiper) {
            currentSwiper.swiper.update();
          }
        });
      });
    });
  } catch (e) {
    console.error("Function tabsSeasonFunc has some troubles, error is:", e);
  }
};

tabsSeasonFunc();
