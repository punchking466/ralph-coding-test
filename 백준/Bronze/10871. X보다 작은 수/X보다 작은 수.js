function solution(input) {
  const lines = input.split("\n");
  const [N, target] = lines[0].split(" ").map(Number);
  const testCases = lines[1].split(" ").map(Number);

  let result = [];

  for (let i = 0; i < N; i++) {
    if (testCases[i] < target) {
      result.push(testCases[i]);
    }
  }
  return result.join(" ");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));