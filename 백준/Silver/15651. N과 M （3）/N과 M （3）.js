
function solution(input) {
  const [N, M] = input.trim().split(" ").map(Number);

  const result = [];
  function dfs(items) {
    if (items.length === M) {
      result.push(items.join(" "));
      return;
    }

    for (let i = 1; i <= N; i++) {
      dfs([...items, i], i + 1);
    }
  }

  dfs([]);
  return result.join("\n");
}

let input = "";

try {
  input = require("fs").readFileSync("input.txt", "utf-8").trim();
} catch (e) {
  input = require("fs").readFileSync(0, "utf-8").trim();
}

console.log(solution(input));
