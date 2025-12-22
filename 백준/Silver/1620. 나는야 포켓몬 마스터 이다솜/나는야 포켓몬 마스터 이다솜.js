function solution(input) {
  const lines = input.split("\n");
  const [n, m] = lines.shift().split(" ").map(Number);
  const pokemons = lines.slice(0, n);
  const questions = lines.slice(n);
  const pokemonToMap = new Map();

  for (let i = 0; i < n; i++) {
    pokemonToMap.set(pokemons[i], i + 1);
  }

  return questions
    .map((question) => {
      if (Number(question)) {
        return pokemons[question - 1];
      } else {
        return pokemonToMap.get(question);
      }
    })
    .join("\n");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
