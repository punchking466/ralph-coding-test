function solution(input) {
  const lines = input.split("\n");
  const n = Number(lines[0]);
  const nums = lines[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let left = 0;
  let right = n - 1;
  let min = Infinity;
  let result = [left, right];

  while (left < right) {
    if (nums[left] + nums[right] === 0) {
      min = Math.min(min, nums[left] + nums[right]);
      [result[0], result[1]] = [nums[left], nums[right]];
      break;
    }
    if (Math.abs(min) > Math.abs(nums[left] + nums[right])) {
      min = nums[left] + nums[right];
      [result[0], result[1]] = [nums[left], nums[right]];
    }
    Math.abs(nums[left]) > Math.abs(nums[right]) ? left++ : right--;
  }

  return result.join(" ");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));