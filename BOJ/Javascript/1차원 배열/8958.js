/**
 * 문제 번호 : 8958
 *
 * 문제 : "OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. 
 * O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 
 * 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 
 * 예를 들어, 10번 문제의 점수는 3이 된다.
 * "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.
 * OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.
 *
 * 입력 : 첫째 줄에 테스트 케이스의 개수가 주어진다. 
 * 각 테스트 케이스는 한 줄로 이루어져 있고, 
 * 길이가 0보다 크고 80보다 작은 문자열이 주어진다. 
 * 문자열은 O와 X만으로 이루어져 있다.
 * ex)
5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX
 *
 * 출력 : 각 테스트 케이스마다 점수를 출력한다.
10
9
7
55
30
 *
 * 문제 풀이:
 * 1) 배열을 split해서 변수에 값을 넣으면 str로 들어가기 때문에 Number
 * 2) max의 초기값을 numbers[0]번 값을 넣었기 때문에,
 *    for문 돌 때 다음 인덱스인 1부터 비교 시작
 */
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let count = 0;
  let sum = 0;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "0") {
      count++;
    } else {
      count = 0;
    }
    sum += count;
  }
  console.log(sum);
}
