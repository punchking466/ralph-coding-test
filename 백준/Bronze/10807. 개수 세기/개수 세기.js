function solution(input) {
  const [_, items, target] = input.split("\n");
  return items.split(" ").filter((item) => item === target).length;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
