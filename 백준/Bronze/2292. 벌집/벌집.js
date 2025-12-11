function solution(input) {
  const target = Number(input);
  let end = 7;
    if(target===1 ){
        return 1
    }
  if (target <= end) {
    return 2;
  }
  let n = 2;
  let count = 3;
  while (true) {
    if (target <= end + 6 * n) {
      break;
    }
    end = end + 6 * n;
    count++;
    n++;
  }
  return count;
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));