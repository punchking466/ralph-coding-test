function solution(input) {
  const [N, ...words] = input.split("\n");
  let count = 0;
  for (let word of words) {
    let result = true;
    const positionMap = new Map();
    for (let i = 0; i < word.length; i++) {
      if (!positionMap.has(word[i])) {
        positionMap.set(word[i], i);
        continue;
      }
      const lastPosition = positionMap.get(word[i]);
      if (i - lastPosition === 1) {
        positionMap.set(word[i], i);
      } else {
        result = false;
      }
    }
    if (result) count++;
  }

  return count;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));