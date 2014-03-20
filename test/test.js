/**
 * No tests yet. just a placeholder.
 */

var file = require('fs-utils');
var _ = require('lodash');
var scriptTags = require('../');


// Test setup
var fixtures = 'test/fixtures/html/about.html';
var files = file.expand(fixtures, {filter: 'isFile'});

var scripts = _.flatten(files.map(function(filepath) {
  var content = file.readFileSync(filepath);
  return scriptTags(content);
}));

console.log(JSON.stringify(scripts, null, 2));
file.writeFileSync('test/example.json', JSON.stringify(scripts, null, 2));


