function solution(input) {
  const lines = input.split("\n");
  const n = Number(lines[0]);
  const orders = lines.map((line) => line.split(" "));
  const queue = new Queue();

  const result = [];
  for (let order of orders) {
    switch (order[0]) {
      case "push":
        queue.push(order[1]);
        break;
      case "pop":
        result.push(queue.pop());
        break;
      case "size":
        result.push(queue.size());
        break;
      case "empty":
        result.push(Number(queue.isEmpty()));
        break;
      case "front":
        result.push(queue.peekFront());
        break;
      case "back":
        result.push(queue.peekBack());
        break;
    }
  }
  return result.join("\n");
}

class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
  }
  push(item) {
    this.queue.push(item);
  }
  pop() {
    if (this.isEmpty()) return -1;
    const item = this.queue[this.head];
    this.head++;
    if (this.queue.length <= this.head) {
      this.head = 0;
      this.queue = [];
    }
    return item;
  }
  peekFront() {
    if (this.isEmpty()) return -1;
    return this.queue[this.head];
  }
  peekBack() {
    if (this.isEmpty()) return -1;
    return this.queue[this.queue.length - 1];
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.queue.length - this.head;
  }
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
