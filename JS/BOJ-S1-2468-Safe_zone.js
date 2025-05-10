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
  let ret = 1;
  const N = +input[0];

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const map = input.slice(1).map((v) => v.split(' ').map(Number));
  const visited = Array.from({ length: N }, () => Array(N).fill(0));

  const dfs = (y, x, depth) => {
    visited[y][x] = depth;
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      if (ny < 0 || ny >= N || nx < 0 || nx >= N) continue;
      if (visited[ny][nx] === 0 && map[ny][nx] > depth) {
        dfs(ny, nx, depth);
      }
    }
  };

  for (let d = 1; d <= 100; d++) {
    visited.forEach((v) => v.fill(0));
    let cnt = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (visited[i][j] === 0 && map[i][j] > d) {
          dfs(i, j, d);
          cnt++;
        }
      }
    }
    ret = Math.max(ret, cnt);
  }

  output.push(ret);
};

solution(input);
fs.writeFileSync('/dev/stdout', output.join('').trimEnd());
// fs.writeFileSync(
//   '../output.txt',
//   output.join('').trimEnd(),
//   (err) => console.error
// );
