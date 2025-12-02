function solution(input) {
  const [target, n, ...items] = input.split("\n");
  const sum = items.reduce((acc,line)=>{
      const [price, count] = line.split(" ").map(Number);
      return acc + price * count;
  },0)

  return Number(target) === sum ? "Yes" : "No";
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));