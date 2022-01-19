/**
 * 문제 번호 : 2577
 *
 * 문제 : 세 개의 자연수 A, B, C가 주어질 때 A × B × C를 계산한 결과에
 * 0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오.
 * 예를 들어 A = 150, B = 266, C = 427 이라면 A × B × C = 150 × 266 × 427 = 17037300 이 되고,
 * 계산한 결과 17037300 에는 0이 3번, 1이 1번, 3이 2번, 7이 2번 쓰였다.
 *
 * 입력 : 첫째 줄에 A, 둘째 줄에 B, 셋째 줄에 C가 주어진다.
 * A, B, C는 모두 100보다 크거나 같고, 1,000보다 작은 자연수이다.
 * ex)
 * 150
 * 266
 * 427
 *
 * 출력 : 첫째 줄에는 A × B × C의 결과에 0 이 몇 번 쓰였는지 출력한다.
 * 마찬가지로 둘째 줄부터 열 번째 줄까지 A × B × C의 결과에 1부터 9까지의 숫자가 각각 몇 번 쓰였는지 차례로 한 줄에 하나씩 출력한다.
 * 3
 * 1
 * 0
 * 2
 * 0
 * 0
 * 0
 * 2
 * 0
 * 0
 *
 * 문제 풀이:
 * 1) countNum에 10 크기의 배열에 값을 모두 0으로 할당
 * 2) '해당 배열의 인덱스 = 탐색한 숫자'로 생각할 수 있으므로 multiply에 저장된
 * String 타입의 값이 각 자리마다 접근할 때 해당 값과 countNum의 인덱스에 해당하는 경우 값이 증가
 */

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let multiply = 1;
for (let i = 0; i < 3; i++) {
  multiply *= Number(input[i]);
}
let multiStr = String(multiply);

let countNum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < 10; i++) {
  countNum[Number(multiStr[i])] += 1;
}

countNum.forEach(function (cur) {
  console.log(cur);
});
