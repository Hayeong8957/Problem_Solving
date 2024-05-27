const fs = require('fs');
let input = fs.readFileSync('/Users/shinhayeong/Desktop/Problem_Solving/test.txt').toString().trim().split('\n');
let [N, M] = input.shift().split(' ').map(Number);
let arr = input.map((item) => item.split(' ').map(Number));

// 1. 현재 빙산 상태 받아 빙산 녹는 과정 시뮬레이션 
function meltIce(grid) {
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  let newGrid = grid.map(row => row.slice());

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (grid[y][x] > 0) {
        let waterCount = 0;
        for (let i = 0; i < 4; i++) {
          let newY = y + dy[i];
          let newX = x + dx[i];
          if (newY >= 0 && newY < N && newX >= 0 && newX < M && grid[newY][newX] === 0) {
            waterCount++;
          }
        }
        newGrid[y][x] = Math.max(0, grid[y][x] - waterCount);
      }
    }
  }
  return newGrid;
}

// 2. 빙산 분리 확인 -> bfs
function bfs(y, x, grid, visited) {
  let queue = [[y, x]];
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];

  visited[y][x] = true;

  while (queue.length) {
    let [cy, cx] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let newY = cy + dy[i];
      let newX = cx + dx[i];

      if (newY >= 0 && newX >= 0 && newY < N && newX < M && !visited[newY][newX] && grid[newY][newX] > 0) {
        visited[newY][newX] = true;
        queue.push([newY, newX]);
      }
    }
  }
}

// 3. 빙산 덩어리 개수 세기 -> 방문 초기화, 전체 grid를 탐색하며 빙산 덩어리 개수 셈
function countMeltIceYear(grid) {
  let visited = Array.from(Array(N), () => Array(M).fill(false));
  let icebergCount = 0;

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (grid[y][x] > 0 && !visited[y][x]) {
        bfs(y, x, grid, visited);
        icebergCount++;
      }
    }
  }

  return icebergCount;
}

// 4. 시뮬레이션 반복 -> 매년 빙산 녹이고 분리 여부 확인하는 과정 반복하여 최초 분리 년 반환

function findSplitYear(grid) {
  let year = 0;

  while (true) {
    grid = meltIce(grid);
    year++;
    let icebergCount = countMeltIceYear(grid);

    if (icebergCount === 0) {
      return 0;
    }

    if (icebergCount > 1) {
      return year;
    }
  }
}

let result = findSplitYear(arr);
console.log(result);
