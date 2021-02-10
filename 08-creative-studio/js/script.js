
'use strict';

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');
const logo = document.querySelector('.header__logo');
const header = document.querySelector('.header');


burger.addEventListener('click', function(){
  
    document.querySelector('.burger span').classList.toggle('active');
    logo.classList.toggle("open");
    menu.classList.toggle("open");
    header.classList.toggle("color");
  })

 