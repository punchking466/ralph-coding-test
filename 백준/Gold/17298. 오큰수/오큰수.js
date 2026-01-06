function solution(input) {
  const n = Number(input.split("\n")[0]);
  const nums = input.split("\n")[1].split(" ").map(Number);

  const result = Array(n).fill(-1);
  const stack = [];

  for (let i = 0; i < n; i++) {
    const cur = nums[i];

    while (stack.length > 0 && nums[stack[stack.length - 1]] < cur) {
      result[stack.pop()] = cur;
    }
    stack.push(i);
  }
  return result.join(" ");
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
