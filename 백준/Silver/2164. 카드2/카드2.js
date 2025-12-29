function solution(input) {
  const n = Number(input);
  const cards = Array.from({ length: n }, (_, idx) => idx + 1);
  const queue = new Queue();
  cards.forEach((card) => {
    queue.push(card);
  });

  while (queue.size() > 1) {
    queue.pop();
    if (queue.size() > 1) {
      queue.push(queue.pop());
    } else {
      return queue.pop();
    }
  }

  return 1;
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
