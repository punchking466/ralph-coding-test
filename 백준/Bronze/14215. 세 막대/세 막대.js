function solution(input) {
  const nums = input
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const numSet = new Set(nums);
  if (numSet.size === 1) return nums[0] * 3;
  if (nums[0] + nums[1] > nums[2]) return nums[0] + nums[1] + nums[2];
  return (nums[0] + nums[1]) * 2 - 1;
}


let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));