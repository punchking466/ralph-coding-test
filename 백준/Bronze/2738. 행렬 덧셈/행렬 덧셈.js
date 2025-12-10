function solution(input) {
  const lines = input.split("\n");
  const [N, _] = lines.shift().split(" ");
  const A = lines.slice(0, N).map((item) => item.split(" ").map(Number));
  const B = lines.slice(N).map((item) => item.split(" ").map(Number));

  const result = [];
  for (let i = 0; i < A.length; i++) {
    const line = [];
    for (let j = 0; j < A[0].length; j++) {
      line.push(A[i][j] + B[i][j]);
    }
    result.push(line.join(" "));
  }
  return result.join("\n");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));