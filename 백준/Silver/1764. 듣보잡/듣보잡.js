function solution(input) {
  const lines = input.trim().split("\n");
  const [n, m] = lines[0].split(" ").map(Number);

  const heard = new Set(lines.slice(1, n + 1));
  const seen = lines.slice(n + 1, n + 1 + m);

  const result = seen.filter((name) => heard.has(name)).sort();

  return [result.length, ...result].join("\n");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
