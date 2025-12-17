function solution(input) {
  const n = Number(input);

  let count = 0;
  let tempN = n;
  while (tempN > 0) {
    if (tempN % 5 === 0) {
      return tempN / 5 + count;
    }
    tempN -= 3;
    count++;
  }
  if (n % 3 === 0) {
    return n / 3;
  }
  return -1;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));