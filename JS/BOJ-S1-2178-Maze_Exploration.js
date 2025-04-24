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
  const [n, m] = input[0].split(' ').map(Number);
  const maze = input.slice(1).map((v) => v.split('').map(Number));
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const queue = [[0, 0]];
  maze[0][0] = 2;

  let idx = 0;
  while (idx < queue.length) {
    const [x, y] = queue[idx++];
    for (let i = 0; i < 4; ++i) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (maze[nx][ny] === 1) {
        queue.push([nx, ny]);
        maze[nx][ny] = maze[x][y] + 1;
      }
    }
  }
  output.push(maze[n - 1][m - 1] - 1);
};

solution(input);
fs.writeFileSync('/dev/stdout', output.join('').trimEnd());
// fs.writeFileSync(
//   '../output.txt',
//   output.join('').trimEnd(),
//   (err) => console.error
// );
