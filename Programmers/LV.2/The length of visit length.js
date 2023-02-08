// point1. 처음 걸어본길만 카운트
// 좌표를 방문했는 지를 판단하는 것이 아닌, 좌표까지의 길을 지났는지 판단하는 문제 -> 도착점이 [1,1]이라면 [0,1]에서부터 왔는지, [1,0]에서 왔는지 그 출발점이 중요하다. -> Set을 통해 중복된 길을 제거

// point2. u,d,r,l 카운트 -> 각각 카운트해서 5를 초과하면 명령 무시

function solution(dirs) {
  // 명령어는 object 타입으로 생성하여 각각 좌표 값을 넣어줌
  let move = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
  let now = [0, 0];
  let route = new Set();

  for (let dir of dirs) {
    // 각각 캐릭터가 도착할 좌표
    let nowX = now[0] + move[dir][0];
    let nowY = now[1] + move[dir][1];

    // 좌표평면 경계 넘어갈 때 판별
    if (nowX > 5 || nowX < -5 || nowY > 5 || nowY < -5) continue;

    // 경로는 시작점좌표 + 도착점좌표로 구성된 문자열 형태로 넣어줌
    // [0,0]에서 [1,0]으로 가는 길은 [1,0]에서 [0,0]으로 가는 길도 될 수 있기에 두 가지 경우를 모두 추가해줌
    route.add('' + now[0] + now[1] + nowX + nowY);
    route.add('' + nowX + nowY + now[0] + now[1]);

    // 경로 추가 후 현재 위치를 새로운 위치로 갱신
    now = [nowX, nowY];
  }

  // route에 동일한 길을 두 가지 경로로 표현해서 넣어줬기에 반으로 나눠줌
  return route.size / 2;
}
