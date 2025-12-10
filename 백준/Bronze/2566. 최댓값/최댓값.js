function solution(input) {
  const lines = input.split("\n");
  let maxNum = 0;
  let [r, c] = [1, 1];
  lines.map((line, i) =>
    line.split(" ").map((num, j) => {
      if (maxNum < Number(num)) {
        maxNum = Number(num);
        [r, c] = [i + 1, j + 1];
      }
      return Number(num);
    }),
  );
  return `${maxNum}\n${r} ${c}`;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));