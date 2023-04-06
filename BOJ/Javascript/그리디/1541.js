/** 잃어버린 괄호
 * 문제: 세준이는 양수와 +, -, 그리고 괄호를 가지고 식을 만들었다. 그리고 나서 세준이는 괄호를 모두 지웠다.
 * 그리고 나서 세준이는 괄호를 적절히 쳐서 이 식의 값을 최소로 만들려고 한다.
 * 괄호를 적절히 쳐서 이 식의 값을 최소로 만드는 프로그램을 작성하시오.
 *
 * 입력: 첫째 줄에 식이 주어진다. 식은 ‘0’~‘9’, ‘+’, 그리고 ‘-’만으로 이루어져 있고, 가장 처음과 마지막 문자는 숫자이다.
 * 그리고 연속해서 두 개 이상의 연산자가 나타나지 않고, 5자리보다 많이 연속되는 숫자는 없다. 수는 0으로 시작할 수 있다. 입력으로 주어지는 식의 길이는 50보다 작거나 같다.
 *
 * 출력: 첫쨰 줄에 정답을 출력한다.
 *
 * 예제 입력1: 55-50+40
 * 예제 출력1: -35
 *
 * 예제 입력2: 10+20+30+40
 * 예제 출력2: 100
 *
 * 예제 입력3: 00009-00009
 * 예제 출력3: 0
 *
 * 풀이: +기호를 되도록 -기호로 바꾸는 것이 좋음. 그래야 최소
 * 언제 + -> - 변환이 가능하냐?
 * 10-20+30 인 경우 10-(20+30) => - 뒤 연산자가 +일 때
 * 10+20+30-40-50+60+70-80+90+100
 * 10+20+30-40-(50+60+70)-(80+90+100)
 * 10+20+30-40-50-60-70-80-90-100
 * 처음으로 나왔던 -를 기준으로 해서 뒤에있는 +들은 전부 -로 변환,
 * => 최초로 -가 나오게 되면 그 뒷 숫자들은 무조건 뺄 수 있음
 *
 * 1. - 기준으로 split
 * 10+20+30 , 40 , 50+60+70 , 80+90+100
 * 2. + 기준으로 split한 뒤에 나눠진 데이터 각각 더해줌
 * 60, 40, 180, 270
 * 3. 순서대로 빼줌
 * - 가장 앞 데이터 제외하고 빼줌
 * 60-40-180-270
 *
 *
 */
let splitMinus = require('fs')
  // .readFileSync('/dev/stdin')
  .readFileSync('/Users/shinhayeong/Problem_Solving/BOJ/Javascript/test.txt')
  .toString()
  .split('-');

let answer = 0;

function mySum(splitMinus) {
  // console.log('현재 들어온', splitMinus);
  let sum = 0;
  splitPlus = splitMinus.split('+');
  for (let i = 0; i < splitPlus.length; i++) {
    sum += parseInt(splitPlus[i]);
  }
  // console.log('계산하고 나갈', sum);
  return sum;
}
for (let i = 0; i < splitMinus.length; i++) {
  let temp = mySum(splitMinus[i]);
  if (i === 0) {
    answer += temp;
  } else {
    answer -= temp;
  }
}
console.log(answer);
