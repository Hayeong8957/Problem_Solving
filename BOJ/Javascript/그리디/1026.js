/** 보물
 * 문제: 옛날 옛적에 수학이 항상 큰 골칫거리였던 나라가 있었다.
 * 이 나라의 국왕 김지민은 다음과 같은 문제를 내고 큰 상금을 걸었다.
 * 길이가 N인 정수 배열 A와 B 가 있다. 다음과 같이 함수 S를 정의하자.
 * S = A[0] X B[0] + ... + A[N-1] X B[N-1]
 * S의 값을 가장 작게 만들기 위해 A의 수를 재배열하자. 단, B에 있는 수는 재배열하면 안 된다.
 * S의 최솟값을 출력하는 프로그램을 작성하시오.
 *
 * 입력: 첫째 줄에 N이 주어진다. 둘째 줄에는 A에 있는 N개의 수가 순서대로 주어지고, 셋째 줄에는 B에 있는 수가 순서대로 주어진다.
 * N은 50보다 작거나 같은 자연수이고, A와 B의 각 원소는 100보다 작거나 같은 음이 아닌 정수이다.
 *
 * 출력: 첫째 줄에 S의 최솟값을 출력한다.
 *
 * 풀이: 가장큰수 * 가장 작은 수의 합
 *
 * 2 7 8 3 1
 * 7+3+2+6 => 18
 *
 * 3  1  1
 * 10 30 20
 * 30 + 30 + 20 => 80
 *
 * A의 가장 작은 값을 B의 가장 큰 값과 매칭해나감
 * B는 재배열할 수가 없음. A는 sort로 오름차순 만들어줌
 * B배열에 큰값부터 작은값까지 인덱싱?
 * A오름차순 배열에 인덱싱?
 * 같은 인덱스끼리 계산?
 * 을 하려고 했으나 근데 결국 같은 값 찾아서 계산하는 거나
 * A오름차순 정렬, B내림차순 정렬 해서 계산하는 거나 매칭하는 연산은 같을듯
 */

let [n, tempA, tempB] = require('fs')
  // .readFileSync('/dev/stdin')
  .readFileSync('/Users/shinhayeong/Problem_Solving/BOJ/Javascript/test.txt')
  .toString()
  .trim()
  .split('\n');

let N = Number(n);

let A = tempA
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
let B = tempB
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);

let answer = 0;
for (let i = 0; i < N; i++) {
  answer += A[i] * B[i];
}
console.log(answer);
