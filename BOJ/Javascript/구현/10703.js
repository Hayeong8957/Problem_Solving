// 10703 --> 다시 풀기 

/**
 * 1. 각 X의 최하단 위치 탐색
 * 각 열별로 유성의 최하단 위치를 찾음 -> 유성의 떨어질 수 있는 최대 높이 결정
 * 2. #의 최상단 위치 탐색
 * 각 열별로 #의 최산단 위치
 * 3. 각 열별 X의 최하단 위치와 #의 최상단 위치의 차이를 계산하여, 유성이 떨어질 수 있는 최대 높이 계산
 * 
 */

const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [RS, ...gridArr] = fs.readFileSync('/Users/shinhayeong/Desktop/Problem_Solving/test.txt').toString().trim().split('\n');

const [R, S] = RS.split(' ').map(Number);
const grid = gridArr.map(item => item.split(''));

function solution(grid, R, S) {
  const lowest유성 = Array(S).fill(-1);
  const highest땅 = Array(S).fill(R);

  // 최하단 유성 최상단 땅
  for(let col = 0; col < S; col++) {
    for(let row = 0; row < R; row++) {
      if(grid[row][col] === 'X') {
        lowest유성[col] = Math.max(lowest유성[col], row);
      } else if (grid[row][col] === "#") {
        highest땅[col] = Math.min(highest땅[col], row);
      }
    }
  }

  // 유성이 떨어질 수 있는 최대 높이 계산
  // -> 각 열에 대해 유성의 최하단위치와 땅의 최상단 위치 사이의 거리 계산
  let minDistance = Infinity;
  for(let col = 0; col < S; col++) {
    if(lowest유성[col] !== -1) {
      const distance = highest땅[col] - lowest유성[col] -1; // 유성이 땅에 닿기 직전까지 내려갈 수 있는 최대 칸 수
      minDistance = Math.min(minDistance, distance);
    }
  }

  const result = Array.from({length: R}, () => Array(S).fill('.'));

  for (let col = 0; col < S; col++) {
    for (let row = 0; row < R; row++) {
        if (grid[row][col] === 'X') {
            result[row + minDistance][col] = 'X';
        } else if (grid[row][col] === '#') {
            result[row][col] = '#';
        }
    }
  }

return result;
}

const finalGrid = solution(grid, R, S);

// 결과 출력
finalGrid.forEach(row => {
    console.log(row.join(''));
});