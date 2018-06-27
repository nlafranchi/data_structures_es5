module.exports = (function() {

	var Node = function(val, node) {
		this.value = val;
		this.next = node;
	}
	
	function SinglyLinkedList() {
		this.size = 0;
		this.head = null;
	}

	SinglyLinkedList.prototype.isEmpty = function() {
		return this.size == 0;
	}

	SinglyLinkedList.prototype.size = function() {
		return this.size;
	}

	SinglyLinkedList.prototype.add = function(value) {
		var temp = this.head;
		this.head = new Node(value);
		this.head.next= temp;
		this.size++;
	}

	SinglyLinkedList.prototype.removeFirst = function() {
		if (!this.head) {
			console.log('Error: this list is empty!');
			return;
		}
		var temp = this.head;
		this.head = this.head.next;
		temp.next = null;
		this.size--;
	}

	SinglyLinkedList.prototype.removeLast = function() {
		var temp = this.head;
		if (!temp) {
			console.log('Error: this list is empty!');
			return null;
		} else if (this.size == 1) {
			this.head = null;
			return temp;
		} 

		// Pointers for finding last node
		// ref2 will ultimately be the last
		// node in the list
		var ref1 = this.head;
		var ref2 = ref1.next;

		while (ref2.next) {
			ref1 = ref1.next;
			ref2 = ref2.next;
		}

		ref1.next = null;
		this.size--;
		return ref2;
	}

	SinglyLinkedList.prototype.get = function(index) {
		if(index >= 0) {
			var count = 0;
			while(count < index) {
				if(temp.value == val) {
					return 
				}
			}
		}
		
	}

	SinglyLinkedList.prototype.toString = function() {
		let node = this.head;
		let string = '[ ';
		while (node != null) {
			string += node.value + (node.next ? ', ': '');
			node = node.next;
		}
		return string + ' ]';
	}

	return SinglyLinkedList;

})();





