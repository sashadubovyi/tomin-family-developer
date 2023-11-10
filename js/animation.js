function observeWithThreshold(elements) {
  const observerOptions = {
    threshold: 1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.add("animation-1s");
      observer.unobserve(entry.target);
    });
  }, observerOptions);

  elements.forEach((item) => {
    observer.observe(item);
  });
}

// ////////////////////////////////////////////////////////////////

function observeWithRootMargin(elements) {
  const observerOptions = {
    rootMargin: "0px 0px -150px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animation-1s");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach((item) => {
    observer.observe(item);
  });
}

const title = document.querySelectorAll(".title");
const text = document.querySelectorAll(".text");
const credoText = document.querySelectorAll(".credoText");
const principlesBtnTextBox = document.querySelectorAll(".principlesBtnTextBox");
const instaLink = document.querySelectorAll(".instaLink");
const preViewTitle = document.querySelectorAll(".preViewTitle");
const rightSideBtn = document.querySelectorAll(".rightSideBtn");
const leftSideBtn = document.querySelectorAll(".leftSideBtn");
const bannerText = document.querySelectorAll(".bannerText");
const managementSvg = document.querySelectorAll(".managementSvg");
const housemasterSvg = document.querySelectorAll(".housemasterSvg");
const documentText = document.querySelectorAll(".documentText");
const agencyMainText = document.querySelectorAll(".agencyMainText");
const applicationRightSpan = document.querySelectorAll(".applicationRightSpan");
const applicationLeftSpan = document.querySelectorAll(".applicationLeftSpan");
const sellTitle = document.querySelectorAll(".sellTitle");
const feedbackText = document.querySelectorAll(".feedbackText");
const rightSpanBtn = document.querySelectorAll(".rightSpanBtn");
const leftSpanBtn = document.querySelectorAll(".leftSpanBtn");
const swImg = document.querySelectorAll(".swImg");
const clientPhoto = document.querySelectorAll(".clientPhoto");
const clientInstaLink = document.querySelectorAll(".clientInstaLink");
const repairTitle = document.querySelectorAll(".repairTitle");
const repairText = document.querySelectorAll(".repairText");
const leftSideRepairModalBtn = document.querySelectorAll(
  ".leftSideRepairModalBtn"
);
const rightSideRepairModalBtn = document.querySelectorAll(
  ".rightSideRepairModalBtn"
);
const wwdTextContainer = document.querySelectorAll(".wwdTextContainer");
const leftSideVariableBtn = document.querySelectorAll(".leftSideVariableBtn");
const rightSideVariableBtn = document.querySelectorAll(".rightSideVariableBtn");
const variableItem = document.querySelectorAll(".variableItem");
const servicesBtnTextBox = document.querySelectorAll(".servicesBtnTextBox");
const priceVariableItem = document.querySelectorAll(".priceVariableItem");
const leftSidePricesBtn = document.querySelectorAll(".leftSidePricesBtn");
const rightSidePricesBtn = document.querySelectorAll(".rightSidePricesBtn");
const rightSideDoneBtn = document.querySelectorAll(".rightSideDoneBtn");
const leftSideDoneBtn = document.querySelectorAll(".leftSideDoneBtn");
const repairSpanRight = document.querySelectorAll(".repairSpanRight");
const repairSpanLeft = document.querySelectorAll(".repairSpanLeft");
const tenderLink = document.querySelectorAll(".tender-link");
const blogLink = document.querySelectorAll(".blogLink");
const blogTitle = document.querySelectorAll(".blogTitle");
const blogText = document.querySelectorAll(".blogText");
const commentsTitle = document.querySelectorAll(".commentsTitle");
const authorContainer = document.querySelectorAll(".authorContainer");
const phylosophyText = document.querySelectorAll(".phylosophyText");
const awardsText = document.querySelectorAll(".awardsText");
const spanRightLineBtn = document.querySelectorAll(".spanRightLineBtn");
const spanLeftLineBtn = document.querySelectorAll(".spanLeftLineBtn");
const featuresItem = document.querySelectorAll(".featuresItem");
const partnersText = document.querySelectorAll(".partnersText");
const blogPageTitle = document.querySelectorAll(".blogPageTitle");
const blogPageNewsText = document.querySelectorAll(".blogPageNewsText");
const orangeDot = document.querySelectorAll(".orangeDot");
const aboutProjectTitle = document.querySelectorAll(".aboutProjectTitle");
const aboutProjectText = document.querySelectorAll(".aboutProjectText");
const techText = document.querySelectorAll(".techText");
const mapAddress = document.querySelectorAll(".mapAddress");
const mapLink = document.querySelectorAll(".mapLink");
const docItem = document.querySelectorAll(".docItem");
// const popupSpanLeft = document.querySelectorAll(".popupSpanLeft");
// const popupSpanRight = document.querySelectorAll(".popupSpanRight");

observeWithRootMargin(text);
observeWithRootMargin(repairText);
observeWithRootMargin(credoText);
observeWithRootMargin(bannerText);
observeWithRootMargin(managementSvg);
observeWithRootMargin(housemasterSvg);
observeWithRootMargin(documentText);
observeWithRootMargin(principlesBtnTextBox);
observeWithRootMargin(preViewTitle);
observeWithRootMargin(rightSideBtn);
observeWithRootMargin(leftSideBtn);
observeWithRootMargin(agencyMainText);
observeWithRootMargin(applicationRightSpan);
observeWithRootMargin(applicationLeftSpan);
observeWithRootMargin(sellTitle);
observeWithRootMargin(feedbackText);
observeWithRootMargin(leftSpanBtn);
observeWithRootMargin(rightSpanBtn);
observeWithRootMargin(swImg);
observeWithRootMargin(clientPhoto);
observeWithRootMargin(clientInstaLink);
observeWithRootMargin(rightSideRepairModalBtn);
observeWithRootMargin(leftSideRepairModalBtn);
observeWithRootMargin(wwdTextContainer);
observeWithRootMargin(rightSideVariableBtn);
observeWithRootMargin(leftSideVariableBtn);
observeWithRootMargin(variableItem);
observeWithRootMargin(servicesBtnTextBox);
observeWithRootMargin(priceVariableItem);
observeWithRootMargin(rightSidePricesBtn);
observeWithRootMargin(leftSidePricesBtn);
observeWithRootMargin(leftSideDoneBtn);
observeWithRootMargin(rightSideDoneBtn);
observeWithRootMargin(repairSpanLeft);
observeWithRootMargin(repairSpanRight);
observeWithRootMargin(tenderLink);
observeWithRootMargin(blogLink);
observeWithRootMargin(blogTitle);
observeWithRootMargin(blogText);
observeWithRootMargin(commentsTitle);
observeWithRootMargin(authorContainer);
observeWithRootMargin(phylosophyText);
observeWithRootMargin(awardsText);
observeWithRootMargin(spanRightLineBtn);
observeWithRootMargin(spanLeftLineBtn);
observeWithRootMargin(featuresItem);
observeWithRootMargin(partnersText);
observeWithRootMargin(blogPageTitle);
observeWithRootMargin(blogPageNewsText);
observeWithRootMargin(orangeDot);
observeWithRootMargin(aboutProjectTitle);
observeWithRootMargin(aboutProjectText);
observeWithRootMargin(techText);
observeWithRootMargin(mapAddress);
observeWithRootMargin(mapLink);
observeWithRootMargin(docItem);
// observeWithRootMargin(popupSpanRight);
// observeWithRootMargin(popupSpanLeft);

observeWithThreshold(title);
observeWithThreshold(repairTitle);
observeWithThreshold(instaLink);
