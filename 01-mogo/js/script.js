'use strict';

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav-wrap');
const header = document.querySelector('.header');

const blockSearch = document.querySelector('.controls');
const searchBtn = document.querySelector('.controls button');


burger.addEventListener('click', function () {
    document.querySelector('.burger span').classList.toggle('active');
    header.classList.toggle('open');
    menu.classList.toggle('open')
})


searchBtn.addEventListener('click', (e) => {
    blockSearch.classList.add('open');
})
