let [N, ...input] = require('fs')
  // .readFileSync('/dev/stdin')
  .readFileSync('/Users/shinhayeong/Problem_Solving/BOJ/Javascript/test.txt')
  .toString()
  .split('\n');

// 2개의 로프를 사용하여 중량이 w인 물체를 들어올릴 때, 각각의 로프에는 모두 고르게 w/2만큼의 중량이 걸리게 됨다.
// 2개 로프 10, 15
// 10/2 15/2  5 7
// 여러개의 로프를 병렬로 연결하면 각각의 로프에 걸리는 중량을 나눌 수 있다.
// // 5+7=12?
// 2개의 로프를 사용해서 20을 들어?
// 20/2 = 10 각각 10만큼의 중량이 걸리게된다.
// 최대 중량은 최소 중량의 곱하기 N?
// 각 로프가 들ㄷ 수 있는 최대 ㅂ=무게?

const temp = input.map(Number);
for (let i = 0; i < N; i++) {}
console.log(temp[0] * parseInt(N));
