
function solution(input) {
  const n = Number(input);
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;

  function fibo(n1, n2, c, end) {
    if (c === end) return n1 + n2;
    return fibo(n2, n1 + n2, c + 1, end);
  }

  return fibo(0, 1, 2, n);
}

let input = "";

try {
  input = require("fs").readFileSync("input.txt", "utf-8").trim();
} catch (e) {
  input = require("fs").readFileSync(0, "utf-8").trim();
}

console.log(solution(input));
