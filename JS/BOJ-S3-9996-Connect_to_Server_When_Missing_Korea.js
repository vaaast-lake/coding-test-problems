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
  const pat = input[1];
  const strings = input.slice(2);
  const pos = pat.indexOf('*');
  const pre = pat.substring(0, pos);
  const suf = pat.substring(pos + 1);
  
  strings.forEach(el => {
    if(el.length < pre.length + suf.length) output.push("NE");
    else {
      if(pre === el.substring(0, pre.length) && suf === el.substring(el.length - suf.length)) output.push("DA");
      else output.push("NE")
    }
  });
};

solution(input);
fs.writeFileSync("/dev/stdout", output.join("\n").trimEnd());
// fs.writeFileSync("../output.txt", output.join("\n").trimEnd(), (err) => console.error);
