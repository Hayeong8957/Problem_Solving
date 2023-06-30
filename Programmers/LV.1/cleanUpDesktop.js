/* 바탕화면 정리
- 점 S(lux, luy)에서 점 E(rdx, rdy)로 드래그를 할 때, "드래그 한 거리"는 |rdx - lux| + |rdy - luy|로 정의
- 최소한의 이동거리를 갖는 드래그의 시작점과 끝점을 담은 정수 배열을 return
- return[시작점x, 시작점y, 끝점x, 끝점y]
- 2행 1열에만 아이콘이 있을 경우 [1, 0, 2, 1]
".#..." (0, 1)
"..#.." 
"...#."(3, 4)
- 배열 전체 길이 : 행, 배열 첫번째 요소 길이 : 열

0. 좌표 정리할 배열 선언 x, y
1. 2중 for문 #이 있는 위치를 찾음
2. 파일 발견하면 해당 좌표 각 배열에 push
3. 좌표값 오름차순 정리
4. 

*/
function solution(wallpaper) {
  let xList = [],
    yList = [];

  wallpaper.forEach((element, y) => {
    [...element].forEach((element, x) => {
      if (wallpaper[y][x] === '#') {
        yList.push(y);
        xList.push(x);
      }
    });
  });
  xList.sort((a, b) => a - b);
  yList.sort((a, b) => a - b);

  return [
    yList[0],
    xList[0],
    yList[yList.length - 1] + 1,
    xList[xList.length - 1] + 1,
  ];
}
