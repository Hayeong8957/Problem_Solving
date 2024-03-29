const input = require('fs')
  // .readFileSync('/dev/stdin')
  .readFileSync('/Users/shinhayeong/Problem_Solving/BOJ/Javascript/test.txt')
  .toString()
  .trim()
  .split('\n');

let N = Number(input.shift());
let arr = input.map(Number);

// //quick
// function pivot(arr, start = 0, end = arr.length - 1) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };

//   let pivot = arr[start];
//   let swapIdx = start;

//   for (let i = start + 1; i <= end; i++) {
//     if (pivot > arr[i]) {
//       swapIdx++;
//       swap(arr, swapIdx, i);
//       // console.log(arr);
//     }
//   }
//   // 시작 요소를 피벗 인덱스와 바꾼
//   swap(arr, start, swapIdx);
//   return swapIdx;
// }

// function quickSort(arr, left = 0, right = arr.length - 1) {
//   if (left < right) {
//     let pivotIndex = pivot(arr, left, right); //3
//     //left
//     quickSort(arr, left, pivotIndex - 1);
//     //right
//     quickSort(arr, pivotIndex + 1, right);
//   }
//   return arr.join('\n');
// }
// console.log(quickSort(arr));

// MergeSort
function merge(arr1, arr2) {
  let results = []; // 입력 배열 두개를 합칠 빈 배열, 각 입력 배열에서 가장 작은 값부터 시작

  while (arr1.length !== 0 && arr2.length !== 0) {
    arr1[0] <= arr2[0]
      ? results.push(arr1.shift())
      : results.push(arr2.shift());
  }
  return [...results, ...arr1, ...arr2];
}

// 목표는 배열을 계속 반으로 나누는 것 -> slice를 사용
// 기본 케이스: 배열 길이가 1보다 작거나 같을 때 재귀 탈출
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  // console.log(merge(left, right));
  return merge(left, right);
}

console.log(mergeSort(arr).join('\n'));
