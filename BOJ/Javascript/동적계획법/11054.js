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

function getLIS(arr, DP) {
  let returnDP = DP;

  for (let i = 1; i < N; i++) {
    const current = arr[i];
    for (let j = 0; j < i; j++) {
      const before = arr[j];

      if (current > before && returnDP[i] < returnDP[j] + 1) {
        returnDP[i] = returnDP[j] + 1;
      }
    }
  }

  return returnDP;
}

LIS = getLIS(arr, LIS);
LISR = getLIS(arr.reverse(), LISR).reverse();

let answer = 0;
for (let i = 0; i < N; i++) {
  answer = Math.max(answer, LIS[i] + LISR[i] - 1);
}

console.log(answer);
