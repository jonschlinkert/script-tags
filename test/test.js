'use strict';

require('mocha');
var assert = require('assert');
var scripts = require('..');

describe('script-tags:', function () {
  it('should extract inner html from the script tag.', function () {
    var actual = scripts('<script src="bootstrap.js"></script>');
    assert(actual[0].hasOwnProperty('html'));
    assert(actual[0].hasOwnProperty('text'));
    assert(actual[0].attrs.hasOwnProperty('src'));
    assert.equal(actual[0].attrs.src, 'bootstrap.js');
  });

  it('should extract inner html from the script tag.', function () {
    var actual = scripts('<script>var foo = "bar";</script>');
    assert(/foo/.test(actual[0].html));
    assert(actual[0].hasOwnProperty('html'));
    assert(actual[0].hasOwnProperty('text'));
  });
});