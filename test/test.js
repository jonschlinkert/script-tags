var expect = require('chai').expect,
    scripts = require('..');

describe('script-tags:', function () {

  it('should extract inner html from the script tag.', function () {
    var actual = scripts('<script src="bootstrap.js"></script>');
    expect(actual[0]).to.have.property('html');
    expect(actual[0]).to.have.property('text');
    expect(actual[0].attrs).to.have.property('src');
    expect(actual[0].attrs.src).to.eql('bootstrap.js');
  });

  it('should extract inner html from the script tag.', function () {
    var actual = scripts('<script>var foo = "bar";</script>');
    var re = /foo/.test(actual[0].html);
    expect(actual[0]).to.have.property('html');
    expect(actual[0]).to.have.property('text');
    expect(re).to.eql(true);
  });
});