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
  const [n, m] = [+input[0], +input[1]];
  let nums = input[2]
    .split(' ')
    .map((v) => +v)
    .sort((a, b) => a - b);

  let cnt = 0;
  const comb = (idx = 0, arr = []) => {
    if (arr.length == 2) {
      if (arr[0] + arr[1] == m) {
        ++cnt;
      }
      return;
    }
    for (let i = idx; i < n; ++i) {
      arr.push(nums[i]);
      comb(i + 1, arr);
      arr.pop();
    }
  };

  comb();

  output.push(cnt);
};

solution(input);
fs.writeFileSync('/dev/stdout', output.join('').trimEnd());
// fs.writeFileSync(
//   '../output.txt',
//   output.join('').trimEnd(),
//   (err) => console.error
// );
