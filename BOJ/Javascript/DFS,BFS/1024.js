const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));
const [N, M] = input.shift();
const 알고싶은노드 = input.splice(-M);
const graph = [...Array(N + 1)].map(() => []);

input.forEach(([from, to, distance]) => {
  graph[from].push([to, distance]);
  graph[to].push([from, distance]);
});

function bfs(start, end) {
  const queue = [[start, 0]];
  const visited = Array(N + 1).fill(false);

  while (queue.length > 0) {
    const [curNode, distanceSum] = queue.shift();

    // 현재 정점과 도착지 같아지면 누적 거리 반환
    if (curNode === end) return distanceSum;

    // 현재 정점과 [이어진 정점, 거리]
    for (const [nextNode, distance] of graph[curNode]) {
      if (!visited[nextNode]) {
        visited[nextNode] = true;
        queue.push([nextNode, distance + distanceSum]);
      }
    }
  }
}

for (const [from, to] of 알고싶은노드) {
  console.log(bfs(from, to));
}
