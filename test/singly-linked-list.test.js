var expect = require('chai').expect;
var sll =  require('../linked-lists/singly-linked-list');

describe('test singly linked list', function () {

  it('should be empty', function() {
    var list = new sll();
    expect(list.isEmpty()).to.be.equal(true);
  });

  it('should be correct size', function() {
    // Arrange
    var list = new sll();
    // Act
    list.add(1);
    list.add(2);
    list.add(3);
    // Assert
    expect(list.getSize()).to.be.equal(3);
  });

  it('getting elements by index should work as expected', function() {
    // Arrange
    var list = new sll();

    // Act
    list.add(3);
    list.add(2);
    list.add(1);


    // Assert
    expect(list.get(0).value).to.be.equal(1);
    expect(list.get(1).value).to.be.equal(2);
    expect(list.get(2).value).to.be.equal(3);

  });

  it('should throw error if index is out of bounds', function() {
    //Arrange
    var list = new sll();

    // Act
    list.add(3);
    list.add(2);
    list.add(1);


    // Assert
    expect(list.get(3)).to.be.equal(undefined);
  });

  it('should have correct first and last elements', function () {

    // 1. ARRANGE
    var list = new sll();

    // 2. ACT
    list.add(110);
    list.add(111);

    // 3. ASSERT
    expect(list.get(0).value).to.be.equal(111);
    expect(list.get(1).value).to.be.equal(110);

  });

  it('removing last element should act as expected', function() {
    // 1. ARRANGE
    var list = new sll();

    // 2. ACT
    list.add(3);
    list.add(2);
    list.add(1);

    list.removeLast();

    // 3. ASSERT
    expect(list.get(0).value).to.be.equal(1);
    expect(list.get(1).value).to.be.equal(2);
    expect(list.getSize()).to.be.equal(2);
  });

  it('removing first element should act as expected', function() {
    // 1. ARRANGE
    var list = new sll();

    // 2. ACT
    list.add(3);
    list.add(2);
    list.add(1);

    list.removeFirst();

    // 3. ASSERT
    expect(list.get(0).value).to.be.equal(2);
    expect(list.get(1).value).to.be.equal(3);
    expect(list.getSize()).to.be.equal(2);
  });
});