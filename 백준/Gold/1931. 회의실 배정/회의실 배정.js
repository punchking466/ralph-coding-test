function solution(input) {
  const lines = input.split("\n");
  const n = lines.shift();
  const times = lines
    .map((line) => line.split(" ").map(Number))
    .sort((a, b) => {
      if (a[1] !== b[1]) {
        return a[1] - b[1];
      } else {
        return a[0] - b[0];
      }
    });
  const result = [times[0]];
  for (let i = 1; i < times.length; i++) {
    if (times[i][0] >= result[result.length - 1][1]) {
      result.push(times[i]);
    }
  }
  return result.length;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));