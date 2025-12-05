function solution(input) {
  const str = input.toUpperCase();
  const countMap = new Map();

  for (let char of str) {
    if (!countMap.has(char)) {
      countMap.set(char, 1);
    } else {
      countMap.set(char, countMap.get(char) + 1);
    }
  }
  let maxVal = Math.max(...countMap.values());
  let result = "";
  for (let [key, value] of countMap.entries()) {
    if (value === maxVal) {
      if (result) {
        return "?";
      }
      result = key;
    }
  }

  return result;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));