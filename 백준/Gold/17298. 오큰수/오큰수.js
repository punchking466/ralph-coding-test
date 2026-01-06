function solution(input) {
  const n = Number(input.split("\n")[0]);
  const nums = input.split("\n")[1].split(" ").map(Number);

  const result = [];
  const stack = [];

  for (let j = n - 1; j >= 0; j--) {
    while (stack.length > 0 && stack[stack.length - 1] <= nums[j]) {
      stack.pop();
    }
    result.push(stack.length > 0 ? stack[stack.length - 1] : -1);
    stack.push(nums[j]);
  }
  return result.reverse().join(" ");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
