/**
 * 문제 번호: 8393
 * 문제: n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
 *
 * 입력: 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.
 * ex) 3
 *
 * 출력: 1부터 n까지 합을 출력한다.
 * ex) 6
 *
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  let num = Number(line);
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  console.log(sum);
}).on("close", function () {
  process.exit();
});
