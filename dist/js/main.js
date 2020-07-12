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

const $sleepScreen = document.querySelector('.sleep-screen');
const $sleepText = document.querySelector('.sleep-screen__text');
let sleepScreenPhrases = [
  'Welcome back!',
  'Hello again!',
  "It's good to see you again!",
  'Yo! 😄',
];

document.addEventListener('visibilitychange', handleVisibilityChange);

function handleVisibilityChange() {
  const isVisible = document.visibilityState === 'visible';
  let randomPhrase = Math.round(Math.random() * (sleepScreenPhrases.length - 1));

    if (isVisible) {
      $sleepText.innerText = sleepScreenPhrases[randomPhrase];
      $sleepScreen.classList.add('sleep-screen--active');
      $sleepText.classList.add('slideUp');
      setTimeout(() => {
        $sleepScreen.classList.remove('sleep-screen--active');
        $sleepText.classList.remove('slideUp');
      }, 2400);
    } else {
      $sleepText.innerText = '';
      $sleepScreen.classList.remove('sleep-screen--active');
      $sleepText.classList.remove('slideUp');
    }
}