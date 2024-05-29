// 게임 맵 최단 거리

function solution(maps) {
  var mapY = maps.length;
  var mapX = maps[0].length;
      
  return bfs(0, 0, maps, mapY, mapX);
}

function bfs(y, x, maps, mapY, mapX) {
  let queue = [[y, x, 1]]; // y, x, distance
  const dy = [-1, 1, 0, 0]
  const dx = [0, 0, -1, 1]
  maps[y][x] = 0;
  
  while(queue.length) {
      let [y, x, cnt] = queue.shift();
      
      if(y === mapY - 1 && x === mapX - 1) return cnt;
      
      for(let i = 0; i < 4; i++) {
          let newY = y + dy[i];
          let newX = x + dx[i];

          if(newX < 0 || newY < 0 || newX >= mapX || newY >= mapY || maps[newY][newX] === 0) continue;
          queue.push([newY, newX, cnt + 1]);
          maps[newY][newX] = 0;
      }
  }
  return -1;
}