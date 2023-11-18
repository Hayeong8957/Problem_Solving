// 아름다운 연도는 연도를 구성하는 0부터 9까지의 숫자가 중복 없이 사용된 연도를 의미한다.
// 2016년도는 그래서 아름다운 연도이다.
// 특정 연도 P가 매개변수로 주어질 떄, 해당 연도보다 큰 아름다운 연도 중 가장 작은 아름다운 연도를 return 하는 solution함수를 만들어라.
// P : 1987, answer: 2013
// P : 2015, answer: 2016

// P - 문자열, 각 문자 유일한지 확인 -> set
// P 더해가며 중복되지 않는 숫자가 나올 때 동안 반복 -> while
// set이 year과 길이가 같으면 중복되는 것이 없다는 뜻

function solution(p) {
  let year = p + 1;

  while (true) {
    let yearStr = year.toString();
    let unique = new Set(yearStr);
    if (unique.size === yearStr.length) {
      return year;
    }
    year++;
  }
}

console.log(solution(1987));
