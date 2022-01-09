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
 * 
 * 문제 풀이 : 
 * - 이 문제부터 fs모듈에 런타임 에러가 나서 통하지 않게됨.
 *   - readline모듈을 써야 한다.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {

    // 구현할 코드 구간//

    process.exit();
});
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  const x = input[0];
  const y = input[1];

  if (x > 0 && y > 0) {
    console.log(1);
  } else if (x < 0 && y > 0) {
    console.log(2);
  } else if (x < 0 && y < 0) {
    console.log(3);
  } else if (x > 0 && y < 0) {
    console.log(4);
  }
  process.exit();
});
