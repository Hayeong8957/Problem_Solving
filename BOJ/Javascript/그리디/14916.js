const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const input = fs.readFileSync(filePath).toString().trim();
let N = Number(input);

// 2원짜리와 5월짜리로만 거스름돈을 달라한다.
// 동전의 개수가 최소가 되도록 거슬러 주어야 한다.
// 거스름돈이 n인 경우, 최소 동전의 개수가 몇 개인지 알려주는 프로그램

// 5원짜리를 최대한 먼저 사용하고, 2원으로 보완
let answer = 0;

while (N > 0) {
  if (N % 5 === 0) {
    answer += Math.floor(N / 5);
    break;
  }
  N -= 2;
  answer++;

  if (N < 0) {
    answer = -1;
    break;
  }
}

console.log(answer);
