function solution(input) {
  let [N, ...rest] = input.trim().split("\n");
  const paper = rest.map((nums) => nums.split(" ").map(Number));

  return countPaper(paper, N).join("\n");
}

function countPaper(arr, N) {
  const result = [0, 0, 0];

  function recursion(x, y, size) {
    const color = arr[x][y];
    let allSame = true;
    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (color !== arr[i][j]) {
          allSame = false;
          break;
        }
      }
      if (!allSame) break;
    }
    if (allSame) {
      result[color + 1]++;
      return;
    }
    const newSize = size / 3;
    for (let dx = 0; dx < 3; dx++) {
      for (let dy = 0; dy < 3; dy++) {
        recursion(x + newSize * dx, y + newSize * dy, newSize);
      }
    }
  }
  recursion(0, 0, N);

  return result;
}

let input = "";

try {
  input = require("fs").readFileSync("input.txt", "utf-8").trim();
} catch (e) {
  input = require("fs").readFileSync(0, "utf-8").trim();
}

console.log(solution(input));
