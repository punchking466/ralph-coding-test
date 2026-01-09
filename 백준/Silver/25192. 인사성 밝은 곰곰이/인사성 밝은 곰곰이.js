function solution(input) {
  const [N, ...rest] = input.split("\n");
  const logs = rest;
  const isSayHi = new Set("1");

  let count = 0;
  for (let log of logs) {
    if (log === "ENTER") {
      isSayHi.clear();
    } else if (!isSayHi.has(log)) {
      isSayHi.add(log);
      count++;
    }
  }
  return count;
}

let input = "";

try {
  input = require("fs").readFileSync("input.txt", "utf-8").trim();
} catch (e) {
  input = require("fs").readFileSync(0, "utf-8").trim();
}

console.log(solution(input));