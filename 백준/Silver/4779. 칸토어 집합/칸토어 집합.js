
function solution(input) {
  const lines = input.split("\n");

  const result = [];

  for (let line of lines) {
    const len = 3 ** Number(line);
    const arr = Array(len).fill("-");
    recursion(arr, 0, len);
    result.push(arr.join(""));
  }

  return result.join("\n");
}

function recursion(arr, s, e) {
  const len = e - s;
  if (len < 3) return arr;

  const mid = len / 3;
  for (let i = s + mid; i < s + mid * 2; i++) {
    arr[i] = " ";
  }
  recursion(arr, s, s + mid);
  recursion(arr, s + mid * 2, e);
}

let input = "";

try {
  input = require("fs").readFileSync("input.txt", "utf-8").trim();
} catch (e) {
  input = require("fs").readFileSync(0, "utf-8").trim();
}

console.log(solution(input));
