function solution(input) {
  const str = input.split("\n")[0].split("");
  const bomb = input.split("\n")[1];
  const len = bomb.length;
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
    while (str.length >= len && stack.slice(-len).join("") === bomb) {
      stack.length = stack.length - len;
    }
  }

  return stack.length > 0 ? stack.join("") : "FRULA";
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
