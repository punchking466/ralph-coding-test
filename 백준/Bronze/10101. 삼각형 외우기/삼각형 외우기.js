function solution(input) {
  const angles = input.split("\n").map(Number);
  const sum = angles.reduce((s, v) => (s += v), 0);

  if (sum !== 180) return "Error";

  const angleSet = new Set(angles);
  if (angleSet.size === 1) return "Equilateral";
  if (angleSet.size === 2) return "Isosceles";
  if (angleSet.size === 3) return "Scalene";
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));