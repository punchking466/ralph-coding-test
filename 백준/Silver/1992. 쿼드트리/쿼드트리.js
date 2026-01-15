
function solution(input) {
  const [N, ...rest] = input.split("\n");
  const papers = rest.map((el) => el.split("").map(Number));
  const result = [];

  function recursion(arr, x, y, size) {
    const color = arr[x][y];
    if (size === 1) {
      result.push(color);
      return;
    }

    let allMatch = true;

    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (arr[i][j] !== color) {
          allMatch = false;
          break;
        }
      }
      if (!allMatch) break;
    }
    if (allMatch) {
      result.push(color);
    } else {
      result.push("(");
      const unit = size / 2;
      for (let dx = 0; dx < 2; dx++) {
        for (let dy = 0; dy < 2; dy++) {
          recursion(arr, x + dx * unit, y + dy * unit, unit);
        }
      }
      result.push(")");
    }
  }
  recursion(papers, 0, 0, Number(N));
  return result.join("");
}

let input = "";

try {
  input = require("fs").readFileSync("input.txt", "utf-8").trim();
} catch (e) {
  input = require("fs").readFileSync(0, "utf-8").trim();
}

console.log(solution(input));
