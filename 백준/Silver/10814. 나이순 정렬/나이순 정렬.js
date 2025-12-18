function solution(input) {
  const lines = input.split("\n");
  const n = Number(lines.shift());
  const users = lines
    .map((line) => {
      const [age, name] = line.split(" ");
      return [Number(age), name];
    })
    .sort((a, b) => a[0] - b[0])
    .map((user) => user.join(" "))
    .join("\n");

  return users;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));