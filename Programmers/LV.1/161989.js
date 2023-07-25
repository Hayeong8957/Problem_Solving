/**
 * 덧칠하기
 *
 * 문제: https://school.programmers.co.kr/learn/courses/30/lessons/161989?language=javascript
 *
 * 정수 n, m과 다시 페인트를 칠하기로 정한 구역들의 번호가 담긴 정수 배열 section이 매개변수로 주어질 때
 * 롤러로 페인트칠해야 하는 최소 횟수를 return 하는 solution 함수를 작성해 주세요.
 *
 * 풀이 : start, end를 잡고 시작, start는 section의 첫번째 요소 end는 section + m -1
 * section의 모든 원소 값 순회하면서 start와 end안에 들어가면 continue,
 * 그렇지 않으면 start는 새롭게 해당 section요소가 되고, end는 section + m-1
 * */

const n = 8;
const m = 4;
const section = [2, 3, 6];

function solution(n, m, section) {
  let start = section[0];
  let end = section[0] + (m - 1);
  let cnt = 1;

  for (let i = 0; i < section.length; i++) {
    if (section[i] >= start && section[i] <= end) continue;
    start = section[i];
    end = section[i] + (m - 1);
    cnt++;
  }
  return cnt;
}

console.log(solution(n, m, section));

/* 다른 사람 풀이 */
function solution(n, m, sections) {
  var answer = 0;
  var painted = 0;
  for (let section of sections) {
    if (painted < section) {
      answer++;
      painted = section + m - 1;
    }
  }
  return answer;
}
