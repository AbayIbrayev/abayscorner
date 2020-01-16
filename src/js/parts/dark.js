function dark() {
  /* ----------------------------- darkmode change ---------------------------- */

  const dark = document.getElementById('dark-toggle'),
        ball = document.querySelectorAll('.ball'),
        arrow = document.querySelector('.arrow'),
        menuItemDark = document.querySelectorAll('.menu__item'),
        menuToggleDark = document.querySelectorAll('.menu-toggle'),
        navDark = document.querySelectorAll('.nav'),
        menuLinkDark = document.querySelectorAll('.menu__link'),
        btnDark = document.querySelectorAll('.button'),
        contactLinkDark = document.querySelectorAll('.contact__link'),
        footerDark = document.querySelector('.footer'),
        heroTitleDark = document.querySelector('.hero__title'),
        projectTabDark = document.querySelectorAll('.projects-header-tab');

  let darkMode = localStorage.getItem('darkMode');

  if (darkMode == 'true') {
    dark.checked = true;
    changeMode();
  }

  dark.addEventListener('change', changeMode);

  function changeMode() {
    document.body.classList.toggle('dark');
    darkMode = localStorage.getItem('darkMode');
    if (dark.checked == true) {
      localStorage.setItem('darkMode', 'true');
    } else {
      localStorage.setItem('darkMode', null);
    }
    ball.forEach((item) => {
      item.classList.toggle('ball_dark');
    });
    arrow.classList.toggle('arrow_dark');
    heroTitleDark.classList.toggle('hero__title_dark');
    footerDark.classList.toggle('footer_dark');
    menuToggleDark.forEach((item) => {
      item.classList.toggle('menu-toggle_dark');
    });
    navDark.forEach((item) => {
      item.classList.toggle('nav_dark');
    });
    menuItemDark.forEach((item) => {
      item.classList.toggle('menu__item_dark');
    });
    menuLinkDark.forEach((item) => {
      item.classList.toggle('menu__link_dark');
    });
    btnDark.forEach((item) => {
      item.classList.toggle('button_dark');
    });
    projectTabDark.forEach((item) => {
      item.classList.toggle('projects-header-tab_dark');
    });
    contactLinkDark.forEach((item) => {
      item.classList.toggle('contact__link_dark');
    });
  }
}

module.exports = dark;