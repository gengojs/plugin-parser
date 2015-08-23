'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var debug = (0, _debug2['default'])('default-parser');
/* Find class */

var Find = (function () {
  function Find(object) {
    _classCallCheck(this, Find);

    debug('constructor:', 'Find');
    this.object = object;
  }

  _createClass(Find, [{
    key: 'dot',
    value: function dot(path) {
      var obj = this.object;
      if (!obj || _lodash2['default'].isNull(obj) || _lodash2['default'].isNull(path) || !path) return null;else {
        var i, keys;
        if (path.indexOf('.') !== -1) {
          keys = path.split('.');
          for (i = 0; i < keys.length; i++) {
            if (keys[i].indexOf('*') !== -1) keys[i] = keys[i].replace('*', '.');
            if (obj) if (_lodash2['default'].has(obj, keys[i])) {
              if (i === keys.length - 1) return obj[keys[i]];else obj = obj[keys[i]];
              //error or could be global
            } else return null;else return null;
          }
          return obj;
        } else {
          return obj[path];
        }
      }
    }

    // http://bit.ly/1HWJu9o
  }, {
    key: 'interpolate',
    value: function interpolate(obj, property) {
      if (!obj) return '';
      if (property.length === 0) return obj;

      var found = obj[property[0]];
      var remainder = property.slice(1);
      return this.interpolate(found, remainder);
    }
  }]);

  return Find;
})();

exports['default'] = function (object) {
  'use strict';
  return new Find(object);
};

module.exports = exports['default'];
