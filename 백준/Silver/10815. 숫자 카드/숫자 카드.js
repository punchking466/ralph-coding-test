function solution(input) {
  const lines = input.split("\n");
  const curCards = lines[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const cards = lines[3].split(" ").map(Number);

  const cardsToMap = new Map();

  for (let card of cards) {
    if (!cardsToMap.has(card)) cardsToMap.set(card, 0);
  }
  for (let curCard of curCards) {
    if (cardsToMap.has(curCard))
      cardsToMap.set(curCard, cardsToMap.get(curCard) + 1);
  }

  return [...cardsToMap.values()].join(" ");

  // return cards.map((card) => cardsToMap.get(card)).join(" ");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
