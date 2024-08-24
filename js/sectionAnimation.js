document.addEventListener("DOMContentLoaded", function () {
  let divS = document.querySelectorAll("div");

  function checkBlocksVisibility() {
    let windowHeight = window.innerHeight;

    divS.forEach((div) => {
      let divPos = div.getBoundingClientRect().top;

      if (divPos < windowHeight - 100) {
        div.style.opacity = "1";

        div.style.transform = "translateY(0)";
      } else {
        div.style.opacity = "0";

        div.style.transform = "translateY(50px)";
      }
    });
  }

  checkBlocksVisibility();

  window.addEventListener("scroll", checkBlocksVisibility);
});
