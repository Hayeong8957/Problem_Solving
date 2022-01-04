/**
 * 문제 번호: 2588
 * 문제: 곱셈[https://www.acmicpc.net/problem/2588]
 * 출력: 첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력
 * 문제 풀이:
 * 1) 두 번째 자리의 일의 자리, 십의 자리, 백의 자리 각각의 변수 선언
 *      1-1) 일의 자리는 10으로 나눈 나머지(%)
 *      1-2) 십의 자리는 100으로 나눈 나머지(%)
 *      1-3) 백의 자리는 100으로 나눈 몫(/)
 * 2) Math객체의 floor메소드를 이용해 소수점을 버린다.
 * 3) \n(줄바꿈) => (U+000A)문자에 대응된다.
 */

const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split("\n");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

const firstNum = B % 10;
const secondNum = Math.floor((B % 100) / 10);
const thirdNum = Math.floor(B / 100);

console.log(A * firstNum);
console.log(A * secondNum);
console.log(A * thirdNum);
console.log(A * B);
