function solution(input) {
  const [N, ...points] = input.split("\n");

  if (Number(N) < 2) return 0;

  let left = Number(points[0].split(" ")[0]);
  let right = Number(points[0].split(" ")[0]);
  let top = Number(points[0].split(" ")[1]);
  let bottom = Number(points[0].split(" ")[1]);

  for (let point of points) {
    const [x, y] = point.split(" ").map(Number);
    left = Math.min(left, x);
    right = Math.max(right, x);
    top = Math.max(top, y);
    bottom = Math.min(bottom, y);
  }
  return (right - left) * (top - bottom);
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));