"use strict";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("");

let output = [];
const solution = (input) => {
  const upper = /[A-Z]/;
  const lower = /[a-z]/;

  for(let i = 0; i < input.length; ++i){
    if(upper.test(input[i])) input[i] = String.fromCharCode((input[i].charCodeAt(0) - 65 + 13) % 26 + 65);
    else if (lower.test(input[i])) input[i] = String.fromCharCode((input[i].charCodeAt(0) - 97 + 13) % 26 + 97);
  }

  output = input;
};

solution(input);
fs.writeFileSync("/dev/stdout", output.join(""));
// fs.writeFileSync("../output.txt", output.join(""), (err) => console.error);
