/** 
지민이는 자신의 저택에서 MN개의 단위 정사각형으로 나누어져 있는 M×N 크기의 보드를 찾았다. 
어떤 정사각형은 검은색으로 칠해져 있고, 나머지는 흰색으로 칠해져 있다. 지민이는 이 보드를 잘라서 8×8 크기의 체스판으로 만들려고 한다.

체스판은 검은색과 흰색이 번갈아서 칠해져 있어야 한다. 구체적으로, 각 칸이 검은색과 흰색 중 하나로 색칠되어 있고, 
변을 공유하는 두 개의 사각형은 다른 색으로 칠해져 있어야 한다. 따라서 이 정의를 따르면 체스판을 색칠하는 경우는 두 가지뿐이다. 
하나는 맨 왼쪽 위 칸이 흰색인 경우, 하나는 검은색인 경우이다.

보드가 체스판처럼 칠해져 있다는 보장이 없어서, 지민이는 8×8 크기의 체스판으로 잘라낸 후에 몇 개의 정사각형을 다시 칠해야겠다고 생각했다. 
당연히 8*8 크기는 아무데서나 골라도 된다. 지민이가 다시 칠해야 하는 정사각형의 최소 개수를 구하는 프로그램을 작성하시오.

입력: 첫째 줄에 N과 M이 주어진다. N과 M은 8보다 크거나 같고, 50보다 작거나 같은 자연수이다. 
둘째 줄부터 N개의 줄에는 보드의 각 행의 상태가 주어진다. B는 검은색이며, W는 흰색이다.

출력: 첫째 줄에 지민이가 다시 칠해야 하는 정사각형 개수의 최솟값을 출력한다.

예제 입력:
11 12
BWWBWWBWWBWW
BWWBWBBWWBWW
WBWWBWBBWWBW
BWWBWBBWWBWW
WBWWBWBBWWBW
BWWBWBBWWBWW
WBWWBWBBWWBW
BWWBWBWWWBWW
WBWWBWBBWWBW
BWWBWBBWWBWW
WBWWBWBBWWBW

예제 출력: 15
------------------------------

WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBBBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW

BWBWBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB
BWBWBWBW
WBWBWBWB

풀이 :
1. 체스판 자르기 : 8 x 8 크기로 체스판 자르기, 하나씩 다 잘라봐야함.

2. 최소 cnt 구하기 : 현재 체스판을 완성하기 위한 최소 cnt 구하기
-> 입력한 체스판의 왼쪽 모서리로부터 8칸, 8칸씩 땡겨 가지고 오면서 기존 보드와 비교하며
다른 값이 있으면 cnt++

3. 전체 체스판 cnt와 비교
-> 현재 체스판의 최소 cnt를 전체 죄소판의 최소 cnt와 비교해서 최소 cnt 리턴

4. n-8까지 시작점을 ㅁ줘야 모든 경우를 다 구할 수 있으니 n-7까지
result를 자기 자신과, i, j에서 비교한 값과 그중에서 제일 작은 값을 업데이트 해줌
 */
// .readFileSync('/dev/stdin')

let [NM, ...inputMatrix] = require('fs')
  .readFileSync('/Users/shinhayeong/Problem_Solving/BOJ/Javascript/test.txt')
  .toString()
  .trim()
  .split('\n');
const [N, M] = NM.split(' ').map(Number);

const WB = [
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
];

const BW = [
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
];

function checkMatrix(x, y) {
  let WBcnt = 0;
  let BWcnt = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      [currentX, currnetY] = [x + i, y + j];
      if (inputMatrix[currentX][currnetY] !== WB[i][j]) {
        WBcnt++;
      }
      if (inputMatrix[currentX][currnetY] !== BW[i][j]) {
        BWcnt++;
      }
    }
  }
  return Math.min(WBcnt, BWcnt);
}

let result = 10000000000;

for (let i = 0; i < N - 7; i++) {
  for (let j = 0; j < M - 7; j++) {
    result = Math.min(result, checkMatrix(i, j));
  }
}

console.log(result);
