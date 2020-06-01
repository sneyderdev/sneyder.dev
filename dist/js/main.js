const $blur = document.getElementById('blur');
const $burgerBtn = document.getElementById('burger-btn');
const $menu = document.getElementById('menu');
const $body = document.getElementById('body');

$burgerBtn.addEventListener('click', () => {
  $blur.classList.toggle('blur--active');
  $burgerBtn.classList.toggle('burger-btn--active');
  $menu.classList.toggle('menu--active');
  $body.classList.toggle('overflow--hidden');
});