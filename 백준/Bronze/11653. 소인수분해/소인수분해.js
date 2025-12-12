function solution(input) {
  let N = Number(input);
  const result = [];
  if (N === 1) return '';
  if (N === 2) return 2;

  while (N % 2 === 0) {
    result.push(2);
    N = N / 2;
  }
  for (let i = 3; i <= N; i += 2) {
    while (N % i === 0) {
      result.push(i);
      N = N / i;
    }
  }
  return result.join("\n");
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));