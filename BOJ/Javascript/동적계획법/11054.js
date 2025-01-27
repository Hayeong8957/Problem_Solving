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

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        returnDP[i] = Math.max(returnDP[i], returnDP[j] + 1);
        /*  (1) i번째 인덱스에서 끝나는 최장 증가 부분 수열의 마지막에 arr[i]를 추가했을 때(이전 길이 + 1)의 LIS 길이와
            (2) 추가하지 않고 기존의 dp[i] 값
            둘 중에 더 큰 값으로 dp[i] 값을 업데이트 */
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
