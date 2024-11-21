// 백트래킹, 길이가 1일때의 부분수열부터 길이가 N일때의 부분수열까지 모든 조합을 구해 합이 S가 되는 케이스가 몇개인지
const fs = require('fs');
const input = fs
  .readFileSync(
    process.platform === 'linux'
      ? '/dev/stdin'
      : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt',
  )
  .toString()
  .trim()
  .split('\n');

const [[N, S], arr] = input.map((line) => line.split(' ').map(Number));

let cnt = 0;
let answer = [];

function recursion(start) {
  console.log(`recursion(${start})`);
  let sum = answer.reduce((acc, cur) => acc + cur, 0);
  if (sum === S && answer.length > 0) {
    cnt++;
    console.log('cnt >> ', cnt);
  }

  for (let i = start; i < N; i++) {
    answer.push(arr[i]);
    console.log('answer 1 >> ', answer);
    recursion(i + 1);
    answer.pop();
    console.log('answer 2 >> ', answer);
  }
}

recursion(0);
console.log(cnt);
