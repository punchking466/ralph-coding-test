function solution(input) {
  const arr = input
    .split("\n")
    .slice(1)[0]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      continue;
    }
    arr[i] = arr[i] + arr[i - 1];
  }

  return arr.reduce((sum, val) => sum + val, 0);
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));