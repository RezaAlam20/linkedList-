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
    console.log(this.count);
  }
  tail() {
    let lastOne = this.traverse(this.headNode);
    console.log(lastOne);
  }
}

let testList = new LinkedList();
testList.append("second");
testList.append("third ");
testList.append("fourth");

testList.prepend("before second");

testList.print();
testList.size();
testList.tail();
