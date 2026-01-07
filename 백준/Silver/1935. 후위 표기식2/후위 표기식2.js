function solution(input) {
  const lines = input.split("\n");
  const n = lines.shift();
  const postfix = lines.shift();
  const nums = lines.map(Number);
  const codeToMap = {};

  let ascii = 65;
  for (let num of nums) {
    codeToMap[String.fromCharCode(ascii)] = num;
    ascii++;
  }
  const stack = [];
  for (let token of postfix) {
    if (isOperator(token)) {
      const num2 = stack.pop();
      const num1 = stack.pop();

      stack.push(operate(num1, num2, token));
    } else {
      stack.push(codeToMap[token]);
    }
  }
  return stack[0].toFixed(2);
}

function isOperator(token) {
  return ["+", "-", "*", "/"].includes(token);
}

function operate(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
