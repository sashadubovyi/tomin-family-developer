const matchRoom = document.querySelectorAll(".matchRoom");
const yearLink = document.querySelectorAll(".yearLink");
const seasonLink = document.querySelectorAll(".seasonLink");

matchRoom.forEach((btn) => {
  btn.addEventListener("click", () => {
    matchRoom.forEach((btn) => {
      btn.classList.remove("current");
    });
    btn.classList.add("current");
  });
});

yearLink.forEach((btn) => {
  btn.addEventListener("click", () => {
    yearLink.forEach((btn) => {
      btn.classList.remove("current");
    });
    btn.classList.add("current");
  });
});

seasonLink.forEach((btn) => {
  btn.addEventListener("click", () => {
    seasonLink.forEach((btn) => {
      btn.classList.remove("current");
    });
    btn.classList.add("current");
  });
});
