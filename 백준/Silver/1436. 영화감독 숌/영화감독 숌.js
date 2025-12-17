function solution(input) {
  const n = Number(input);
  let m = 666;
  let count = 1;

  while (count < n) {
    m++;
    if (m.toString().includes("666")) {
      count++;
    }
  }
  return m;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));