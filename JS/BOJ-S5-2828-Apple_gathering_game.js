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
  const [N, M] = input[0].split(' ').map(Number);
  const arr = input.slice(2).map(Number);

  let l = 1;
  let ret = 0;

  arr.forEach((v) => {
    let r = l + M - 1;

    if (l <= v && v <= r) return;

    if (v < l) {
      ret += l - v;
      l = v;
    } else if (v >= l) {
      l += v - r;
      ret += v - r;
    }
  });

  output.push(ret);
};

solution(input);
fs.writeFileSync('/dev/stdout', output.join('').trimEnd());
// fs.writeFileSync(
//   '../output.txt',
//   output.join('').trimEnd(),
//   (err) => console.error
// );
