function solution(input) {
  const num = Number(input);
  let result = [];
  for (let i = 1; i <= 9; i++) {
    result.push(`${num} * ${i} = ${num * i}`);
  }

  return result.join("\n");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));