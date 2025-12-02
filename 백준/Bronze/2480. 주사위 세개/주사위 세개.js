function solution(input) {
  const arr = input.split(" ").map(Number);
  const sorted = [...arr].sort((a, b) => a - b);
  let count = 1;
  let number = 0;
  let maxNumber = sorted[sorted.length - 1];
  let result = 0;

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) {
      number = sorted[i];
      count++;
    }
    maxNumber = Math.max(sorted[i], maxNumber);
  }

  if (count === 3) {
    result = 10000 + number * 1000;
  } else if (count === 2) {
    result = 1000 + number * 100;
  } else {
    result = maxNumber * 100;
  }

  return result;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));