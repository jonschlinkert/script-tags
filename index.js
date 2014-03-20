/**
 * script-tags <https://github.com/jonschlinkert/script-tags>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */


var url = require('url');
var cheerio = require('cheerio');
var _ = require('lodash');

module.exports = function(str) {
  var attrs = [];

  // Use cheerio to extract valuse
  var $ = cheerio.load(str);

  // Build an object with useful info for each script tag
  $('script').each(function(i, elem) {
    attrs[i] = {
      id: $(this).attr('id') || '',
      async: $(this).attr('async') || '',
      language: $(this).attr('language') || '',
      defer: $(this).attr('defer') || '',
      type: $(this).attr('type') || '',
      src: $(this).attr('src') || '',
      content: $(this).html(),
    }
  });

  return _.flatten(attrs);
};
