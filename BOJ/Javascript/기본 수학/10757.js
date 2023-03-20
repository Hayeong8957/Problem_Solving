/**
 * - 자바스크립트 BigInt?
 * - C언어를 생각했을 때 long long type과 비슷하다고 생각하면 됨.
 * - C언어 long long type의 최댓값 -9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807
 * - bigint의 크기는 메모리가 허용하는 한 정확히 나타낼 수 있고, 필요에 따라 수의 크기를 늘릴 수 있으므로 long long 보다 클 수 있다.
 * - 비슷한 목적을 가지지만 구현 방식 다르고, bigint가 더 크다.
 * - 일반적인 숫자의 끝에 n을 붙여주거나 BigInt() 형변환을 해주거나 하면 됨.
 * -> 그래서 그냥 더해서 출력하게 된다면 끝에 n이 붙여져서 반환될 것임
 *
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
// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let input = require('fs')
  .readFileSync(
    'c:/Users/HayeongShin/Algorithm/Problem_Solving/BOJ/Javascript/test.txt',
  )
  .toString()
  .split(' ')
  .map(BigInt);

console.log(input.reduce((a, b) => a + b).toString());
