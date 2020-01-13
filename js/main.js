window.addEventListener('DOMContentLoaded', function() {
/* ----------------------------- hamburger menu ----------------------------- */

  const menuToggle = document.querySelector('.menu-toggle'),
        menuItem = document.querySelectorAll('.menu__item'),
        menuLink = document.querySelectorAll('.menu__link'),
        nav = document.querySelector('.nav'),
        section = document.querySelectorAll('.section');

  menuToggle.addEventListener('click', function toggleMenu() {
    menuItem.forEach((item) => { item.classList.toggle('menu__item_open'); });
    section.forEach((item) => { item.classList.toggle('section_open'); });
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

  

  /* ----------------------------- darkmode change ---------------------------- */

  const dark = document.getElementById('dark-toggle'),
        lang = document.getElementById('lang-toggle'),
        ball = document.querySelectorAll('.ball'),
        arrow = document.querySelector('.arrow'),
        menuToggleDark = document.querySelectorAll('.menu-toggle'),
        navDark = document.querySelectorAll('.nav'),
        menuLinkDark = document.querySelectorAll('.menu__link'),
        btnDark = document.querySelectorAll('.button'),
        projectTabDark = document.querySelectorAll('.projects-header-tab');

  dark.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    ball.forEach((item) => { item.classList.toggle('ball_dark'); });
    arrow.classList.toggle('arrow_dark');
    menuToggleDark.forEach((item) => { item.classList.toggle('menu-toggle_dark'); });
    navDark.forEach((item) => { item.classList.toggle('nav_dark'); });
    menuItem.forEach((item) => { item.classList.toggle('menu__item_dark'); });
    menuLinkDark.forEach((item) => { item.classList.toggle('menu__link_dark'); });
    btnDark.forEach((item) => { item.classList.toggle('button_dark'); });
    projectTabDark.forEach((item) => { item.classList.toggle('projects-header-tab_dark'); });
  });

  /* ----------------------------- language change ---------------------------- */

  lang.addEventListener('change', () => {

  });

/* ---------------------------------- tabs ---------------------------------- */

  let tab = document.querySelectorAll('.projects-header-tab'),
      info = document.querySelector('.projects-header'),
      tabContent = document.querySelectorAll('.projects__tabcontent');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', (event) => {
    let target = event.target;
    if (target && target.classList.contains('projects-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

});