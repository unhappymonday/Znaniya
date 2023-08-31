const slider = document.querySelector('.slider__container');
const prevButton = document.querySelector('.btn__slide_prev');
const nextButton = document.querySelector('.btn__slide_next');
const slides = Array.from(document.querySelectorAll('.slide'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.visibility = 'visible';
    } else {
      slide.style.visibility = 'hidden';
    }
  });
}

// Инициализация слайдера
updateSlider();