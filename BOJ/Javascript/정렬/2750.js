/**
 * 문제 : N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램 작성
 * 
 * 입력 :
 * 첫째 줄에 수의 개수 N(1 ≤ N ≤ 1,000)이 주어진다.
 * 둘째 줄부터 N개의 줄에는 수 주어진다. 
 * 이 수는 절댓값이 1,000보다 작거나 같은 정수이다. 수는 중복되지 않는다.
 *
 * ex1)
 * 5
5
2
3
4
1

 * 출력 :
 * 첫째 줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한 줄에 하나씩 출력한다.
 *
 * ex1)
 * 1
2
3
4
5

 * 풀이 :
 * .pop() => 배열의 맨 끝에 값을 제거한다.
 * .shift() => 배열의 맨 앞에 값을 제거한다.
 * */
// const input = [5, 5, 2, 3, 4, 1];

// Javascript 선택정렬 방식

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// const N = Number(input[0]);
// const arr = input.splice(1, N + 1);

// for (let i = 0; i <= N - 1; i++) {
//   let minIndex = i;
//   for (let j = i; j < N; j++) {
//     if (arr[minIndex] > arr[j]) {
//       minIndex = j;
//     }
//   }
//   if (minIndex !== i) {
//     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//   }
// }

// for (let k = 0; k < N; k++) {
//   console.log(arr[k]);
// }

// 메서드 방식

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

input.sort((a, b) => a - b);

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}
