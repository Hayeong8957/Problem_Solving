// 이분탐색
// 중복 여부 확인 -> Set
// C개의 열에 대해 R개의 행에서 각 열의 문자 연결하여 열 단위 문자열 만듦
// 행 제거하는 최대 개수 구하기 위해 이분 탐색 시전
// -> 특정 행 수 삭제시 열 문자열의 중복 여부 확인
// -> 중복이 없다면 더 많은 행을 제거할 수 있으므로 탐색 범위를 늘림 -> 중복이 있다면 탐색 범위를 줄임

const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [R, C] = input.shift().split(' ').map(Number);
const table = input;

function isUnique(rowCnt) {
  const set = new Set();
  for (let col = 0; col < C; col++) {
    let colWord = '';
    for (let row = rowCnt; row < R; row++) {
      colWord += table[row][col];
    }
    if (set.has(colWord)) return false;
    set.add(colWord);
  }
  return true;
}

let left = 0;
let right = R - 1;
let result = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  if (isUnique(mid)) {
    result = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(result);
