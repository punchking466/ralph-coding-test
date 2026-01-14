
function solution(input) {
  const N = Number(input);
  const stars = Array.from({ length: N }, () => Array(N).fill("*"));
  const reulst = [];
  recursion(stars, 0, 0, N);

  stars.forEach((el) => {
    reulst.push(el.join(""));
  });

  return reulst.join("\n");
}

function recursion(arr, x, y, size) {
  if (size === 1) return;

  const mid = size / 3;

  for (let i = x + mid; i < x + mid * 2; i++) {
    for (let j = y + mid; j < y + mid * 2; j++) {
      arr[i][j] = " ";
    }
  }

  for (let dx = 0; dx < 3; dx++) {
    for (let dy = 0; dy < 3; dy++) {
      if (dx === 1 && dy === 1) continue;
      recursion(arr, x + mid * dx, y + mid * dy, mid);
    }
  }
}

let input = "";

try {
  input = require("fs").readFileSync("input.txt", "utf-8").trim();
} catch (e) {
  input = require("fs").readFileSync(0, "utf-8").trim();
}

console.log(solution(input));
