// 숫자 변환하기
// for문을 통해 x에서 y까지의 각 위치에 대해 계산이 수행됨
// dp[i] + 1이 dp[i]가 Infinity가 아닐 때만 의미가 있다. 즉, i위치에 도달할 수 있는 방법이 이미 존재해야 이동이 유효함
// dp[i] + 1은 i위치에 도달한 상태에서 다음 단계로 이동하는 것을 나타낸다. dp[i]가 Infinity라면 i 위치에 도달할 수 없음 -> Infinity 유지
// 이런식으로 쭉 가다보면 됨

function solution(x, y, n) {
  const dp = new Array(y + 1).fill(Infinity);

  dp[x] = 0;
  for (let i = x; i <= y; i++) {
    dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
  }
  console.log(dp);
  return dp[y] === Infinity ? -1 : dp[y];
}

console.log(solution(10, 40, 5));
