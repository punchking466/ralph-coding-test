function solution(input) {
  const [N, B] = input.split(" ").map(Number);
  return N.toString(B).toUpperCase();
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));