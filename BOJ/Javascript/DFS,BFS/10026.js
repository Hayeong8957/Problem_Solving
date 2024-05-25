
const fs = require('fs');
//let [N, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const [num, ...arr] = fs.readFileSync('/Users/shinhayeong/Desktop/Problem_Solving/test.txt').toString().trim().split('\n');

const N = Number(num);
const graph = arr.map((item) => item.split(''))

let visited = Array.from(Array(N), () => Array(N).fill(false));

function bfs(y, x, color) {
  let queue = [[y, x]]
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1]

  visited[y][x] = true;

  while(queue.length){
    let [y, x] = queue.shift();

    for(let i = 0; i < 4; i++){
      let newY = y + dy[i]
      let newX = x + dx[i]

      if(newX < 0 || newY < 0 || newX >= N || newY >= N) continue;
      if(!visited[newY][newX] && graph[newY][newX] === color) {
        visited[newY][newX] = true
        queue.push([newY, newX])
      }
    }
  }
}

let rgb = 0
for(let y = 0; y < N; y++){
  for(let x =0; x < N; x++){
    if(!visited[y][x]) {
      bfs(y, x, graph[y][x]);
      rgb++
    }
  }
}

visited = Array.from(Array(N), () => Array(N).fill(false));

let rb = 0;
for(let y = 0; y < N; y++){
  for(let x = 0; x<N; x++){
    if(graph[y][x] === "G"){
      graph[y][x] = "R"
    }
  }
}

for(let y = 0; y < N; y++){
  for(let x =0; x < N; x++){
    if(!visited[y][x]) {
      bfs(y, x, graph[y][x]);
      rb++
    }
  }
}

console.log(`${rgb} ${rb}`)
