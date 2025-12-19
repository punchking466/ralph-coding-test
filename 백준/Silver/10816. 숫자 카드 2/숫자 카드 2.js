function solution(input) {
  const lines = input.split("\n");
  const tables = lines[1].split(" ").map(Number);
  const cards = lines[3].split(" ").map(Number);
  const tableToMap = new Map();

  for (let card of tables) {
    if (!tableToMap.has(card)) tableToMap.set(card, 0);
    tableToMap.set(card, tableToMap.get(card) + 1);
  }

  return cards
    .map((card) => (tableToMap.get(card) ? tableToMap.get(card) : 0))
    .join(" ");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));