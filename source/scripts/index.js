/* в этот файл добавляет скрипты*/
const burger = document.querySelector('.navigation__toggle');
const nav = document.querySelector('.navigation__list');
const block = document.querySelector('.navigation__list--bg');

block.classList.remove('navigation__list--bg');

burger.onclick = function() {
  burger.classList.toggle('navigation__toggle--open');
  nav.classList.toggle('navigation__list--open');
};
