function tabs() {
  /* ---------------------------------- tabs ---------------------------------- */

  let tab = document.querySelectorAll('.projects-header-tab'),
    info = document.querySelector('.projects-header'),
    tabContent = document.querySelectorAll('.projects__tabcontent');


  getProjects(0, "recent");
  getProjects(1, "personal");
  getProjects(2, "fun");

  function getProjects(i, tab) {
    fetch('../../../projects.json')
      .then(res => res.json())
      .then(data => {
        let projects = "";
        data[tab].forEach((project) => {
          projects += `
              <div class="projects__project project">
              <div class="project__img">
                <img src="${project.image}" class="img project-img" alt="${project.title}">
              </div>
              <div class="project__description">
                <div class="project__description-title project__title">${project.title}</div>
                <div class="project__description-text project__text">
                  ${project.descrip}
                </div>
                <div class="project__description-btn project__btn">
                  <a href = "${project.repo}" target = "_blank"
                    class="button project__link" data-id="button"><i class="project__icon fas fa-laptop-code"></i> Source Code</a>
                  <a href="${project.demo}" target="_blank"
                    class="button project__link" data-id="button"><i class="project__icon fas fa-laptop"></i> Live Demo</a>
                </div>
              </div>
            </div>
            `;
        });
        tabContent[i].innerHTML = projects;
      });
  }

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
  return;
}

module.exports = tabs;