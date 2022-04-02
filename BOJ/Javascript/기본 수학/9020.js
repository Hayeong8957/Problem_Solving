/**
 * 문제 : 1보다 큰 자연수 중에서  1과 자기 자신을 제외한 약수가 없는 자연수를 소수라고 한다
 * 예를 들어, 5는 1과 5를 제외한 약수가 없기 때문에 소수이다. 하지만, 6은 6 = 2 × 3 이기 때문에 소수가 아니다.
 * 골드바흐의 추측은 유명한 정수론의 미해결 문제로, 2보다 큰 모든 짝수는 두 소수의 합으로 나타낼 수 있다는 것이다.
 * 이러한 수를 골드바흐 수라고 한다. 또, 짝수를 두 소수의 합으로 나타내는 표현을 그 수의 골드바흐 파티션이라고 한다.
 * 예를 들면, 4 = 2 + 2, 6 = 3 + 3, 8 = 3 + 5, 10 = 5 + 5, 12 = 5 + 7, 14 = 3 + 11, 14 = 7 + 7이다.
 * 10000보다 작거나 같은 모든 짝수 n에 대한 골드바흐 파티션은 존재한다.
 * 
 * 2보다 큰 짝수 n이 주어졌을 때, n의 골드바흐 파티션을 출력하는 프로그램을 작성하시오.
 * 만약 가능한 n의 골드바흐 파티션이 여러 가지인 경우에는 두 소수의 차이가 가장 작은 것을 출력한다.
 * 
 * 제한 : 4 ≤ n ≤ 10,000
 * 
 * 입력 : 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 
 * 각 테스트 케이스는 한 줄로 이루어져 있고 짝수 n이 주어진다.
 * 
 * ex1)
3
8
10
16
 *
 * 출력 : 각 테스트 케이스에 대해서 주어진 n의 골드바흐 파티션을 출력한다.
 * 출력하는 소수는 작은 것부터 먼저 출력하며, 공백으로 구분한다.
 * ex1)
3 5
5 5
5 11
 *
 * */
const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((num) => parseInt(num));

const T = input.shift();

for (let i = 0; i < T; i++) {
  const n = input.shift();
  const isPrimeNumArr = new Array(n + 1);
  const primeNumArr = [];
  const checkPrimePair = [];

  isPrimeNumArr.fill(true);
  isPrimeNumArr[0] = isPrimeNumArr[1] = false;

  for (let j = 2; j <= n; j++) {
    if (Math.pow(j, 2) > 1000000) {
      break;
    } else {
      for (let square = Math.pow(j, 2); square <= n; square += j) {
        isPrimeNumArr[square] = false;
      }
    }
  }
  // 2부터 n까지 소수를 저장
  for (let i = 2; i <= n; i++) {
    if (isPrimeNumArr[i]) {
      primeNumArr.push(i);
    }
  }
  // 입력받은 n을 0으로 만들 수 있는 소수의 짝을 checkPrimePair배열에 2차원 형식으로 저장
  // checkPrimePair가 저장된 모습은 [[2, 3],[3,5]]
  for (let i = 0; i < primeNumArr.length; i++) {
    for (let j = i; j < primeNumArr.length; j++) {
      if (n - primeNumArr[i] - primeNumArr[j] === 0) {
        checkPrimePair.push([primeNumArr[i]]);
        checkPrimePair[checkPrimePair.length - 1].push(primeNumArr[j]);
      }
    }
  }

  let min = checkPrimePair[0][1] - checkPrimePair[0][0];
  let indexOfMin = 0;
  // checkPrimePair중 가장 작은 차이가 나는 소수 짝의 index를 구해준다.
  for (let i = 0; i < checkPrimePair.length; i++) {
    if (checkPrimePair[i][1] - checkPrimePair[i][0] < min) {
      min = checkPrimePair[i][1] - checkPrimePair[i][0];
      indexOfMin = i;
    }
  }
  // 해당 index의 짝을 join('')형식으로 출력해준다.
  console.log(checkPrimePair[indexOfMin].join(" "));
}
