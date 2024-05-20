// 섬의 개수

const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('/Users/shinhayeong/Desktop/Problem_Solving/test.txt').toString().trim().split('\n');
let input2 = input.map(e => e.split(' ').map(Number))

for(let i = 0; i < input2.length -1; i++){
  var [W, H] = input2[i];
  if (W === 0 && H === 0) return;

  var 땅 = input2.slice(i+1, i+H+1);
  i += H
  
  var visited = Array.from(Array(H), () => Array(W).fill(false));

  let answer = 0;
  for(let y =0; y < H; y++){
    for(let x = 0; x < W; x++){
      if(땅[y][x] === 1 && !visited[y][x]){
        answer++; 
        bfs(y, x);
       
      }
    }
  }
  console.log(answer);
}

function bfs(y, x){
  let queue = [[y, x]];
  const dy = [-1, 1, 0, 0, -1, -1, 1, 1];
  const dx = [0, 0, -1, 1, -1, 1, -1, 1];

  visited[y][x] = true;

  while(queue.length) {
    let [y, x] = queue.shift();

    for(let i = 0; i < 8; i++){
      let newX = x + dx[i];
      let newY = y + dy[i];

      if(newX < 0 || newY < 0 || newY >= H || newX >= W) continue;
      if (땅[newY][newX] === 1 && !visited[newY][newX]) {
        visited[newY][newX] = true;
        queue.push([newY, newX]);
      }
    } 
  }
}
