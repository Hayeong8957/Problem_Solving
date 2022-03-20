/**
 * 문제 : M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.
 *
 * 입력 : 첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다.
 * (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.
 * ex1)
 * 3 16
 *
 * 출력 : 한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.
 * ex1)
 * 3
 * 5
 * 7
 * 11
 * 13
 *
 * 풀이 : a이상 b이하의 수, a부터 b까지를 반복문을 돌며 k는 2부터 시작하고,
 * 주어진 수가 k로 나누어 떨어진다면 소수가 아니므로 반복문을 탈충한다.
 * 그렇게 하여 k의 제곱이 주어진 수보다 커지면 더이상 볼 것도 없이 소수이므로
 * primeNum에 주어진 수를 집어넣고 합을 누적시킨다음 반복문을 탈출한다.
 *
 * */

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let primeNum = [];

for (let target = a; target <= b; target++) {
  for (let k = 2; k <= target; k++) {
    if (k * k > target) {
      primeNum.push(target);
      break;
    }
    if (target % k === 0) {
      break;
    }
  }
}

for (let i = 0; i < primeNum.length; i++) {
  console.log(primeNum[i]);
}
