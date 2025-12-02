function solution(input) {
  const [time, timeToCook] = input.split("\n");
  const [h, m] = time.split(" ").map(Number);
  const total = (h * 60 + m + Number(timeToCook) + 1440) % 1440;

  return `${Math.floor(total / 60)} ${total % 60}`;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));