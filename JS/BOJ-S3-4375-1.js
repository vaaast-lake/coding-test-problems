'use strict';

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let output = [];
const solution = (input) => {
  for (let i = 0; i < input.length; ++i) {
    const num = +input[i];
    let cnt = 1,
      ret = 1;
    while (cnt % num != 0) {
      cnt = (cnt * 10 + 1) % num;
      ++ret;
    }
    output.push(ret);
  }
};

solution(input);
fs.writeFileSync('/dev/stdout', output.join('\n').trimEnd());
// fs.writeFileSync(
//   '../output.txt',
//   output.join('\n').trimEnd(),
//   (err) => console.error
// );
