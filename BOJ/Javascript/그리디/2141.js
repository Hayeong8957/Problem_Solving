const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');
const arr = input.map((el) => el.split(' ').map(Number));

// 각 사람까지의 거리의 합이 최소 -> 중앙값
// 모든 사람이 우체국과의 거리 합이 최소가 되는 위치는 중앙값에서 발생,
// 각 마을에는 서로 다른 인구수가 존재하므로, 일반적인 중앙값이 아니라 가중중앙값을 사용해야 함
// ㄴ가중 중앙값 -> 누적 인구수가 전체의 절반을 넘기는 첫 번쨰 위치

arr.sort((a, b) => a[0] - b[0]);

const totalPeople = arr.reduce((acc, cur) => acc + cur[1], 0);

let sum = 0;
for (let [location, people] of arr) {
  sum += people;
  if (totalPeople / 2 <= sum) {
    console.log(location);
    break;
  }
}
