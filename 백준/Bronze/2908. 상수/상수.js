function solution(input) {
  const [A, B] = input.split(" ");
  const rA = Number(A.split("").reverse().join(""));
  const rB = Number(B.split("").reverse().join(""));

  return Math.max(rA, rB);
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));