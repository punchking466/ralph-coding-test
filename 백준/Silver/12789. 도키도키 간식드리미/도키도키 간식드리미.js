function solution(input) {
  const lines = input.split("\n");
  const n = Number(lines[0]);
  const students = lines[1].split(" ").map(Number);
  const stack = [];

  let curOrder = 1;
  for (let num of students) {
    if (num === curOrder) {
      curOrder++;
      continue;
    }

    while (stack[stack.length - 1] === curOrder) {
      stack.pop();
      curOrder++;
    }

    stack.push(num);

    if (num === curOrder) {
      stack.pop();
      curOrder++;
      continue;
    }
  }
  while (stack[stack.length - 1] === curOrder) {
    stack.pop();
    curOrder++;
  }
  return stack.length === 0 ? "Nice" : "Sad";
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));