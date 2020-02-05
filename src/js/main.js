require('nodelist-foreach-polyfill');
window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let tabs = require('./parts/tabs.js'),
    dark = require('./parts/dark.js'),
    language = require('./parts/language.js'),
    menu = require('./parts/menu.js');

  tabs();
  setTimeout(() => {
    dark();
  }, 500);
  // dark();
  language();
  menu();
});