function solution(input) {
  let [a, b, c, d, e, f] = input.split(" ").map(Number);

  for (let i = -999; i <= 999; i++) {
    for (let j = -999; j <= 999; j++) {
      if (a * i + b * j === c && d * i + e * j === f) {
        return `${i} ${j}`;
      }
    }
  }
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));