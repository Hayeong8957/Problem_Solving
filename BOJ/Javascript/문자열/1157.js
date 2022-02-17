/**
 * 문제 : 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오.
 * 단, 대문자와 소문자를 구분하지 않는다.
 *
 * 입력 : 첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다.
 * 주어지는 단어의 길이는 1,000,000을 넘지 않는다.
 * ex1)
 * Mississipi
 *
 * ex2)
 * zZa
 *
 * ex3)
 * z
 *
 * ex4)
 * baaa
 *
 * 출력 : 첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.
 * ex1)
 * ?
 *
 * ex2)
 * Z
 *
 * ex3)
 * Z
 *
 * ex4)
 * A
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", function (line) {
  input = line;
  rl.close();
}).on("close", function () {
  const count = new Array(26).fill(0);
  const aToZ = [];
  const upperCaseArr = input.toUpperCase().split("");

  for (let i = 65; i <= 90; i++) {
    [];
    aToZ.push(String.fromCharCode(i));
  }

  for (let j = 0; j < upperCaseArr.length; j++) {
    for (let k = 0; k < aToZ.length; k++) {
      if (upperCaseArr[j] === aToZ[k]) {
        count[k] += 1;
      }
    }
  }

  const max = count.reduce((a, b) => Math.max(a, b));
  const index = count.indexOf(max);
  const lastIndex = count.lastIndexOf(max);
  const alphabet = String.fromCharCode(index + 65);

  if (index !== lastIndex) {
    console.log("?");
  } else console.log(alphabet);
  process.exit();
});
