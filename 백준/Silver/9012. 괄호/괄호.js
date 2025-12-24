function solution(input) {
  const lines = input.split("\n");
  const n = Number(lines.shift());
  const testCases = lines.map((line) => line.split(""));

  return testCases
    .map((testCase) => {
      const stack = [];
      for (let char of testCase) {
        if (char === "(") {
          stack.push(char);
        } else {
          const end = stack.pop();
          if (!end) {
            return "NO";
          }
        }
      }

      return stack.length === 0 ? "YES" : "NO";
    })
    .join("\n");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
