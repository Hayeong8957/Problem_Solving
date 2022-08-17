/**
 * 문제 :
 * 준원이는 저번 주에 살면서 처음으로 코스트코를 가 봤다.
 * 정말 멋졌다. 그런데, 몇 개 담지도 않았는데 수상하게 높은 금액이 나오는 것이다!
 * 준원이는 영수증을 보면서 정확하게 계산된 것이 맞는지 확인해보려 한다.
 * 영수증에 적힌,
 * - 구매한 각 물건의 가격과 개수
 * - 구매한 물건들의 총 금액
 * 을 보고, 구매한 물건의 가격과 개수로 계산한 총 금액이 영수증에 적힌 총 금액과 일치하는지 검사해보자.
 *
 * 입력 :
 * 첫째 줄에는 영수증에 적힌 총 금액 X가 주어진다.
 * 둘째 줄에는 영수증에 적힌 구매한 물건의 종류의 수 N이 주어진다.
 * 이후 N개의 줄에는 각 물건의 가격 a와 개수 b가 공백을 사이에 두고 주어진다.
 *
 * ex1)
260000
4
20000 5
30000 2
10000 6
5000 8
 * 
 * ex2)
250000
4
20000 5
30000 2
10000 6
5000 8
 * 
 * 출력 :
 * 구매한 물건의 가격과 개수로 계산한 총 금액이 영수증에 적힌 총 금액과 일치하면 Yes를 출력한다.
 * 일치하지 않는다면 No를 출력한다.
 * 
 * ex1) Yes
 * ex2) No
 *
 * 제한 :
 * 1 <= X <= 1000000000
 * 1 <= N <= 100
 * 1 <= a <= 1000000
 * 1 <= b <= 10
 * 
 * 풀이 :
 * input[0]을 영수증에 적힌 총금액 변수인 resultSum에 넣고
 * input[1]을 구매한 물건의 종류의 수 변수인 bought에 넣어준다.
 * (둘 다 Number를 사용하여 숫자로 변환)
 * 
 * 그 다음 물건 종류 수만큼 for문을 돌며 인덱스로 input에 접근하여 tmpStr에 넣어주고
 * split을 사용하여 해당 문자열을 공백 기준으로 나누어 배열 tmpArr에 넣어주었다.
 * 
 * 그리고 tmpArr의 0번 째 인덱스 값과, 1번째 인덱스 값을 곱하여 
 * 해당 물건을 구입한 가격을 구해 tmpSum에 넣어주고,
 * 그 값을 sum에 더해주어서 물건들의 총금액을 구해주었다.
 * 
 * 마지막으로 resultSum과 sum값을 비교해 둘이 같으면 Yes를 출력, 다르면 No출력
 *
 * */

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const resultSum = Number(input[0]);
const bought = Number(input[1]);
let sum = 0;

for (let i = 0; i < bought; i++) {
  let tmpStr = input[i + 2];
  let tmpArr = tmpStr.split(" ");
  let tmpSum = tmpArr[0] * tmpArr[1];
  sum += tmpSum;
}

resultSum === sum ? console.log("Yes") : console.log("No");
