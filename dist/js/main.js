$burgerBtn = document.getElementById('burger-btn');
$menu = document.getElementById('menu');

$burgerBtn.addEventListener('click', () => {
  $burgerBtn.classList.toggle('burger-btn--active');
  $menu.classList.toggle('menu--active');
});