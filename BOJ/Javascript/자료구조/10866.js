/** 덱(deque)
 * 명령은 총 여덟 가지이다.
push_front X: 정수 X를 덱의 앞에 넣는다.
push_back X: 정수 X를 덱의 뒤에 넣는다.
pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 덱에 들어있는 정수의 개수를 출력한다.
empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.

입력:
15
push_back 1
push_front 2
front
back
size
empty
pop_front
pop_back
pop_front
size
empty
pop_back
push_front 3
empty
front

출력:
2
1
2
0
2
1
-1
0
1
-1
0
3
*/

const [n, ...input] = require('fs')
  .readFileSync(
    'c:/Users/HayeongShin/Algorithm/Problem_Solving/BOJ/Javascript/test.txt',
  )
  // .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let deque = [];
let answer = [];

for (let command of input) {
  if (command.includes('push_back')) {
    deque.push(Number(command.split(' ')[1]));
  } else if (command.includes('push_front')) {
    deque.unshift(Number(command.split(' ')[1]));
  } else if (command.includes('pop_back')) {
    answer.push(deque.length === 0 ? -1 : deque.pop());
  } else if (command.includes('pop_front')) {
    answer.push(deque.length === 0 ? -1 : deque.shift());
  } else if (command.includes('size')) {
    answer.push(deque.length);
  } else if (command.includes('empty')) {
    answer.push(deque.length === 0 ? 1 : 0);
  } else if (command.includes('front')) {
    answer.push(deque.length === 0 ? -1 : deque[0]);
  } else if (command.includes('back')) {
    answer.push(deque.length === 0 ? -1 : deque[deque.length - 1]);
  }
}

console.log(answer.join('\n'));
