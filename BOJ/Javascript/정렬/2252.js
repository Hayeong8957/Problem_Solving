const fs = require('fs');
const input = fs
  .readFileSync(
    process.platform === 'linux'
      ? '/dev/stdin'
      : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt',
  )
  .toString()
  .trim()
  .split('\n');

const [[N, _], ...arr] = input.map((item) => item.split(' ').map(Number));

const graph = Array.from({ length: N + 1 }, () => []);
const rank = Array.from({ length: N + 1 }, () => 0);

arr.forEach(([a, b]) => {
  graph[a].push(b);
  rank[b]++;
});

const queue = [];
let queueIdx = 0;

for (let i = 1; i < rank.length; i++) {
  if (rank[i] === 0) queue.push(i);
}

const result = [];
while (queueIdx < queue.length) {
  const node = queue.shift();
  result.push(node);

  graph[node].forEach((next) => {
    rank[next]--;
    if (rank[next] === 0) queue.push(next);
  });
}

console.log('result >> ', result);
