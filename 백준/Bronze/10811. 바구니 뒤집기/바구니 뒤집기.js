function solution(input) {
  const lines = input.split("\n");
  const [N, M] = lines[0].split(" ").map(Number);
  const testCases = lines.slice(1);
  const basket = Array.from({ length: N }, (_, idx) => idx + 1);
  for (let i = 0; i < M; i++) {
    const [s, e] = testCases[i].split(" ").map(Number);
    const reverseArr = basket.slice(0, e).reverse();
    let count = 0;
    for (let j = s - 1; j < e; j++) {
      basket[j] = reverseArr[count];
      count++;
    }
  }
  return basket.join(" ");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));