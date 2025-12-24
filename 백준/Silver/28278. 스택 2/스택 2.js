function solution(input) {
  const orders = input
    .split("\n")
    .slice(1)
    .map((lines) => lines.split(" ").map(Number));
  const stack = new Stack();
  const result = [];

  for (let order of orders) {
    switch (order[0]) {
      case 1:
        stack.push(order[1]);
        break;
      case 2:
        const tail = stack.pop();
        result.push(tail);
        break;
      case 3:
        result.push(stack.size());
        break;
      case 4:
        result.push(Number(stack.isEmpty()));
        break;
      case 5:
        result.push(stack.peek());
        break;
    }
  }
  return result.join("\n");
}

class Stack {
  constructor() {
    this.stack = [];
  }

  peek() {
    if (this.isEmpty()) return -1;
    return this.stack[this.size() - 1];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (this.isEmpty()) return -1;
    return this.stack.pop();
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.stack.length;
  }
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
