
function solution(input) {
  const [N, ...rest] = input.split("\n");
  const papers = rest.map((el) => el.split(" "));

  const result = [0, 0];

  function recursion(arr, x, y, size) {
    if (size === 1) {
      const color = arr[x][y];
      color === "1" ? result[1]++ : result[0]++;
      return;
    }

    const unit = size / 2;
    const color = arr[x][y];

    let allMatch = true;

    for (let i = x; i < x + size; i++) {
      if (!allMatch) break;
      for (let j = y; j < y + size; j++) {
        if (arr[i][j] !== color) {
          allMatch = false;
          break;
        }
      }
    }
    if (allMatch) {
      color === "1" ? result[1]++ : result[0]++;
      return;
    }

    for (let dx = 0; dx < 2; dx++) {
      for (let dy = 0; dy < 2; dy++) {
        recursion(arr, x + dx * unit, y + dy * unit, unit);
      }
    }
  }
  recursion(papers, 0, 0, N);

  return result.join("\n");
}

let input = "";

try {
  input = require("fs").readFileSync("input.txt", "utf-8").trim();
} catch (e) {
  input = require("fs").readFileSync(0, "utf-8").trim();
}

console.log(solution(input));
