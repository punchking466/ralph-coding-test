const input = require('fs').readFileSync(0, 'utf-8').trim()
  .split("\n")
  .map(Number);

const numbers = [];

for (let i = 0; i < input.length; i++) {
  numbers.push(input[i]);
}

function avg(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  let average = sum / 5;

  return average;
}

function medianValue(a) {
  let temp = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[i] > a[j]) {
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  return a[2];
}

function solution(result) {
  average = avg(result);
  median = medianValue(result);
  console.log(average + "\n" + median);
}
solution(numbers);