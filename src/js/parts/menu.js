function menu() {
  /* ----------------------------- hamburger menu ----------------------------- */

  const menuToggle = document.querySelector('.menu-toggle'),
    menuItem = document.querySelectorAll('.menu__item'),
    menuLink = document.querySelectorAll('.menu__link'),
    nav = document.querySelector('.nav'),
    section = document.querySelectorAll('.section');

  menuToggle.addEventListener('click', function toggleMenu() {
    menuItem.forEach((item) => {
      item.classList.toggle('menu__item_open');
    });
    section.forEach((item) => {
      item.classList.toggle('section_open');
    });
    menuToggle.classList.toggle('menu-toggle_open');
    nav.classList.toggle('nav_open');

    if (menuToggle.classList.contains('menu-toggle_open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    menuLink.forEach((item) => {
      item.addEventListener('click', toggleMenu);
    });
  });
}

module.exports = menu;