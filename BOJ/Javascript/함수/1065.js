/**
 * 문제 번호: 1065
 * 문제: 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다.
 * 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다.
 * N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오.
 *
 * 입력: 첫째 줄에 1,000보다 작거나 같은 자연수 N이 주어진다.
 * ex)
 * 110
 *
 * 출력: 첫째 줄에 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력한다.
 * ex)
 * 99
 *
 * 문제 풀이:
 * 1. 한수를 구하는 함수를 만든다.
 *  1)입력받은 N을 숫자 배열로 만들어준다.
 *  2) 110보다 작으면 모두 한수
 *     -문자열로 변환 후 한자리씩 따와서 인접한 숫자끼리 뺄셈한 결과가 같은지
 *  3)일정한 간격으로 증가 or 감소하는지 확인
 *     - 두번째 자리수와 첫번째 자리수의 뺀 값 저장
 *     - index 돌려가면서 위의 값과 같은지 홧인
 *
 * 2. 1부터 입력 받은 값 만큼 결과값에 true(1)인만큼 더해준다.
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const N = +line;

  function isHansu(X) {
    const numbers = String(X).split("").map(Number);

    if (X < 100) {
      return true;
    } else {
      let distance = numbers[1] - numbers[0];

      for (let i = 1; i < numbers.length - 1; i++) {
        if (numbers[i + 1] - numbers[i] !== distance) {
          return false;
        }
      }
      return true;
    }
  }
  let result = 0;

  for (let i = 1; i <= N; i++) {
    result += isHansu(i);
  }

  console.log(result);

  rl.close();
}).on("close", function () {
  process.exit();
});
