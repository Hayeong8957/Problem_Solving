/**
 * 문제 번호: 11022
 * 문제: 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 *
 * 입력: 첫째 줄에 테스트 케이스의 개수 T가 주어진다.
 *       각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
 * ex)
 * 5
 * 1 1
 * 2 3
 * 3 4
 * 9 8
 * 5 2
 *
 * 출력: 각 테스트 케이스마다 "Case #x: A + B = C" 형식으로 출력한다.
 * x는 테스트 케이스 번호이고 1부터 시작하며, C는 A+B이다.
 *
 * ex)
 * Case #1: 1 + 1 = 2
 * Case #2: 2 + 3 = 5
 * Case #3: 3 + 4 = 7
 * Case #4: 9 + 8 = 17
 * Case #5: 5 + 2 = 7
 *
 * 문제 풀이: 11022.js풀이와 같게 풀이, 출력 구조만 바꿈
 *
 */

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let num1 = input[i].split(" ")[0];
  let num2 = input[i].split(" ")[1];
  console.log(`Case #${i}: ${num1} + ${num2} = ${Number(num1) + Number(num2)}`);
}
