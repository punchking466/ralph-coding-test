function solution(input) {
  const lines = input.split("\n");

  const paper = Array.from({ length: 100 }, () => Array(100).fill(0));

  for (let line of lines.slice(1)) {
    const [N, M] = line.split(" ").map(Number);
    for (let i = N - 1; i < N + 10 - 1; i++) {
      for (let j = M - 1; j < M + 10 - 1; j++) {
        paper[i][j] = 1;
      }
    }
  }
  return paper.flat().reduce((sum, val) => sum + val, 0);
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));