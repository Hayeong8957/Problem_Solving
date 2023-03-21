/** 큐; 요세푸스, 원형큐 문제임.
 * 문제: 1번부터 N번까지 N명의 사람이 원을 이루면서 앉아있고,
 * 양의 정수가 주어진다. 순서대로 K번째 사람을 제거한다.
 * 한 사람이 제거되면 남은 사람들로 이루어진 원을 따라 이 과정을 계속해 나간다.
 * 이 과정은 N명의 사람이 모두 제거될 떄까지 계속된다.
 * 원에서 사람들이 제거되는 순서를 (N, K)- 요세푸스 순열이라고 한다.
 * 예를 들어(7, 3)-요세푸스 순열은 <3, 6, 2, 7, 5, 1, 4>이다.
 * N과 K가 주어지면 (N, K)-요세푸스 순열을 구하는 프로그램을 작성하시오.
 *
 * 입력: 7, 3
 *
 * 출력: <3, 6, 2, 7, 5, 1, 4>
 *
 * 첫 풀이:
 * 1 2 3 4 5 6 7
 * 1 2 . 4 5 6 7  제거 val: 3   제거 index: 2
 * 1 2 4 5 . 7    제거 val: 6   제거 index: 5
 * ...
 *
 * - 앞에서 K번째까지 빼서 queue뒤에 붙여주고,
 * - queue 맨끝에꺼 빼서 answer배열에 넣으셈, length 빌때까지 굴리면 됨
 * 1 2 3 4 5 6 7
 * 4 5 6 7 1 2   / answer = [3]
 *
 * 7 1 2 4 5    / answer = [3, 6]
 *
 * 4 5 7 1      / answer = [3, 6, 2]
 *
 * 1 4 5        / answer = [3, 6, 2, 7]
 *
 * 1 4          / answer = [3, 6, 2, 7, 5]
 *
 */
let [N, K] = require('fs')
  .readFileSync(
    'c:/Users/HayeongShin/Algorithm/Problem_Solving/BOJ/Javascript/test.txt',
  )
  // .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(Number);

const queue = Array.from({ length: N }, (v, i) => i + 1);
// console.log(queue);

const answer = [];
while (queue.length > 0) {
  for (let i = 0; i < K; i++) {
    queue.push(queue.shift());
  }
  answer.push(queue.pop());
  // console.log(`answer : ${answer}`);
  // console.log(`queue : ${queue}`);
}

console.log(`<${answer.join(', ')}>`);
