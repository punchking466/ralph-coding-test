function solution(input) {
  const lines = input.split("\n");
  const orders = lines.slice(1).map((line) => line.split(" ").map(Number));
  const deque = new Deque();

  const result = [];

  for (let order of orders) {
    switch (order[0]) {
      case 1:
        deque.unshift(order[1]);
        break;
      case 2:
        deque.push(order[1]);
        break;
      case 3:
        result.push(deque.shift());
        break;
      case 4:
        result.push(deque.pop());
        break;
      case 5:
        result.push(deque.size());
        break;
      case 6:
        result.push(deque.isEmpty() ? 1 : 0);
        break;
      case 7:
        result.push(deque.peekHead());
        break;
      case 8:
        result.push(deque.peekTail());
        break;
    }
  }

  return result.join("\n");
}

class Deque {
  constructor() {
    this.items = new Array(2000000);
    this.head = 1000000;
    this.tail = 1000000;
  }
  peekHead() {
    if (this.isEmpty()) return -1;
    return this.items[this.head];
  }
  peekTail() {
    if (this.isEmpty()) return -1;
    return this.items[this.tail - 1];
  }
  unshift(item) {
    this.items[--this.head] = item;
  }
  push(item) {
    this.items[this.tail++] = item;
  }
  shift() {
    return this.isEmpty() ? -1 : this.items[this.head++];
  }
  pop() {
    return this.isEmpty() ? -1 : this.items[--this.tail];
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.tail - this.head;
  }
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
