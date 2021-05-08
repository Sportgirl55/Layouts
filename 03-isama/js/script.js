'use strict';

const btnUp = document.querySelector('.btn-up');
const rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
btnUp.addEventListener("click", scrollToTop)


function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.10 ) {
    btnUp.classList.add("showBtn")
  } else {
    btnUp.classList.remove("showBtn")
  }
}

document.addEventListener("scroll", handleScroll)







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


