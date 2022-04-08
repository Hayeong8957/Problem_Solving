/**
 * 문제 : 세 점이 주어졌을 때, 축에 평행한 직사각형을 만들기 위해서
 * 필요한 네 번째 점을 찾는 프로그램을 작성하시오.
 *
 * 입력 : 세 점의 좌표가 한 줄에 하나씩 주어진다.
 * 좌표는 1보다 크거나 같고, 1000보다 작거나 같은 정수이다.
 *
 * ex1)
 * 5 5
 * 5 7
 * 7 5
 *
 * ex2)
 * 30 20
 * 10 10
 * 10 20
 *
 *
 * 출력 : 직사각형의 네 번째 점의 좌표를 출력한다.
 * ex1) 7 7
 * ex2) 30 10
 *
 * 풀이 : 축에 평행한 직사각형의 경우 세 점이 주어지면 나머지 한 점은
 * x좌표는 나머지 세점에서 한 번밖에 등장하지 않은 x좌표이고,
 * y좌표는 나머지 세점에서 한 번밖에 등장하지 않은 y좌표가 된다.
 *
 * 세 점의 x좌표를 한 배열에 담고, y좌표도 동일하게 배열에 담는다.
 * 각각의 배열을 sort 함수로 정렬한다.
 * - arr.sort([compareFunction])
 * - compareFunction값이 생략되면, 배열의 element들은 문자열로 취급되어, 유니코드 값 순서대로 정렬
 * - 이 함수는 두 개의 배열 element를 파라미터로 입력받음
 * - 이 함수가 a, b 두개의 element를 파라미터로 입력받을 경우,
 * - 이 함수가 리턴하는 값이 0보다 작을 경우, a가 b보다 앞에 오도록 정렬하고,
 * - 이 함수가 리턴하는 값이 0보다 클 경우, b가 a보다 앞에 오도록 정렬한다.
 * - 만약 0을 리턴하면, a와 b의 순서를 변경하지 않는다.
 *
 * 어떤 요소가 1개인지 알아내는 방법은 배열을 정렬한 후
 * 삼항연산자를 사용하여 배열의 첫번째 요소와 같은지 비교하고
 * 참이면 세번째 요소가 답이되고 거짓이면 첫번째 요소가 답이된다.
 *
 * */

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
let arrayX = [];
let arrayY = [];
let x, y;
for (let i = 0; i < 3; i++) {
  arrayX.push(Number(input[i].split(" ")[0]));
  arrayY.push(Number(input[i].split(" ")[1]));
}
arrayX = arrayX.sort();
arrayY = arrayY.sort();

x = arrayX[1] === arrayX[0] ? arrayX[2] : arrayX[0];
y = arrayY[1] === arrayY[0] ? arrayY[2] : arrayY[0];

console.log(`${x} ${y}`);
