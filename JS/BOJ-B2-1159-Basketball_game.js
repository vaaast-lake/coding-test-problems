"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trimEnd());

let output = [];
const solution = (input) => {
  const n = input[0];
  const names = input.slice(1);
  const arr = Array.from({length: 26}, () => 0);

  for(let i = 0; i < n; ++i) {
    arr[names[i].charCodeAt(0) - 97]++;
  }

  for(let i = 0; i < arr.length; ++i) {
    if(arr[i] >= 5) output.push(String.fromCharCode(i + 97));
  }

  if(!output.length) output.push('PREDAJA');
};

solution(input);
// fs.writeFileSync("/dev/stdout", output.join(""));
fs.writeFileSync("../output.txt", output.join(""), (err) => console.error);
