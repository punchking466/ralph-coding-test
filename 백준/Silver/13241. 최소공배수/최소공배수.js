function solution(input) {
  const [a, b] = input.split(" ").map(Number);
  return (a * b) / gcd(a, b);
}

function gcd(a, b) {
  if (b === 0) return a;

  return gcd(b, a % b);
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
