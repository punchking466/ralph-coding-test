function solution(input) {
  const [n, m] = input.split(" ").map(Number);
  const primes = [];
  let start = n;

  while (start <= m) {
    if (getPrime(start)) {
      primes.push(start);
    }
    start++;
  }
  return primes.join("\n");
}

function getPrime(n) {
  if (n === 0 || n === 1) return false;
  if (n === 2) return true;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
