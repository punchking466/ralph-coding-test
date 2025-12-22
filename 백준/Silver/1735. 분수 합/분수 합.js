function solution(input) {
  const lines = input.split("\n");
  const [a1, b1] = lines[0].split(" ").map(Number);
  const [a2, b2] = lines[1].split(" ").map(Number);
  const c = [
    ((b1 * b2) / gcd(b1, b2) / b1) * a1 + ((b1 * b2) / gcd(b1, b2) / b2) * a2,
    (b1 * b2) / gcd(b1, b2),
  ];

  return [c[0] / gcd(c[0], c[1]), c[1] / gcd(c[0], c[1])].join(" ");
}

function gcd(a, b) {
  if (b === 0) return a;

  return gcd(b, a % b);
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
