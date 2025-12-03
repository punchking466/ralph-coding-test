function solution(input) {
  const lines = input.split("\n");
  return lines
    .map((line) => {
      const [A, B] = line.split(" ").map(Number);
      return A + B;
    })
    .join("\n");
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));