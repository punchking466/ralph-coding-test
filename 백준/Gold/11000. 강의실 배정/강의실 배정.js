function solution(input) {
  const lines = input.split("\n");
  const n = lines.shift();
  const times = lines
    .map((line) => line.split(" ").map(Number))
    .sort((a, b) => a[0] - b[0]);

  const minHeap = new MinHeap();

  for (let [start, end] of times) {
    if (!minHeap.isEmpty() && minHeap.peek() <= start) {
      minHeap.poll();
    }
    minHeap.push(end);
  }
  return minHeap.size();
}
class MinHeap {
  constructor() {
    this.heap = [];
  }
  peek() {
    return this.heap[0];
  }
  push(item) {
    this.heap.push(item);
    this._bubbleUp();
  }
  poll() {
    if (this.isEmpty()) return undefined;
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    const end = this.heap.pop();
    this.heap[0] = end;
    this._bubbleDown();
    return min;
  }
  _bubbleUp() {
    let idx = this.size() - 1;
    const cur = this.heap[idx];

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);

      if (this.heap[parentIdx] < cur) break;
      this.heap[idx] = this.heap[parentIdx];
      idx = parentIdx;
    }
    this.heap[idx] = cur;
  }
  _bubbleDown() {
    let idx = 0;
    const length = this.size();
    const element = this.heap[idx];

    while (true) {
      const leftIdx = 2 * idx + 1;
      const rightIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swapIdx = null;

      if (leftIdx < length) {
        leftChild = this.heap[leftIdx];
        if (leftChild < element) swapIdx = leftIdx;
      }
      if (rightIdx < length) {
        rightChild = this.heap[rightIdx];
        if (
          (swapIdx === null && rightChild < element) ||
          (swapIdx !== null && rightChild < leftChild)
        ) {
          swapIdx = rightIdx;
        }
      }

      if (swapIdx === null) break;
      this.heap[idx] = this.heap[swapIdx];
      idx = swapIdx;
    }
    this.heap[idx] = element;
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));