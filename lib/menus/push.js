'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _simpleMenuFactory = require('../simpleMenuFactory');

var _simpleMenuFactory2 = _interopRequireDefault(_simpleMenuFactory);

var styles = {

  pageWrap: function pageWrap(isOpen, width, right) {
    return {
      transform: isOpen ? '' : right ? 'translate3d(-' + width + 'px, 0, 0)' : 'translate3d(' + width + 'px, 0, 0)',
      transition: 'all 0.5s'
    };
  },

  outerContainer: function outerContainer(isOpen) {
    return {
      overflow: isOpen ? '' : 'hidden'
    };
  }
};

exports['default'] = (0, _simpleMenuFactory2['default'])(styles);
module.exports = exports['default'];