function solution(input) {
  const inputs = input.split("\n");
  const N = Number(inputs.shift());
  const scores = inputs[0].split(" ").map(Number);
  const maxScore = Math.max(...scores);

  for (let i = 0; i < N; i++) {
    scores[i] = (scores[i] / maxScore) * 100;
  }

  const avg = scores.reduce((acc, cur) => acc + cur, 0) / N;

  return avg;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));