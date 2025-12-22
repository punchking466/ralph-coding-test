function solution(input) {
  const lines = input.split("\n");
  const n = lines.shift();
  const nums = lines.map((line) =>
    line
      .split(" ")
      .map(Number)
      .sort((a, b) => b - a),
  );

  return nums.map(([a, b]) => (a * b) / gcd(a, b)).join("\n");
}

function gcd(a, b) {
  if (b === 0) return a;

  return gcd(b, a % b);
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));