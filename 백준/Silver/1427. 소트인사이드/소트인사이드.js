function solution(input) {
  return input
    .split("")
    .map(Number)
    .sort((a, b) => b - a)
    .join("");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));