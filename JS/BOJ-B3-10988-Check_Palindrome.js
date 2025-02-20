"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .map((v) => v.trimEnd());

let output = [];
const solution = (input) => {
  let result = 1;
  const reInput = input.split('').reverse();
  for (let i = 0; i < input.length; ++i) {
    if (input[i] != reInput[i]) {
      result = 0;
      break;
    }
  }
  output.push(result);
};

solution(input);
fs.writeFileSync("/dev/stdout", output.join(""));
// fs.writeFileSync("../output.txt", output.join(""), (err) => console.error);
