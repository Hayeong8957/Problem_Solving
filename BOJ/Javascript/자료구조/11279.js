const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const [N, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return max;
  }

  peek() {
    return this.heap.length === 0 ? 0 : this.heap[0];
  }
  bubbleUp() {
    let index = this.heap.length - 1;
    const insertedValue = this.heap[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] >= insertedValue) break;

      this.heap[index] = this.heap[parentIndex];
      index = parentIndex;
    }
    this.heap[index] = insertedValue;
  }
  bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let leftChildIdx = index * 2 + 1;
      let rightChildIdx = index * 2 + 2;
      let largest = index;

      if (
        leftChildIdx < length &&
        this.heap[leftChildIdx] > this.heap[largest]
      ) {
        largest = leftChildIdx;
      }
      if (
        rightChildIdx < length &&
        this.heap[rightChildIdx] > this.heap[largest]
      ) {
        largest = rightChildIdx;
      }
      if (largest === index) break;

      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      index = largest;
    }
  }
}

const maxHeap = new MaxHeap();
const results = [];

for (let x of input) {
  if (x > 0) {
    maxHeap.push(x);
  } else {
    results.push(maxHeap.pop());
  }
}

console.log(results.join('\n'));
