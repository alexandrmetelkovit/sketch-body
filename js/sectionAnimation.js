// document.addEventListener("DOMContentLoaded", function () {
//   let sections = document.querySelectorAll("section");

//   function checkBlocksVisibility() {
//     let windowHeight = window.innerHeight;

//     sections.forEach((section) => {
//       let sectionPosition = section.getBoundingClientRect().top;

//       if (sectionPosition < windowHeight - 100) {
//         section.style.opacity = "1";
//         section.style.webkitOpacity = "1"; // Префикс для Safari
//         section.style.mozOpacity = "1"; // Префикс для Firefox
//         section.style.transform = "translateY(0)";
//         section.style.webkitTransform = "translateY(0)"; // Префикс для Safari
//         section.style.mozTransform = "translateY(0)"; // Префикс для Firefox
//       } else {
//         section.style.opacity = "0";
//         section.style.webkitOpacity = "0"; // Префикс для Safari
//         section.style.mozOpacity = "0"; // Префикс для Firefox
//         section.style.transform = "translateY(8px)";
//         section.style.webkitTransform = "translateY(8px)"; // Префикс для Safari
//         section.style.mozTransform = "translateY(8px)"; // Префикс для Firefox
//       }
//     });
//   }

//   checkBlocksVisibility();

//   window.addEventListener("scroll", checkBlocksVisibility);
// });
