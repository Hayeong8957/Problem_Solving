/** 초콜릿 자르기
 * N*M크기의 초콜릿 가지고 있다.
 * 나눠 머ㄱ어 , 적당한 위치에서 초콜릿 쪼개, 금이 가 있는 위치에서만 쪼개
 * 두 개 조각으로 나눠짐 다시 이중에 하나 들고 또 쪼개
 * 1*1크기 초콜릿으로 쪼개기 위한 최소 쪼개기 횟수
 *
 * 입력)
 * 2 2
 * 출력)
 * 3
 * => 2*2-1 = 3
 *
 * 입력)
 * 1 1
 * 출력)
 * 0
 *=> 1*1-1 = 0
 */
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);
const N = input[0];
const M = input[1];
console.log(N * M - 1);
