/* в этот файл добавляет скрипты*/
const burger = document.querySelector('.main-nav__toggle');
const nav = document.querySelector('.main-nav__open ');

burger.onclick = function() {
  burger.classList.toggle('main-nav__toggle--open');
  nav.classList.toggle('main-nav--open');
};
