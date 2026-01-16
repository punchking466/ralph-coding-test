
function solution(input) {
  const [N, M] = input.trim().split(" ").map(Number);
  const used = Array(N + 1).fill(false);

  const result = [];
  function dfs(items, idx) {
    if (items.length === M) {
      result.push(items.join(" "));
      return;
    }

    for (let i = idx; i <= N; i++) {
      if (used[i]) continue;
      used[i] = true;
      dfs([...items, i], i + 1);
      used[i] = false;
    }
  }

  dfs([], 1);
  return result.join("\n");
}

let input = "";

try {
  input = require("fs").readFileSync("input.txt", "utf-8").trim();
} catch (e) {
  input = require("fs").readFileSync(0, "utf-8").trim();
}

console.log(solution(input));
