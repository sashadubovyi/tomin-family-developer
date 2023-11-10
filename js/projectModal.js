const projectOpenBtn = document.querySelector(".projectOpenBtn");
const projectMenu = document.querySelector(".projectModalWrapper");
const menuBtn = document.querySelector(".menuBtn");
const menuList = document.querySelector(".projectModalList");
const toggleIcon = projectOpenBtn.querySelector(".toggleIcon");

const isMobile = window.matchMedia("(max-width: 1023px)").matches;

if (isMobile) {
  menuBtn.addEventListener("click", closeModalByMenuBtn);
  projectOpenBtn.addEventListener("click", toggleProjectModal);
} else {
  projectOpenBtn.addEventListener("mouseenter", () => {
    openProjectModal();
    menuBtn.addEventListener("click", closeModalByMenuBtn);
  });
  projectOpenBtn.addEventListener("mouseleave", () => {
    closeProjectModal();
  });
  menuList.addEventListener("mouseenter", () => {
    openProjectModal();
  });

  if (menuList) {
    menuList.addEventListener("mouseleave", () => {
      closeProjectModal();
    });
  }
}

function openProjectModal() {
  projectMenu.style.display = "flex";
  document.body.classList.add("menu-open");
  document.addEventListener("keydown", handleEscClose);
  projectMenu.addEventListener("click", closeMenuPressOut);
  projectOpenBtn.style.color = "#f93d20";
  toggleIcon.style.stroke = "#f93d20";
  toggleIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="toggleIcon" width="10" height="6" viewBox="0 0 10 6" fill="none">
  <path d="M9 5L5 0.999999L1 5" stroke="#f93d20" stroke-width="2" stroke-linejoin="bevel"/>
</svg>
    `;
}

function closeProjectModal() {
  projectMenu.style.display = "none";
  document.body.classList.remove("menu-open");
  document.removeEventListener("keydown", handleEscClose);
  projectMenu.removeEventListener("click", closeMenuPressOut);
  projectOpenBtn.style.color = "";
  toggleIcon.style.stroke = "";
  toggleIcon.innerHTML = `
        <svg
                class="toggleIcon"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke-width="2"
                  stroke-linejoin="bevel"
                />
              </svg>
    `;
}

function toggleProjectModal() {
  if (
    projectMenu.style.display === "none" ||
    projectMenu.style.display === ""
  ) {
    projectMenu.style.display = "flex";
    document.body.classList.add("menu-open");
    document.addEventListener("keydown", handleEscClose);
    projectMenu.addEventListener("click", closeMenuPressOut);
    projectOpenBtn.style.color = "#f93d20";
    toggleIcon.style.stroke = "#f93d20";
    toggleIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
      <path d="M13 7L7 0.999999L1 7" stroke-width="2" stroke-linejoin="bevel"/>
    </svg>
    `;
  } else {
    projectMenu.style.display = "none";
    document.body.classList.remove("menu-open");
    document.removeEventListener("keydown", handleEscClose);
    projectMenu.removeEventListener("click", closeMenuPressOut);
    projectOpenBtn.style.color = "#141414";
    toggleIcon.style.stroke = "#141414";
    toggleIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
      <path d="M1 1L7 7L13 1" stroke-width="2" stroke-linejoin="bevel"/>
    </svg>
    `;
  }
}

function closeModalByMenuBtn() {
  if (
    projectMenu.style.display === "none" ||
    projectMenu.style.display === ""
  ) {
    projectMenu.style.display = "";
  } else {
    projectMenu.style.display = "none";
    projectOpenBtn.style.color = "#141414";
    toggleIcon.style.stroke = "#141414";
    toggleIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
      <path d="M1 1L7 7L13 1" stroke-width="2" stroke-linejoin="bevel"/>
    </svg>
    `;
  }
}

function handleEscClose(evt) {
  if (evt.key === "Escape") {
    toggleProjectModal();
  }
}

function closeMenuPressOut(evt) {
  if (evt.target === projectMenu) {
    toggleProjectModal();
  }
}

/////////////////////
////// show line
/////////////////////

const lines = document.querySelectorAll(".line");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("activeLine");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 1,
  }
);

lines.forEach((line) => {
  observer.observe(line);
});
