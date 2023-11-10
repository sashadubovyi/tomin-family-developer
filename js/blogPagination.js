const newsBtn = document.querySelectorAll(".newsBtn");
const numberBtn = document.querySelectorAll(".numberBtn");

newsBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    newsBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  });
});

numberBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    numberBtn.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  });
});
