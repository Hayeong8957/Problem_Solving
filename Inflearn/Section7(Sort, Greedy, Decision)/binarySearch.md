# 이진 탐색 알고리즘(binary search); 이분 탐색

![image](https://user-images.githubusercontent.com/70371342/219529494-94fb128d-1fef-4075-b8b8-258fcee23db2.png)

- 데이터가 정렬돼 있는 배열에서 특정한 값을 찾아내는 알고리즘
- 가운데에 있는 항목을 키값과 비교하여 다음 탐색 위치를 결정하여 키를 찾을 때까지 이진 탐색을 반복적으로 수행
- 배열의 중간에 있는 임의의 값을 선택하여 찾고자 하는 값 X와 비교
- 찾는 키값 > 원소의 키값 : **오른쪽 부분에 대해** 이진 탐색 실행
- 찾는 키값 < 원소의 키값 : **왼쪽 부분에 대해** 이진 탐색 실행
- 시간복잡도 : O(log N)

## 이진 탐색 방법

1. 자료의 집합에서 n/2 번째 원소를 키값(찾고자 하는 값)
2. 찾는 키값이 원소의 키값보다 크면 (n/2)+1 번째에서 n번째 부분에 대해 이진 탐색 수행
3. 2번 과정에서 찾는 키와 일치하면 그 원소를 반환
4. 만일 1, 2 과정의 반복 이후에도 키 값이 일치하는 원소가 없으면 찾는 원소가 없는 것으로 판단

## 반복문으로 구현

```
function binarySearch (arr, target) {
  let start = 0;
  let end = arr.length-1
  let mid

  while(start<=end){
    //점점 좁혀지다가 start와 end의 순서가 어긋나게 되면 반복을 종료한다

  mid = parseInt((start+end)/2)

  if(target === arr[mid]) return mid;
  else{
    if(target < arr[mid]){
      end = mid - 1;
    }
    else{
      start = mid + 1;
    }
  }
  return -1
}
```

### 재귀함수로 구현

```
function binarySearch(arr, target) {
  function search(start, end) {
    const mid = parseInt((start + end) / 2);

    if (start === end) {
      if (arr[start] != target) return -1;
      return mid;
    } else if (target > arr[mid]) {
      return search(mid + 1, end);
    } else {
      return search(start, mid - 1);
    }
  }

  return search(0, arr.length - 1);
}
```

# 결정 알고리즘(Parametric Search)

- 주어진 범위 내에서 원하는 값 또는 원하는 조건에 가장 일치하는 값을 찾아내는 알고리즘
- 이진 탐색에 사용했던 패턴을 기반으로 함
- 전체 데이터를 순회하면 시간 복잡도 O(N)을 갖지만 이진 탐색으로 데이터를 검색하면 O(log N)만큼의 시간 복잡도를 갖는다.
- 알고리즘 문제에서 주어진 조건에서의 최대값 혹은 최소값을 구하는 문제 풀이시 사용

## 예시 문제

길이가 N인 숫자 리스트가 있다고 가정할 때, 총 T개의 그룹으로 리스트를 나눠야 한다.
T개의 그룹으로 리스트를 나눴을 때 한 그룹 당 최소 얼마의 숫자합이여야 하는지 구하시오.

```
// 입력 값 : numList, target
// const numList = [1, 3, 2, 5, 4, 7, 6, 9, 8];
// const target = 3;

// count; 총 몇 개의 그룹으로 나눠지는지 판별하는 함수
function count(numList, mid) {
  // 처음 그룹
  let cnt = 1;
  let sum = 0;
  for (let n of numList) {
    // sum + n의 값이 한계값을 초과하는 경우,
    if (sum + n > mid) {
      // 더하는 그룹의 갯수를 1증가
      cnt += 1;
      // 합계를 다음 더할 숫자 n으로 초기화
      sum = n;
    } else {
      // 아직 합계가 한계값을 초과하지 않은 경우,
      // 계속해서 sum에 값 n을 누적한다.
      sum += n;
    }
  }
  return cnt;
}

// 메인 솔루션 함수 -> 이진 탐색하는 함수
function solution(numList, target) {
  let answer;
  // 숫자 리스트의 최소 합과 최대 합을 구한다.

  // 숫자 리스트에서 최대값이 최소합
  let lt = Math.max(...numList);

  // 숫자 리스트 전체 요소들의 합이 최대합
  let rt = numList.reduce((acc, n) => acc + n, 0);

  // 이진 탐색 알고리즘
  while (lt <= rt) {
    // 최소합 ~ 최대합의 중간 값부터 탐색을 시작
    let mid = Math.floor((lt + rt) / 2);
    // 조건 그룹 갯수보다 작거나 같은 경우,
    if (count(numList, mid) <= target) {
      // 해당 합계는 answer가 될 수 있는 조건을 충족
      answer = mid;
      // 조건을 만족하기 때문에 mid - 1을 최대 범위로 업데이트
      rt = mid - 1;
    } else {
      // 만약 조건을 만족하지 않은 경우, 최소값을 mid + 1로 업데이트
      lt = mid + 1;
    }
  }
  return answer;
}

```

- 결정 알고리즘은 보통 이진 탐색하는 부분과 count하는 부분으로 나뉘는 패턴을 보인다.

- 이진 탐색

  - mid값을 정한다.
  - mid값의 의미는 숫자 합의 capacity를 나타낸다.

- count 함수 : capacity로 나올 수 있는 그룹의 갯수를 구함
  - count함수의 리턴 값이 target 이하라면 answer가 될 조건을 만족한 것
  - while문을 끝까지 돌고 나면 최적의 해가 나옴.
