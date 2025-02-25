'use strict';

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.trimEnd());

let output = [];
const solution = (input) => {
  let t = +input[0];
  let idx = 1;
  while (t--) {
    let res = 1;
    const n = +input[idx];
    const m = new Map();
    for (let i = idx + 1; i <= idx + n; ++i) {
      const [a, b] = input[i].split(' ');
      if (m.has(b)) {
        m.set(b, m.get(b)++);
      } else {
        m.set(b, 1);
      }
    }
    idx += n + 1;
    m.forEach((v) => {
      res *= v + 1;
    });
    output.push(res - 1);
  }
};

solution(input);
// fs.writeFileSync('/dev/stdout', output.join('\n').trimEnd());
fs.writeFileSync(
  '../output.txt',
  output.join('\n').trimEnd(),
  (err) => console.error
);
