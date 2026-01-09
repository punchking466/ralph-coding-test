function solution(input) {
  const N = Number(input.split("\n")[0]);
  const nums = input.split("\n")[1].split(" ").map(Number);

  let min = Infinity,
    max = 0;

  for (let num of nums) {
    min = Math.min(num, min);
    max = Math.max(num, max);
  }

  return min * max;
}

let input = "";

try {
  input = require("fs").readFileSync("input.txt", "utf-8").trim();
} catch (e) {
  input = require("fs").readFileSync(0, "utf-8").trim();
}

console.log(solution(input));