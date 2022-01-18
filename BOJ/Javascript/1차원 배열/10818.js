/**
 * 문제 번호 : 10818
 *
 * 문제 : N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
 *
 * 입력 : 첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다.
 * 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다.
 * 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.
 * ex)
 * 5
 * 20 10 35 30 7
 *
 * 출력 : 첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.
 * 7 35
 *
 * 문제 풀이:
 * 1) 배열을 split해서 변수에 값을 넣으면 str로 들어가기 때문에 Number
 * 2) max, min의 초기값을 numbers[0]번 값을 넣었기 때문에,
 *    for문 돌 때 다음 인덱스인 1부터 비교 시작
 */

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let count = Number(input[0]);
let numberStr = input[1].split(" ");

let numbers = numberStr.map(function (cur) {
  return Number(cur);
});

let max = numbers[0];
let min = numbers[0];
for (let i = 1; i < count; i++) {
  if (max < numbers[i]) max = numbers[i];
  if (min > numbers[i]) min = numbers[i];
}
console.log(`${min} ${max}`);
