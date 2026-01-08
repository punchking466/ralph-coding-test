function solution(input) {
  let n = Number(input);
  if (n === 1 || n === 0) return 1;

  let result = 1;
  while (n > 0) {
    result *= n;
    n--;
  }

  return result;
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
