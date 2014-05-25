const fs = require('fs-utils');
const scripts = require('../..');



exports.readFixtures = function(src) {
  var files = fs.expand(src, {filter: 'isFile'});

  var json = [];
  files.forEach(function(filepath) {
    var content = fs.readFileSync(filepath);
    json = json.concat(scripts(content));
  });

  return json;
};

/**
 * Write example file
 *
 * @param   {String}  `dest` The destination.
 * @param   {String}  `src` The string to write.
 * @return  {String}
 */

exports.writeExample = function(dest, src) {
  fs.writeJSONSync(dest, src);
};