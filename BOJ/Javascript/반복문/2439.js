/**
 * 문제 번호: 2439
 * 문제:첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
 * 하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.
 *
 * 입력: 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.
 * ex)
 * 5
 *
 * 출력: 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.
 *
 * ex)
 *      *
 *     **
 *    ***
 *   ****
 *  *****
 *
 * 문제 풀이:
 * i => 1, 2, 3, 4, 5 이렇게 늘어남
 * N - i => 4, 3, 2, 1, 0 이렇게 줄어듦
 */
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let N = Number(input[0]);
let stars = "";
let space = "";

for (let i = 1; i <= N; i++) {
  stars += "*";
  for (let j = 0; j < N - i; j++) {
    space += " ";
  }
  console.log(space + stars);
  space = ""; // 공백 초기화 => for문 돌때 유의
}
