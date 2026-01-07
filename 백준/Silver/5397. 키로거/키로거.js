function solution(input) {
  const lines = input.split("\n").slice(1);
  const result = [];
  for (let line of lines) {
    const chars = line.split("");

    const password = [];
    const stack = [];
    for (let i = 0; i < chars.length; i++) {
      const ch = chars[i];

      switch (ch) {
        case "<":
          if (password.length > 0) stack.push(password.pop());
          break;
        case ">":
          if (stack.length > 0) password.push(stack.pop());
          break;
        case "-":
          if (password.length > 0) password.pop();
          break;
        default:
          password.push(ch);
          break;
      }
    }

    while (stack.length) password.push(stack.pop());
    result.push(password.join(""));
  }

  return result.join("\n");
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
