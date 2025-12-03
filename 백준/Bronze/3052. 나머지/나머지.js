function solution(input) {
  const numbers = input.split("\n").map(Number);
  const present = new Set();

  for (let num of numbers) {
    present.add(num % 42);
  }

  return present.size;
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));