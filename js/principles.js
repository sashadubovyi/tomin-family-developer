const buttons = document.querySelectorAll(".principlesItem");
const additionalTexts = document.querySelectorAll(".additionalText");
const texts = document.querySelectorAll(".text");
const principlesText = document.querySelectorAll(".principlesText");
const arrow = document.querySelectorAll(".principlesBtn .arrRight");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const isTextVisible = additionalTexts[index].classList.contains("visible");

    if (isTextVisible) {
      additionalTexts[index].classList.remove("visible");
      principlesText[index].style.color = "";
      if (arrow && arrow[index]) {
        arrow[index].style.stroke = "";
      }
      buttons[index].style.backgroundColor = "";
    } else {
      additionalTexts[index].classList.add("visible");
      principlesText[index].style.color = "#f93d20";
      if (arrow && arrow[index]) {
        arrow[index].style.stroke = "#f93d20";
      }
      buttons[index].style.backgroundColor = "FCFCFC";
    }
  });
});
