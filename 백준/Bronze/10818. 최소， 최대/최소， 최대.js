function solution(input) {
  const numbers = input.split("\n")[1].split(" ").map(Number);

  return `${Math.min(...numbers)} ${Math.max(...numbers)}`;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));