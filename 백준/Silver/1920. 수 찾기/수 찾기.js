function solution(input) {
  const lines = input.split("\n");
  const arr1 = lines[1].split(" ").map(Number);
  const arr2 = lines[3].split(" ").map(Number);
  const numMap = new Map();

  for (let num of arr1) {
    if (!numMap.has(num)) numMap.set(num, true);
  }
  return arr2.map((num) => Number(numMap.has(num))).join("\n");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));