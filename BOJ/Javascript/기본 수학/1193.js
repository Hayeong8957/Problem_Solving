/**
 * 문제 : 무한히 큰 배열에 다음과 같이 분수들이 적혀있다.
 * 이와 같이 나열된 분수들을 1/1 → 1/2 → 2/1 → 3/1 → 2/2 → … 과 같은 지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.
 * X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.
 *
 * 입력 :
 * 첫째 줄에 X(1 ≤ X ≤ 10,000,000)가 주어진다.
 *
 * ex1)
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
 * 7
 * 8
 * 9
 * 10
 *
 * 출력 : 첫째 줄에 분수를 출력한다.
 * ex1)
 * 1/1 홀
 * --------------
 * 1/2 짝
 * 2/1
 * --------------
 * 3/1 홀
 * 2/2
 * 1/3
 * --------------
 * 1/4 짝
 * 2/3
 * 3/2
 * 4/1
 * --------------
 * 5/1 홀
 * 4/2
 * 3/3
 * 2/4
 * 1/5
 *
 * 풀이 : 규칙을 찾아볼 때 대각선으로 생각,
 * 분자 ->
 * (홀수번째 줄 1,3,5...) : 5, 4, 3, 2, 1... => 내림차순
 * (짝수번째 줄 2, 4, 6...) : 1, 2, 3, 4...=> 오름차순
 * 분모 ->
 * (홀수번째 줄 1, 3, 5...) :1, 2, 3, 4, 5... => 오름차순
 * (짝수번째 줄 2, 4, 6...) : 4, 3, 2, 1... => 내림차순
 *
 * 1depth 들어갈 때마다 분수의 개수+1 => depth === 분수의 개수
 * 1depth -> 1 | 1
 * 2depth -> 2 | 2 3
 * 3depth -> 3 | 4 5 6
 * 4depth -> 4 | 7 8 9 10
 * 5depth -> 5 | 11 12 13 14 ...
 * ...
 *
 * 여기서 또 규칙을 찾아보자.. 내가 만약 숫자 5를 선택 했어 그러면 숫자 5가 있는 depth는 3
 * depth: 1 input: 5
 * depth: 2 input: 4
 * depth: 3 input: 2
 * 5번째 숫자는 3depth에 2번째 숫자임
 *
 *
 *  */

// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
// let N = Number(
//   require('fs')
//     .readFileSync(
//       'c:/Users/HayeongShin/Algorithm/Problem_Solving/BOJ/Javascript/test.txt',
//     )
//     .toString()
//     .trim(),
// );
// let depth = 1;
// let a = 0,
//   b = 0;

// 입력받은 숫자 depth구하기
// 현재 depth수 = 해당 depth에 있는 분수의 수
// 숫자를 받았을 때 depth를 늘려가면서 빼주면
// 몇 번째 depth에 몇 번째 분수인 지 구할 수 있음
// while (N > depth) {
//   if (depth < 0) break;
//   N -= depth;
//   depth++;
// }
// N = 5를 예시로 들었을 때
// (N, depth)
// 초기: (5, 1)
// while 시작 (4, 2) (2, 3)  ====>  3번째 대각선의 2번째 분수

// if (depth % 2 === 1) {
//   a = depth - N + 1;
//   b = N;
// } else {
//   a = N;
//   b = depth - N + 1;
// }

// console.log(`${a}/${b}`);

let N = Number(
  require('fs')
    .readFileSync(
      'c:/Users/HayeongShin/Algorithm/Problem_Solving/BOJ/Javascript/test.txt',
    )
    .toString()
    .trim(),
);
let depth = 1;

while (N > depth) {
  if (depth < 0) break;
  N -= depth;
  depth++;
}
console.log(
  depth % 2 === 1 ? `${depth - N + 1}/${N}` : `${N}/${depth - N + 1}`,
);
