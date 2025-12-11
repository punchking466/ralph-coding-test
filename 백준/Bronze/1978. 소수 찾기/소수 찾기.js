function solution(input) {
  const nums = input.split("\n").slice(1)[0].split(" ").map(Number);
  let result = [];
  for (let num of nums) {
    if (isPrime(num)) result.push(num);
  }
  return result.length;
}

function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}


let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));