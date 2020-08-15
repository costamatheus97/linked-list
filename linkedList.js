function LinkedList() {
  this.head = null;
  this.tail = null;
}

// node factory
 
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// add node to the head of the linked list
 
LinkedList.prototype.addToHead = function(value) {
  const newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

// add node to the tail of the linked list
 
LinkedList.prototype.addToTail = function(value) {
  const newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

// remove node from the head of the linked list
 
LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  const val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

// remove node from the tail of the linked list
 
LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  const val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};

// search for a value in the linked list
 
LinkedList.prototype.search = function(searchValue) {
  const currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  } 
  return null;
};

// Find index of the value in the linked list
 
LinkedList.prototype.indexOf = function(value) {
  const indexes = [];
  let currentIndex = 0;
  const currentNode = this.head;
  while(currentNode) {
    if (currentNode.value === value) indexes.push(currentIndex);
    currentNode = currentNode.next;
    currentIndex++;
  }
  return indexes;
};