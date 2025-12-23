function solution(input) {
  const lines = input.split("\n");
  const nums = lines.slice(1).map(Number);

  const result = [];
  for (let n of nums) {
    let prime = 0;
    while (true) {
      if (getPrime(n)) {
        prime = n;
        break;
      }
      n++;
    }
    result.push(prime);
  }
  return result.join("\n");
}

function getPrime(n) {
  if (n === 0 || n === 1) return false;
  if (n === 2) return true;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
