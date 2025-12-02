function solution(input) {
  const [A, B] = input.split("\n").map(Number);
  let result = 0;
  if (A > 0) {
    result = B > 0 ? 1 : 4;
  } else {
    result = B > 0 ? 2 : 3;
  }
  return result;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
