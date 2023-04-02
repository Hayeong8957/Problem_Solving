const input = require('fs')
  // .readFileSync('/dev/stdin')
  .readFileSync('/Users/shinhayeong/Problem_Solving/BOJ/Javascript/test.txt')
  .toString()
  .trim()
  .split('\n');

let N = Number(input.shift());
let arr = input.map(Number);

function downheap(i, size, arr) {
  while (2 * i + 1 <= size) {
    let k = 2 * i + 1;
    if (k + 1 <= size && arr[k] < arr[k + 1]) {
      k += 1;
    }
    if (arr[i] >= arr[k]) {
      break;
    }
    [arr[i], arr[k]] = [arr[k], arr[i]];
    i = k;
  }
}

function createHeap(arr) {
  const size = arr.length;
  for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
    downheap(i, size - 1, arr);
  }
}

function heapSort(arr) {
  createHeap(arr);
  let size = arr.length - 1;
  for (let i = 0; i < size; i++) {
    [arr[0], arr[size - i]] = [arr[size - i], arr[0]];
    downheap(0, size - i - 1, arr);
  }
  return arr.join('\n');
}

console.log(heapSort(arr));
