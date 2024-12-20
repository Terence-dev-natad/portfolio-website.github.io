
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



const hamb = document.getElementById('hamburger');
const ekis = document.getElementById('ekis');
const navLinks = document.getElementById('nav-links');

hamb.addEventListener('click', () => {
  navLinks.classList.toggle('lg:hidden');
  navLinks.classList.add('lg:bg-black/70', 'lg:backdrop-blur-sm', 'lg:p-4', 'lg:text-center', 'md:text-left');
  hamb.classList.toggle('lg:hidden');
  ekis.classList.toggle('lg:flex');

  // Apply the transition effect to navLinks when opened
  if (!navLinks.classList.contains('lg:hidden')) {
    navLinks.style.transform = 'translateX(0)';
    navLinks.style.opacity = '1';
  } else {
    navLinks.style.transform = 'translateX(-100%)';
    navLinks.style.opacity = '0';
  }
});

ekis.addEventListener('click', () => {
  navLinks.classList.toggle('lg:hidden');
  hamb.classList.toggle('lg:hidden');
  ekis.classList.toggle('lg:flex');

  // Reset transition when closing the menu
  if (navLinks.classList.contains('lg:hidden')) {
    navLinks.style.transform = 'translateX(-100%)';
    navLinks.style.opacity = '0';
  } else {
    navLinks.style.transform = 'translateX(0)';
    navLinks.style.opacity = '1';
  }
});

if (hamb.classList.contains('lg:hidden')) {
  ekis.classList.add('lg:hidden');
} else {
  hamb.classList.add('lg:flex');
}

