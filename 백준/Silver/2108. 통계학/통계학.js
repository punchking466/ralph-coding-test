function solution(input) {
  const lines = input.split("\n");
  const n = lines.shift();
  const nums = lines.map(Number).sort((a, b) => a - b);

  const avg = nums.reduce((sum, val) => sum + val, 0);
  const mid = nums[Math.floor(n / 2)];
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  const distance = Math.abs(max - min);
  const countArr = {};
  for (let i = 0; i < n; i++) {
    if (!countArr.hasOwnProperty(nums[i])) countArr[nums[i]] = 0;
    countArr[nums[i]] += 1;
  }
  const maxCount = Math.max(...Object.values(countArr));
  const maxNum = Object.entries(countArr)
    .sort((a, b) => b[1] - a[1] || a[0] - b[0])
    .filter((item) => item[1] === maxCount);

  return `${Math.round(avg / n)}\n${mid}\n${
    maxNum.length === 1 ? maxNum[0][0] : maxNum[1][0]
  }\n${distance}`;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));