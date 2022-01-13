/**
 * 문제 번호: 2739
 * 문제: N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오.
 * 출력 형식에 맞춰서 출력하면 된다.
 *
 * 입력: 첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다.
 * 출력: n * n = x
 */

const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split(" ");

const N = parseInt(inputData[0]);

for (let i = 1; i < 10; i++) {
  console.log(`${N} * ${i} = ${N * i}`);
}
