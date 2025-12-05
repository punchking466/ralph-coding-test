function solution(input) {
  const N = Number(input);
  const result = [];
  for (let i = 0; i < N; i++) {
    const starts = "*".repeat(2 * i + 1);
    result.push(starts.padStart(N + i, " "));
  }

  return `${result.join("\n")}\n${result.slice(0, -1).reverse().join("\n")}`;
}


let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));