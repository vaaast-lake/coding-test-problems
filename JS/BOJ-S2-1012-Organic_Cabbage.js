'use strict';

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.trimEnd());

let N, M, K, ny, nx;
const mp = Array.from({ length: 51 }, () =>
  Array.from({ length: 51 }, () => 0)
);
const visited = Array.from({ length: 51 }, () =>
  Array.from({ length: 51 }, () => 0)
);

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
const dfs = (y, x) => {
  visited[y][x] = 1;

  for (let i = 0; i < 4; ++i) {
    ny = y + dy[i];
    nx = x + dx[i];

    if (ny < 0 || nx < 0 || ny >= N || nx >= M) continue;

    // console.log(`dfs i: ${i}`);
    // console.log(`y: ${y}, x: ${x} -> ny: ${ny}, nx: ${nx}`);
    // console.log(`mp[ny][nx]: ${mp[ny][nx]}`);
    // console.log(`visited[ny][nx]: ${visited[ny][nx]}`);

    if (mp[ny][nx] === 1 && !visited[ny][nx]) {
      dfs(ny, nx);
    }
  }
};

let output = [];
const solution = (input) => {
  let T = +input[0];
  let idx = 1;

  while (T--) {
    let ret = 0;
    [M, N, K] = input[idx].split(' ').map(Number);
    const carrot = input
      .slice(idx + 1, idx + K + 1)
      .map((el) => el.split(' ').map(Number));

    for (let i = 0; i < carrot.length; ++i) {
      mp[carrot[i][1]][carrot[i][0]] = 1;
    }

    // console.table(mp);

    for (let i = 0; i < N; ++i) {
      for (let j = 0; j < M; ++j) {
        if (mp[i][j] === 1 && !visited[i][j]) {
          // console.log(`\nT${T} -- i: ${i}, j: ${j}`);
          dfs(i, j);
          ++ret;
        }
      }
    }

    for (let i = 0; i < N; ++i) {
      mp[i].fill(0);
      visited[i].fill(0);
    }

    output.push(ret);
    idx += K + 1;
  }
};

solution(input);
// fs.writeFileSync('/dev/stdout', output.join('\n').trimEnd());
fs.writeFileSync(
  '../output.txt',
  output.join('\n').trimEnd(),
  (err) => console.error
);
