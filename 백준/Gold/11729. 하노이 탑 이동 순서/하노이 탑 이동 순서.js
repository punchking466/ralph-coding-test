
function solution(input) {
  const N = Number(input);
  const result = hanoi([], N, 1, 3, 2);

  return [result.length, ...result.map((el) => el.join(" "))].join("\n");
}
function hanoi(result, num, from, to, via) {
  if (num === 0) return;
  hanoi(result, num - 1, from, via, to);
  result.push([from, to]);
  hanoi(result, num - 1, via, to, from);

  return result;
}

let input = "";

try {
  input = require("fs").readFileSync("input.txt", "utf-8").trim();
} catch (e) {
  input = require("fs").readFileSync(0, "utf-8").trim();
}

console.log(solution(input));
