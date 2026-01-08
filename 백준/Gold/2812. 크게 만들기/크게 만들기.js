function solution(input) {
  const [N, K] = input.split("\n")[0].split(" ").map(Number);
  const number = input.split("\n")[1].split("").map(Number);

  const stack = [];

  let k = K;
  for (let i = 0; i < N; i++) {
    const cur = number[i];

    if (stack.length) {
      while (stack.length && stack[stack.length - 1] < cur && k > 0) {
        stack.pop();
        k--;
      }
      stack.push(cur);
    } else {
      stack.push(cur);
    }
  }
  return stack.length > N - K ? stack.slice(0, N - K).join("") : stack.join("");
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
