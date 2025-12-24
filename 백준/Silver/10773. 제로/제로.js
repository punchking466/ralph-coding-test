function solution(input) {
  const nums = input.split("\n").slice(1).map(Number);
  const stack = [];

  for (let num of nums) {
    if (num === 0) {
      stack.pop();
    } else {
      stack.push(num);
    }
  }

  return stack.reduce((sum, val) => sum + val, 0);
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
