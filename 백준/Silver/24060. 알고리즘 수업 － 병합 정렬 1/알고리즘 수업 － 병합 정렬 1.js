function solution(input) {
  const lines = input.split("\n");
  const [N, K] = lines[0].split(" ").map(Number);
  const arr = lines[1].split(" ").map(Number);

  let count = 0;
  let answer = -1;

  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.ceil(arr.length / 2);

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
  }

  function merge(left, right) {
    const result = [];

    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      if (right[j] >= left[i]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
      count++;
      if (count === K) answer = result[result.length - 1];
    }

    while (i < left.length) {
      result.push(left[i++]);
      count++;
      if (count === K) answer = result[result.length - 1];
    }
    while (j < right.length) {
      result.push(right[j++]);
      count++;
      if (count === K) answer = result[result.length - 1];
    }
    return result;
  }
  mergeSort(arr);
  return answer;
}

let input = "";

try {
  input = require("fs").readFileSync("input.txt", "utf-8").trim();
} catch (e) {
  input = require("fs").readFileSync(0, "utf-8").trim();
}

console.log(solution(input));