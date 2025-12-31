function solution(input) {
  const lines = input.split("\n");
  const n = Number(lines.shift());
  const nums = lines.map(Number).reverse();

  const result = [];
  const stack = [];
  for (let i = 1; i <= n; i++) {
    result.push("+");
    stack.push(i);

    while (
      stack.length > 0 &&
      nums[nums.length - 1] === stack[stack.length - 1]
    ) {
      stack.pop();
      nums.pop();
      result.push("-");
    }
  }

  return stack.length > 0 ? "NO" : result.join("\n");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
