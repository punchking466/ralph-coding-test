function solution(input) {
  const lines = input.split("\n");
  const n = Number(lines.shift());
  const logs = lines;
  const isEnter = new Set();

  for (let log of logs) {
    const [name, type] = log.split(" ");
    if (type === "enter") {
      isEnter.add(name);
    } else if (type === "leave") {
      isEnter.delete(name);
    }
  }

  return [...isEnter].sort().reverse().join("\n");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
