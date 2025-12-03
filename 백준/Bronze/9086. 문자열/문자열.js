function solution(input) {
  const inputs = input.split("\n");
  const N = inputs.shift();
  const result = [];

  for (let i = 0; i < N; i++) {
    const end = inputs[i].length - 1;
    result.push(`${inputs[i][0]}${inputs[i][end]}`);
  }
  return result.join("\n");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));