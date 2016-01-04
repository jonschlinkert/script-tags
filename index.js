/**
 * script-tags <https://github.com/jonschlinkert/script-tags>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

var cheerio = require('cheerio');

module.exports = function(str) {
  var attributes = [];
  var $ = cheerio.load(str);

  $('script').each(function(i, elem) {
    var self = $(this);
    attributes[i] = {
      attrs: elem.attribs,
      html: self.html(),
      text: self.text()
    };
  });
  return attributes;
};
