'use strict';

var getOffsetRect = require('./getOffsetRect');
var util = require('./util');
var $body = document.body;

module.exports = {
  init: function(options) {
    var className = options.activeClassName || 'active';
    var scrollTarget = options.scrollTarget || document;
    var ary = Array.prototype.slice.call(options.nodeList);

    var items = getItems(ary);

    spy(items, className);

    util.bind(scrollTarget, 'scroll', function() {
      spy(items, className);
    });

  }
};

// //////////////////////
function getItems(ary) {
  var items = [];
  for (let i = 0, l = ary.length; i < l; i++) {
    var id = ary[i].hash.replace(/^#/, '');
    var $target = document.getElementById(id);
    var offset = getOffsetRect($target);
    var height = window.getComputedStyle(document.getElementById(id))['height'];
    items[i] = { height: parseInt(height), top: offset.top, elem: ary[i] };
  }

  return items;
}

function spy(items, className) {
  var find = 0;

  for (var i = 0, l = items.length; i < l; i++) {
    if ($body.scrollTop < items[i].top - items[i].height / 3) {
      find = i;
      break;
    }
  }

  for (let j = 0, l = items.length; j < l; j++) {
    util.removeClass(items[j].elem, className);
  }

  if (find > 0) {
    util.addClass(items[find - 1].elem, className);
  }

}
