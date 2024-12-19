const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const [N, ...wine] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

if (N === 1) {
  console.log(wine[0]);
  return;
}

if (N === 2) {
  console.log(wine[0] + wine[1]);
  return;
}

const dp = Array.from({ length: N }, () => 0);
dp[0] = wine[0];
dp[1] = wine[0] + wine[1];
dp[2] = Math.max(wine[0] + wine[1], wine[0] + wine[2], wine[1] + wine[2]);

for (let i = 3; i < N; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    dp[i - 2] + wine[i],
    dp[i - 3] + wine[i - 1] + wine[i],
  );
}

console.log(dp[N - 1]);
