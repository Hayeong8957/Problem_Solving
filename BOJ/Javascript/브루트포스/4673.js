/** 브루투포스, 함수, 수학
 * 문제 번호: 4673
 * 문제: 셀프 넘버는 1949년 인도 수학자 D.R. Kaprekar가 이름 붙였다. 
 * 양의 정수 n에 대해서 d(n)을 n과 n의 각 자리수를 더하는 함수라고 정의하자. 
 * 예를 들어, d(75) = 75+7+5 = 87이다.
 * 양의 정수 n이 주어졌을 때, 이 수를 시작해서 n, d(n), d(d(n)), d(d(d(n))), ...과 같은 무한 수열을 만들 수 있다. 
 * 예를 들어, 33으로 시작한다면 다음 수는 33 + 3 + 3 = 39이고, 그 다음 수는 39 + 3 + 9 = 51, 다음 수는 51 + 5 + 1 = 57이다. 이런식으로 다음과 같은 수열을 만들 수 있다.
 * 33, 39, 51, 57, 69, 84, 96, 111, 114, 120, 123, 129, 141, ...
 * n을 d(n)의 생성자라고 한다. 위의 수열에서 33은 39의 생성자이고, 39는 51의 생성자, 51은 57의 생성자이다. 생성자가 한 개보다 많은 경우도 있다. 예를 들어, 101은 생성자가 2개(91과 100) 있다. 
 * 생성자가 없는 숫자를 셀프 넘버라고 한다. 100보다 작은 셀프 넘버는 총 13개가 있다. 1, 3, 5, 7, 9, 20, 31, 42, 53, 64, 75, 86, 97
 * 10000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
 * 
 * 입력: 입력 없다. 
 * 출력: 10,000보다 작거나 같은 셀프 넘버를 한 줄에 하나씩 증가하는 순서로 출력한다.
 * ex)
 * 1
3
5
7
9
20
31
42
53
64
 |
 |       <-- a lot more numbers
 |
9903
9914
9925
9927
9938
9949
9960
9971
9982
9993

문제 풀이 : 
1) d(n)함수 => 더해주는 함수
각 자리 10으로 나눠서 몫이랑 나머지 더하는 것 -> 각 자리수 더하는 것

2) 0~10000 범위까지 셀프넘버 배열 생성하고 true로 초기화
10000범위까지니까 초반에 범위를 10001로 잡았음 사실 상관 없긴 함 <냐 <=냐의 차이니..
i+d(i) : 현재수 i와 각 자리 수 더한 값인 d(i)를 더해 새로운 수 생성 
  => 생성된 수가 범위 내에 있으면, 해당하는 인덱스를 false로 변경
// 25
// 25 + d(25)
// 25 + 2 + 5 = 32 => false
// 1 + d(1)
// 1 + 1 => 2 => false
// 2 + d(2)
// 2+ 2 => ....4 => false..
넣었을 때 return 되는 값이면 생성자 중 하나이므로 false, 
true로 남은 인덱스들은 생성자가 아니라는 뜻이므로, 
true로 남은 것들만 출력 
 */

function d(n) {
  let result = 0;
  let number = n;

  while (number > 0) {
    result += number % 10;
    number = parseInt(number / 10);
  }
  return result;
}

const range = 10001;
let selfNumFlagArr = Array(range).fill(true);

for (let i = 0; i < range; i++) {
  selfNumFlagArr[i + d(i)] = false;
  if (selfNumFlagArr[i]) console.log(i);
}
