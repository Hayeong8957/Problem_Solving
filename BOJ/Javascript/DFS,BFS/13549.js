const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const input = '5 17'.split(' ').map(Number); // 테스트 입력
const [N, K] = input;

function bfs(start, target) {
  const MAX = 100000; // 최대 위치 값
  const visited = Array(MAX + 1).fill(false);
  const queue = [[start, 0]]; // [현재 위치, 소요 시간]
  visited[start] = true;

  while (queue.length > 0) {
    const [current, time] = queue.shift();

    // 동생 위치에 도달하면 소요 시간 반환
    if (current === target) return time;

    // 다음 가능한 위치 탐색
    const nextPositions = [current - 1, current + 1, current * 2];
    for (const next of nextPositions) {
      if (next >= 0 && next <= MAX && !visited[next]) {
        visited[next] = true;
        queue.push([next, next === current * 2 ? time : time + 1]); // 순간이동은 0초, 걷는 건 1초
      }
    }
  }
}

console.log(bfs(N, K));
