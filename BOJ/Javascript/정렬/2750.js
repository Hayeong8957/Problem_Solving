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

const input = require('fs')
  // .readFileSync('/dev/stdin')
  .readFileSync('/Users/shinhayeong/Problem_Solving/BOJ/Javascript/test.txt')
  .toString()
  .trim()
  .split('\n');

let N = Number(input.shift());
let arr = input.map(Number);

// 선택정렬
function selectionSort(N, arr) {
  let answer = arr;
  for (let i = 0; i < N; i++) {
    let minIdx = i;
    for (let j = i + 1; j < N; j++) {
      if (arr[minIdx] > arr[j]) minIdx = j;
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return answer.join('\n');
}

console.log(selectionSort(N, arr));

// 삽입정렬
function insertionSort(N, arr) {
  let answer = arr;
  for (let i = 1; i < N; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
  return answer.join('\n');
}

console.log(insertionSort(N, arr));

// 버블정렬
function bubbleSort(N, arr) {
  let answer = arr;
  for (let i = 0; i < N; i++) {
    changed = false;
    for (let j = 0; j < N - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        changed = true;
      }
    }
    if (changed !== true) break;
  }
  return answer.join('\n');
}

console.log(bubbleSort(N, arr));

// 쉘 정렬
function shellSort(N, arr) {
  let gap = Math.floor(N / 2);
  while (gap > 0) {
    for (let i = gap; i < N; i++) {
      let temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  return arr.join('\n');
}
console.log(shellSort(N, arr));

// 메서드 방식

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// input.shift();

// input.sort((a, b) => a - b);

// for (let i = 0; i < input.length; i++) {
//   console.log(input[i]);
// }
