/**
 * 문제: 정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성
push X: 정수 X를 큐에 넣는 연산이다.
pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 큐에 들어있는 정수의 개수를 출력한다.
empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
 
입력: 
15
push 1
push 2
front
back
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
front

출력: 
1
2
2
0
1
2
-1
0
1
-1
0
3
*/

// 성호님 stack문제 includes 참고해서 연습함
// const [n, ...input] = require('fs')
// .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n');

const [n, ...input] = require('fs')
  .readFileSync(
    'c:/Users/HayeongShin/Algorithm/Problem_Solving/BOJ/Javascript/test.txt',
  )
  .toString()
  .trim()
  .split('\n');
// console.log(input[0].split(' ')[0]);  => command[0]
// console.log(input[0].split(' ')[1]);  => command[1]

let stack = [];
let answer = [];

for (let command of input) {
  if (command.includes('push')) {
    stack.push(Number(command.split(' ')[1]));
  } else if (command.includes('pop')) {
    answer.push(stack.length === 0 ? -1 : stack.shift());
  } else if (command.includes('size')) {
    answer.push(stack.length);
  } else if (command.includes('empty')) {
    answer.push(stack.length === 0 ? 1 : 0);
  } else if (command.includes('front')) {
    answer.push(stack.length === 0 ? -1 : stack[0]);
  } else if (command.includes('back')) {
    answer.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
  }
}

console.log(answer.join('\n'));
