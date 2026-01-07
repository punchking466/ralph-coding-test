function solution(input) {
  const str = input.split("");
  const stack = [];
  const result = [];

  let flag = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "<" || str[i] === " ") {
      if (str[i] === "<") {
        flag = true;
      }
      while (stack.length > 0) {
        result.push(stack.pop());
      }
      result.push(str[i]);
      continue;
    } else if (str[i] === ">") {
      flag = false;
      result.push(str[i]);
      continue;
    }

    if (flag) {
      result.push(str[i]);
    } else {
      stack.push(str[i]);
    }
  }

  while (stack.length > 0) {
    result.push(stack.pop());
  }
  return result.join("");
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
