
'use strict';

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const menuItem = document.querySelectorAll('.header__menu li');

const logo = document.querySelector('.header__logo');



const search = document.querySelector('.header__search');




burger.addEventListener('click', function(){
  
    document.querySelector('.burger span').classList.toggle('active');
    search.classList.toggle("open");
    menu.classList.toggle("open");
    logo.classList.toggle('up');

  })

 
  // menuItem.forEach(function (item) {
  //   item.addEventListener('click', function () {
  //     document.querySelector('.burger span').classList.toggle('active');
  //   })