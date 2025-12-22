function solution(input) {
  const lines = input.split("\n");
  const [n, m] = lines[0].split(" ").map(Number);
  const strSet = new Set(lines.slice(1, n + 1));
  const strArr = lines.slice(n + 1);
  return strArr.reduce((sum, str) => (strSet.has(str) ? sum + 1 : sum), 0);
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
