/**
 * 문제: N개의 수로 된 수열 A[1], A[2], …, A[N] 이 있다. 
 * 이 수열의 i번째 수부터 j번째 수까지의 합 A[i] + A[i+1] + … + A[j-1] + A[j]가 M이 되는 경우의 수를 구하는 프로그램을 작성하시오.
 * 
 * 입력: 첫째 줄에 N, M이 주어진다. 다음 줄에는 A[1], A[2], ..., A[N]이 공백으로 분리되어 주어진다.
 * 각각의 A[x]는 30,000을 넘지 않는 자연수이다.
 * 
 * 입력:
4 2
1 1 1 1

출력: 3

입력:
10 5
1 2 3 4 2 5 3 1 1 2

출력: 3

풀이 : 인덱스 0부터 1씩 증가하며 배열을 돌면서 합이 M이 되는지, 
이중 for문으로 돌리기
1 2 3 4 2 5 3 1 1 2
[1+2+3] 4 2 5 3 1 1 2 => 5초과, j++
1 [2+3] 4 2 5 3 1 1 2 => 5동일, cnt++
1 2 [3+4] ...         => 5초과, j++
1 2 3 [4+2] ...       => 5초과, j++
 */
const input = require('fs')
  .readFileSync('/Users/shinhayeong/Problem_Solving/BOJ/Javascript/test.txt')
  // .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
let cnt = 0;

for (let i = 0; i < N; i++) {
  let sum = 0;
  for (let j = i; j < N; j++) {
    sum += A[j];
    if (sum === M) cnt++;
  }
}
console.log(cnt);
