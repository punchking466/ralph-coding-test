function solution(input) {
  const lines = input.split("\n");
  const N = lines.shift();
  const points = lines
    .map((line) => line.split(" ").map(Number))
    .sort((a, b) => a[1] - b[1] || a[0] - b[0])
    .map((item) => item.join(" "));

  return points.join("\n");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));