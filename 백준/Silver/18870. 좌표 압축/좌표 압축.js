function solution(input) {
  const lines = input.split("\n");
  const n = Number(lines.shift());
  const points = lines[0].split(" ").map(Number);
  const sorted = [...points].sort((a, b) => a - b);
  const idxMap = {};

  let idx = 0;
  sorted.forEach((num) => {
    if (!idxMap.hasOwnProperty(num)) {
      idxMap[num] = idx;
      idx++;
    }
  });
  return points.map((point) => idxMap[`${point}`]).join(" ");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));