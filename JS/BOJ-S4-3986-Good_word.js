'use strict';

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.trimEnd());

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    newNode.next = this.top;
    this.top = newNode;
    ++this.size;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const popVal = this.top.val;
    this.top = this.top.next;
    --this.size;
    return popVal;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this.isEmpty() ? null : this.top.val;
  }
}

let output = [];
const solution = (input) => {
  const n = +input[0];
  let cnt = 0;
  for (let i = 1; i <= n; ++i) {
    const s = input[i];
    if (s.length & 1) continue;

    const stack = new Stack();
    for (let j = 0; j < s.length; ++j) {
      if (stack.size != 0 && stack.peek() == s[j]) {
        stack.pop();
      } else stack.push(s[j]);
    }

    if (!stack.size) ++cnt;
  }
  output.push(cnt);
};

solution(input);
fs.writeFileSync('/dev/stdout', output.join('').trimEnd());
// fs.writeFileSync(
//   '../output.txt',
//   output.join('').trimEnd(),
//   (err) => console.error
// );
