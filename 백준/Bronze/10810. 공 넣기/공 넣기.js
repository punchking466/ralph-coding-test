function solution(input) {
  const lines = input.split("\n");
  const [N, M] = lines[0].split(" ");
  const testCases = lines.slice(1);

  const arr = Array.from({ length: N }, () => 0);

  for (let i = 0; i < M; i++) {
    const [s, e, k] = testCases[i].split(" ").map(Number);

    for (let j = s - 1; j < e; j++) {
      arr[j] = k;
    }
  }
  return arr.join(" ");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));