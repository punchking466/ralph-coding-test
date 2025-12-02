function solution(input) {
  const score = Number(input);

  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
