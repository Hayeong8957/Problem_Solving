/**
 * 오늘은 n의 피보나치 수를 재귀호출과 동적 프로그래밍으로 구하는 알고리즘을 배웠다. 
 * 재귀호출에 비해 동적 프로그래밍이 얼마나 빠른지 확인해 보자. 
 * 아래 의사 코드를 이용하여 n의 피보나치 수를 구할 경우 코드1 코드2 실행 횟수를 출력하자.
 * 
 * 피보나치 수 재귀호출 의사코드
fib(n) {
    if (n = 1 or n = 2)
    then return 1;  # 코드1
    else return (fib(n - 1) + fib(n - 2));
}
 * 동적 프로그래밍 의사코드
fibonacci(n) {
    f[1] <- f[2] <- 1;
    for i <- 3 to n
        f[i] <- f[i - 1] + f[i - 2];  # 코드2
    return f[n];
}

입력 : 첫째 줄에 n(5 ≤ n ≤ 40)이 주어진다.
출력 : 코드1 코드2 실행 횟수를 한 줄에 출력한다.

예제 입력: 30
예제 출력: 832040 28
 */
// .readFileSync('/dev/stdin')
let N = Number(
  require('fs')
    .readFileSync('/Users/shinhayeong/Problem_Solving/BOJ/Javascript/test.txt')
    .toString()
    .trim(),
);

// let recurCnt = 0,
//   dpCnt = 0;

// function fibRecursive(n) {
//   if (n === 1 || n === 2) return 1;
//   else {
//     recurCnt++;
//     return fibRecursive(n - 1) + fibRecursive(n - 2);
//   }
// }

// function fibDP(n) {
//   const dp = [1, 1]; // 초기값 설정
//   for (let i = 2; i < N; i++) {
//     dpCnt++;
//     dp[i] = dp[i - 1] + dp[i - 2]; // i번째 수 계산
//   }
//   return dp[n - 1]; // n번째 수 반환
// }

// fibRecursive(N);
// fibDP(N);

// console.log(`${recurCnt} ${dpCnt}`);

// 위의 코드는 런타임 에러가 난다.
// 입력값 N에 대한 피보나치 수열의 N번째 값을 계산하고, count 변수를 이용해
// 계산에 사용된 연산 횟수를 저장한다. 입력값은 prompt()함수를 이용해 받아들인다.
// 계산 결과와 count변수의 값을 출력
// 피보나치 수열의 첫번째와 두 번째 항이 1이기에
// dp[1]과 dp[2]의 값을 1로 초기화하기 위해 배열의 모든 요소를 1로 설정
// 이후에 for루프 이용해 i=3부터 시작하는 것
// 재귀로 푼 횟수의 숫자가 n번째 피보나치 수이다.
// 그래서 재귀 없애고 dp로 푼 것만 살려냄
let count = 0;

function fibonacci(n) {
  const dp = new Array(n + 1).fill(1);
  for (let i = 3; i <= n; i++) {
    count++;
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

console.log(fibonacci(N), count);
