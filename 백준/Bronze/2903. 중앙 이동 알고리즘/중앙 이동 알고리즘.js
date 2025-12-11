function solution(input) {
  const N = Number(input);
  let dot = 4;

  for (let i = 1; i <= N; i++) {
    dot = dot * 4 - ((Math.sqrt(dot) - 1) * 4 + 3);
  }

  return dot;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));