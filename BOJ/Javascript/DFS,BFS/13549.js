// 순간이동 앞쪽 삽입하여 우선 처리
// 걷는 경우 뒤쪽 삽입
const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);
const [N, K] = input;

const MAX = 100000;
const visited = Array.from({ length: MAX }, () => false);
function bfs(수빈, 동생) {
  const queue = [[수빈, 0]];
  visited[수빈] = true;

  while (queue.length > 0) {
    const [current수빈, time] = queue.shift();

    if (current수빈 === 동생) return time;

    if (current수빈 * 2 <= MAX && !visited[current수빈 * 2]) {
      visited[current수빈 * 2] = true;
      queue.unshift([current수빈 * 2, time]);
    }

    for (const next of [current수빈 - 1, current수빈 + 1]) {
      if (next >= 0 && next <= MAX && !visited[next]) {
        visited[next] = true;
        queue.push([next, time + 1]);
      }
    }
  }
}

console.log(bfs(N, K));
