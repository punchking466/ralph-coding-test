function solution(input) {
  const year = Number(input);

  if (year % 400 === 0) {
    return 1;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return 1;
  } else {
    return 0;
  }
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
