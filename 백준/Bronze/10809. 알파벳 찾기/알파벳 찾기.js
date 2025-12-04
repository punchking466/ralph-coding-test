function solution(input) {
  const aIndex = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };
  const arr = Array.from({ length: Object.keys(aIndex).length }, () => -1);
  for (let i = 0; i < input.length; i++) {
    const targetIndex = aIndex[input[i]];
    if (arr[targetIndex] === -1) {
      arr[targetIndex] = i;
    }
  }
  return arr.join(" ");
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));