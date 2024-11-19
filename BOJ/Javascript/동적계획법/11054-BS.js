// https://www.acmicpc.net/problem/11054

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

const [[N], arr] = input.map((item) => item.split(' ').map(Number));

let LIS = Array.from({ length: N }, () => 1);
let LISR = Array.from({ length: N }, () => 1);

// Binary Search 문제풀이
function calculateLIS(arr) {
  const lis = [];
  const lengths = Array(arr.length).fill(0);
  console.log('lengths >> ', lengths);

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    console.log('num >> ', num);
    let pos = binarySearch(lis, num);
    console.log('pos >> ', pos);

    if (pos < lis.length) {
      lis[pos] = num;
    } else {
      lis.push(num);
    }
    console.log('lis >> ', lis);
    lengths[i] = lis.length;
    console.log('lengths >> ', lengths);
  }
  console.log('return lengths >> ', lengths);
  return lengths;
}

// LIS구할 떄 이분탐색 사용해서 현재 위치 찾기
function binarySearch(LIS, target) {
  let left = 0;
  let right = LIS.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (LIS[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

// 왼쪽에서 오른쪽으로 가는 LIS 길이 계산
LIS = calculateLIS(arr);

// 오른쪽에서 왼쪽으로 가는 LIS 길이 계산 (역순으로 계산)
LISR = calculateLIS([...arr].reverse()).reverse();

let maxBitonic = 0;
for (let i = 0; i < N; i++) {
  maxBitonic = Math.max(maxBitonic, LIS[i] + LISR[i] - 1);
}
console.log(maxBitonic);
