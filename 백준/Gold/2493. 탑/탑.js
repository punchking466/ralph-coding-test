function solution(input) {
  const n = Number(input.split("\n")[0]);
  const nums = input.split("\n")[1].split(" ").map(Number);

  const result = Array(n).fill(0);
  const stack = [];

  for (let i = n - 1; i >= 0; i--) {
    const cur = nums[i];

    while (stack.length > 0 && nums[stack[stack.length - 1]] < cur) {
      result[stack.pop()] = i + 1;
    }
    stack.push(i);
  }
  return result.join(" ");
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
