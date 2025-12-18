function solution(input) {
  const lines = input.split("\n");
  const [N, k] = lines[0].split(" ").map(Number);
  const scores = quickSort(lines[1].split(" ").map(Number));
  return scores[N - k];
}
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));