let input = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number);
console.log(input.sort((a,b)=>b-a)[1])
