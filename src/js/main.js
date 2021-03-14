//run npx webpack in the terminal to start webpack

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
  }, 800);
  // dark();
  language();
  menu();
});
