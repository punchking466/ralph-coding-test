function solution(input) {
  const lines = input.split("\n");
  const [N, M] = lines.shift().split(" ").map(Number);
  const board = lines;
  let minCount = Infinity;

  for (let r = 0; r <= N - 8; r++) {
    for (let c = 0; c <= M - 8; c++) {
      let countW = 0;
      let countB = 0;

      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          const cur = board[r + i][c + j];
          const expectedW = (i + j) % 2 === 0 ? "W" : "B";
          const expectedB = (i + j) % 2 === 0 ? "B" : "W";

          if (cur !== expectedW) countW++;
          if (cur !== expectedB) countB++;
        }
      }
      minCount = Math.min(minCount, countW, countB);
    }
  }
  return minCount;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));