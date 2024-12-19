const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const [[N], ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map(Number));

for (let i = N - 2; i >= 0; i--) {
  for (let j = 0; j < input[i].length; j++) {
    input[i][j] += Math.max(input[i + 1][j], input[i + 1][j + 1]);
  }
}

console.log(input[0][0]);
