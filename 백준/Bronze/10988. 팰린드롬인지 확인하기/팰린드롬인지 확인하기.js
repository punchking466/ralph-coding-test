function solution(input) {
  const str = input.split("");
  let left = 0,
    right = input.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return 0;
    }
    left++;
    right--;
  }

  return 1;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));