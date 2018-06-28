var expect = require('chai').expect;
var HashEntry =  require('../model/hash-entry.model');

describe('test hash entry', function () {

  it('should create object', function() {
    // Arrange and Act
    var testKey = 'this is a key';
    var testValue = 'this is a value';
    var hs = new HashEntry(testKey, testValue);

    // Assert
    expect(hs.getKey()).to.be.equal(testKey);
    expect(hs.getValue()).to.be.equal(testValue);
  });

  it('should be equal to another hash entry', function() {

    // Arrange and Act
    var testKey = 'this is a key';
    var testValue = 'this is a value';
    var hs1 = new HashEntry(testKey, testValue);
    var hs2 = new HashEntry(testKey, testValue);

    // Assert
    expect(hs1.equals(hs2)).to.be.equal(true);
  });

  it('should not be equal to another hash entry', function() {
    var testKey = 'this is a key';
    var testValue = 'this is a value';
    var hs1 = new HashEntry(testKey, 'not equal');
    var hs2 = new HashEntry(testKey, testValue);

    // Assert
    expect(hs1.equals(hs2)).to.be.equal(false);
  });
});