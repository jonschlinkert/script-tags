'use strict';

var cheerio = require('cheerio');

module.exports = function(str, tag = 'script') {
  var attributes = [];
  var $ = cheerio.load(str);

  $(tag).each(function(i, elem) {
    var self = $(this);
    attributes[i] = {
      attrs: elem.attribs,
      html: self.html(),
      text: self.text()
    };
  });
  return attributes;
};
