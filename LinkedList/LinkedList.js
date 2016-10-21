var LinkedList = function (initialValue) {
  this.tail = new Node(initialValue);
  this.head = this.tail;
};

LinkedList.prototype.add = function (val) {
  var node = new Node(val);
  if (!this.head.value) {
    this.head = node;
  } else {
    this.tail.next = node;
  }
    this.tail = node;
  }

LinkedList.prototype.contains = function (val) {
  var current = this.head;
  while (current) {
    if (current.value === val) {
      return true;
    } else {
      current = current.next;
    }
  }
  return false;
}

LinkedList.prototype.remove = function (val) {
  var current = this.head;
  var previous = current;

  while (current) {
    if (current.value === val) {
      if (previous === current) {
        this.head = current.next;
        break;
      } else {
        previous.next = current.next;
        break;
      }
    } else {
      previous = current;
      current = current.next;
    }
  }
}

LinkedList.prototype.print = function () {
  var current = this.head;

  console.log("--------");

  while (current) {
    console.log(current.value);
    current = current.next;
  }

  console.log("--------");

}

var Node = function (value) {
  this.value = value;
  this.next = null;
}


// test implementation
var list = new LinkedList();

// add some values and print list
list.add(20);
list.add(13);
list.add(76);
list.add(194);
list.add(3);
list.print();

// check for a value not in the list
console.log("Contains 42:", list.contains(42));

// add that value and check for it
console.log("Adding 42");
list.add(42);
console.log("Contains 42:", list.contains(42));

// remove a value
console.log("Removing 76");
list.remove(76);
console.log("Contains 76:", list.contains(76));
list.print();

// remove the head
console.log("Removing 20");
list.remove(20);
console.log("Contains 20:", list.contains(20));

// print final state
list.print();
