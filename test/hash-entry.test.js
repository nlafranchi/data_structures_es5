var expect = require('chai').expect;
var hashEntry =  require('../model/hash-entry.model');

describe('test hash entry', function () {

  it('should create object', function() {
    var testKey = 'this is a key';
    var testValue = 'this is a value';
    var hs = new hashEntry(testKey, testValue);
    expect(hs.getKey()).to.be.equal(testKey);
    expect(hs.getValue()).to.be.equal(testValue);
  });
});