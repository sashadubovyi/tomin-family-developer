///////////////////
///// show photo
///////////////////

const photos = document.querySelectorAll(".teamItem");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

photos.forEach((photo) => {
  observer.observe(photo);
});
