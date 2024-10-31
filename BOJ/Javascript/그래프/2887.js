const fs = require('fs');
const input = fs
  .readFileSync(
    process.platform === 'linux'
      ? '/dev/stdin'
      : '/Users/shinhayeong/Desktop/Problem_Solving/BOJ/Javascript/그래프/2887.txt',
  )
  .toString()
  .trim()
  .split('\n');

const [[N], ...arr] = input.map((item) => item.split(' ').map(Number));

console.log('N >> ', N);
console.log('arr >> ', arr);

// 부모 노드를 찾는 함수
function find(parent) {
  if (set[parent] === parent) return parent;
  return (set[parent] = find(set[parent]));
}
// 두 부모 노드를 합치는 함수 -> 부모를 합칠 때는 더 작은 값으로 합친다.
function union(a, b) {
  const parentA = find(a);
  const parentB = find(b);
  parentA > parentB ? (set[parentA] = parentB) : (set[parentB] = parentA);
}

// 같은 부모를 가지는지 확인
function checkCycle(a, b) {
  const parentA = find(a);
  const parentB = find(b);
  return parentA === parentB;
}

let answer = 0;
const set = Array.from({ length: N }, (_, i) => i);
console.log('Set >> ', set);
const link = [];

console.log('AFTER input push arr >> ', arr);

// 각 좌표에 인덱스를 추가하여 저장
arr.forEach((element, i) => (element[3] = i));
console.log('BEFORE input push arr >> ', arr);

// x, y, z 축별로 정렬 후 인접 노드 간 최소 비용을 arr에 저장
// 세 축에 대해 각각 정렬하여 인접한 노드끼리의 최소 비용을 link에 저장
arr.sort((a, b) => a[0] - b[0]);
for (let i = 0; i < arr.length - 1; i++) {
  link.push([arr[i][3], arr[i + 1][3], Math.abs(arr[i][0] - arr[i + 1][0])]);
  console.log('link push 과정 >> ', link);
}
console.log('link push 완료 >> ', link);

arr.sort((a, b) => a[1] - b[1]);
for (let i = 0; i < arr.length - 1; i++) {
  link.push([arr[i][3], arr[i + 1][3], Math.abs(arr[i][1] - arr[i + 1][1])]);
}

arr.sort((a, b) => a[2] - b[2]);
for (let i = 0; i < arr.length - 1; i++) {
  link.push([arr[i][3], arr[i + 1][3], Math.abs(arr[i][2] - arr[i + 1][2])]);
}

// 비용을 기준으로 간선 정렬
link.sort((a, b) => a[2] - b[2]);

// MST를 위한 간선 선택
// 각 간선을 순회하며 checkCycle함수로 사이클 여부를 검사하고
// 사이클이 발생하지 않으면 union함수로 연결하고 answer에 비용을 더함
for (let i = 0; i < link.length; i++) {
  const [edge1, edge2, cost] = link[i];
  if (!checkCycle(edge1, edge2)) {
    union(edge1, edge2);
    answer += cost;
  }
}

console.log('[answer] ', answer);
