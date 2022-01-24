/**
 * 문제 번호 : 4344
 *
 * 문제 : 대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 
 * 당신은 그들에게 슬픈 진실을 알려줘야 한다.
 * 
 * 입력 : 첫째 줄에는 테스트 케이스의 개수 C가 주어진다.
 * 둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, 
 * N은 정수)이 첫 수로 주어지고, 이어서 N명의 점수가 주어진다. 
 * 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.
 * ex)
5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91
 *
 * 출력 : 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.
40.000%
57.143%
33.333%
66.667%
55.556%
 *
 * 문제 풀이:
 * 1) 첫째줄을 제외한 나머지 줄을 기준으로 for문을 돌려줘서
 * 각 케이스를 split를 공백을 기준으로 나눠준다.
 * 
 * 2) 0번째 인덱스에 있는 요소를 따로 변수에 저장해 놓는다.
 * 
 * 3) 평균을 구하기 위한 해당 케이스 점수의 총합을 구해주고 학생의 수만큼 나눠 평균을 구해준다.
 * 
 * 4) 학생의 수를 기준으로 for문을 돌려 해당 케이스의 값이 평균보다 높을 때마다 카운트 값을 1씩 늘려준다.
 * 
 * 5) 그 후 ((카운트(평균을 넘는 수)/학생의수)*100)으로 평균을 넘는 학생의 비율을 구해주고
 * toFixed 메서드를 사용하여 소수점 3자리까지 표시해준 후 해당 값에 '%'를 붙여준 뒤 출력해 준다.
 * 
 */

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let allCases = Number(input[0]);

for (let i = 1; i <= allCases; i++) {
  let cases = input[i].split(" "); // 1) 공백 기준 나눔
  let scoreCaseCount = Number(cases[0]); // 2) 첫번째 요소 = 학생의 수
  let sum = 0;

  for (let j = 1; j <= scoreCaseCount; j++) {
    sum += Number(cases[j]); // 3) 인덱스 1번부터 끝까지 돌려가면서 합계 구함
  }
  let average = sum / scoreCaseCount; // 평균 내기

  let highScoreStudent = 0;
  for (let k = 1; k <= scoreCaseCount; k++) {
    if (average < cases[k]) {
      highScoreStudent++; // 4) 평균 넘는 친구들 카운트 +1
    }
  }

  result = ((highScoreStudent / scoreCaseCount) * 100).toFixed(3); // 5)
  console.log(result + "%");
}
