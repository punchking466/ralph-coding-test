function solution(input) {
  const [h, m] = input.split(" ").map(Number);
  const formatMinute = h * 60 + m;
  const alarm = formatMinute - 45;
  const alarmH = Number(Math.floor(alarm / 60));
  const alarmM = Number(alarm % 60);
  return `${alarmH < 0 ? 23 : alarmH} ${alarmM < 0 ? 60 + alarmM : alarmM}`;
}

let input = require('fs').readFileSync(0, 'utf-8').trim();
console.log(solution(input));
