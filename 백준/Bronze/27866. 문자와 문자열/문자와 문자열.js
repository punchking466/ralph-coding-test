function solution(input) {
  const inputs = input.split("\n");
  return inputs[0][inputs[1] - 1];
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));