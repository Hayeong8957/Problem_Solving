/**
 * 문제 : 과거 이집트인들은 각 변들의 길이가 3, 4, 5인 삼각형이 직각 삼각형인 것을 알아냈다.
 * 주어진 세변의 길이로 삼각형이 직각인지 아닌지 구분하시오.
 *
 * 입력 : 입력은 여러개의 테스트케이스로 주어지며 마지막줄에는 0 0 0이 입력된다.
 * 각 테스트케이스는 모두 30,000보다 작은 양의 정수로 주어지며, 
 * 각 입력은 변의 길이를 의미한다.
 *
 * ex1)
 * 6 8 10
25 52 60
5 12 13
0 0 0
 *
 *
 * 출력 : 각 입력에 대해 직각 삼각형이 맞다면 "right", 아니라면 "wrong"출력
 * ex1)
 * right
wrong
right

 * 풀이 : 피타고라스 정리, 제일 큰 숫자가 빗변이다.
 * */
let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

for (let line of input) {
  let values = line.split(" ").map((el) => parseInt(el));

  if (values[0] === 0) break;
  // 예외처리 0이 input으로 들어오면 실행끝

  values.sort((a, b) => {
    return a - b;
  });
  // 숫자로 된 배열을 오름차순으로 정렬할 때 사용
  // a와 b의 값을 빼고 값이 양수가 나오면 배열에서 자리를 교체하고 음수가 나오면 교체하지 않는다.

  if (values[0] * values[0] + values[1] * values[1] === values[2] * values[2]) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
