function solution(input) {
  const [n, target] = input.split("\n")[0].split(" ").map(Number);
  const cards = input.split("\n")[1].split(" ").map(Number);
  let max = 0;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        const sum = cards[i] + cards[j] + cards[k];
        if (target >= sum) max = Math.max(max, sum);
      }
    }
  }
  return max;
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));