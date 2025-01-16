const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]); // 컴퓨터 수
const M = parseInt(input[1]); // 간선 수
const edges = input.slice(2).map((line) => line.split(' ').map(Number));

const parent = Array.from({ length: N + 1 }, (_, i) => i);

function find(x) {
  if (parent[x] === x) return x;
  return (parent[x] = find(parent[x]));
}

function union(x, y) {
  const rootX = find(x);
  const rootY = find(y);
  if (rootX === rootY) return;
  if (parent[rootX] < parent[rootY]) {
    parent[rootX] = rootY;
  } else {
    parent[rootY] = rootX;
  }
}

// Kruskal 알고리즘
edges.sort((a, b) => a[2] - b[2]); // 간선을 가중치 기준으로 정렬

let mstWeight = 0; // 총 가중치 저장
let edgeCount = 0; // MST에 포함된 간선의 수 추적

for (const [a, b, c] of edges) {
  if (find(a) !== find(b)) {
    // 사이클이 발생하지 않으면
    union(a, b);
    mstWeight += c;
    edgeCount++;

    // MST 완성 조건: 간선 수가 V - 1개일 때 종료
    if (edgeCount === N - 1) break;
  }
}

console.log(mstWeight);
