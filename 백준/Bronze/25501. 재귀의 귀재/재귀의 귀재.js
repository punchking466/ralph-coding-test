
function solution(input) {
  const lines = input.split("\n");
  const testCases = lines.slice(1);

  return testCases.map((testCase) => isPalindrome(testCase)).join("\n");
}

function isPalindrome(str) {
  return recursion(str, 0, str.length - 1, 1);
}

function recursion(str, l, r, count) {
  if (l >= r) return `1 ${count}`;
  if (str[l] !== str[r]) return `0 ${count}`;
  return recursion(str, l + 1, r - 1, count + 1);
}

let input = "";

try {
  input = require("fs").readFileSync("input.txt", "utf-8").trim();
} catch (e) {
  input = require("fs").readFileSync(0, "utf-8").trim();
}

console.log(solution(input));
