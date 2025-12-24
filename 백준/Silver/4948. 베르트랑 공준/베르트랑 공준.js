function solution(input) {
  const nums = input.split("\n").slice(0, -1).map(Number);
  const max = 123456 * 2;
  const isPrime = Array(max + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= max; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= max; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return nums
    .map((n) => {
      let count = 0;
      for (let i = n + 1; i <= n * 2; i++) {
        if (isPrime[i]) count++;
      }
      return count;
    })
    .join("\n");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));