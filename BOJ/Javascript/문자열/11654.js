/**
 * 문제 : 알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때,
 * 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.
 *
 * 입력 : 알파벳 소문자, 대문자, 숫자 0-9중 하나가 첫째 줄에 주어진다.
 * ex)
 * A
 *
 * 출력 : 입력으로 주어진 글자의 아스키 코드 값을 출력한다.
 * ex)
 * 65
 *
 * 풀이과정 :
 * - 자바스크립트에서 문자를 아스키코드로 변환하는 메서드 : charCodeAt
 *   - "문자열".charCodeAt([문자열 자릿수]);
 * => 한 줄에 한 문자만 입력되므로 문자열의 첫자리(0)를 쓰면됨.
 *
 * - 반대로 아스키 코드를 문자열로 바꿔주는 메서드 : fromcharCode(아스키코드값)
 *   - String.fromCharCode(아스키코드값)
 *
 */

const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ");

const str = inputData.toString();
result = str.charCodeAt(0);

console.log(result);
