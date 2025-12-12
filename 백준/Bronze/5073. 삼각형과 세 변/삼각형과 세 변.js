function solution(input) {
  const sides = input.split("\n").slice(0, -1);

  return sides
    .map((side) => {
      const [x, y, z] = side
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b);

      if (z >= x + y) return "Invalid";
      const sideSet = new Set([x, y, z]);
      if (sideSet.size === 3) return "Scalene";
      if (sideSet.size === 2) return "Isosceles";
      return "Equilateral";
    })
    .join("\n");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));