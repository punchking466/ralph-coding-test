function solution(input) {
  const target = Number(input);
  const result = [];
  for (let i = 0; i < target / 4; i++) {
    result.push("long");
  }
  return `${result.join(" ")} int`;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));