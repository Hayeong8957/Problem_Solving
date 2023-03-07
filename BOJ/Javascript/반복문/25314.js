/** 코딩은 체육과목입니다.
 * 입력: 첫 번째 줄에는 문제 정수 N 주어짐
 * 출력: 혜아가 N바이트 정수까지 저장할 수 있다고 생각하는 정수 자료형의 이름을 출력
 * 예제 입력1 : 4
 * 예제 출력1 : long int
 * 예제 입력2 : 20
 * 예제 출력2 : long long long long long int
 */
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const N = Number(input);

const answer = [];
for (let i = 0; i < N / 4; i++) {
  answer.push('long');
}

console.log(answer.join(' '), 'int');
