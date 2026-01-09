function solution(input) {
  const [N, ...rest] = input.split("\n");
  const logs = rest.map((el) => el.split(" "));
  const isDancing = new Set();

  for (let [a, b] of logs) {
    if (
      a === "ChongChong" ||
      b === "ChongChong" ||
      isDancing.has(a) ||
      isDancing.has(b)
    ) {
      isDancing.add(a);
      isDancing.add(b);
    }
  }
  return isDancing.size;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
