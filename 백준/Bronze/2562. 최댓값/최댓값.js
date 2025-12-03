function solution(input) {
  const numbers = input.split("\n").map(Number);

  let maxVal = numbers[0];
  let maxIdx = 1;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxVal) {
      maxVal = numbers[i];
      maxIdx = i + 1;
    }
  }
  return `${maxVal}\n${maxIdx}`;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));