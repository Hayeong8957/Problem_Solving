const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const input = fs.readFileSync(filePath).toString().trim();
const N = Number(input);

let cnt = 0;
const 열 = new Array(N).fill(false);
// 대각선의 갯수는 2n - 1
const 오른쪽아래대각선 = new Array(N * 2 - 1).fill(false);
const 왼쪽아래대각선 = new Array(N * 2 - 1).fill(false);

function backtrack(row) {
  if (row === N) {
    cnt++;
    return;
  }

  for (let col = 0; col < N; col++) {
    const 오대각선 = row - col + N - 1;
    const 왼대각선 = row + col;

    // 이미 존재하면 스킵
    if (열[col] || 오른쪽아래대각선[오대각선] || 왼쪽아래대각선[왼대각선]) {
      continue;
    }
    열[col] = true;
    오른쪽아래대각선[오대각선] = true;
    왼쪽아래대각선[왼대각선] = true;

    // console.log('열 > ', 열);
    // console.log('오른쪽아래대각선 > ', 오른쪽아래대각선);
    // console.log('왼쪽아래대각선 > ', 왼쪽아래대각선);

    backtrack(row + 1);
    열[col] = false;
    오른쪽아래대각선[오대각선] = false;
    왼쪽아래대각선[왼대각선] = false;
  }
}

backtrack(0);
console.log(cnt);
