window.addEventListener('DOMContentLoaded', function() {
/* ----------------------------- hamburger menu ----------------------------- */

  const menuToggle = document.querySelector('.menu-toggle'),
        menuItem = document.querySelectorAll('.menu__item'),
        nav = document.querySelector('.nav'),
        section = document.querySelectorAll('.section');

  menuToggle.addEventListener('click', () => {
    menuItem.forEach((item) => { item.classList.toggle('menu__item_open'); });
    section.forEach((item) => { item.classList.toggle('section_open'); });
    menuToggle.classList.toggle('menu-toggle_open');
    nav.classList.toggle('nav_open');

    if (menuToggle.classList.contains('menu-toggle_open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  /* ----------------------------- darkmode change ---------------------------- */

  const dark = document.getElementById('dark-toggle'),
        lang = document.getElementById('lang-toggle'),
        ball = document.querySelectorAll('.ball'),
        arrow = document.querySelector('.arrow'),
        menuToggleDark = document.querySelectorAll('.menu-toggle'),
        navDark = document.querySelectorAll('.nav'),
        menuLinkDark = document.querySelectorAll('.menu__link');

  dark.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    ball.forEach((item) => { item.classList.toggle('ball_dark'); });
    arrow.classList.toggle('arrow_dark');
    menuToggleDark.forEach((item) => { item.classList.toggle('menu-toggle_dark'); });
    navDark.forEach((item) => { item.classList.toggle('nav_dark'); });
    menuItem.forEach((item) => { item.classList.toggle('menu__item_dark'); });
    menuLinkDark.forEach((item) => { item.classList.toggle('menu__link_dark'); });
  });

  /* ----------------------------- language change ---------------------------- */

  lang.addEventListener('change', () => {

  });

});