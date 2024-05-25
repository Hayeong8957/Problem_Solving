// 숨바꼭질
// 방법의 갯수도 출력

//숨바꼭질
// https://www.acmicpc.net/problem/1697

// 5 - 10 - 9 - 18 - 17
// *2 -1 *2 -1
// 1. 갈 수 있는 루트가 +1, -1, *2가 존재할텐데 그것들을 계산한 녀석들을 현재 위치에서 계산해서 하나의 배열로 만들기
// 2. Queue에는 [현재, 횟수]로 저장해보자고
// 3. 현재로 저장할 때 유효범위 안에 있어야 함. 0 ~ 100000 사이여야 함. 그리고 방문 안한 녀석이어야 함.

// time -> 각 위치에 도달하는 시간, count -> 그 위치에 도달하는 방법의 수를 누적
// 해당 위치를 처음 방문하는 경우, 해당 위치를 최단 시간에 이미 방문한 경우 두 가지 경우로 나눠서 생각해야한
// 

const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let [N, K] = fs.readFileSync('/Users/shinhayeong/Desktop/Problem_Solving/test.txt').toString().trim().split(' ').map(Number);

if(N === K) {
  console.log(0);
  console.log(1);
  return;
}

const timeArr = new Array(100001).fill(-1);
const count = new Array(100001).fill(0);

function bfs(수빈, 동생) {
  const queue = [[수빈, 0]]
  let index = 0; 

  timeArr[수빈] = 0;
  count[수빈] = 1;
  
  while(index < queue.length) {
    const [cur, time] = queue[index++];

    const nextItems = [cur - 1, cur + 1, 2 * cur];

    for(let next of nextItems) {
      if(next < 0 || next > 100000 ) continue;

      if (timeArr[next] === -1) {
        queue.push([next, time + 1]);
        timeArr[next] = time + 1;
        count[next] = count[cur];
      } else if (timeArr[next] === time + 1) {
          count[next] += count[cur];
      }
      
    }
  }  
  return [timeArr[동생], count[동생]];
}

const [time, ways] = bfs(N, K)
console.log(time);
console.log(ways);