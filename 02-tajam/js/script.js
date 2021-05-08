'use strict';

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const menuItem = document.querySelectorAll('.header__menu li');

burger.addEventListener('click', function () {
  document.querySelector('.burger span').classList.toggle('active');
  menu.classList.toggle('open');
})

menu.addEventListener('click', () => {
  menu.classList.toggle("open");
  document.querySelector('.burger span').classList.toggle('active');
})