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
    ball.forEach((item) => { item.classList.toggle('ball_dark'); });
    arrow.classList.toggle('arrow_dark');
    heroTitleDark.classList.toggle('hero__title_dark');
    footerDark.classList.toggle('footer_dark');
    menuToggleDark.forEach((item) => { item.classList.toggle('menu-toggle_dark'); });
    navDark.forEach((item) => { item.classList.toggle('nav_dark'); });
    menuItem.forEach((item) => { item.classList.toggle('menu__item_dark'); });
    menuLinkDark.forEach((item) => { item.classList.toggle('menu__link_dark'); });
    btnDark.forEach((item) => { item.classList.toggle('button_dark'); });
    projectTabDark.forEach((item) => { item.classList.toggle('projects-header-tab_dark'); });
    contactLinkDark.forEach((item) => { item.classList.toggle('contact__link_dark'); });
  }

  /* ----------------------------- language change ---------------------------- */

  const heroTitle = document.querySelector('.hero__title'),
        heroDescription = document.querySelector('.hero__description'),
        projectsTitle = document.querySelector('#projects div h2'),
        recentProjects = document.querySelectorAll('.projects-header-tab')[0],
        personalProjects = document.querySelectorAll('.projects-header-tab')[1],
        funProjects = document.querySelectorAll('.projects-header-tab')[2],
        skillsTitle = document.querySelector('#skills div h2'),
        contactTitle = document.querySelector('#contact div h2'),
        homeLink = document.querySelectorAll('.menu__item')[0],
        projectsLink = document.querySelectorAll('.menu__item')[1],
        skillsLink = document.querySelectorAll('.menu__item')[2],
        contactLink = document.querySelectorAll('.menu__item')[3];
  
  let langKey = localStorage.getItem('langKey');

  if (langKey == 'ru') {
    lang.checked = true;
    ruLang();
  }

  function ruLang() {
    heroTitle.innerText = 'Привет, Мир!';
    heroDescription.innerHTML = 'Меня зовут Абай Ибраев,<br> Я профессиональный Веб Разработик.';
    projectsTitle.innerText = 'Проекты';
    recentProjects.innerText = 'Недавние работы';
    personalProjects.innerText = 'Персональные проекты';
    funProjects.innerText = 'Веселые проекты';
    skillsTitle.innerText = 'Навыки';
    contactTitle.innerText = 'Свяжитесь со мной';
    homeLink.innerText = 'Домой';
    projectsLink.innerText = 'Проекты';
    skillsLink.innerText = 'Навыки';
    contactLink.innerText = 'Контакты';
  }

  function engLang() {
    heroTitle.innerText = 'Hello, World!';
    heroDescription.innerHTML = "My name is Abay Ibrayev,<br> I'm a professional Software/Web Developer.";
    projectsTitle.innerText = 'Projects';
    recentProjects.innerText = 'Recent Work';
    personalProjects.innerText = 'Personal Projects';
    funProjects.innerText = 'Fun Projects';
    skillsTitle.innerText = 'Skills';
    contactTitle.innerText = 'Contact Me';
    homeLink.innerText = 'Home';
    projectsLink.innerText = 'Projects';
    skillsLink.innerText = 'Skills';
    contactLink.innerText = 'Contact';
  }

  lang.addEventListener('change', () => {
    langKey = localStorage.getItem('langKey');
    if (lang.checked == true) {
      ruLang();
      localStorage.setItem('langKey', 'ru');
    } else {
      engLang();
      localStorage.setItem('langKey', null);
    }
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

  tab[0].classList.add('projects-header-tab_active');

  info.addEventListener('click', (event) => {
    let target = event.target;
    if (target && target.classList.contains('projects-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          tab.forEach((item) => {
            item.classList.remove('projects-header-tab_active');
          });
          target.classList.add('projects-header-tab_active');
        }
      }
    }
  });

});