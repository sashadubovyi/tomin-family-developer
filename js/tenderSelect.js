function toggleOptionList(selectList, selectArrow) {
  if (selectList.style.display === "none" || selectList.style.display === "") {
    selectList.style.display = "flex";
    selectList.classList.add("active");
    selectArrow.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
        <path d="M17 9L9 0.999999L1 9" stroke="#F93D20" stroke-width="2" stroke-linejoin="bevel"/>
      </svg>
    `;
  } else {
    selectList.style.display = "none";
    selectArrow.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
        <path d="M1 0.999999L9 9L17 1" stroke="#F93D20" stroke-width="2" stroke-linejoin="bevel"/>
      </svg>
    `;
  }
}

function handleOptionSelect(selectOptions, selectedValue) {
  selectOptions.forEach((option) => {
    if (option.getAttribute("data-value") === selectedValue) {
      option.style.color = "#f93d20";
    } else {
      option.style.color = "";
    }
  });
}

// 1
const customStatus = document.querySelector("#list-status");
const selectStatusValue = customStatus.querySelector(".selectStatusValue");
const selectStatusList = customStatus.querySelector(".selectStatusList");
const selectStatusOption = customStatus.querySelectorAll(".selectStatusOption");
const selectStatusArrow = customStatus.querySelector(".selectArrow");
const selectStOption = document.querySelectorAll(".selectStOption");
const selectCuOption = document.querySelectorAll(".selectCuOption");

customStatus.addEventListener("click", () => {
  toggleOptionList(selectStatusList, selectStatusArrow);
});

selectStatusList.addEventListener("click", (event) => {
  if (event.target.classList.contains("selectStatusOption")) {
    const selectedValue = event.target.getAttribute("data-value");
    selectStatusValue.textContent = event.target.textContent;
    selectStatusList.classList.remove("active");
    customStatus.setAttribute("data-selected-value", selectedValue);

    selectStOption.forEach((option) => {
      const optionValue = option.getAttribute("value");
      if (optionValue === selectedValue) {
        option.setAttribute("selected", "");
      } else {
        option.removeAttribute("selected");
      }
    });
    $("#search_button_filter").click();
  }
});

// 2
const customCustomers = document.querySelector("#list-customers");
const selectCustomersValue = customCustomers.querySelector(
  ".selectCustomersValue"
);
const selectCustomersList = customCustomers.querySelector(
  ".selectCustomersList"
);
const selectCustomersOption = customCustomers.querySelectorAll(
  ".selectCustomersOption"
);
const selectCustomersArrow = customCustomers.querySelector(".selectArrow");

customCustomers.addEventListener("click", () => {
  toggleOptionList(selectCustomersList, selectCustomersArrow);
});

selectCustomersList.addEventListener("click", (event) => {
  if (event.target.classList.contains("selectCustomersOption")) {
    const selectedValue = event.target.getAttribute("data-value");
    selectCustomersValue.textContent = event.target.textContent;
    selectCustomersList.classList.remove("active");
    customCustomers.setAttribute("data-selected-value", selectedValue);

    selectCuOption.forEach((option) => {
      const optionValue = option.getAttribute("value");
      if (optionValue === selectedValue) {
        option.setAttribute("selected", "");
      } else {
        option.removeAttribute("selected");
      }
    });
    $("#search_button_filter").click();
  }
});
