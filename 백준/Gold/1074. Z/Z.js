
function solution(input) {
  const [N, r, c] = input.trim().split(" ").map(Number);

  let count = 0;

  function recursion(row, col, size) {
    if (size === 1 && r === row && col === c) {
      return;
    }
    const unit = size / 2;
    if (r < row + unit) {
      if (c < col + unit) {
        recursion(row, col, unit);
      } else {
        count += (size * size) / 4;
        recursion(row, col + unit, unit);
      }
    } else {
      if (c < col + unit) {
        count += (size * size) / 2;
        recursion(row + unit, col, unit);
      } else {
        count += (size * size * 3) / 4;
        recursion(row + unit, col + unit, unit);
      }
    }
  }
  recursion(0, 0, 2 ** N);

  return count;
}
let input = "";

try {
  input = require("fs").readFileSync("input.txt", "utf-8").trim();
} catch (e) {
  input = require("fs").readFileSync(0, "utf-8").trim();
}

console.log(solution(input));
