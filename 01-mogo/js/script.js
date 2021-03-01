'use strict';

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav-wrap');
const menuItem = document.querySelectorAll('.header__menu li');

// const controls = document.querySelector('.controls');



// // const search = document.querySelector('.header__search');




 burger.addEventListener('click', function() {
     document.querySelector('.burger span').classList.toggle('active');
    
     menu.classList.toggle('open');
//     // logo.classList.toggle('up');
//  controls.classList.toggle("open");
   })