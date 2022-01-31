/**
 * 문제 : N개의 숫자가 공백 없이 쓰여있다.
 * 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
 *
 * 입력 : 첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다.
 * 둘째 줄에 숫자 N개가 공백없이 주어진다.
 * ex1)
 * 1
 * 1
 *
 * ex2)
 * 5
 * 54321
 *
 * 출력 : 입력으로 주어진 숫자 N개의 합을 출력한다.
 * ex1)
 * 1
 *
 * ex2)
 * 15
 *
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let N = input[0];
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += Number(input[1].charAt(i));
  }

  console.log(sum);
  process.exit();
});
