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
const solution = (input) => {};

solution(input);
// fs.writeFileSync("/dev/stdout", output.join("").trimEnd());
fs.writeFileSync("../output.txt", output.join("").trimEnd(), (err) => console.error);
