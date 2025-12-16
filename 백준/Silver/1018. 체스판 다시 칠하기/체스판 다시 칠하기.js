function solution(input) {
  const lines = input.split("\n");
  const [N, M] = lines.shift().split(" ");
  const tiles = lines;

  let min = Infinity;
  let count = 0;
  for (let r = 0; r <= N - 8; r++) {
    for (let c = 0; c <= M - 8; c++) {
      ["B", "W"].forEach((t) => {
        const evenTile = t;
        const oddTile = t === "W" ? "B" : "W";
        for (let i = r; i < r + 8; i++) {
          for (let j = c; j < c + 8; j++) {
            if (i % 2 === r % 2) {
              let tile = "";
              if (c % 2 === j % 2) {
                tile = evenTile;
              } else {
                tile = oddTile;
              }
              if (tile !== tiles[i][j]) {
                count++;
              }
            } else {
              let tile = "";
              if (c % 2 === j % 2) {
                tile = oddTile;
              } else {
                tile = evenTile;
              }
              if (tile !== tiles[i][j]) {
                count++;
              }
            }
          }
        }
        min = min > count ? count : min;
        count = 0;
      });
    }
  }
  return min;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));