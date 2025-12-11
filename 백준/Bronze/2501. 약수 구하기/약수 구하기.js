function solution(input) {
  const [N, K] = input.split(" ").map(Number);
  const divisors = new Set();

  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (N % i === 0) {
      divisors.add(i);
      divisors.add(N / i);
    }
  }
  const sorted = [...divisors].sort((a, b) => a - b);

  return sorted[K - 1] ? sorted[K - 1] : 0;
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));