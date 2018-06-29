var expect = require('chai').expect;
var HashTable =  require('../hash-tables/hash-table-linear-probing');

describe('test hash entry', function () {

  it('should create hash code', function() {

    // Arrange
    var hs =  new HashTable();

    // Act
    var hc1 = hs.hashValue('this is a key');
    var hc2 = hs.hashValue('this is another key');
    var hc3 = hs.hashValue('this is a key');

    // Assert
    expect(hc1).to.be.equal(hc3);
    expect(hc1).to.be.not.equal(hc2);
  });

  it('should create hash codes with range of 0 and capacity', function() {

    // Arrange
    var capacity = 1023
    var hs =  new HashTable(capacity);
    var listOfHashes = [];
    var collisionCounter = {};

    // Act
    for (var i = 0; i < capacity; i++) {
      var hash = hs.hashValue('this is key ' + (i + 1023));
      listOfHashes.push(hash);
      if (collisionCounter[hash]) {
        collisionCounter[hash] = collisionCounter[hash] + 1;
      } else {
        collisionCounter[hash] = 1;
      }
    }

    // Assert
    for (var i = 0; i < listOfHashes.length; i++) {
      expect(listOfHashes[i]).to.be.within(0, capacity);
    }

    // logging collisions when size equals capacity
    console.log('size of counter ', Object.keys(collisionCounter).length);
    for (var property in collisionCounter) {
      if (collisionCounter.hasOwnProperty(property)) {
        console.log(property, collisionCounter[property])
      }
    }
  });

  it('should be empty', function () {

    // Arrange and Act
    var hs =  new HashTable();

    //Assert
    expect(hs.isEmpty()).to.be.equal(true);
  });

});