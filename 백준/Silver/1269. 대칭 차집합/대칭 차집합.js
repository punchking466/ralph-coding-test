function solution(input) {
  const lines = input.trim().split("\n");
  const A = lines[1].split(" ").map(Number);
  const B = lines[2].split(" ").map(Number);
  const ASet = new Set(A);
  const BSet = new Set(B);

  let count = 0;

  for (let num of A) {
    if (!BSet.has(num)) count++;
  }
  for (let num of B) {
    if (!ASet.has(num)) count++;
  }

  return count;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
