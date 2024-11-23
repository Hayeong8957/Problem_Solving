const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const [_, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

// x가 자연수 -> 배열에 X push
//     0이라면 -> 배열에서 가장 작은 값을 출력
// 배열이 비어있는 경우인데 가장 작은 값을 출력하라고 한 경우는 0을 출력
// 0이 주어진 횟수만큼 답을 출력

class MinHeap {
  constructor() {
    this.heap = [];
  }

  heappush(value) {
    this.heap.push(value);
    this.bubbleup();
  }

  bubbleup() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] >= this.heap[parentIndex]) break;
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  heappop() {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbledown(0);
    return root;
  }

  bubbledown(index) {
    const length = this.heap.length;
    const element = this.heap[index];
    while (true) {
      const leftIdx = 2 * index + 1;
      const rightIdx = 2 * index + 2;
      let swap = null;

      if (leftIdx < length) {
        if (this.heap[leftIdx] < element) {
          swap = leftIdx;
        }
      }

      if (rightIdx < length) {
        if (
          (swap === null && this.heap[rightIdx] < element) ||
          (swap !== null && this.heap[rightIdx] < this.heap[swap])
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

const heap = new MinHeap();
const result = [];

input.forEach((x) => {
  if (x === 0) {
    result.push(heap.heappop());
  } else {
    heap.heappush(x);
  }
});

console.log(result.join('\n'));
