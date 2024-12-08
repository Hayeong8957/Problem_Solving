const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');
const N = Number(n);
const arr = input.map((item) => item.split(' ').map(Number));

// (현재 날짜 + 상담기간)에 해당 날짜의 값과 현재날짜에 금액을 더한 값을 비교하여 더 큰 값을 넣어준다.

// DP를 N + 1개 만들어준다. 1~N일, DP[i]일 일때, 가장 큰 값을 저장
// N동안 T와 P를 받아온다.
// 현재 날짜가 가질 수 있는 값을 갱신해준다.(지금 값과 이전 값 중 큰 값을 저장)
// 현재 날짜에서 상담을 할 경우, 상담을 끝 마쳤을 때의 값을 갱신한다.
// DP[N]을 출력한다.
const DP = Array(N + 1).fill(0);
// console.log('init DP > ', DP);

for (let i = 0; i < N; i++) {
  const [T, P] = arr[i];
  // console.log('T, P > ', T, P);
  DP[i + 1] = Math.max(DP[i + 1], DP[i]);
  if (i + T < N + 1) {
    // N+1일째에는 회사에 없음
    DP[i + T] = Math.max(DP[i + T], DP[i] + P);
    // console.log('mid DP > ', DP);
  }
}
// console.log('final DP > ', DP);
console.log(DP[N]);
