// 정렬 전 arr
const beforeSortArr = [40, 60, 70, 50, 10, 30, 20];

// 💡 위상 정렬
/**
 * 1. 진입 차수가 0인 정점을 큐에 삽입한다.
 * 2. 큐에서 원소를 꺼내 그 정점과 연결된 모든 간선을 제거한다.
 * 3. 간선을 제거한 후에 다른 정점들의 진입 차수를 업데이트 한다.
 * 4. 진입 차수가 0이 된 정점을 다시 큐에 삽입한다.
 * 5. 큐가 빌 때까지 2~4번 과정을 반복한다.
 *
 */
// https://www.acmicpc.net/problem/2252
const fs = require('fs');
const input = fs
  .readFileSync(
    process.platform === 'linux'
      ? '/dev/stdin'
      : '/Users/shinhayeong/Desktop/Problem_Solving/test.txt',
  )
  .toString()
  .trim()
  .split('\n');

function solution(data) {
  const [[N, _], ...arr] = data.map((el) => el.split(' ').map(Number));

  // 그래프 배열
  const graph = Array.from({ length: N + 1 }, () => []); // graph >>  [ [], [], [], [] ] 학생 번호가 1부터 시작하므로
  // 진입차수 배열
  const rank = Array.from({ length: N + 1 }, () => 0); // rank >>  [ 0, 0, 0, 0 ]

  arr.forEach(([a, b]) => {
    // 선행 노드 a의 그래프 안에 노드 b 추가
    graph[a].push(b);

    // 1. 진입 차수 계산
    // 선행 노드 a가 존재하는 노드 b의 진입차수 증가
    rank[b]++;
  });
  // arr >>  [ [ 1, 3 ], [ 2, 3 ] ]
  // graph >>  [ [], [ 3 ], [ 3 ], [] ]
  // rank >>  [ 0, 0, 0, 2 ]

  // queue 구현
  const queue = [];
  let queueIdx = 0;

  for (let i = 1; i < N + 1; i++) {
    // 2. 진입차수가 0인 정점 선택
    if (!rank[i]) queue.push(i);
  }

  // queue >>  [ 1, 2 ]

  const result = [];
  while (queueIdx < queue.length) {
    const node = queue[queueIdx++];
    // 3,5. 선택한 정점 제거
    result.push(node);
    // 4. 진입차수 업데이트 ->선택한 정점과 연결된 정점들의 진입차수 감소
    graph[node].forEach((next) => {
      rank[next]--;
      // 5. 진입차수가 0인 정점 선택
      if (!rank[next]) queue.push(next);
    });
  }

  // 6. 결과반환
  console.log(...result);
}

solution(input);

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

console.log('mergeSort >> ', mergeSort(beforeSortArr));

// 💡 선택 정렬
/**
 * - 현재 i부터 마지막 i까지 최소값의 i를 찾아냄
 * - i번째 요소가 가장 작다는 전제조건 -> 현재 i를 minIndex변수에 담음
 * - minIndex와 현재 j에 있는 값을 상호 비교
 * - j에 있는 값이 더 작다면 minIndex 갱신후 arr 위치 상호 교환
 * - O(N^2)
 */
function selectionSort(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return answer;
}

console.log('selectionSort >> ', selectionSort(beforeSortArr));

// 💡 삽입 정렬
/**
 * - 두번째 요소부터 시작해 그 앞의 요소들과 비교
 * - 삽입할 위치를 지정한 후 자료를 뒤로 옮기고 지정한 자리에 자료를 삽입
 * - O(N^2)
 */

function insertionSort(arr) {
  let answer = arr;
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      } else break;
    }
  }
  return answer;
}

console.log('insertionSort >> ', insertionSort(beforeSortArr));

// 💡 버블 정렬
/**
 * - 인접한 2개의 요소를 비교, 순서대로 상호교환
 * - 리스트 전체 수행, 한 번 스캔 완료시 오른쪽 끝이 가장 큰 요소
 * - 끝으로 이동한 요소 제외하고 다시 스캔 반복
 * - 지난 번 순회에서 자리를 바꾸지 않았다면 이미 정렬되어 있다는 의미 -> 반복문 break
 */

function bubbleSort(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let changed = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        changed = true;
      }
    }
    if (changed !== true) break;
  }
  return answer;
}

console.log('bubbleSort >> ', bubbleSort(beforeSortArr));

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
console.log('shellSort >> ', shellSort(beforeSortArr));

// 💡 퀵 정렬
/**
 * - 분할 정복
 * - 왼쪽과 오른쪽에 해당하는 원소들에 대해 두 배열로 나눈다.
 * - 분할된 두 개의 작은 배열에 대해 재귀적으로 과정을 반복한다.
 *   - 하나의 pivot을 정해 pivot보다 작은 값은 왼쪽에, 큰 값은 오른쪽에 위치시킨다.
 */

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

console.log('quickSort >> ', quickSort(beforeSortArr));
