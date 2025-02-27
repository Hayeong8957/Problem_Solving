// 19598도 동일하게 풀이
const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');
const arr = input.map((el) => el.split(' ').map(Number));

const room = [];

for (const [S, T] of arr) {
  room.push({ time: S, start: 1 });
  room.push({ time: T, start: -1 });
}

// 시작하는 시간과 끝나는 시간이 같을 떄는 끝나는 시간을 먼저 앞에다 둔다.
// -> Ti ≤ Sj 일 경우 i 수업과 j 수업은 같이 들을 수 있다
// => 끝나는 시간과 시작 시간이 동일할 때 방을 같이 쓸 수 있기 때문에 방 반납후, 방 하나 추가
room.sort((a, b) => (a.time === b.time ? a.start - b.start : a.time - b.time));

let max = 0; // 최대 사용 회의실 개수
let cur = 0; // 현재 사용중인 회의실 개수
for (let R of room) {
  if (R.start === 1) cur++;
  else cur--;
  max = Math.max(max, cur);
}

console.log(max);
