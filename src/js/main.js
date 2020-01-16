require('nodelist-foreach-polyfill');
window.addEventListener('DOMContentLoaded', function() {
  'use strict';

  let dark = require('./parts/dark.js'),
      language = require('./parts/language.js'),
      menu = require('./parts/menu.js'),
      tabs = require('./parts/tabs.js');

  dark();
  language();
  menu();
  tabs();
});