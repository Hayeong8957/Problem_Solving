/** 검증수
 * 예를 들어 고유번호의 처음 5자리의 숫자들이 04256이면,
 * 각 숫자를 제곱한 수들의 합 0+16+4+25+36 = 81 을 10으로 나눈 나머지인 1이 검증수이다.
 *
 * 0 4 2 5 6
 * => 1
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const answer =
  Number(input.map((e) => e ** 2).reduce((prev, cur) => prev + cur)) % 10;
console.log(answer);
