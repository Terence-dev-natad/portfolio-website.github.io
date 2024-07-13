function toggleNav() {
    var nav = document.getElementById('navLinks');
    nav.classList.toggle('translate-x-full');
    nav.classList.toggle('translate-x-0');
  }

  // Event listener for hamburger menu click
  var hamburgerMenu = document.getElementById('hamburgerMenu');
  hamburgerMenu.addEventListener('click', toggleNav);