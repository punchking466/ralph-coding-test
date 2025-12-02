function solution(input) {
  const inputs = input.split("\n");
  const length = inputs[0];
  const arr = [...inputs].splice(1, length);
  const result = [];
  for (let numbers of arr) {
    const [A, B] = numbers.split(" ").map(Number);
    result.push(A + B);
  }
  return result.join("\n");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));