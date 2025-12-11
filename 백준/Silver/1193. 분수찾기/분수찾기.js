function solution(input) {
  const N = Number(input);
  let M = 0;
  let start = 0;
  let end = 0;
  while (N > end) {
    M++;
    start = ((M - 1) * M) / 2;
    end = (M * (M + 1)) / 2;
  }
  if (M % 2 === 0) {
    let position = N - (start + 1);
    let [x, y] = [1, M];
    for (let i = 0; i < position; i++) {
      x++;
      y--;
    }

    return `${x}/${y}`;
  } else {
    let position = N - (start + 1);
    let [x, y] = [M, 1];
    for (let i = 0; i < position; i++) {
      x--;
      y++;
    }

    return `${x}/${y}`;
  }
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));