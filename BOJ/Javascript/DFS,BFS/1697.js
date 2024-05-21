//숨바꼭질
// https://www.acmicpc.net/problem/1697

// 5 - 10 - 9 - 18 - 17
// *2 -1 *2 -1
// 1. 갈 수 있는 루트가 +1, -1, *2가 존재할텐데 그것들을 계산한 녀석들을 현재 위치에서 계산해서 하나의 배열로 만들기
// 2. Queue에는 [현재, 횟수]로 저장해보자고
// 3. 현재로 저장할 때 유효범위 안에 있어야 함. 0 ~ 100000 사이여야 함. 그리고 방문 안한 녀석이어야 함.

const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, K] = fs.readFileSync('/Users/shinhayeong/Desktop/Problem_Solving/test.txt').toString().trim().split(' ').map(Number);

console.log('N >> ', N)
console.log('K >> ', K)

if(N === K) {
  console.log(0);
  return;
}

const visited = new Array(100001).fill(false);

function bfs(수빈, 동생) {
  const queue = [[수빈, 0]]
  let index = 0; // shift마다 배열의 모든 요소가 앞으로 이동하니 o(n) -> index가 움직이게 하며 o(1)로 

  visited[수빈] = true;
  
  while(index < queue.length) {
    const [cur, cnt] = queue[index++];

    const nextItems = [cur - 1, cur + 1, 2 * cur];

    for(let next of nextItems) {
      if(next < 0 || next > 100000 || visited[next]) continue;

      if(next === 동생) {
        return cnt + 1;
      }
      queue.push([next, cnt + 1])
      visited[next] = true;
    }
  }  
}

console.log(bfs(N, K))