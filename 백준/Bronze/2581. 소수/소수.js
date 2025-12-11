function solution(input) {
  const [left, right] = input.split("\n").map(Number);
  const nums = [];
  for (let i = left; i <= right; i++) {
    nums.push(i);
  }
  let primes = [];
  for (let num of nums) {
    if (isPrime(num)) primes.push(num);
  }

  return primes.length > 0
    ? `${primes.reduce((sum, val) => (sum += val), 0)}\n${primes[0]}`
    : -1;
}

function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));