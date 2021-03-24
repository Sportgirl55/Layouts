
'use strict';

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const menuItem = document.querySelectorAll('.header__menu li');
const logo = document.querySelector('.header__logo');
const search = document.querySelector('.header__search');


burger.addEventListener('click', () => {
  document.querySelector('.burger span').classList.toggle('active');
  menu.classList.toggle("open");
  logo.classList.toggle('up');
  if (document.documentElement.clientWidth < 900) {
      search.classList.toggle("visually-hidden");
    }

})

menu.addEventListener('click', () => {
  menu.classList.toggle("open");
  document.querySelector('.burger span').classList.toggle('active');
  logo.classList.toggle('up');
  if (document.documentElement.clientWidth < 900) {
    search.classList.toggle("visually-hidden");
  }
  if (document.documentElement.clientWidth > 1100) {
    logo.classList.add('up');
  }
})
