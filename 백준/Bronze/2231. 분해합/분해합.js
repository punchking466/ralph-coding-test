function solution(input) {
  const n = Number(input);

  for (let i = 1; i < n; i++) {
    const nums = i.toString().split("").map(Number);
    if (n === i + nums.reduce((sum, val) => sum + val, 0)) {
      return nums.join("");
    }
  }
  return 0;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));