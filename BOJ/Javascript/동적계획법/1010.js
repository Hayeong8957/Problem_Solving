// M개의 사이트 중 N개를 선택 -> mCr
// M! / N!*(M-N)!
const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');
const input = arr.map((el) => el.split(' ').map((el) => Number(el)));
let answer = 0;

function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

for (let i = 0; i < N; i++) {
  const [curN, curM] = input[i];
  answer = Math.round(
    factorial(curM) / (factorial(curN) * factorial(curM - curN)),
  );
  console.log(answer);
}
