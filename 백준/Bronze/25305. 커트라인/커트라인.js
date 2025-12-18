function solution(input) {
  const lines = input.split("\n");
  const [N, k] = lines[0].split(" ").map(Number);
  const scores = lines[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  return scores[k - 1];
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));