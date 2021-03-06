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
    var capacity = 1023;
    var hs =  new HashTable(capacity);
    var listOfHashes = [];
    var collisionCounter = {};

    // Act
    for (var i = 0; i < capacity; i++) {
      var hash = hs.hashValue('this is key ' + (i));
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

  it ('should be correct size', function() {
    // Arrange
    var hs = new HashTable();
    expect(hs.size()).to.be.equal(0);
    // Act
    hs.put(10, 10);
    // Assert

    hs.put(10, 11);
    expect(hs.size()).to.be.equal(1);
  });

  it ('should get correct values with given keys with rehash', function() {
    var hs = new HashTable(6);

    hs.put('key1', 'value1');
    hs.put('key2', 'value2');
    hs.put('key3', 'value3');
    hs.put('key4', 'value4');
    hs.put('key5', 'value5');
    hs.put('key6', 'value6');

    expect(hs.size()).to.be.equal(6);
    expect(hs.get('key1')).to.be.equal('value1');
    expect(hs.get('key2')).to.be.equal('value2');
    expect(hs.get('key3')).to.be.equal('value3');
    expect(hs.get('key4')).to.be.equal('value4');
    expect(hs.get('key5')).to.be.equal('value5');
    expect(hs.get('key6')).to.be.equal('value6');
  });

  it ('should remove item from table', function() {
    var hs = new HashTable();

    hs.put('key1', 'value1');
    hs.put('key2', 'value2');
    hs.put('key3', 'value3');
    hs.put('key4', 'value4');
    hs.put('key5', 'value5');
    hs.put('key6', 'value6');

    hs.remove('key3');
    expect(hs.size()).to.be.equal(5);
    expect(hs.get('key3')).to.be.equal(null);
    hs.put('key3' , 'value3');
    expect(hs.size()).to.be.equal(6);
    expect(hs.get('key3')).to.be.equal('value3');

  });
});