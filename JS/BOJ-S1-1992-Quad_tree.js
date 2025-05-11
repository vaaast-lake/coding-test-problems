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
  const n = +input[0];
  const data = input.slice(1);

  const quadTree = (y, x, size) => {
    if (size === 1) {
      output.push(data[y][x]);
      return;
    }

    for (let i = y; i < y + size; ++i) {
      for (let j = x; j < x + size; ++j) {
        if (data[y][x] !== data[i][j]) {
          const half = size / 2;
          output.push('(');
          output.push(quadTree(y, x, half));
          output.push(quadTree(y, x + half, half));
          output.push(quadTree(y + half, x, half));
          output.push(quadTree(y + half, x + half, half));
          output.push(')');
          return;
        }
      }
    }
    output.push(data[y][x]);
  };

  quadTree(0, 0, n);
};

solution(input);
// fs.writeFileSync('/dev/stdout', output.join('').trimEnd());
fs.writeFileSync(
  '../output.txt',
  output.join('').trimEnd(),
  (err) => console.error
);
