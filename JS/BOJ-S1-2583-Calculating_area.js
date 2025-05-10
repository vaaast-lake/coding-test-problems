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
  const [M, N, K] = input[0].split(' ').map(Number);
  const board = Array.from({ length: M }, () => Array(N).fill(0));
  const visited = Array.from({ length: M }, () => Array(N).fill(0));
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  const ret = [];

  const area = input.slice(1).map((v) => v.split(' ').map(Number));
  area.forEach((v) => {
    const [x1, y1, x2, y2] = v;
    for (let i = y1; i < y2; i++) {
      for (let j = x1; j < x2; j++) {
        board[i][j] = 1;
      }
    }
  });

  const dfs = (y, x) => {
    visited[y][x] = 1;
    let cnt = 1;
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      if (ny < 0 || ny >= M || nx < 0 || nx >= N) continue;
      if (visited[ny][nx] === 1 || board[ny][nx] === 1) continue;
      cnt += dfs(ny, nx);
    }
    return cnt;
  };

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j] === 0 && board[i][j] === 0) {
        ret.push(dfs(i, j));
      }
    }
  }
  ret.sort((a, b) => a - b);

  output.push(ret.length, '\n');
  output.push(ret.join(' '));
};

solution(input);
fs.writeFileSync('/dev/stdout', output.join('').trimEnd());
// fs.writeFileSync(
//   '../output.txt',
//   output.join('').trimEnd(),
//   (err) => console.error
// );
