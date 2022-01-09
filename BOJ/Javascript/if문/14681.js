/**
 * 문제 번호 : 14681
 *
 * 문제 : 점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램 작성
 * 단, x좌표와 y좌표는 모두 양수나 음수라고 가정한다.
 *
 * 입력 : 첫 줄에는 정수 x가 주어진다. (−1000 ≤ x ≤ 1000; x ≠ 0)
 * 다음 줄에는 정수 y가 주어진다. (−1000 ≤ y ≤ 1000; y ≠ 0)
 *
 * 출력 : 점 (x, y)의 사분면 번호(1, 2, 3, 4 중 하나)를 출력
 */

const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split(" ");

const x = parseInt(inputData[0]);
const y = parseInt(inputData[1]);

if (x > 0 && y > 0) {
  console.log(1);
} else if (x < 0 && y > 0) {
  console.log(2);
} else if (x < 0 && y < 0) {
  console.log(3);
} else if (x > 0 && y < 0) {
  console.log(4);
}
