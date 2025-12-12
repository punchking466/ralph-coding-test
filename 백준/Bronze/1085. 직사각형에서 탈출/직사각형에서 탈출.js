function solution(input) {
  const [x, y, w, h] = input.split(" ").map(Number);
  let min = x;

  if (min > y) min = y;
  if (min > w - x) min = w - x;
  if (min > h - y) min = h - y;
  return min;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));