'use strict';

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.trimEnd());

let N, M, K;
const mp = Array.from({ length: N }, () => 0);
const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => 0)
);

console.log(mp);

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const dfs = (y, x) => {
  for (let i = 0; i < 4; ++i) {
    ny = y + dy[i];
    nx = x + dx[i];
    if (ny < 0 || nx < 0 || ny >= N || nx >= M) continue;
    if (mp[ny][nx] == 1 && !visited[ny][nx]) dfs(ny, nx);
  }
};

let output = [];
const solution = (input) => {
  let T = +input[0];
  let i = 1;
  let ret = 0;

  while (T--) {
    [M, N, K] = input[i].split(' ').map(Number);
    const carrot = input
      .slice(i + 1, i + K + 1)
      .map((el) => el.split(' ').map(Number));

    for (let i = 0; i < N; ++i) {
      for (let j = 0; j < M; ++j) {
        // mp[i][j] = 0;
        // visited[i][j] = 0;
      }
    }

    for (let i = 0; i < carrot.length; ++i) {
      // mp[carrot[i][0]][carrot[i][1]] = 1;
    }

    for (let i = 0; i < mp.length; ++i) {
      for (let j = 0; j < mp[i].length; ++j) {
        if (mp[i][j] === 1 && !visited[i][j]) {
          dfs(i, j);
          ++ret;
        }
      }
    }

    i += K + 1;
  }
};

solution(input);
// fs.writeFileSync("/dev/stdout", output.join("").trimEnd());
fs.writeFileSync(
  '../output.txt',
  output.join('').trimEnd(),
  (err) => console.error
);
