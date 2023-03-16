/**
 * 문제: 재현이는 잘못된 수를 부를 때마다 0을 외쳐서, 가장 최근에 재민이가 쓴 수를 지우게 시킨다.
 * 재민이는 이렇게 모든 수를 받아 적은 후 그 수의 합을 알고 싶어 한다. 재민이를 도와주자!
 * 
 * 입력:
4
3
0
4
0

출력:
0

입력: 
10
1
3
5
4
0
0
7
0
0
6

출력:
7
 */
const [n, ...input] = require('fs')
  .readFileSync(
    'c:/Users/HayeongShin/Algorithm/Problem_Solving/BOJ/Javascript/test.txt',
  )
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let stack = [];

input.forEach((value) => {
  return value === 0 ? stack.pop() : stack.push(value);
});

console.log(stack.reduce((acc, cur) => acc + cur, 0));
