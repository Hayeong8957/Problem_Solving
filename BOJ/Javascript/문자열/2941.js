/**
 * 문제 : 예전에는 운영체제에서 크로아티아 알파벳을 입력할 수가 없었다.
 * 따라서, 다음과 같이 크로아티아 알파벳을 변경해서 입력했다.
 * 예를 들어, ljes=njak은 크로아티아 알파벳 6개(lj, e, š, nj, a, k)로 이루어져 있다.
 * 단어가 주어졌을 때, 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.
 * dž는 무조건 하나의 알파벳으로 쓰이고, d와 ž가 분리된 것으로 보지 않는다.
 * lj와 nj도 마찬가지이다. 위 목록에 없는 알파벳은 한 글자씩 센다.
 *
 * 입력 :
 * 첫째 줄에 최대 100글자의 단어가 주어진다. 알파벳 소문자와 '-', '='로만 이루어져 있다.
 * 단어는 크로아티아 알파벳으로 이루어져 있다.
 * 문제 설명의 표에 나와있는 알파벳은 변경된 형태로 입력된다.
 * ex1)
 * ljes=njak
 *
 * ex2)
 * ddz=z=
 *
 * ex3)
 * nljj
 *
 * ex4)
 * c=c=
 *
 * ex5)
 * dz=ak
 *
 *
 * 출력 : 입력으로 주어진 단어가 몇 개의 크로아티아 알파벳으로 이루어져 있는지 출력한다.
 * ex1)
 * 6
 *
 * ex2)
 * 3
 *
 * ex3)
 * 3
 *
 * ex4)
 * 2
 *
 * ex5)
 * 3
 */

const input = require("fs").readFileSync("dev/stdin").toString().trim();
let word = input;
const changeWord = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let element of changeWord) {
  word = word.split(element).join("*");
  // 해당 크로아티아 알파벳을 *로 바꿔서 문자열 길이 출력
}

console.log(word.length);
