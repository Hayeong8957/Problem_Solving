/**
 * 문제 : 자연수 M과 N이 주어질 때 M이상 N이하의 자연수 중
 * 소수인 것을 모두 골라 이들 소수의 합과 최솟값을 찾는 프로그램을 작성하시오.
 * 예를 들어 M=60, N=100인 경우 60이상 100이하의 자연수 중 소수는
 * 61, 67, 71, 73, 79, 83, 89, 97 총 8개가 있으므로, 이들 소수의 합은 620이고, 최솟값은 61이 된다.
 *
 * 입력 : 입력의 첫째 줄에 M이, 둘째 줄에 N이 주어진다.
 * M과 N은 10,000이하의 자연수이며, M은 N보다 작거나 같다.
 * ex1)
 * 60
 * 100
 *
 * ex2)
 * 64
 * 65
 *
 * 출력 : M이상 N이하의 자연수 중 소수인 것을 모두 찾아 첫째 줄에 그 합을, 둘째 줄에 그 중 최솟값을 출력한다.
 * 단, M이상 N이하의 자연수 중 소수가 없을 경우는 첫째 줄에 -1을 출력한다.
 * ex1)
 * 620
 * 61
 *
 * ex2)
 * -1
 *
 * 풀이 : a이상 b이하의 수, a부터 b까지를 반복문을 돌며 k는 2부터 시작하고,
 * 주어진 수가 k로 나누어 떨어진다면 소수가 아니므로 반복문을 탈충한다.
 * 그렇게 하여 k의 제곱이 주어진 수보다 커지면 더이상 볼 것도 없이 소수이므로
 * primeNum에 주어진 수를 집어넣고 합을 누적시킨다음 반복문을 탈출한다.
 * 만약 primeNum에 아무 원소도 없다면 (a이상 b이하의 수 중에 소수가 없는 경우)
 * -1을 출력하고 그렇지 않다면 첫줄에 합을, 두번째 줄에 가장 작은 소수를 출력하면 된다.
 *
 * */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = Number(input[0]);
let b = Number(input[1]);
let primeNum = [];
let sum = 0;

for (let target = a; target <= b; target++) {
  for (let k = 2; k <= target; k++) {
    if (k * k > target) {
      primeNum.push(target);
      sum += target;
      break;
    }
    if (target % k === 0) {
      break;
    }
  }
}
if (primeNum.length === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(primeNum[0]);
}
