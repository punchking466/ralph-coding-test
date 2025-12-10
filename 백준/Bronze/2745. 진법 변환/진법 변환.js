function solution(input) {
  const [N, B] = input.split(" ");
  return parseInt(N, Number(B));
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));