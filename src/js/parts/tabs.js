function tabs() {
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
}

module.exports = tabs;