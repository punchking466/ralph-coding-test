function solution(input) {
  const lines = input.split("\n").map((str) => str.split(""));
  const JLength = Math.max(...lines.map((line) => line.length));
  const result = [];

  for (let j = 0; j < JLength; j++) {
    let word = [];
    for (let i = 0; i < lines.length; i++) {
      if (!lines[i][j]) continue;
      word.push(lines[i][j]);
    }
    result.push(word.join(""));
  }
  return result.join("");
}


let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));