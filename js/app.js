
'use strict';

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');


burger.addEventListener('click', function () {
  document.querySelector('.burger span').classList.toggle('active');
  menu.classList.toggle('open');
})

