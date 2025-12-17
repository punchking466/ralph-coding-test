function solution(input) {
  return input
    .split("\n")
    .slice(1)
    .map(Number)
    .sort((a, b) => a - b)
    .join("\n");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));