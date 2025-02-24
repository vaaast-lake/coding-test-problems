'use strict';

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let output = [];
const solution = (input) => {
  const [n, m] = input[0].split(' ').map((v) => +v);

  const mp = new Map();
  for (let i = 1; i <= n; ++i) {
    mp.set(input[i], i);
  }
  for (let i = n + 1; i <= n + m; ++i) {
    if (!Number.isNaN(+input[i])) {
      output.push(input[input[i]]);
    } else {
      output.push(mp.get(input[i]));
    }
  }
};

solution(input);
fs.writeFileSync('/dev/stdout', output.join('\n').trimEnd());
// fs.writeFileSync(
//   '../output.txt',
//   output.join('\n').trimEnd(),
//   (err) => console.error
// );
