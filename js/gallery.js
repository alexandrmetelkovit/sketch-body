const slidesNode = document.querySelectorAll(".gallery__slide");
const nextBtnNode = document.querySelector(".gallery__control-next");
const prevBtnNode = document.querySelector(".gallery__control-prev");

let currentIndex = 0;
const totalSlides = slidesNode.length;

// Функция для показа текущего слайда
function showSlide(index) {
  slidesNode.forEach((slide, i) => {
    slide.classList.remove("gallery__slide_active");
    if (i === index) {
      slide.classList.add("gallery__slide_active");
    }
  });
}

// Функция для перехода к следующему слайду
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // Переключаемся на следующий слайд
  showSlide(currentIndex);
}

// Функция для перехода к предыдущему слайду
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Переключаемся на предыдущий слайд
  showSlide(currentIndex);
}

// Устанавливаем интервал для автоматической смены слайдов
setInterval(nextSlide, 3200); // Смена слайдов каждые 3 секунды

// Обработчики событий для кнопок
nextBtnNode.addEventListener("click", nextSlide);
prevBtnNode.addEventListener("click", prevSlide);
