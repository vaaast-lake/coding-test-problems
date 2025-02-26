'use strict';

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().trim();

let output = [];
const solution = (input) => {
  const cnt = Array.from({ length: 26 }, () => 0);
  for (let i = 0; i < input.length; ++i) {
    cnt[input.charCodeAt(i) - 65]++;
  }
  let mid = '';
  let flag = 0;
  let tmp = '';
  for (let i = cnt.length - 1; i >= 0; --i) {
    if (cnt[i] & 1) {
      mid = String.fromCharCode(i + 65);
      --cnt[i];
      ++flag;
    }
    if (flag > 1) break;
    for (let j = 0; j < cnt[i] / 2; ++j) {
      let s = String.fromCharCode(i + 65);
      tmp = s + tmp;
      tmp += s;
    }
  }
  if (mid)
    tmp =
      tmp.substring(0, tmp.length / 2) + mid + tmp.substring(tmp.length / 2);

  flag > 1 ? output.push("I'm Sorry Hansoo") : output.push(tmp);
};

solution(input);
fs.writeFileSync('/dev/stdout', output.join('').trimEnd());
// fs.writeFileSync(
//   '../output.txt',
//   output.join('').trimEnd(),
//   (err) => console.error
// );
