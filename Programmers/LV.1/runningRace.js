// 탐색
// 풀이 1) 시간초과, 시간 복잡도 o(n^2)
function solution(players, callings) {
  let answer = [];
  for (let i = 0; i < callings.length; i++) {
    for (let j = 0; j < players.length; j++) {
      if (callings[i] === players[j]) {
        [players[j - 1], players[j]] = [players[j], players[j - 1]];
        answer = players;
      }
    }
  }
  return answer;
}

// 풀이 2) map 사용, 시간 복잡도 o(n)
function solution(players, callings) {
  const playerMap = new Map();
  for (let i = 0; i < players.length; i++) {
    playerMap.set(players[i], i);
  }

  for (let i = 0; i < callings.length; i++) {
    if (playerMap.has(callings[i])) {
      const playerIndex = playerMap.get(callings[i]);
      [players[playerIndex - 1], players[playerIndex]] = [
        players[playerIndex],
        players[playerIndex - 1],
      ];
      playerMap.set(players[playerIndex], playerIndex);
      playerMap.set(players[playerIndex - 1], playerIndex - 1);
    }
  }

  return players;
}
