/**
 * 문제 : 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 *
 * 입력 : 첫째 줄에 A와 B가 주어진다. (0 < A,B < 10^10000)
 * ex1)
 * 9223372036854775807 9223372036854775808
 *
 * 출력 : 첫째 줄에 A+B를 출력한다.
 * ex1)
 * 18446744073709551615
 *
 * 풀이 :
 * BigInt는 임의의 정밀도로 정수를 나타낼 수 있는 자바스크립트의 새로운 숫자 데이터형이다.
 * BigInt를 출력할 때에는 toString()으로 출력해야 한다. 그렇지 않다면 끝에 n이 붙어서 나옴.
 *  */

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
const A = BigInt(input[0]);
const B = BigInt(input[1]);
let answer = A + B;
console.log(answer.toString());
