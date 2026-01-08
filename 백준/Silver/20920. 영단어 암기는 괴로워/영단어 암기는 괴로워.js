function solution(input) {
  const lines = input.split("\n");
  const [N, M] = lines.shift().split(" ").map(Number);
  const words = lines
    .sort((a, b) => b.length - a.length || a.localeCompare(b))
    .filter((word) => word.length >= M);
  const wordCounts = new Map();

  words.forEach((word) => {
    wordCounts.set(word, (wordCounts.get(word) ?? 0) + 1);
  });

  words.sort((a, b) => wordCounts.get(b) - wordCounts.get(a));
  return [...new Set(words)].join("\n");
}
                          
let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
