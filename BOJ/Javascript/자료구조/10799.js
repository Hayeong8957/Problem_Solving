const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const stick = fs.readFileSync(filePath).toString().trim().split('');

let answer = 0;
const stack = [];
// 1. ( -> push
// 2. ) -> 앞에 있는 값 비교 ( 라면 레이저 -> 스택 길이만큼 더함
// 3. ) -> 앞에 있는 값 비교 ) 막대기니까 + 1

for (let i = 0; i < stick.length; i++) {
  if (stick[i] === '(') {
    stack.push('(');
  } else {
    stack.pop();
    if (stick[i - 1] === '(') {
      answer += stack.length;
    } else {
      answer += 1;
    }
  }
}

console.log(answer);
