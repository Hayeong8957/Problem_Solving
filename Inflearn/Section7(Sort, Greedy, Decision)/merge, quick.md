> 분할 정복(divide and conquer) 방법: 문제를 보다 작은 2개의 문제로 분리, 각 문제 해결 후, 결과를 모아 원래의 문제를 해결

# 퀵 정렬(Quick Sort)
![image](https://user-images.githubusercontent.com/70371342/229670028-5b4812bb-51ba-4693-8459-2b9157ccdb9f.png)

**분할 정복** 방법을 통한 정렬로, 하나의 **pivot(축)**을 정해서 이 pivot보다 작은 값은 왼쪽에, 큰 값은 오른쪽에 위치시키는 방법이다.
데이터를 분할하여 배열에 0개 또는 1개의 항목이 남을 때까지 분할하여 개별적으로 정렬되는 방식이다.

1. 왼쪽과 오른쪽에 해당하는 원소들에 대해 두 배열로 나눈다.
2. 분할된 두 개의 작은 배열에 대해 재귀(Recursion)적으로 이 과정을 반복한다.
3. 재귀 호출이 한 번 진행될 때마다 최소한 하나의 원소는 최종적으로 위치가 정해지므로, 이 알고리즘은 반드시 끝난다는 것을 보장할 수 있다.

## 시간 복잡도

- 최선, 평균 : O(nlogn), 최악 : O(n^2)

## 장점

- 불필요한 데이터의 이동을 줄이고 먼 거리의 데이터를 교환
- 한 번 결정된 pivot들이 추후 연산에서 제외되는 특성 때문에 O(nlogn) 정렬 알고리즘과 비교했을 때 속도면에서는 가장 빠르다.
- 정렬하고자 하는 배열 안에서 교환하는 방식이므로 In-place 정렬

## 단점

- 정렬된 배열에 대해선 불균형 분할에 의해 수행시간이 더 많이 걸림
- Unstable 정렬

## 구현

### python

```python
def quick_sort(a, left, right) :
    if left < right :
        q = partition(a, left, right)
        quick_sort(a, left, q-1)
        quick_sort(a, q+1, right)

def partition(a, left, right) :
    low = left + 1
    high = right
    pivot = a[left]
    while (low <= high) :
        while low <= right and a[low] < pivot :      # 1
            low += 1
        while high >= left and a[high] > pivot :     # 2
            high -= 1

        if low < high :
            a[low], a[high] = a[high], a[low]        # 3

    a[left], a[high] = a[high], a[left]              # 4
    print(f"step: {a}")
    return high                                      # 5
```

1. pivot값보다 큰 값이 나올 때까지 low+1
2. pivot값보다 작은 값이 나올 때까지 high-1
3. low와 high 비교시 high가 더 크면 두 레코드 교환
4. high와 피벗(left) 레코드 교환
5. 피벗 위치 리턴

### javascript

```javascript
// 요소를 피벗 포인트로 지정하여 배열 속 요소를 재배치하는 함수를 작성
// 피벗보다 작은 값은 모두 왼쪽으로 이동하며 피벗보다 큰 값은 모두 오른쪽으로 이동
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
      // console.log(arr);
    }
  }
  // 시작 요소를 피벗 인덱스와 바꾼
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickSort([4, 8, 2, 1, 5, 7, 6, 3]);
```

# 병합 정렬(Merge Sort)
![image](https://user-images.githubusercontent.com/70371342/229670172-dd59f874-0b61-4585-8baf-d9ff2544c7f9.png)

병합 정렬은 배열을 작은 단위로 쪼개어(분할) 정렬한 결과(정렬)를 합치면서(합병) 전체를 정렬하는 **분할 정복** 방식이다.

1. 배열을 왼쪽 절반, 오른쪽 절반으로 분할하며 최소 단위로 쪼갠 후 정렬을 진행한다.
2. 쪼갠 영역들을 차례대로 두개씩 병합한다.

## 시간 복잡도

- 최선, 평균, 최악 모두 O(nlogn)
- 분할할 때 걸리는 시간 O(n), 병합에 걸리는 시간 O(n), 레벨의 수가 O(logn)이므로 => O(nlogn)

## 장점

- 항상 일정한 시간 복잡도 O(nlogn)를 가지며 stable정렬이다.
- 순차적인 비교를 진행하기 때문에 Linked List의 정렬에 사용하면 효율적이다.

## 단점

- 정렬 하는 배열외의 추가적인 임시 배열(추가적인 메모리)가 필요하다.
- 정렬하고자 하는 배열의 크기만큼의 추가적인 크기가 요구되기 때문에 Not In-place 정렬이다.

## 구현

### python

```python
def merge(A, left, mid, right) :
    global sorted
    k = left
    i = left
    j = mid + 1
    while i <= mid and j <= right :
        if A[i] <= A[j] :
            sorted[k] = A[i]
            i, k = i+1, k+1
        else :
            sorted[k] = A[j]
            j, k = j+1, k+1

    if i > mid :
        sorted[k:k+right-j+1] = A[j:right+1]
    else :
        sorted[k:k+mid-i+1] = A[i:mid+1]
    A[left:right+1] = sorted[left:right+1]

def merge_sort(A, left, right) :
    if left < right :
        mid = (left + right) // 2       # 배열 반으로 쪼갬
        merge_sort(A, left, mid)        # 왼쪽 배열에 대해 정렬
        merge_sort(A, mid + 1, right)   # 오른쪽 배열에 대해 정렬
        merge(A, left, mid, right)      # 병합
```

### javascript

```javascript
// 정렬된 배열 두 개를 합병 시키는 함수
function merge(arr1, arr2) {
  let results = []; // 입력 배열 두개를 합칠 빈 배열, 각 입력 배열에서 가장 작은 값부터 시작
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      // 각 배열 요소 비교해가면서 result배열에 넣음
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  // 각 배열 요소가 남아있다면 남은 배열 요소 다 넣어줌
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// 목표는 배열을 계속 반으로 나누는 것 -> slice를 사용
// 기본 케이스: 배열 길이가 1보다 작거나 같을 때 재귀 탈출
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort(arr);
```
