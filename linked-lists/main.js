var SinglyLinkedList = require('./singly-linked-list');

var list = new SinglyLinkedList();
var list2 = new SinglyLinkedList();


console.log('Testing Singly Linked List');

list.add('100');
list.add('111');
list.add('222');

list2.add('100111');
list2.add('111111');
list2.add('222111');

list.removeLast();
list2.removeFirst();


console.log(list.toString());
console.log(list2.toString());

list.removeLast();
list2.removeFirst();

console.log(list.toString());
console.log(list2.toString());

list.removeLast();
list2.removeFirst();

console.log(list.toString());
console.log(list2.toString());

list.removeLast();
list2.removeFirst();

console.log(list.toString());
console.log(list2.toString());

list.add('100');
list2.add('100111');

console.log(list.toString());
console.log(list2.toString());