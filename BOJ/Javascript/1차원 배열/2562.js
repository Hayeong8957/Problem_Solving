/**
 * 문제 번호 : 2562
 *
 * 문제 : 9개의 서로 다른 자연수가 주어질 때,
 * 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.
 * 예를 들어, 서로 다른 9개의 자연수
 * 3, 29, 38, 12, 57, 74, 40, 85, 61
 * 이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.
 *
 * 입력 : 첫째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다.
 * 주어지는 자연수는 100 보다 작다.
 * ex)
 * 3
 * 29
 * 38
 * 12
 * 57
 * 74
 * 40
 * 85
 * 61
 *
 * 출력 : 첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다.
 * 85
 * 8
 *
 * 문제 풀이:
 * 1) 배열을 split해서 변수에 값을 넣으면 str로 들어가기 때문에 Number
 * 2) max의 초기값을 numbers[0]번 값을 넣었기 때문에,
 *    for문 돌 때 다음 인덱스인 1부터 비교 시작
 */

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let numbers = input.map(function (cur) {
  return Number(cur);
});

let max = numbers[0];
let maxIndex = 0;
for (let i = 1; i < 9; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
    maxIndex = i;
  }
}
console.log(`${max} ${maxIndex + 1}`);
