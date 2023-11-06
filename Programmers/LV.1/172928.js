// 공원 산책
function solution(park, routes) {
  let prevPos = [0, 0];
  let map = [];
  const dict = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };

  park.forEach((row, idx) => {
    const sPos = row.indexOf('S');
    if (sPos >= 0) {
      prevPos = [idx, sPos];
    }
    map.push([...row]);
  });

  routes.forEach((route, routeIdx) => {
    // 방향과 거리 입력받기
    const [pos, range] = route.split(' ');
    let curPos = [...prevPos];
    let applyFlag = true;

    // 거리만큼 반복
    for (let i = 0; i < range; i++) {
      curPos[0] += dict[pos][0];
      curPos[1] += dict[pos][1];

      // 장애물 판별 || 공원을 벗어났는지 판별
      if (
        curPos[0] > map.length - 1 ||
        curPos[0] < 0 ||
        curPos[1] > map[0].length - 1 ||
        curPos[1] < 0
      ) {
        applyFlag = false;
        break;
      }

      if (map[curPos[0]][curPos[1]] === 'X') {
        applyFlag = false;
        break;
      }
    }

    if (applyFlag) prevPos = curPos;
  });

  return prevPos;
}
