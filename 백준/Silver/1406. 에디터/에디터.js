function solution(input) {
  const str = input.split("\n")[0];
  const n = Number(input.split("\n")[1]);
  const orders = input
    .split("\n")
    .slice(2)
    .map((item) => item.split(" "));

  const result = [...str];
  const stack = [];

  for (let order of orders) {
    switch (order[0]) {
      case "L":
        if (result.length > 0) stack.push(result.pop());
        break;
      case "D":
        if (stack.length > 0) result.push(stack.pop());
        break;
      case "B":
        result.pop();
        break;
      case "P":
        result.push(order[1]);
        break;
    }
  }

  while (stack.length > 0) {
    result.push(stack.pop());
  }

  return result.join("");
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));