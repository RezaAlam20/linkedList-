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
  print() {
    console.log(this.headNode);
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
        return currNode;
      } else {
        currNode = currNode.next;
        currValue = currNode.data;
      }
    }
  }
}

let testList = new LinkedList();
testList.append("second");
testList.append("third ");
testList.append("fourth");

testList.prepend("first");

console.log(testList.contains("third"));
