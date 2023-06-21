/**
 * 정수 A를 B로 바꾸려고 한다. 가능한 연산은 다음과 같은 두 가지이다.
 * - 2를 곱한다.
 * - 1을 수의 가장 오른쪽에 추가한다.
 * A를 B로 바꾸는데 필요한 연산의 최솟값을 구해보자
 *
 * A를 B로 바꾸는데 필요한 연산의 최솟값에 1을 더한 값을 출력한다. 만들 수 없는 경우에는 -1을 출력한다.
 *
 * 입력 1: 2 162
 * 출력 1: 5
 *
 * 입력2: 4 42
 * 출력2: -1
 *
 * 입력3: 100 40021
 * 출력3: 5
 *
 * 풀이 방식:
 * - B->A로 가는 방식, cnt를 세준다.
 * - 마지막 숫자가 1인지 확인, 1일 경우 1을 빼줌
 * - 2로 나누어지면 2로 나눔
 * - 위 두 케이스에 해당하지 않으면 -1출력 후 종료
 * - B<A일 경우 -1출력
 */

let [A, B] = require('fs')
  .readFileSync(
    '/Users/shinhayeong/Desktop/Problem_Solving/BOJ/Javascript/test.txt',
  )
  .toString()
  .trim()
  .split(' ');

let cnt = 1;

while (true) {
  if (A === B) {
    break;
  } else if (Number(B) < Number(A)) {
    console.log(-1);
  }
  if (B % 2 === 0) {
    B = String(B / 2);
  } else if (B % 2 === 1) {
    if (B[B.length - 1] === '1') {
      B = B.slice(0, B.length - 1);
    } else {
      console.log(-1);
    }
  }
  cnt++;
}

console.log(cnt);
