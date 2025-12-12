function solution(input) {
  return Number(input)*4;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));