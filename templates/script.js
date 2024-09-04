let lastScrollTop = 0;
const header = document.getElementById('header');
let scrollTimeout;

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  clearTimeout(scrollTimeout);
  
 
  header.classList.add('hidden-header');
  header.classList.remove('visible-header');
  
  scrollTimeout = setTimeout(() => {
    header.classList.remove('hidden-header');
    header.classList.add('visible-header');
  }, 150);
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});



document.addEventListener('DOMContentLoaded', function() {
  AOS.init();
});


const hamburgerMenu = document.querySelector('.hamburger');
const navBar = document.querySelector('.navigation');

hamburgerMenu.addEventListener('click', () => {
    navBar.classList.toggle('open');
} );