class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.headNode = new Node("head", null);
    this.count = 0;
  }
  append(data) {
    let newNode = new Node(data, null);
    let last = this.traverse(this.headNode);
    last.next = newNode;
    this.count = this.count + 1;
  }
  toString() {
    let string = JSON.stringify(this.headNode);
    return string;
  }
  traverse(node) {
    if (node.next == null) {
      return node;
    }

    let lastNode = this.traverse(node.next);

    return lastNode;
  }
  prepend(data) {
    let newNode = new Node(data, null);
    newNode.next = this.headNode.next;
    this.headNode.next = newNode;
    this.count = this.count + 1;
  }
  size() {
    return this.count;
  }
  tail() {
    let lastOne = this.traverse(this.headNode);
    return lastOne;
  }
  at(index) {
    let currIndex = 0;
    let currnNode = this.headNode;
    while (currIndex < index) {
      currnNode = currnNode.next;
      currIndex++;
    }
    if (currIndex == index) {
      return currnNode;
    }
  }
  pop() {
    let oneBeforeLast = this.at(this.count - 1);

    oneBeforeLast.next = null;
  }
  contains(value) {
    let currNode = this.headNode;
    let currValue = currNode.data;

    while (currNode != null) {
      if (currValue == value) {
        return true;
      } else {
        currNode = currNode.next;
        if (currNode == null) {
          return false;
        }
        currValue = currNode.data;
      }
    }
  }
  find(value) {
    let currNode = this.headNode;
    let currvalue = currNode.data;
    let count = 0;
    while (currNode != null) {
      if (currvalue == value) {
        return count;
      } else if (currvalue != value) {
        count++;
        if (currNode.next == null) {
          return "Node doesn't exist ";
        }
        currNode = currNode.next;
        currvalue = currNode.data;
      }
    }
  }
}

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
