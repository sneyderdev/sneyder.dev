$blur = document.getElementById('blur');
$burgerBtn = document.getElementById('burger-btn');
$menu = document.getElementById('menu');
$body = document.getElementById('body');

$burgerBtn.addEventListener('click', () => {
  $blur.classList.toggle('blur--active');
  $burgerBtn.classList.toggle('burger-btn--active');
  $menu.classList.toggle('menu--active');
  $body.classList.toggle('overflow--hidden');
});