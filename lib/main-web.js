'use strict';

var scrollSpy = require('./scroll-spy');

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof window === 'object') {
    window.scrollSpy = factory();
  }
}(function() {

  return scrollSpy;
}));
