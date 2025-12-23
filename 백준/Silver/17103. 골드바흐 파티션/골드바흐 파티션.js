function solution(input) {
  const lines = input.split("\n");
  const n = Number(lines.shift());
  const nums = lines.map(Number);
  const max = 1000000;
  const isPrime = Array(max + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= max; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= max; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const result = nums.map((num) => {
    let count = 0;

    for (let i = 2; i <= num / 2; i++) {
      if (isPrime[i] && isPrime[num - i]) count++;
    }
    return count;
  });
  return result.join("\n");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
