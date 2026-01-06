function solution(input) {
  const str = input.split("\n")[0].split("");
  const bomb = input.split("\n")[1];
  const bombLen = bomb.length;
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);

    if (stack.length >= bombLen && stack.slice(-bombLen).join("") === bomb) {
      stack.length -= bombLen;
    }
  }

  return stack.length > 0 ? stack.join("") : "FRULA";
}


let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
