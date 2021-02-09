
'use strict';

const hamb = document.querySelector('.hamb');
const header = document.querySelector('.header');
const closeMenu = document.querySelector('.close-menu');
const menuItems = document.querySelectorAll('.header__menu li');

hamb.addEventListener('click', function () {
    console.log('tyt')
    header.classList.add('open');
});

closeMenu.addEventListener('click', function () {
    header.classList.remove('open');
});

menuItems.forEach( function (item) {
    item.addEventListener('click', function () {
        header.classList.remove('open');
    })
})