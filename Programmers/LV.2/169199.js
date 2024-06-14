// 리코쳇로봇

function solution(board) {
  var 보드 = board.map(item => item.split(""));
  const y = 보드.length;
  const x = 보드[0].length;

  var visited = Array.from(Array(y), () => Array(x).fill(false));
  var startY, startX;
  for(let i = 0; i < y; i++) {
      for(let j = 0; j < x; j++) {
          if(보드[i][j] === "R") { 
              startY = i;
              startX = j;
          }
      }
  }
  

  function bfs(startY, startX, visited, 보드){
      const dy = [-1, 1, 0, 0]
      const dx = [0, 0, -1, 1]

      const queue = [[startY, startX, 0]];
      visited[startY][startX] = true;

      while(queue.length) {
          let [currentY, currentX, cnt] = queue.shift(); 

          for(let i = 0; i < 4; i++){
              let newY = currentY;
              let newX = currentX;

              while(newX + dx[i] >= 0 && newY + dy[i] >= 0 && newX + dx[i] < x && newY + dy[i] < y 
                    && 보드[newY + dy[i]][newX + dx[i]] !== 'D' ) {
                  newY += dy[i]
                  newX += dx[i]
              };
              if(보드[newY][newX] === 'G') {
                  return cnt + 1;
              }

              if(visited[newY][newX] == false) {
                  visited[newY][newX] = true;
                  queue.push([newY, newX, cnt + 1])
              }
          }
      }
      return -1;
  }

  return bfs(startY, startX, visited, 보드); 
}
