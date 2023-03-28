/** 숫자 카드(set, map)
 * 첫째 줄 상근이가 가지고 있는 숫자 카드 개수 N
 * 둘째 줄 숫자 카드에 적혀있는 정수, 같은 수가 적혀있는 경우 없다(set중복제거)
 * 셋째 줄 M
 * 넷째 줄 상근이가 가지고 있는 숫자 카드인지 아닌지를 구해야 할 M개의 정수
 *
 * 입력)
input[0] 5
input[1] 6 3 2 10 -10
input[2] 8
input[3] 10 9 -5 2 3 4 5 -10

출력)
1 0 0 1 1 0 0 1
 */

/* 첫번째 풀이 -> set사용
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N_list = new Set(input[1].split(' '));
const M_list = input[3].split(' ');
const answer = [];

for (let x of M_list) {
  if (N_list.has(x)) answer.push(1);
  else answer.push(0);
}

console.log(answer.join(' '));
*/

const input = require('fs')
  .readFileSync('/Users/shinhayeong/Problem_Solving/BOJ/Javascript/test.txt')
  // .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N_list = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
console.log(N_list);

const M_list = input[3].split(' ').map(Number);
const answer = [];

// 1. 반복문으로 구현
for (let x of M_list) {
  let start = 0;
  let end = N_list.length - 1;
  let found = false;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (N_list[mid] === x) {
      found = true;
      break;
    } else if (N_list[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  if (found) {
    answer.push(1);
  } else {
    answer.push(0);
  }
}

console.log(answer.join(' '));

// 2. 재귀로 구현
function binarySearch(start, end, target) {
  if (start > end) {
    return false;
  }

  let mid = parseInt((start + end) / 2);

  if (N_list[mid] === target) {
    return true;
  } else if (N_list[mid] < target) {
    return binarySearch(mid + 1, end, target);
  } else {
    return binarySearch(start, mid - 1, target);
  }
}

for (let x of M_list) {
  if (binarySearch(0, N_list.length - 1, x)) {
    answer.push(1);
  } else {
    answer.push(0);
  }
}

console.log(answer.join(' '));
