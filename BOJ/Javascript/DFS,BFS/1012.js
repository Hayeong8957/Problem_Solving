const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs
  .readFileSync('/Users/shinhayeong/Desktop/Problem_Solving/test.txt')
  .toString()
  .trim()
  .split('\n');
let T = Number(input.shift());

for (let i = 0; i < T; i++) {
  var [가로길이, 세로길이, 배추위치수] = input.shift().split(' ').map(Number);
  var 배추밭 = Array.from(Array(세로길이), () => Array(가로길이).fill(false));

  // 가로 - X, 세로 - Y
  for (let j = 0; j < 배추위치수; j++) {
    let [가로, 세로] = input.shift().split(' ').map(Number);
    배추밭[세로][가로] = true;
  }

  console.log('배추밭 > ', 배추밭);

  var 배추흰지렁이 = 0;
  for (let i = 0; i < 세로길이; i++) {
    for (let j = 0; j < 가로길이; j++) {
      if (배추밭[i][j] === true) {
        bfs(i, j);
        배추흰지렁이++;
      }
    }
  }

  console.log(배추흰지렁이);
}
// col, x -> 좌우, 가로
// row, y -> 상하, 세로
//
function bfs(y, x) {
  let queue = [[y, x]];
  console.log('queue > ', queue);
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];

  배추밭[y][x] = false;
  // 배추밭[y, x] = false;

  while (queue.length) {
    let [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let newX = x + dx[i];
      let newY = y + dy[i];

      if (newX < 0 || newY < 0 || newY >= 세로길이 || newX >= 가로길이)
        continue;
      if (배추밭[newY][newX] === true) {
        배추밭[newY][newX] = false;
        queue.push([newY, newX]);
      }
    }
  }
}
