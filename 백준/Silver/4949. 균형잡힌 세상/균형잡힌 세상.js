function solution(input) {
  const lines = input.split("\n").slice(0, -1);

  const result = lines.map((line) => {
    const stack = [];
    for (let char of line) {
      if (char === "(") {
        stack.push(char);
      } else if (char === ")") {
        const end = stack.pop();
        if (end !== "(") return "no";
      } else if (char === "[") {
        stack.push(char);
      } else if (char === "]") {
        const end = stack.pop();
        if (end !== "[") return "no";
      }
    }
    return stack.length === 0 ? "yes" : "no";
  });

  return result.join("\n");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));