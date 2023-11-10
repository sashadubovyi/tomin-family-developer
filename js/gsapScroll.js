gsap.registerPlugin(ScrollTrigger);
// index.html

const autoScrollEsteticEl = document.querySelector(".autoScrollEstetic");

if (autoScrollEsteticEl) {
  const tl = gsap.timeline();

  let mm = gsap.matchMedia();

  mm.add(
    {
      isMobile: "(max-width: 767px)",
      isTablet: "(min-width: 768px) and (max-width: 1024px)",
      isDesktop: "(min-width: 1025px)",
    },
    (context) => {
      if (context.conditions.isMobile) {
        tl.to(".autoScrollEstetic", 5, {
          x: -window.innerHeight * 2.55 + window.innerWidth,
        });
      } else if (context.conditions.isTablet) {
        tl.to(".autoScrollEstetic", 5, {
          x: -window.innerHeight * 2.6 + window.innerWidth,
        });
      } else if (context.conditions.isDesktop) {
        tl.to(".autoScrollEstetic", 5, {
          x: -window.innerHeight * 3.2 + window.innerWidth,
        });
      }
    }
  );

  document.querySelectorAll(".autoScrollTitle").forEach((title, index) => {
    tl.to(title, 2, { x: -(index + 1) * 50 }, "-=5");
  });

  document.querySelectorAll(".autoScrollEstetic p").forEach((text, index) => {
    tl.to(text, 2, { x: -(index + 1) * 50 }, "-=5");
  });

  ScrollTrigger.create({
    animation: tl,
    trigger: ".autoScrollEstetic",
    start: "center center",
    end: "+=2000",
    scrub: 1,
    pin: true,
  });
}

//project.html

const infrastructureListEl = document.querySelectorAll(
  ".infrastructureList li"
);
if (window.matchMedia("(min-width: 1440px").matches) {
  if (infrastructureListEl.length > 0) {
    const ii = gsap.timeline();

    ii.to(".infrastructureList li", 5, { x: -window.innerWidth });

    document.querySelectorAll(".infrastructureText").forEach((title, index) => {
      ii.to(title, 2, { x: -(index - 10) }, "-=5");
    });

    ScrollTrigger.create({
      animation: ii,
      trigger: ".infrastructureSection",
      start: "center center",
      end: "+=2000",
      scrub: true,
      pin: true,
    });
  }
}

// full container

const fullContainerBuildingEl = document.querySelector(
  ".fullContainerBuilding"
);
const fullContainerTextEl = document.querySelector(".fullContainerText");

if (fullContainerBuildingEl && fullContainerTextEl) {
  const fc = gsap.timeline();

  fc.from(".fullContainerBuilding", { duration: 2, y: "100%" }).fromTo(
    ".fullContainerText",
    { opacity: 1 },
    { duration: 1, opacity: 0 }
  );

  ScrollTrigger.create({
    animation: fc,
    trigger: ".fullContainer",
    start: "top top",
    end: "+=1000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
  });
}
