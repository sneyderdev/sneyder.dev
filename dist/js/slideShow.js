const $slides = document.getElementsByClassName('slideshow__image');
const $bullets = document.getElementsByClassName('bullet');
const $prevButton = document.getElementById('prev');
const $nextButton = document.getElementById('next');
const $arrow = document.getElementById('arrow');
let slideIndex = 0;

function showSlide(index) {
  for (let i = 0; i < $slides.length; i++) {
    $slides[i].style.display = 'none';
  }

  for (let i = 0; i < $bullets.length; i++ ){
    $bullets[i].classList.remove('active');
  }

  if (index === $slides.length) {
    index = 0;
    slideIndex = 0;
  } else if (index < 0) {
    index = 2;
    slideIndex = 2;
  }

  $slides[index].style.display = "block";
  $bullets[index].classList.toggle('active');
}

$prevButton.addEventListener('click', () => {
  slideIndex--;
  showSlide(slideIndex);
});

$nextButton.addEventListener('click', () => {
  slideIndex++;
  showSlide(slideIndex);
});

for (let i = 0; i < $bullets.length; i++ ){
  $bullets[i].addEventListener('click', () => {
    slideIndex = i;
    showSlide(i);
  });
}

$arrow.addEventListener('click', event => {
  event.preventDefault();
  $arrow.classList.toggle('active');
  setTimeout(() => {
    $arrow.classList.toggle('go');
  }, 300);
  setTimeout(() => {
    window.location = "portfolio.html";
  }, 600);
});

showSlide(slideIndex);