function solution(input) {
  let [A, B, V] = input.split(" ").map(Number);

  return Math.ceil((V - A) / (A - B)) + 1;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));