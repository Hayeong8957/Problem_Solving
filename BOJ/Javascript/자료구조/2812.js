const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const [NK, input] = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, K] = NK.split(' ').map(Number);
const arr = input.split('').map(Number);

// 숫자 순회하며 이전보다 작은 숫자 제거
// -> 현재가 스택 끝 숫자보다 크면 스택에서 숫자 제거
// -> 숫자를 제거한 횟수 cnt가 K에 도달하면 이후 숫자는 그대로 추가
// -> 마지막에 N - K만큼 자름
// 4, 41, 7, 77, 772, 775, 7752, 7758, 77584, 775841
// 0, 0, 2,  2,  2,    3,  3,     4,  4,      4

let stack = [];
let cnt = 0;

for (let i = 0; i < N; i++) {
  while (cnt < K && stack.length > 0 && stack[stack.length - 1] < arr[i]) {
    stack.pop();
    cnt++;
  }
  stack.push(arr[i]);
}

stack = stack.slice(0, N - K);
console.log(stack.join(''));
