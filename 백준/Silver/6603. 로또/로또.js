
function solution(input) {
  let lines = input.trim().split("\n");
  const numList = lines
    .map((line) => line.split(" ").slice(1).map(Number))
    .slice(0, -1);

  const result = [];
  for (let nums of numList) {
    const comb = combination(nums);
    for (let c of comb) {
      result.push(c.join(" "));
    }
    result.push(" ");
  }
  return result.join("\n");
}

function combination(arr) {
  const result = [];
  function recursion(items, s = 0) {
    if (items.length === 6) {
      result.push([...items]);
      return;
    }

    for (let i = s; i < arr.length; i++) {
      items.push(arr[i]);
      recursion(items, i + 1);
      items.pop();
    }
  }

  recursion([]);
  return result;
}
let input = "";

try {
  input = require("fs").readFileSync("input.txt", "utf-8").trim();
} catch (e) {
  input = require("fs").readFileSync(0, "utf-8").trim();
}

console.log(solution(input));
