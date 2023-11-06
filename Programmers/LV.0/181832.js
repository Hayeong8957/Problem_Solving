// 정수 나선형 배치
function solution(n) {
  const result = Array.from(Array(n), () => Array(n).fill(0));

  let num = 1;
  let row = 0;
  let col = 0;

  for (let i = n; i > 0; i -= 2) {
    // 우 [1, 2, 3, 4]
    for (let j = 0; j < i; j++) {
      result[row][col] = num++;
      col++;
    }
    col--; // 3
    row++; // 1
    // [1][2]

    // 3
    //  [1, 2, 3, 4]
    //  [0, 0, 0, 5]
    //  [0, 0, 0, 6]
    //  [0, 0, 0, 7]
    for (let j = 0; j < i - 1; j++) {
      result[row][col] = num++;
      row++;
    }
    row--; // 3
    col--; // 3

    // 3
    //  [ 1, 2, 3, 4]
    //  [0, 0, 0, 5]
    //  [0, 0, 0, 6]
    //  [10, 9, 8, 7]
    for (let j = 0; j < i - 1; j++) {
      result[row][col] = num++;
      col--;
    }
    col++; // 0
    row--; // 2

    // 3
    //  [ 1, 2, 3, 4]
    //  [12, 0, 0, 5]
    //  [11, 0, 0, 6]
    //  [10, 9, 8, 7]
    for (let j = 0; j < i - 2; j++) {
      result[row][col] = num++;
      row--;
    }
    row++;
    col++;
  }

  return result;
}
