function solution(input) {
  const lines = input.split("\n");
  const avgTable = {
    "A+": 4.5,
    A0: 4.0,
    "B+": 3.5,
    B0: 3.0,
    "C+": 2.5,
    C0: 2.0,
    "D+": 1.5,
    D0: 1.0,
    F: 0.0,
    P: 0.0,
  };
  let sumScore = 0;
  let total = 0;
  for (let line of lines) {
    const [_, A, B] = line.split(" ");
    if (B !== "P") sumScore += Number(A);
    total += A * avgTable[B];
  }

  return total / sumScore;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));