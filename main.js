const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");
const nav = document.querySelector("nav");

const faqContent = document.querySelectorAll(".each-faq-con>p");
const faqHead = document.querySelectorAll(".faq-content-con p:first-child");

openIcon.addEventListener("click", function () {
  nav.style.right = "0";
});

closeIcon.addEventListener("click", function () {
  nav.style.right = "-400px";
});

/* ============== */
// FAQ Section
faqContent.forEach(function (each, i) {
  each.style.display = "none";
});

faqHead.forEach(function (each, i) {
  //   faqContent[i].style.display = "none";
  each.addEventListener("click", function (e) {
    faqContent.forEach(function (each) {
      if (each !== faqContent[i]) {
        // each.style.display = "none";
        each.classList.remove("add-open-close");
      }
    });
    faqContent[i].classList.toggle("add-open-close");
  });
});
