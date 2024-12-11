const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, ...arr] = input;
const N = Number(n);
const board = arr.map((line) => line.trim().split(/\s+/).map(Number));

const dp = Array.from({ length: N }, () => Array(N).fill(BigInt(0)));

// 시작점 초기화
dp[0][0] = 1;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    const 이동할거리 = board[i][j];
    if (이동할거리 === 0 || (i === N - 1 && j === N - 1)) continue;

    // 오른쪽 이동
    if (j + 이동할거리 < N) {
      dp[i][j + 이동할거리] += BigInt(dp[i][j]);
    }

    // 아래로 이동
    if (i + 이동할거리 < N) {
      dp[i + 이동할거리][j] += BigInt(dp[i][j]);
    }
  }
}

console.log(dp[N - 1][N - 1].toString());
