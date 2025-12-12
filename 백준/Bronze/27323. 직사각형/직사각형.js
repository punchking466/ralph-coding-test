function solution(input) {
  const [A, B] = input.split("\n").map(Number);
  return A * B;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));