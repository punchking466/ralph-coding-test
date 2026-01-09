function solution(input) {
  const n = Number(input);
  if (n === 0) return 1;

  function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
  }

  return factorial(n);
}

let input = "";

try {
  input = require("fs").readFileSync("input.txt", "utf-8").trim();
} catch (e) {
  input = require("fs").readFileSync(0, "utf-8").trim();
}

console.log(solution(input));