const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
const sortedArr = input.sort((a, b) => a - b);
const 전체난쟁이 = sortedArr.reduce((acc, cur) => acc+ cur, 0);
const 나머지난쟁이 = 전체난쟁이 - 100;
let answer = []

for(let i = 0; i < 9; i++) {
  for(let j = i + 1; j < 9; j++) {
    if(sortedArr[i] + sortedArr[j] === 나머지난쟁이) {
      answer = sortedArr.filter((item) => item !== sortedArr[i] && item !== sortedArr[j]);
    }
  }
}

console.log(answer.join('\n'))

