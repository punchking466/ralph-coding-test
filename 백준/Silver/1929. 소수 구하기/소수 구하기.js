function solution(input) {
  const [n, m] = input.split(" ").map(Number);
  const isPrime = Array(m + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= m; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= m; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const reulst = [];
  for (let i = n; i <= m; i++) {
    if (isPrime[i]) reulst.push(i);
  }
  return reulst.join("\n");
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
