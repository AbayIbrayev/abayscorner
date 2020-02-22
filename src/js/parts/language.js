function language() {
  /* ----------------------------- language change ---------------------------- */

  const heroTitle = document.querySelector('.hero__title'),
    lang = document.getElementById('lang-toggle'),
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
    heroDescription.innerHTML = '👋 Меня зовут Абай Ибраев,<br> Я профессиональный Веб Разработчик.';
    projectsTitle.innerText = 'Проекты 💻';
    recentProjects.innerText = 'Недавние работы';
    personalProjects.innerText = 'Персональные проекты';
    funProjects.innerText = 'Веселые проекты';
    skillsTitle.innerText = 'Навыки 📝';
    contactTitle.innerText = 'Свяжитесь со мной';
    homeLink.innerText = 'Домой';
    projectsLink.innerText = 'Проекты';
    skillsLink.innerText = 'Навыки';
    contactLink.innerText = 'Контакты';
  }

  function engLang() {
    heroTitle.innerText = 'Hello, World!';
    heroDescription.innerHTML = "👋 My name is Abay Ibrayev,<br> I'm a professional Software/Web Developer.";
    projectsTitle.innerText = 'Projects 💻';
    recentProjects.innerText = 'Recent Work';
    personalProjects.innerText = 'Personal Projects';
    funProjects.innerText = 'Fun Projects';
    skillsTitle.innerText = 'Skills 📝';
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
}

module.exports = language;