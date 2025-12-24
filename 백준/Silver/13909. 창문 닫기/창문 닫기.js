function solution(input) {
  const n = Number(input);

  let temp = 0;
  let i = 1;
  let count = 0;
  while (temp <= n) {
    temp += i;
    i += 2;
    count++;
  }
  return count - 1;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));