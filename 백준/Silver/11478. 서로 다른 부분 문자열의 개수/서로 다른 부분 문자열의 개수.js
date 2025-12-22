function solution(input) {
  const n = input.length;
  const result = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n; j++) {
      result.add(input.slice(i, i + j));
    }
  }
  return result.size;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
