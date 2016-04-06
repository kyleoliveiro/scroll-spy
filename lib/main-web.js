'use strict';

var scrollSpy = require('./scroll-spy');
console.log(1111);

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof window === 'object') {
    window.scrollSpy = factory();
  }
}(function() {

  return scrollSpy;
}));
