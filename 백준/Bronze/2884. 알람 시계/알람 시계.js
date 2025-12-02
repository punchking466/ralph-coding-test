function solution(input) {
  const [h, m] = input.split(" ").map(Number);
  const total = (h * 60 + m + 1440 - 45) % 1440;
  return `${Math.floor(total / 60)} ${total % 60}`;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
