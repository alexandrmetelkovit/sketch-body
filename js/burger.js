const bodyNode = document.body; // Используем body напрямую
const hamburgerNode = document.getElementById("hamburger");
const navMenuNode = document.getElementById("navMenu");

function openBurgerLinks() {
  hamburgerNode.classList.toggle("active");
  navMenuNode.classList.toggle("active");
  bodyNode.classList.toggle("body_fixed");
}

function closeBurgerLinks() {
  hamburgerNode.classList.remove("active");
  navMenuNode.classList.remove("active");
  bodyNode.classList.remove("body_fixed");
}

// Обработчик клика по бургеру
hamburgerNode.addEventListener("click", (e) => {
  e.stopPropagation(); // Остановить всплытие события
  openBurgerLinks();
});

// Закрытие бургер-меню при клике на навигационные ссылки
document.querySelectorAll(".nav__link").forEach((n) => {
  n.addEventListener("click", () => {
    closeBurgerLinks();
  });
});

// Закрытие бургер-меню при нажатии клавиши Escape
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hamburgerNode.classList.remove("active");
    navMenuNode.classList.remove("active");
    bodyNode.classList.remove("body_fixed");
  }
});

document.addEventListener("click", (e) => {
  if (
    navMenuNode.classList.contains("active") &&
    !hamburgerNode.contains(e.target) &&
    !navMenuNode.contains(e.target)
  ) {
    closeBurgerLinks();
  }
});
