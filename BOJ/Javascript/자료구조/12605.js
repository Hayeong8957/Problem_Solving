/** 단어순서 뒤집기
 * 
 * 문제: 스페이스로 띄어쓰기 된 단어들의 리스트가 주어질때, 단어들을 반대 순서로 뒤집어라.
 * 각 라인은 w개의 영단어로 이루어져 있으며, 총 L개의 알파벳을 가진다. 각 행은 알파벳과 스페이스로만 이루어져 있다.
 * 단어 사이에는 하나의 스페이스만 들어간다.
 * 
입력: 
3
this is a test
foobar
all your base

출력:
Case #1: test a is this
Case #2: foobar
Case #3: base your all
 * 
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

for (let i = 0; i < n; i++) {
  const arr = input[i].split(' ');
  // console.log(arr);
  const stack = [];
  for (let j = 0; j < arr.length; j++) {
    stack.push(arr[j]);
  }

  const answer = [];
  while (stack.length > 0) {
    answer.push(stack.pop());
  }
  console.log(`Case #${i + 1}: ${answer.join(' ')}`);
}

// for (let i = 0; i < n; i++) {
//   const arr = input[i].split(' ');
//   const stack = [];
//   for (let j = 0; j < arr.length; j++) {
//     stack.push(arr[j]);
//   }

//   const answer = [];
//   while (stack.length > 0) {
//     answer.push(stack.pop());
//   }
//   console.log(answer.join(' '));
// }
