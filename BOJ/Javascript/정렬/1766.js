// 위상정렬과 우선순위 큐
//
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

// const graph = Array.from({ length: N + 1 }, () => []);
// const rank = Array.from({ length: N + 1 }, () => 0);

// arr.forEach(([a, b]) => {
//   graph[a].push(b);
//   rank[b]++;
// });

// // 기초 -> 여기까지는 graph와 진입차수에 대한 정보 설정

// const queue = [];
// const queueIdx = 0;
// for (let i = 1; i < rank.length; i++) {
//   if (rank[i] === 0) queue.push(i);
// }

// console.log('graph >> ', graph);
// console.log('link >> ', rank);
// console.log('queue >> ', queue);
// // 여기까지는 진입차수에 대한 녀석들을 큐에 담는

// // 가능하면 쉬운 문제부터 -> 정렬
// queue.sort((a, b) => a - b);

// const result = [];

// while (queueIdx < queue.length) {
//   const current = queue.shift();
//   result.push(current);

//   graph[current].forEach((next) => {
//     rank[next]--;
//     if (rank[next] === 0) {
//       queue.push(next);
//       queue.sort((a, b) => a - b);
//     }
//   });
// }

// console.log(result.join(' '));

class MinHeap {
  constructor() {
    this.heap = [];
  }

  heappush(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  heappop() {
    if (this.heap.length === 1) return this.heap.pop();
    const rootNode = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return rootNode;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIdx = Math.floor((index - 1) / 2);
      if (this.heap[parentIdx] <= this.heap[index]) break;

      [this.heap[parentIdx], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIdx],
      ];
      index = parentIdx;
    }
  }

  bubbleDown(index) {
    const length = this.heap.length;

    while (true) {
      const leftIdx = 2 * index + 1;
      const rightIdx = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftIdx < length) {
        leftChild = this.heap[leftIdx];
        if (leftChild < this.heap[index]) swap = leftIdx;
      }

      if (rightIdx < length) {
        rightChild = this.heap[rightIdx];
        if (
          (swap === null && rightChild < this.heap[index]) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightIdx;
        }
      }

      if (swap === null) break;

      [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
      index = swap;
    }
  }

  size() {
    return this.heap.length;
  }
}

const graph = Array.from({ length: N + 1 }, () => []);
const link = Array.from({ length: N + 1 }, () => 0);

const heap = new MinHeap();

arr.forEach(([a, b]) => {
  graph[a].push(b);
  link[b]++;
});

for (let i = 1; i <= N; i++) {
  if (link[i] === 0) {
    heap.heappush(i);
  }
}

let result = [];

while (heap.size() > 0) {
  const current = heap.heappop();
  result.push(current);

  graph[current].forEach((next) => {
    link[next]--;
    if (link[next] === 0) {
      heap.heappush(next);
    }
  });
}

console.log(result.join(' '));
