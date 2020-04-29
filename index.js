'use strict';

module.exports = function(source) {
    this.cacheable && this.cacheable();

    var lines = source.replace(/\r\n|\r/g, '\n').split('\n');

    var json = JSON.stringify(lines)
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029');

    return 'module.exports = ' + json;
};
