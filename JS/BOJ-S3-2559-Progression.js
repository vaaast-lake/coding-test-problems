"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trimEnd().split(' '));

let output = [];
const solution = (input) => {
  const [N, K] = input[0].map(v => +v);
  const nums = input[1].map(v => +v);
  const psum = Array.from({length: N+1}, ()=>0);
  let maxVal = -1e9;

  for(let i = 1; i <= N; ++i) {
    psum[i] = psum[i-1] + nums[i-1];
  }
  for(let i = K; i <= N; ++i){
    maxVal = Math.max(maxVal, psum[i] - psum[i-K]);
  }

  output.push(maxVal);
};

solution(input);
fs.writeFileSync("/dev/stdout", output.join("").trimEnd());
// fs.writeFileSync("../output.txt", output.join("").trimEnd(), (err) => console.error);
