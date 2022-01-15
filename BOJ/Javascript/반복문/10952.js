/**
 * 문제 번호: 10952
 * 문제: 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 *
 * 입력: 입력은 여러 개의 테스트 케이스로 이루어져 있다.
 * 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
 * 입력의 마지막에는 0 두 개가 들어온다.
 * ex)
 * 1 1
 * 2 3
 * 3 4
 * 9 8
 * 5 2
 * 0 0
 *
 * 출력: 각 테스트 케이스마다 A+B를 출력한다.
 *
 * ex)
 * 2
 * 5
 * 7
 * 17
 * 7
 *
 * 문제 풀이:
 * 1) while문 바깥에 변수 i를 만들어 for문과 같은 역할,
 * 변수 answer을 만들어 마지막에 한번에 출력되도록 한다.
 *
 * 2) 출력을 while문에서 하지 않고 나중에 한다. => console.log가 메모리를 꽤 잡아먹음
 *
 * 3) while문 만들어 계산할 때마다 i값이 1씩 더해져 input 개수만큼 돌아가도록 설덩
 *
 * 4) 각 케이스를 불러와 공백으로 나눠진 값을 나눠 각각 a, b에 담는다.
 *
 * 5) 조건에 입력의 마지막에 0 두개 => if문으로 0이 들어오지 않았을 때 개행문자를 포함한 합을 구해줌
 *
 * 6) 0이 두 개 들어오면 while문 끝내고 answer 출력
 *
 */
let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let i = 0;
let answer = "";
while (i <= input.length - 1) {
  let a = parseInt(input[i].split(" ")[0]);
  let b = parseInt(input[i].split(" ")[1]);

  if (a !== 0 || b !== 0) {
    answer += `${a + b}` + "\n";
  } else {
    break;
  }
  i++;
}
console.log(answer);
