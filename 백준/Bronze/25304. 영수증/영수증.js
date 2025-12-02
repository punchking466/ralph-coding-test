function solution(input) {
  const lines = input.split("\n");
  const total = Number(lines[0]);
  const testCases = lines.slice(2);
  let sum = 0;

  for (let line of testCases) {
    const [price, count] = line.split(" ");
    sum += Number(price) * Number(count);
  }

  return total === sum ? "Yes" : "No";
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));