/**
 * 문제 : 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.
 *
 * 입력 : 첫 줄에 수의 개수 N이 주어진다. N은 100이하이다.
 * 다음으로 N개의 수가 주어지는데 수는 1,000이하의 자연수이다.
 * ex1)
 * 4
 * 1 3 5 7
 *
 * 출력 : 주어진 수들 중 소수의 개수를 출력한다.
 * ex1)
 * 3
 *
 * 풀이 :
 * 만약 primeNum[i]의 값이 1이라면 continue를 해준다. 1은 소수가 아니기 때문
 * 1이 아닌 이외의 값들 중에서 2에서 자기자신을 뺀 값까지 돌면서
 * 만약 나누어지는 값이 있다면 count를 올릴 것이고, 해당 primeNum[i]를 돌고 나온 후
 * count가 0이라면 1과 자기자신 외에는 나누어지는 ㄱ밧이 없으므로, 해당 값을 소수로 answer의 카운트를 올려주면 된다.
 * */

var fs = require("fs");
var inputs = fs.readFileSync("/dev/stdin").toString().split("\n");
var cases = Number(inputs[0]);
var primeNum = inputs[1].split(" ").map((item) => Number(item));
var answer = 0;
for (var i = 0; i < primeNum.length; i++) {
  if (primeNum[i] === 1) {
    continue;
  } else {
    var count = 0;
    for (var j = 2; j < primeNum[i]; j++) {
      if (primeNum[i] % j === 0) {
        count++;
      }
    }
    if (count === 0) {
      answer++;
    }
  }
}
console.log(answer);
