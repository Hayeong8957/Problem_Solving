/**
 * 문제: 아래 그림처럼 높이만 다르고 (같은 높이의 막대기가 있을 수 있음) 
 * 모양이 같은 막대기를 일렬로 세운 후, 왼쪽부터 차례로 번호를 붙인다. 
 * 각 막대기의 높이는 그림에서 보인 것처럼 순서대로 6, 9, 7, 6, 4, 6 이다. 
 * 일렬로 세워진 막대기를 오른쪽에서 보면 보이는 막대기가 있고 보이지 않는 막대기가 있다. 
 * 즉, 지금 보이는 막대기보다 뒤에 있고 높이가 높은 것이 보이게 된다. 
 * 예를 들어, 그림과 같은 경우엔 3개(6번, 3번, 2번)의 막대기가 보인다.
 * N개의 막대기에 대한 높이 정보가 주어질 때, 오른쪽에서 보아서 몇 개가 보이는지를 알아내는 프로그램
 * 
입력: 
6
6
9
7
6
4
6
출력: 3
 * 
 */

const [n, ...input] = require('fs')
  .readFileSync(
    'c:/Users/HayeongShin/Algorithm/Problem_Solving/BOJ/Javascript/test.txt',
  )
  .toString()
  .trim()
  .split('\n')
  .map(Number);

// 맨 뒤에 기본적으로 보일 녀석 1
let cnt = 1;
let max = input[n - 1];
for (let i = n - 2; i >= 0; i--) {
  if (max < input[i]) {
    cnt += 1;
    max = input[i];
  }
}
console.log(cnt);
