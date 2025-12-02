function solution(inputs) {
  const [A, B] = inputs.split(" ").map(Number);

  if (A > B) {
    return ">";
  } else if (A < B) {
    return "<";
  } else {
    return "==";
  }
}

let inputs = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(inputs));
