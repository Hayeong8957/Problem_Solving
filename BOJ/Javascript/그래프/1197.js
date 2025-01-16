// 최소 스패닝 트리 > 크루스칼 알고리즘 사용
// 가중치가 가장 작은 간선부터 먼저 선택
// 그 다음으로 가중치가 작은 간선을 선택, ...
// 사이클이 발생하면 안됨 -> 건너 뛰어야함

// Kruskal algo
// 1. 모든 간선을 가중치 기준으로 오름차순 정렬
// 2. 정렬된 간선을 순서대로 검사하며, 현재 간선을 추가해도 사이클이 발생하지 않으면 MST에 추가
// 3. 간선을 추가할 떄 Union-Find 자료구조를 사용해 사이클 여부 판단

const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [V, E] = input.shift().split(' ').map(Number);
const edges = input.map((el) => el.split(' ').map(Number));

// Union-Find를 위한 부모 배열 초기화
// 초기에는 각 정점이 자기 자신을 부모로 가지도록 설정
const parent = Array.from({ length: V + 1 }, (_, i) => i);

// find 함수: 특정 노드의 루트를 찾음
// 루트 노드는 부모 노드 번호로 자기 자신을 가진다
// 각 노드의 부모 노드를 찾아 올라간다.
// find하면서 만난 모든 값의 부모 노드를 root로 만든다
function find(x) {
  if (parent[x] === x) return x;
  return (parent[x] = find(parent[x]));
}

// union 함수: 두 집합을 병합
// 항상 높이가 더 낮은 트리를 높이가 높은 트리 밑에 넣는다. 즉, 높이가 더 높은 쪽을 root로 삼음
// https://gmlwjd9405.github.io/2018/08/31/algorithm-union-find.html
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
    if (edgeCount === V - 1) break;
  }
}

console.log(mstWeight);
