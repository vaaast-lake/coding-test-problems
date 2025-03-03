'use strict';

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((v) => v.trimEnd());

const go = (a, b, c) => {
  if (b == 1) return a % c;
  let ret = go(a, b / BigInt(2), c);
  ret = (ret * ret) % c;
  if (b % BigInt(2)) return (ret * a) % c;
  return ret;
};

let output = [];
const solution = (input) => {
  const [a, b, c] = input.map(BigInt);
  output.push(go(a, b, c));
};

solution(input);
fs.writeFileSync('/dev/stdout', output.join('').trimEnd());
// fs.writeFileSync(
//   '../output.txt',
//   output.join('').trimEnd(),
//   (err) => console.error
// );
