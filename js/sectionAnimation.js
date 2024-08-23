document.addEventListener("DOMContentLoaded", function () {
  let sections = document.querySelectorAll("section");

  function checkBlocksVisibility() {
    let windowHeight = window.innerHeight;

    sections.forEach((section) => {
      let sectionPosition = section.getBoundingClientRect().top;

      if (sectionPosition < windowHeight - 100) {
        section.style.opacity = "1";

        section.style.transform = "translateY(0)";
      } else {
        section.style.opacity = "0";

        section.style.transform = "translateY(50px)";
      }
    });
  }

  checkBlocksVisibility();

  window.addEventListener("scroll", checkBlocksVisibility);
});
