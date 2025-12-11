function solution(input) {
  const nums = input.split("\n").map(Number).slice(0, -1);
  const result = [];

  for (let num of nums) {
    const divisors = new Set();
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisors.add(i);
        divisors.add(num / i);
      }
    }
    const sorted = [...divisors].sort((a, b) => a - b).slice(0, -1);
    const sum = sorted.reduce((sum, val) => (sum += val), 0);
    if (num === sum) {
      result.push(`${num} = ${sorted.join(" + ")}`);
    } else {
      result.push(`${num} is NOT perfect.`);
    }
  }

  return result.join("\n");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));