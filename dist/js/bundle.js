/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/nodelist-foreach-polyfill/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/nodelist-foreach-polyfill/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! nodelist-foreach-polyfill */ "./node_modules/nodelist-foreach-polyfill/index.js");

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
      dark = __webpack_require__(/*! ./parts/dark.js */ "./src/js/parts/dark.js"),
      language = __webpack_require__(/*! ./parts/language.js */ "./src/js/parts/language.js"),
      menu = __webpack_require__(/*! ./parts/menu.js */ "./src/js/parts/menu.js");

  tabs();
  setTimeout(function () {
    dark();
  }, 500); // dark();

  language();
  menu();
});

/***/ }),

/***/ "./src/js/parts/dark.js":
/*!******************************!*\
  !*** ./src/js/parts/dark.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function dark() {
  /* ----------------------------- darkmode change ---------------------------- */
  var dark = document.getElementById('dark-toggle'),
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
  var darkMode = localStorage.getItem('darkMode');

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

    ball.forEach(function (item) {
      item.classList.toggle('ball_dark');
    });
    arrow.classList.toggle('arrow_dark');
    heroTitleDark.classList.toggle('hero__title_dark');
    footerDark.classList.toggle('footer_dark');
    menuToggleDark.forEach(function (item) {
      item.classList.toggle('menu-toggle_dark');
    });
    navDark.forEach(function (item) {
      item.classList.toggle('nav_dark');
    });
    menuItemDark.forEach(function (item) {
      item.classList.toggle('menu__item_dark');
    });
    menuLinkDark.forEach(function (item) {
      item.classList.toggle('menu__link_dark');
    });
    btnDark.forEach(function (item) {
      item.classList.toggle('button_dark');
    });
    projectTabDark.forEach(function (item) {
      item.classList.toggle('projects-header-tab_dark');
    });
    contactLinkDark.forEach(function (item) {
      item.classList.toggle('contact__link_dark');
    });
  }
}

module.exports = dark;

/***/ }),

/***/ "./src/js/parts/language.js":
/*!**********************************!*\
  !*** ./src/js/parts/language.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function language() {
  /* ----------------------------- language change ---------------------------- */
  var heroTitle = document.querySelector('.hero__title'),
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
  var langKey = localStorage.getItem('langKey');

  if (langKey == 'ru') {
    lang.checked = true;
    ruLang();
  }

  function ruLang() {
    heroTitle.innerText = 'Привет, Мир!';
    heroDescription.innerHTML = 'Меня зовут Абай Ибраев,<br> Я профессиональный Веб Разработчик.';
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

  lang.addEventListener('change', function () {
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

/***/ }),

/***/ "./src/js/parts/menu.js":
/*!******************************!*\
  !*** ./src/js/parts/menu.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function menu() {
  /* ----------------------------- hamburger menu ----------------------------- */
  var menuToggle = document.querySelector('.menu-toggle'),
      menuItem = document.querySelectorAll('.menu__item'),
      menuLink = document.querySelectorAll('.menu__link'),
      nav = document.querySelector('.nav'),
      section = document.querySelectorAll('.section');
  menuToggle.addEventListener('click', function toggleMenu() {
    menuItem.forEach(function (item) {
      item.classList.toggle('menu__item_open');
    });
    section.forEach(function (item) {
      item.classList.toggle('section_open');
    });
    menuToggle.classList.toggle('menu-toggle_open');
    nav.classList.toggle('nav_open');

    if (menuToggle.classList.contains('menu-toggle_open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    menuLink.forEach(function (item) {
      item.addEventListener('click', toggleMenu);
    });
  });
}

module.exports = menu;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  /* ---------------------------------- tabs ---------------------------------- */
  var tab = document.querySelectorAll('.projects-header-tab'),
      info = document.querySelector('.projects-header'),
      tabContent = document.querySelectorAll('.projects__tabcontent');
  getProjects(0, "recent");
  getProjects(1, "personal");
  getProjects(2, "fun");

  function getProjects(i, tab) {
    fetch('../../../projects.json').then(function (res) {
      return res.json();
    }).then(function (data) {
      var projects = "";
      data[tab].forEach(function (project) {
        projects += "\n              <div class=\"projects__project project\">\n              <div class=\"project__img\">\n                <img src=\"".concat(project.image, "\" class=\"img project-img\" alt=\"").concat(project.title, "\">\n              </div>\n              <div class=\"project__description\">\n                <div class=\"project__description-title project__title\">").concat(project.title, "</div>\n                <div class=\"project__description-text project__text\">\n                  ").concat(project.descrip, "\n                </div>\n                <div class=\"project__description-btn project__btn\">\n                  <a href = \"").concat(project.repo, "\" target = \"_blank\"\n                    class=\"button project__link\" data-id=\"button\"><i class=\"project__icon fas fa-laptop-code\"></i> Source Code</a>\n                  <a href=\"").concat(project.demo, "\" target=\"_blank\"\n                    class=\"button project__link\" data-id=\"button\"><i class=\"project__icon fas fa-laptop\"></i> Live Demo</a>\n                </div>\n              </div>\n            </div>\n            ");
      });
      tabContent[i].innerHTML = projects;
    });
  }

  function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
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
  info.addEventListener('click', function (event) {
    var target = event.target;

    if (target && target.classList.contains('projects-header-tab')) {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          tab.forEach(function (item) {
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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map