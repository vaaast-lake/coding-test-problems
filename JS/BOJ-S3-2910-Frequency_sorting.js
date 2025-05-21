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
  const [N, C] = input[0].split(' ').map(Number);
  const nums = input[1].split(' ').map(Number);
  const mp = {};
  const mp_first = {};

  nums.forEach((v, i) => {
    if (!Object.hasOwn(mp, v)) {
      mp[v] = 1;
      mp_first[v] = i;
    } else {
      mp[v] = mp[v] + 1;
    }
  });

  nums.sort((a, b) => {
    if (mp[a] == mp[b]) {
      return mp_first[a] < mp_first[b] ? -1 : 1;
    }
    return mp[a] < mp[b] ? 1 : -1;
  });

  output.push(...nums);
};

solution(input);
fs.writeFileSync('/dev/stdout', output.join(' ').trimEnd());
// fs.writeFileSync(
//   '../output.txt',
//   output.join(' ').trimEnd(),
//   (err) => console.error
// );
