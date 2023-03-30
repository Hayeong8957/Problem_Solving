/**
 * 문제: 문자가 2개인 연립방정식을 해결하는 방법
 * 다음 연립방정식에서 x와 y의 값을 계산하시오.
 * ax + by = c
 * dx + ey = f
 * 각 칸에는 -999이상 999이하의 정수만 입력할 수 있다.
 *
 * 입력: 정수 a, b, c, d, e, f가 공백으로 구분되어 차례대로 주어진다. (-999 <= a, b, c, d, e, f <= 999)
 * 문제에서 언급한 방정식을 만족하는 (x, y)가 유일하게 존재하고, 이 때 x와 y가 각각 -999이상 999이하의 정수인 경우만 입력으로 주어짐이 보장된다.
 *
 * 출력: 문제의 답인 x와 y를 공백으로 구분해 출력한다.
 *
 * 입력: 1 3 -1 4 1 7
 *
 * 출력: 2 -1
 *
 * 입력: 2 5 8 3 -4 -11
 *
 * 출력: -1 2
 *
 * 풀이: -999부터 1000까지 for문을 돌면서 x, y대입
 * ax + by = c와 dx + ey = f를 동시에 만족하는 x, y 리턴
 */

const [a, b, c, d, e, f] = require('fs')
  // .readFileSync('/Users/shinhayeong/Problem_Solving/BOJ/Javascript/test.txt')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let answer = [];
for (let x = -999; x < 1000; x++) {
  for (let y = -999; y < 1000; y++) {
    if (a * x + b * y === c && d * x + e * y === f) {
      answer.push(x);
      answer.push(y);
    }
  }
}
console.log(answer.join(' '));
