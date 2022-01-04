/**
 * 문제 번호: 10869
 * 문제: 두 자연수 A와 B가 주어진다. 모든 사칙연산 출력
 * 입력: 두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)
 * 출력: 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
 * 문제 풀이:
 * 다른 언어와 다르게 JS에서 나눗셈 연산은 소수점을 포함한 결과가 나옴
 * 따라서 소수점 아래 수를 없애 줘야 한다.
 * Math객체의 floor메소드를 이용해 소수점을 버린다.
 * 예) Math.floor(변환할 값)
 */

const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split(" ");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B));
console.log(A % B);
