const fs = require('fs');
const filePath =
  process.platform === 'linux'
    ? '/dev/stdin'
    : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt';
const arr = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

// 💡 퀵 정렬 -> 메모리 초과
// - 분할 정복
// - 왼쪽과 오른쪽에 해당하는 원소들에 대해 두 배열로 나눈다
// - 분할된 두 개의 작은 배열에 대해 재귀적으로 과정을 반복한다.
// - 하나의 Pivot을 정해 pivot보다 작은 값은 왼쪽에, 큰 값은 오른쪽에 위치시킨다.

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  const leftSorted = quickSort(left);
  const rightSorted = quickSort(right);

  return [...leftSorted, pivot, ...rightSorted];
}

// const uniqueAnswer = [...new Set(quickSort(arr))].join('\n');

// console.log(uniqueAnswer);

// 💡 쉘 정렬
/**
 * - 삽입정렬이 현재 원소를 앞부분에 삽입하기 위해 이웃하는 원소끼리 비교하며 한 자리씩 이동하는 단점
 * - 리스트를 일정 간격의 부분리스트로 나누고 각각의 부분 리스트를 삽입정렬 -> 간격을 줄여나감
 * - 간격이 1인 경우는 삽입 정렬과 동일
 */
function shellSort(arr) {
  let answer = arr;
  let gap = Math.floor(arr.length / 2);

  while (gap > 0) {
    if (gap % 2 === 0) gap += 1;
    for (let i = gap; i < arr.length; i++) {
      let j = i;
      while (j >= gap && arr[j] < arr[j - gap]) {
        [arr[j], arr[j - gap]] = [arr[j - gap], arr[j]];
        j -= gap;
      }
    }
    gap = Math.floor(gap / 2);
  }
  return answer;
}

// const uniqueAnswer = [...new Set(shellSort(arr))].join('\n');

// console.log(uniqueAnswer);

// 💡 병합 정렬
/**
 * - 분할 정복
 * - left, right로 나누어서 merge해주는 함수 하나 필요
 * - 나누고 -> 정렬 -> 정렬된 2개로 다시 정렬을 반복하기 위해 재귀로 구현되어야 함.
 */

function merge(left, right) {
  const sortedArr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const boundary = Math.ceil(arr.length / 2);

  const left = arr.slice(0, boundary);
  const right = arr.slice(boundary);

  return merge(mergeSort(left), mergeSort(right));
}

const uniqueAnswer = [...new Set(mergeSort(arr))].join('\n');

console.log(uniqueAnswer);
