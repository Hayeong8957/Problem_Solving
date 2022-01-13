/**
 * 문제 번호: 10950
 * 문제: 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 *
 * 입력: 첫째 줄에 테스트 케이스의 개수 T가 주어진다.
 * 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
 * ex)
 * 5
 * 1 1
 * 2 3
 * 3 4
 * 9 8
 * 5 2
 *
 * 출력: 각 테스트 케이스마다 A+B를 출력한다.
 * ex)
 * 2
 * 5
 * 7
 * 17
 * 7
 *
 * 문제 풀이:
 * ['5', ['1 1'], ['2 3'], ['3 4'], ['9 8'], ['5 2']]
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const T = Number(input[0]);

  for (let i = 1; i <= T; i++) {
    let A = Number(input[i].split(" ")[0]);
    let B = Number(input[i].split(" ")[1]);

    console.log(A + B);
  }

  process.exit();
});
