function solution(input) {
  let str = input;
  const arr = ["dz=", "c=", "c-", "d-", "lj", "nj", "s=", "z="];
  for (let word of arr) {
    str = str.split(word).join("a");
  }

  return str.length;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));