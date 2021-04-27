'use strict';

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav-wrap');
const header = document.querySelector('.header');

const search = document.querySelector('.controls__search');


burger.addEventListener('click', function () {
    document.querySelector('.burger span').classList.toggle('active');
    header.classList.toggle('open');
    menu.classList.toggle('open')
})


search.addEventListener('click', () => {
    input.classList.add('open');
})
