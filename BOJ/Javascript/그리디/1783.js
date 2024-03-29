/**
 * 문제: 병든 나이트가 N * M 크기 체스판의 가장 왼쪽아래 칸에 위치해 있다.
 * 병든 나이트는 건강한 보통 체스의 나이트와 다르게 4가지로만 움직일 수 있다.
 * 1. 2칸 위로, 1칸 오른쪽
 * 2. 1칸 위로, 2칸 오른쪽
 * 3. 1칸 아래로, 2칸 오른쪽
 * 4. 2칸 아래로, 1칸 오른쪽
 * 병든 나이트는 여행을 시작하려고 하고, 여행을 하면서 방문한 칸의 수를 최대로 하려고 한다.
 * 병든 나이트의 이동 횟수가 4번보다 적지 않다면, 이동 방법을 모두 한 번씩 사용해야 한다.
 * 이동 횟수가 4번보다 적은 경우(방문한 칸이 5개 미만)에는 이동 방법에 대한 제약이 없다.
 * 체스판의 크기가 주어졌을 때, 병든 나이트가 여행에서 방문할 수 있는 칸의 최대 개수를 구해보자.
 *
 * 입력: 첫째 줄에 체스판의 세로 길이 N와 가로 길이 M이 주어진다. N과 M은 2,000,000,000보다 작거나 같은 자연수이다.
 *
 * 출력: 병든 나이트가 여행에서 방문할 수 있는 칸의 개수중 최댓값을 출력한다.
 *
 * 예제 입력1 : 100 50   예제 출력1 : 48
 * 예제 입력2 : 1 1      예제 출력2 : 1    -> 자기 자신 위치
 * 예제 입력3 : 17 5     예제 출력3 : 4
 *
 * 풀이 :
 * 1) N=1 || M=1 못 움직임
 * 2) N=2, M=2 -> 2번 or 3번 -> 1회 이동 가능
 *         M=3 -> 1회, M=4 -> 2회, M=5 -> 2회, M=6 -> 3회, M=7 -> 3회, M=8 -> 4회
 *    4회 이상은 1, 2, 3, 4번 모두 한 번씩 움직여야 하는데 N=2일때는 불가능, 최대가 4회임
 *    따라서 Math.min((M+1)/2, 4)으로 이동 가능하다.
 * 3) N=3, M=2 -> 1번 & 4번 한 번씩 -> 2회
 *         M=3 -> 3회, M=4 -> 4회, M=5 -> 5회
 *   기본적으로 최대 이동 가능 횟수는 M 그자체가 나오게 됨, 그러나 1번과 4번의 이동 방식만 사용했을 때임
 *   여기도 마찬가지로 4회 이상은 2번과 3번의 움직임도 필요함. 따라서 최대 이동 가능 횟수는 4이다.
 *   Math.min(M, 4)으로 이동 가능
 * 4) N>=3 & M>=7 -> 1, 2, 3, 4 모든 방향 이동 가능
 *   3)과 마찬가지로 1번과 4번의 이동 방식을 사용했을 때 M만큼의 이동횟수 가능
 *   4번 이상 이동 시, 2번과 3번도 1회씩 사용해야 하며, 그에 따라 총 2개의 열이 낭비가 됨
 *   따라서 M-2 만큼의 이동이 가능하다.
 */

const input = require('fs')
  .readFileSync('/Users/shinhayeong/Problem_Solving/BOJ/Javascript/test.txt')
  // .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

let N = Number(input[0]);
let M = Number(input[1]);
let answer = 0;

if (N === 1 || M === 1) answer = 1;
else if (N === 2) answer = Math.min(4, parseInt((M + 1) / 2));
else if (M < 7) answer = Math.min(4, M);
else answer = M - 2;

console.log(answer);
