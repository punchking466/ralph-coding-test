function solution(input) {
  const lines = input.split("\n");
  const [N, M] = lines[0].split(" ").map(Number);
  const testCases = lines.slice(1);

  const arr = Array.from({ length: N }, (_, idx) => idx + 1);

  for (let i = 0; i < M; i++) {
    const [s, e] = testCases[i].split(" ").map(Number);
    const temp = arr[s - 1];
    arr[s - 1] = arr[e - 1];
    arr[e - 1] = temp;
  }

  return arr.join(" ");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));