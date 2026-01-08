function solution(input) {
  const infix = input;

  const operatorToMap = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "(": 0,
  };

  const postfix = [];
  const stack = [];

  for (let token of infix) {
    if (isOperator(token)) {
      if (token === "(") {
        stack.push(token);
      } else if (token === ")") {
        while (stack.length && stack[stack.length - 1] !== "(") {
          postfix.push(stack.pop());
        }
        stack.pop();
      } else {
        while (
          stack.length &&
          operatorToMap[stack[stack.length - 1]] >= operatorToMap[token]
        ) {
          postfix.push(stack.pop());
        }
        stack.push(token);
      }
    } else {
      postfix.push(token);
    }
  }

  while (stack.length) {
    postfix.push(stack.pop());
  }

  return postfix.join("");
}

function isOperator(token) {
  return ["+", "-", "*", "/", "(", ")"].includes(token);
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
