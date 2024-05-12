// 빗물 https://www.acmicpc.net/problem/14719
// 빗물 총량 구하기
// for문 돌면서 현재 index에서 좌측 최대값, 우측 최대값 구한 후 min(좌, 우) - arr[index] 의 총합 구하기

// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
const fs = require('fs');
const [_, arr] = fs.readFileSync('/Users/shinhayeong/Desktop/Problem_Solving/test.txt').toString().trim().split('\n')


const newArr = arr.split(" ").map(Number)
const answer = [];

for(let i = 1; i < newArr.length; i++) {
  const left = newArr.slice(0, i);
  const right = newArr.slice(i, newArr.length);
  const leftMax = Math.max.apply(null, left);
  const rightMax = Math.max.apply(null, right);
  const min = Math.min(leftMax, rightMax);

  answer.push(min - newArr[i]);
}

const sum = answer.filter((item) => item > 0).reduce((acc, cur) => { return acc + cur ;}, 0)
console.log(sum)