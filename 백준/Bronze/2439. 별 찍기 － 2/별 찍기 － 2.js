function solution(input) {
  const n = Number(input);
  const arr = Array.from({ length: n }, () => " ");
  let result = "";
  for (let i = n - 1; i >= 0; i--) {
    arr[i] = "*";
    result += `${arr.join("")}\n`;
  }
  return result;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));