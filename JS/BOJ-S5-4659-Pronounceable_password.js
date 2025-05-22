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
  const isVowel = (s) => {
    return s === 'a' || s === 'o' || s === 'e' || s === 'u' || s === 'i';
  };

  const outputStr = (b, s) => {
    output.push(`<${s}> is${b ? '' : ' not'} acceptable.`);
  };

  input.forEach((v) => {
    if (v === 'end') return;

    let vcnt = 0,
      ccnt = 0,
      isIncludeV = false;
    let prev = '';

    for (let i = 0; i < v.length; ++i) {
      if (isVowel(v[i])) {
        ++vcnt, (ccnt = 0);
        isIncludeV = true;
      } else {
        (vcnt = 0), ++ccnt;
      }

      if (prev === v[i] && v[i] !== 'o' && v[i] !== 'e') {
        outputStr(false, v);
        return;
      }

      if (vcnt >= 3 || ccnt >= 3) {
        outputStr(false, v);
        return;
      }

      prev = v[i];
    }

    if (!isIncludeV) {
      outputStr(false, v);
      return;
    }

    outputStr(true, v);
  });
};

solution(input);
fs.writeFileSync('/dev/stdout', output.join('\n').trimEnd());
// fs.writeFileSync(
//   '../output.txt',
//   output.join('\n').trimEnd(),
//   (err) => console.error
// );
