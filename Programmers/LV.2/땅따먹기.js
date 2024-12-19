function solution(land) {
  let 현재누적최대점수 = land[0];

  for (let i = 1; i < land.length; i++) {
    let 현재행 = Array.from({ length: 4 }, () => 0);

    for (let j = 0; j < 4; j++) {
      현재행[j] =
        land[i][j] + Math.max(...현재누적최대점수.filter((_, k) => k !== j));
    }
    현재누적최대점수 = 현재행;
  }

  return Math.max(...현재누적최대점수);
}
