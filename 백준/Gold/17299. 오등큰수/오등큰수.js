function solution(input) {
  const N = Number(input.split("\n")[0]);
  const numbers = input.split("\n")[1].split(" ").map(Number);

  const numCount = new Map();
  numbers.forEach((num) => {
    if (!numCount.has(num)) numCount.set(num, 0);
    numCount.set(num, numCount.get(num) + 1);
  });

  const stack = [];
  const result = Array(N).fill(-1);

  for (let i = 0; i < N; i++) {
    const cur = numbers[i];
    if (stack.length) {
      while (
        stack.length &&
        numCount.get(numbers[stack[stack.length - 1]]) < numCount.get(cur)
      ) {
        result[stack.pop()] = numbers[i];
      }
      stack.push(i);
    } else {
      stack.push(i);
    }
  }
  return result.join(" ");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));