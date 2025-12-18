function solution(input) {
  const words = new Set(
    input
      .split("\n")
      .slice(1)
      .sort((a, b) => {
        if (a.length !== b.length) {
          return a.length - b.length;
        } else {
          return a.localeCompare(b);
        }
      }),
  );
  return [...words].join("\n");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));