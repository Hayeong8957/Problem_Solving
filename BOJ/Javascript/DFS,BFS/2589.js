// 보물은 서로 간에 최단 거리로 이동하는데 있어 가장 긴 시간이 걸리는 육지 두 곳에 나뉘어 묻혀있다.
// 육지 칸에서 BFS 수행 -> 모든 칸까지의 최단 거리를 구함
// 각 육지칸에서 BFS 수행해 최단 거리 중 가장 긴 값을 갱신

const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs
  .readFileSync('/Users/shinhayeong/Desktop/Problem_Solving/test.txt')
  .toString()
  .trim()
  .split('\n');

const [H, W] = input.shift().split(' ').map(Number);
const map = input.map((line) => line.split(''));
let distance = 0;

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    if (map[y][x] === 'L') {
      distance = Math.max(distance, bfs(y, x));
    }
  }
}

function bfs(startY, startX) {
  const dy = [-1, 1, 0, 0]; // 상하좌우
  const dx = [0, 0, -1, 1];

  const visited = Array.from(Array(H), () => Array(W).fill(false));
  const queue = [[startY, startX, 0]]; // [y, x, distance]
  visited[startY][startX] = true;

  let maxDistance = 0;

  while (queue.length) {
    const [y, x, distance] = queue.shift();
    maxDistance = Math.max(maxDistance, distance);

    for (let i = 0; i < 4; i++) {
      const newY = y + dy[i];
      const newX = x + dx[i];

      if (
        newY >= 0 &&
        newY < H &&
        newX >= 0 &&
        newX < W &&
        !visited[newY][newX] &&
        map[newY][newX] === 'L'
      ) {
        visited[newY][newX] = true;
        queue.push([newY, newX, distance + 1]);
      }
    }
  }

  return maxDistance;
}
