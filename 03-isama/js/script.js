'use strict';

const btnUp = document.querySelector('.btn-up');


window.addEventListener('scroll', function() {
  if (this.pageYOffset > 500) {
    btnUp.style.opacity = "1";
  } else {
    btnUp.style.opacity = "0";
  }
});

var t;
function up() {
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}





// const burger = document.querySelector('.burger');
// const menu = document.querySelector('.header__nav');
// const menuItem = document.querySelectorAll('.header__menu li');

// burger.addEventListener('click', function () {
//   document.querySelector('.burger span').classList.toggle('active');
//   menu.classList.toggle('open');
// })

// menu.addEventListener('click', () => {
//   menu.classList.toggle("open");
//   document.querySelector('.burger span').classList.toggle('active');
// })


