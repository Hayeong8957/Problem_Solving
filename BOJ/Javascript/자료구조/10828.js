/**
 * 문제: 정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성
 * 명령은 총 다섯 가지이다.
 * push X: 정수 X 넣음
 * ✔ pop: 최상위 정수 빼고 출력, 정수 없는 경우 -1 출력
 * ✔ size: 스택이 들어있는 정수 개수 출력
 * ✔ empty: 비어있음 1, 아니면 0 출력
 * ✔ top: 가장 위에 있는 정수 출력, 정수 없는 경우 -1 출력
 * 
 * 입력: 명령의 수 N, 명령 list
 * 출력: 출력 명령 따라 출력~ push 빼고 죄다 출력 명령
 * 
 * 입력: 
14
push 1
push 2
top
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
top

출력:
2
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

시간 초과 참고 : https://leylaoriduck.tistory.com/474
 */

// const input = require('fs')
//   .readFileSync('/dev/stdin')
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

// console.log(input[0].split(' ')[0]);    => push 명령 추출
// console.log(input[0].split(' ')[1]);    => push 요소 추출
let stack = [];
let temp = 0;
let answer = ''; // 각각 console.log -> time-error => answer로 모았다가 한 번에 출력ㄱ
for (let i = 0; i < n; i++) {
  let command = input[i].trim().split(' ');
  // console.log(command);
  if (command.length === 1) {
    switch (command[0]) {
      case 'pop': // 가장 위 정수 빼고 출력, 없으면 -1출력
        if (stack.length === 0) answer += '-1\n';
        else {
          temp = stack.pop();
          answer += `${temp}\n`;
        }
        break;
      case 'size': // 스택 정수 개수 출력
        answer += `${stack.length}\n`;
        break;
      case 'empty': // 스택 비어있으면 1, 아니면 0출력
        if (stack.length === 0) answer += '1\n';
        else answer += '0\n';
        break;
      case 'top': // 가장 위 정수 출력, 없으면 -1 출력
        if (stack.length === 0) answer += '-1\n';
        else answer += `${stack[stack.length - 1]}\n`;
        break;
    }
  } else if (command.length === 2) {
    stack.push(command[1]);
  }
}

console.log(answer);
